import React, { useRef, useState, useEffect } from "react"
import clsx from "clsx"

const Property = (props) => {
  return (
    <div
      className="border-box mr-[10px] flex h-[32px] w-[32px] items-center justify-center rounded bg-gray-300 p-2"
      onMouseDown={props.onMouseDown}
    >
      {props.name}
    </div>
  )
}

type ComponentTypes = {
  rtl?: "enabled" | "disabled" | "auto"
  onSubmit?: (
    content: string,
    stylings: { type: keyof typeof stylers; start: number; finish: number }[]
  ) => void
}

const stylers = {
  bold: { css: "font-bold", content: "B" },
  italic: { id: "italic", css: "italic", content: "I" },
  under: { id: "under", css: "underline", content: "U" },
  strike: { id: "strike", css: "line-through", content: "S" },
}

// FIXME: ? Highlighting a part of styled text with a bit on the left with an overall length not equal to clipboard copied text will result in paste issues

// FIXME: Highlighting the beginning characters of styled text and then pasting text sometimes doesn't register as right intersecting
// This expecially happens when the selection is for example, [0, 2] and the styling is [0, 3], this might be failure of addition which doesn't offset the styling

// TODO: Refactor styling splicing into one method
// TODO: Refactor function that simplifies a list of stylings
// TODO: Turn stylings into a class, this should also change .finish to .end

// Possible logic changes:
// Paste = Removal + Addition -> Styling Removal + Styling Addition
// Drag & Drop = Removal + Addition -> Styling Removal + Styling Addition

export const FloatingComment: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [text, _setText] = useState({
    content: "",
    stylings: [], // A styling is an object with 2 indices specifying a substring of text, and the applied effect
    revert: [0, 0],
    lastCopy: [],
    pasted: { status: false, length: 0 },
    dropped: { status: false, text: "", previous: [0, 0] },
  })

  const field = useRef(null)
  const _text = useRef(text)
  const setText = (data) => {
    _text.current = data
    _setText(data)
  }

  const getChildIndex = (child) => {
    for (var i = 0; (child = child.previousSibling); i++);
    return i
  }

  const getSelectionPrecedingSum = (name) => {
    let selection = window.getSelection()
    let nodes = Array.from(field.current.childNodes)

    // All current occurences for text or br:
    // Pasting on empty text (text)
    // Cutting/removing all text (br)
    // Typing the first character in empty text (text)
    // Dragging text to the end of the text (text)

    nodes = nodes.filter(
      (item: any) => !["#text", "BR"].includes(item.nodeName)
    )

    let parent: any = selection[name].parentNode
    let special = 0

    // Special case for empty text
    // if (parent == field.current) {
    //   console.log("hi")
    // }

    // Special case for dropping text near or inside styled text
    if (!Array.from(parent.parentNode.classList).includes("selection-ignore")) {
      parent = parent.parentNode

      let index = getChildIndex(selection[name].parentNode)
      special = Array.from(parent.childNodes)
        .slice(0, index)
        .map((e: any) => e.textContent.length)
        .reduce((a, b) => a + b, 0)
    }

    let index = parent == field.current ? nodes.length : getChildIndex(parent)

    let sum =
      nodes
        .slice(0, index)
        .map((span: any) => span.textContent.length)
        .reduce((a, b) => a + b, 0) + special

    return sum
  }

  const getFieldSelection = () => {
    if (document.activeElement != field.current) return [0, 0]

    let selection = window.getSelection()
    // let nodes = Array.from(field.current.childNodes)

    // console.log(nodes)

    // nodes = nodes.filter(
    //   (item: any) => !["#text", "BR"].includes(item.nodeName)
    // )

    // console.log(selection.anchorNode)
    // console.log(selection.focusNode)
    // console.log(selection.anchorNode.parentNode)
    // console.log(selection.focusNode.parentNode)
    // console.log(selection.anchorNode.parentNode.parentNode)
    // console.log(selection.focusNode.parentNode.parentNode)
    // console.log(selection.anchorOffset)
    // console.log(selection.focusOffset)

    // let startParent: any = selection.anchorNode.parentNode

    // let startNodeIndex =
    //   startParent == field.current
    //     ? nodes.length
    //     : // : parseInt(startParent.dataset.childIndex)
    //       getChildIndex(startParent)

    // let startPrecedingSum = nodes
    //   .slice(0, startNodeIndex)
    //   .map((span: any) => span.textContent.length)
    //   .reduce((a, b) => a + b, 0)

    let startPrecedingSum = getSelectionPrecedingSum("anchorNode")

    // let endParent: any = selection.focusNode.parentNode
    // let endNodeIndex =
    //   endParent == field.current
    //     ? nodes.length
    //     : // : parseInt(endParent.dataset.childIndex)
    //       getChildIndex(endParent)

    // let endPrecedingSum = nodes
    //   .slice(0, endNodeIndex)
    //   .map((span: any) => span.textContent.length)
    //   .reduce((a, b) => a + b, 0)

    let endPrecedingSum = getSelectionPrecedingSum("focusNode")

    console.log([startPrecedingSum, endPrecedingSum])
    let result = [
      startPrecedingSum + selection.anchorOffset,
      endPrecedingSum + selection.focusOffset,
    ]

    // Sort to make the minimum selection the start selection
    return result.sort((a, b) => a - b)
  }

  useEffect(() => {
    setTimeout(function () {
      let [start, end] = _text.current.revert

      if (start == 0 && end == 0) return

      let startNode = null
      let endNode = null

      let total = 0
      let nodes = Array.from(field.current.childNodes)

      for (let i = 0; i < nodes.length; i++) {
        let node: any = nodes[i]
        let sum = node.textContent.length + total

        if (startNode == null && start >= total && start <= sum) {
          startNode = nodes[i]
          start -= total
        }

        if (endNode == null && end > total && end <= sum) {
          endNode = nodes[i]
          end -= total
        }

        total += node.textContent.length
      }

      var range = document.createRange()
      var sel = window.getSelection()

      range.setStart(startNode.firstChild, start)
      range.setEnd(endNode.firstChild, end)

      sel.removeAllRanges()
      sel.addRange(range)
    }, 1)
  }, [text.revert])

  // utility functions
  const getRange = (start, end) => {
    let result = []
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }

  const intersection = (setA, setB) => {
    const _intersection = new Set()
    for (const elem of setB) {
      if (setA.has(elem)) {
        _intersection.add(elem)
      }
    }
    return _intersection
  }

  const getMinimum = (array) => {
    return array.sort((a, b) => a - b)[0]
  }

  const getMaximum = (array) => {
    return array.sort((a, b) => b - a)[0]
  }

  // -1 - types dont match
  // 0 - s1 is surrounded or on the edge of the s2
  // 1 - s1 intersects with s2
  // 2 - s1 does not intersect with s2
  const getCorrelation = (styling1, styling2) => {
    if (styling1.type != styling2.type) return -1

    if (
      styling2.start <= styling1.start &&
      styling2.finish >= styling1.finish
    ) {
      return 0
    }

    let indices1 = new Set(getRange(styling1.start - 1, styling1.finish - 1))
    let indices2 = new Set(getRange(styling2.start - 1, styling2.finish - 1))

    let result = intersection(indices1, indices2)

    return result.size == 0 ? 2 : 1
  }

  // Correlation handler
  const stylingSplice = (correlations, stylings, current, type) => {
    // Only one surround correlation is possible at one time, so use .find to fetch it

    let [_, index, styling] = correlations.find(([c, _, __]) => c == 0)

    // Remove correlated styling
    stylings = stylings.filter((_, _index) => _index != index)

    // Get splices
    let added = [
      {
        type: type,
        start: getMinimum([styling.start, current.start]),
        finish: getMaximum([styling.start, current.start]),
      },
      {
        type: type,
        start: getMinimum([styling.finish, current.finish]),
        finish: getMaximum([styling.finish, current.finish]),
      },
    ]

    // Remove empty splices (edge cases)
    added = added.filter((item) => item.start != item.finish)

    // Add to current stylings
    stylings = [...stylings, ...added]

    return stylings
  }

  // Correlation handler
  const stylingIntersect = (correlations, stylings, current, type) => {
    // Filter out all intersected stylings
    let intersections = correlations
      .filter(([c, _, __]) => c == 1)
      .map(([_, index, styling]) => {
        return [index, styling]
      })

    // Add current styling with no index for the sake for endpoint indices
    intersections.push([-1, current])

    // Get minimum intersection start index
    let start = intersections
      .map(([_, styling]) => styling.start)
      .sort((a, b) => a - b)[0]

    // Get maximum intersection start index
    let finish = intersections
      .map(([_, styling]) => styling.finish)
      .sort((a, b) => b - a)[0]

    // Get indices of all intersection
    let indices = intersections.map((e) => e[0])

    // Remove all from resulting styling array
    stylings = stylings.filter((_, index) => !indices.includes(index))

    // Add widest styling which encompasses all intersections
    stylings.push({
      type: type,
      start: start,
      finish: finish,
    })

    return stylings
  }

  const perform = (id) => {
    let stylings = _text.current.stylings.slice()
    let [selectionStart, selectionEnd] = getFieldSelection()

    if (selectionStart == selectionEnd) return

    let current = {
      type: id,
      start: selectionStart,
      finish: selectionEnd,
    }

    let correlations = []

    // Check the correlation between this requested styling and all other stylings
    for (let i = 0; i < stylings.length; i++) {
      let styling = stylings[i]
      let correlation = getCorrelation(current, styling)

      if (correlation != -1) correlations.push([correlation, i, styling])
    }

    let result

    if (correlations.find(([c, _, __]) => c == 1)) {
      result = stylingIntersect(correlations, stylings, current, id)
    } else if (correlations.find(([c, _, __]) => c == 0)) {
      result = stylingSplice(correlations, stylings, current, id)
    } else if (
      correlations.find(([c, _, __]) => c == 2) ||
      correlations.length == 0
    ) {
      result = [...stylings, current]
    }

    setText({
      ...text,
      stylings: result,
      revert: [selectionStart, selectionEnd],
    })
  }

  const getRangeIntersectStylings = (start, end, startOffset, finishOffset) => {
    // Get all stylings intersecting
    let stylings = []
    for (let i = start; i < end; i++) {
      stylings.push(getIntersectStylings(i, startOffset, finishOffset))
    }

    // Remove duplicates
    stylings = stylings.flat().filter((item) => item)
    stylings = stylings.filter(
      (item, index) =>
        stylings.findIndex(
          (_item) =>
            _item.start == item.start &&
            _item.finish == item.finish &&
            _item.type == item.type
        ) == index
    )

    return stylings
  }

  const compareStylings = (styling1, styling2) => {
    return (
      styling1.type == styling2.type &&
      styling1.start == styling2.start &&
      styling1.finish == styling2.finish
    )
  }

  // Get stylings encompassing an index within it's range
  const getIntersectStylings = (index, startOffset = 0, finishOffset = 0) => {
    // Find all stylings with encompassing range
    let matches = text.stylings.filter(
      ({ start, finish }) =>
        index >= start + startOffset && index < finish + finishOffset
    )

    return matches
  }

  // Get stylings after an index
  const getSucceedStylings = (index) => {
    // Find all stylings after the index
    let matches = text.stylings.filter(({ start, finish }) => start >= index)

    return matches
  }

  const getStylingIndex = (styling) => {
    return text.stylings.findIndex(
      (item) =>
        item.start == styling.start &&
        item.finish == styling.finish &&
        item.type == styling.type
    )
  }

  const handleScenario = (stylings, predicate) => {
    let matches = stylings.filter(({ start: _start, finish: _finish }) =>
      predicate(_start, _finish)
    )

    let indices = []

    stylings.map((styling, index) => {
      let result = matches.find((item) => compareStylings(styling, item))
      if (!result) return
      indices.push({
        index: index,
        type: styling.type,
        start: styling.start,
        finish: styling.finish,
      })
    })

    return indices
  }

  const handleDeletion = (length, start, end) => {
    let stylings = _text.current.stylings.slice()
    let changes = []

    // TODO: Refactor

    // Offset all succeeding stylings by length
    // changes.push(
    //   handleScenario(
    //     stylings,
    //     (_start, _finish) => start < _start && end <= start
    //   ).map((styling) => {
    //     return {
    //       ...styling,
    //       start: styling.start - length,
    //       finish: styling.finish - length,
    //     }
    //   })
    // )

    let succeeding = stylings.filter(
      ({ start: _start }) => start < _start && end <= _start
    )
    stylings.map((styling, index) => {
      let result = succeeding.find((item) => compareStylings(styling, item))
      if (!result) return

      changes.push({
        index: index,
        start: styling.start - length,
        finish: styling.finish - length,
      })
    })

    // Handle complete encapsulation over styling
    let encapsulating = stylings.filter(
      ({ start: _start, finish: _finish }) => start <= _start && end >= _finish
    )
    stylings.map((styling, index) => {
      let result = encapsulating.find((item) => compareStylings(styling, item))
      if (!result) return

      // This will effectively remove the styling, since collapsed ranges are automatically removed
      changes.push({
        index: index,
        start: styling.start,
        finish: styling.start,
      })
    })

    // Handle deletion being encapsulated by styling
    let encapsulated = stylings.filter(
      ({ start: _start, finish: _finish }) =>
        (start > _start && end <= _finish) || (start >= _start && end < _finish)
    )
    stylings.map((styling, index) => {
      let result = encapsulated.find((item) => compareStylings(styling, item))
      if (!result) return

      changes.push({
        index: index,
        start: styling.start,
        finish: styling.finish - length,
      })
    })

    // Handle deletion being encapsulated by styling with left resumption
    let leftResumption = stylings.filter(
      ({ start: _start, finish: _finish }) =>
        end < _finish && end > _start && start < _start
    )
    stylings.map((styling, index) => {
      let result = leftResumption.find((item) => compareStylings(styling, item))
      if (!result) return

      changes.push({
        index: index,
        start: getMaximum([end, styling.start]) - length,
        finish: styling.finish - length,
      })
    })

    let rightResumption = stylings.filter(
      ({ start: _start, finish: _finish }) =>
        start > _start && start < _finish && end > _finish
    )
    stylings.map((styling, index) => {
      let result = rightResumption.find((item) =>
        compareStylings(styling, item)
      )
      if (!result) return

      changes.push({
        index: index,
        start: styling.start,
        finish: getMinimum([start, styling.finish]),
      })
    })

    // Apply changes
    changes.map(({ index, start, finish }) => {
      stylings[index] = {
        ...stylings[index],
        start: start,
        finish: finish,
      }
    })

    // Handle complete encapsulation by styling
    // stylings = stylings.map((styling) => {
    //   if (start >= styling.start && end <= styling.finish) {
    //     console.log("hi")
    //   }

    //   return styling
    // })

    // If deletion is surrounded by styling, decrease finish by length (this might not include first character, but try first)
    // If deletion is intersecting with a styling behind it, get maximum between deletion finish and styling start, and set the start to it, then offset styling by length
    // If deletion is intersecting wit ha styling after it, get minimum between deletion start and styling finish, and set the finish to it

    // console.log(succeeding)

    // If the start and finish of any styling is greater than the new length, remove it

    return stylings
  }

  const handleAddition = (length, start, end) => {
    start -= length + 1
    end -= length + 1

    let stylings = _text.current.stylings.slice()

    let changes = []

    let succeeding = handleScenario(
      stylings,
      (_start, _finish) => _start > start && _start + 1 >= end
    ).map((styling) => {
      return {
        ...styling,
        start: styling.start + length,
        finish: styling.finish + length,
      }
    })
    changes.push(succeeding)

    // console.log(`Addition (${length})`)
    // console.log([start, end])
    // if (stylings.length > 0) {
    //   console.log([stylings[0].start, stylings[0].finish])
    // }

    // console.log(succeeding)

    let preceding = handleScenario(
      stylings,
      // (_start, _finish) => start < _finish && start >= _start + 2 && length == 1 // This is to not style pasted text
      (_start, _finish) => start + 1 == _finish && length == 1 // This is to not style pasted text
    ).map((styling) => {
      return {
        ...styling,
        start: styling.start,
        finish: styling.finish + length,
      }
    })
    changes.push(preceding)

    let encapsulated = handleScenario(
      stylings,
      (_start, _finish) => start >= _start && end + 1 < _finish
    ).map((styling) => {
      return {
        ...styling,
        finish: styling.finish + length,
      }
    })

    changes.push(encapsulated)

    // console.log(length)

    // console.log(`Encapsulated: ${encapsulated.length}`)

    // console.log(`Succeeding: ${succeeding.length}`)
    // console.log(`Preceding: ${preceding.length}`)
    // console.log(preceding)

    changes.flat().map(({ index, start, finish }) => {
      stylings[index] = {
        ...stylings[index],
        start: start,
        finish: finish,
      }
    })

    return stylings
  }

  const handlePaste = (stylings, difference, start, end) => {
    // console.log(`Paste:`)
    // console.log([start, end])
    // console.log(stylings)
    let changes = []

    // Get stylings being encapsulated by pasting range
    let encapsulating = handleScenario(
      stylings,
      (_start, _end) => start <= _start && end >= _end // This is needed because of conflict with addition/deletion
    ).map((styling) => {
      // Effective removal
      return {
        ...styling,
        start: styling.start,
        finish: styling.start,
      }
    })
    changes.push(encapsulating)

    // Get encapsulated stylings
    let encapsulated = handleScenario(
      stylings,
      (_start, _end) => _start < start && _end > end
    ).map((styling) => {
      // Right splice
      changes.push({
        ...styling,
        index: -1,
        start: end,
        finish: styling.finish,
      })

      // Left splice
      changes.push({
        ...styling,
        index: -1,
        start: styling.start,
        finish: start,
      })

      // Effective removal
      return {
        ...styling,
        start: styling.start,
        finish: styling.start,
      }
    })
    changes.push(encapsulated)

    // Get intersecting stylings from the left
    let left = handleScenario(
      stylings,
      (_start, _end) =>
        _end > start && _end <= end - difference + 1 && _start < start
    ).map((styling) => {
      return {
        ...styling,
        finish: start,
      }
    })

    changes.push(left)

    // Get intersecting stylings from the right
    let right = handleScenario(
      stylings,
      (_start, _end) =>
        _end > end - difference && _start >= start && _start < end - difference
    ).map((styling) => {
      return {
        ...styling,
        start: end,
      }
    })

    changes.push(right)

    // console.log(`Encapsulating: ${encapsulating.length}`)
    // console.log(`Encapsulated: ${encapsulated.length}`)
    // console.log(`Left Intersecting: ${left.length}`)
    // console.log(`Right Intersecting: ${right.length}`)

    changes = changes.flat()
    changes.map((styling) => {
      let { index, start, finish } = styling
      if (index == -1) {
        stylings.push({
          type: styling.type,
          start: start,
          finish: finish,
        })
        return
      }

      stylings[index] = {
        ...stylings[index],
        start: start,
        finish: finish,
      }
    })

    // console.log(stylings)

    return stylings
  }

  const handleDrop = (value) => {
    let [dropStart, dropEnd] = getFieldSelection()

    let stylings = _text.current.stylings.slice()
    let dropped = _text.current.dropped.text

    let changes = []

    let [dragStart, dragEnd] = _text.current.dropped.previous

    console.log(`Drag: ${[dragStart, dragEnd]}`)
    console.log(`Drop: ${[dropStart, dropEnd]}`)
    console.log(stylings)

    // negative - right, positive - left
    // let direction = dragStart - dropStart < 0 ? -1 : 1

    // Possible refactorization:
    // Since the drop invokes the onInput event twice, the first is the removal of dragged text, and the second is the addition of dropped text
    // If the handling occurs at the second occurence of onInput, the first could be handled naturally by the handleDeletion function

    // offset: length * direction

    // To be offset in right conditions:
    // (_start >= dg.end && _end > dg.end)
    // (_end <= dp.start && _start < dp.start)

    // To be offset in left conditions:
    // (_end <= dg.start && _start < dg.start)
    // (_start >= dp.end && _end > dp.end)

    // Get all intersecting stylings
    let dragStylings = stylings.filter(
      ({ start, finish }) =>
        !(
          (start < dragStart && finish <= dragStart) ||
          (start >= dragEnd && finish > dragEnd)
        )
    )

    // Offset stylings between drag and drop locations
    stylings
      .filter(({ start, finish }) => start >= dragEnd && finish > dragEnd)
      .map((styling) => {
        changes.push({
          original: styling,
          changed: {
            ...styling,
            start: styling.start - dropped.length,
            finish: styling.finish - dropped.length,
          },
        })
      })

    // Handle complete encapsulation over styling
    stylings
      .filter(({ start, finish }) => dragStart <= start && dragEnd >= finish)
      .map((styling) => {
        changes.push({
          original: styling,
          changed: { ...styling, start: styling.start, finish: styling.start },
        })
      })

    // Handle drag range being encapsulated by styling
    stylings
      .filter(
        ({ start, finish }) =>
          (dragStart > start && dragEnd <= finish) ||
          (dragStart >= start && dragEnd < finish)
      )
      .map((styling) => {
        changes.push({
          original: styling,
          changed: {
            ...styling,
            start: styling.start,
            finish: styling.finish - dropped.length,
          },
        })
      })

    // Handle resumptions
    let resumptions = stylings.filter(
      ({ start, finish }) =>
        (finish > dragStart &&
          start > dragStart &&
          start < dragEnd &&
          finish > dragEnd) ||
        (start < dragEnd &&
          finish < dragEnd &&
          finish > dragStart &&
          start < dragStart)
    )

    resumptions.map((styling) => {
      let right =
        styling.start < dragEnd &&
        styling.finish < dragEnd &&
        styling.finish > dragStart &&
        styling.start < dragStart

      changes.push({
        original: styling,
        changed: {
          ...styling,
          start: !right
            ? getMaximum([dragEnd, styling.start]) - dropped.length // Only decrease if the drag
            : styling.start,
          finish: right
            ? getMinimum([dragStart, styling.finish])
            : styling.finish - dropped.length,
        },
      })
    })

    // Apply drag changes
    changes.map(({ original, changed }) => {
      let index = stylings.findIndex((styling) =>
        compareStylings(original, styling)
      )

      stylings[index] = changed
    })

    changes = []

    // Positive offset succeeding stylings
    stylings
      .filter(({ start, finish }) => start >= dropStart && finish > dropStart)
      .map((styling) => {
        changes.push({
          original: styling,
          changed: {
            ...styling,
            start: styling.start + dropped.length,
            finish: styling.finish + dropped.length,
          },
        })
      })

    // Splice intersecting stylings
    stylings
      .filter(({ start, finish }) => start < dropStart && finish > dropStart)
      .map((styling) => {
        changes.push({
          original: styling,
          changed: {
            ...styling,
            start: styling.start,
            finish: dropStart,
          },
        })

        changes.push({
          original: null,
          changed: {
            ...styling,
            start: dropEnd,
            finish: styling.finish + dropped.length,
          },
        })
      })

    // Apply drop changes
    changes.map(({ original, changed }) => {
      if (original == null) {
        stylings.push(changed)
        return
      }

      let index = stylings.findIndex((styling) =>
        compareStylings(original, styling)
      )

      stylings[index] = changed
    })

    // Remove empty stylings
    stylings = stylings.filter((styling) => styling.start != styling.finish)

    // Clamp start and end values, negative offset by dragStart, and positive offset by dropStart
    dragStylings = dragStylings.map((styling) => {
      return {
        ...styling,
        start: getMaximum([styling.start, dragStart]) - dragStart + dropStart,
        finish: getMinimum([styling.finish, dragEnd]) - dragStart + dropStart,
      }
    })

    // Push to current stylings
    stylings = stylings.concat(dragStylings)

    setText({
      ..._text.current,
      content: value,
      stylings: stylings,
      revert: [dropStart, dropEnd],
      pasted: { status: false, length: 0 },
      dropped: { status: false, text: "", previous: [0, 0] },
    })
  }

  const onChange = (value) => {
    setTimeout(function () {
      if (_text.current.dropped.status) {
        // Drops from text in the content editable invoke the onChange function twice
        if (value.length == _text.current.content.length) {
          handleDrop(value)
        }
        return
      }

      let [selectionStart, selectionEnd] = getFieldSelection()
      let difference = value.length - _text.current.content.length

      let start = selectionStart - difference
      let end = selectionEnd - difference

      let stylings = _text.current.stylings.slice()

      let succeeding = getSucceedStylings(start)
      let changes = []

      for (let succeed of succeeding) {
        let index = getStylingIndex(succeed)
        let styling = stylings[index]

        changes.push([
          index,
          styling.start + difference,
          styling.finish + difference,
        ])
      }

      if (difference < 0) {
        stylings = handleDeletion(
          Math.abs(difference),
          selectionStart,
          selectionEnd + Math.abs(difference)
        )
      }

      if (difference > 0) {
        stylings = handleAddition(
          Math.abs(difference),
          selectionStart,
          selectionEnd
        )
      }

      // Remove empty stylings and invisible stylings
      stylings = stylings.filter(
        (styling) =>
          !(
            styling.start == styling.finish ||
            (styling.start >= value.length && styling.finish >= value.length)
          )
      )

      if (_text.current.pasted.status) {
        stylings = handlePaste(
          stylings,
          difference,
          selectionStart - _text.current.pasted.length,
          selectionStart
        )

        for (let styling of _text.current.lastCopy) {
          styling = {
            ...styling,
            start: styling.start + selectionStart - _text.current.pasted.length,
            finish:
              styling.finish + selectionStart - _text.current.pasted.length,
          }

          stylings.push(styling)
        }
      }

      // Remove empty stylings and invisible stylings
      stylings = stylings.filter(
        (styling) =>
          !(
            styling.start == styling.finish ||
            (styling.start >= value.length && styling.finish >= value.length)
          )
      )

      setText({
        ..._text.current,
        content: value,
        stylings: stylings,
        revert: [selectionStart, selectionEnd],
        pasted: { status: false, length: 0 },
        dropped: { status: false, text: "", previous: [0, 0] },
      })
    }, 0)
  }

  const getContent = () => {
    let content = _text.current.content

    // Get all styling indices
    let indices = _text.current.stylings
      .map(({ start, finish }) => [start, finish])
      .flat()

    // Sort ascendingly
    indices = indices.sort((a, b) => a - b)

    // Remove duplicates
    indices = indices.filter(
      (element, index) => indices.indexOf(element) == index
    )

    // Add first index if not present
    if (indices[0] != 0) indices.unshift(0)

    // Add last index if not present
    let last = content.length
    if (indices[indices.length - 1] != last) indices.push(last)

    let result = []

    for (let i = 0; i < indices.length - 1; i++) {
      result.push([indices[i], content.substring(indices[i], indices[i + 1])])
    }

    return result
  }

  const serializeStyleInRange = (start, end) => {
    // Get all stylings intersecting
    let stylings = []
    for (let i = start; i < end; i++) {
      stylings.push(getIntersectStylings(i))
    }

    // Remove duplicates
    stylings = stylings.flat().filter((item) => item)
    stylings = stylings.filter(
      (item, index) =>
        stylings.findIndex(
          (_item) =>
            _item.start == item.start &&
            _item.finish == item.finish &&
            _item.type == item.type
        ) == index
    )

    // Clamp start and finish values and offset by start index
    stylings = stylings.map((styling) => {
      return {
        ...styling,
        start: getMaximum([styling.start, start]) - start,
        finish: getMinimum([styling.finish, end]) - start,
      }
    })

    return stylings
  }

  // dangerouslySetInnerHTML incorrectly renders when the entire text is highlighted, copied, and then pasted in succession
  useEffect(() => {
    let html = getContent()
      .map((_data, index) => {
        let [start, data] = _data

        // Get stylings encompassing an index within it's range
        let stylings = getIntersectStylings(start)
        // console.log(data)
        // console.log(stylings)
        return `<span class="${stylings
          .map((styling) => stylers[styling.type].css)
          .join(" ")}" data-child-index="${index}">${data}</span>`
      })
      .join("")

    field.current.innerHTML = html
  }, [text.content, text.stylings, text.revert])

  const getTextDirection = () => {
    let value = props.rtl || "disabled"

    switch (value) {
      case "enabled":
        return "rtl"
      case "disabled":
        return "ltr"
      case "auto":
        return "ltr"
    }
  }

  const calculateTextWidth = (
    text: string,
    font: { size: number; family: string }
  ) => {
    let element = document.createElement("div")
    let { size, family } = font

    element.className = `text-[${size}px] font-['${family}'] absolute float-left whitespace-nowrap invisible`
    element.innerHTML = text

    document.body.appendChild(element)

    let rect = element.getBoundingClientRect()
    return rect.width
  }

  return (
    <div className="align-center box-border flex h-min w-[400px] flex-col items-center justify-center rounded shadow-md">
      <div className={clsx("flex w-full flex-row justify-start p-2")}>
        {Object.entries(stylers).map(([id, data]) => {
          return (
            <Property
              name={data.content}
              key={`property-${id}`}
              onMouseDown={(event) => {
                event.preventDefault()
                perform(id)
              }}
            />
          )
        })}
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <div className="selection-ignore box-border w-full p-2">
        <div
          ref={field}
          contentEditable="true"
          className="selection-ignore rtl h-[150px] w-full resize-none overflow-auto overflow-x-hidden border-none font-['Arial'] text-[16px] outline-none"
          style={{
            direction: getTextDirection(),
          }}
          onPaste={(event) => {
            // pastes all copied text from the content editable as plain text
            event.preventDefault()
            const data = event.clipboardData.getData("text/plain")
            document.execCommand("insertHTML", false, data)

            console.log(data)

            setText({
              ..._text.current,
              pasted: { status: true, length: data.length },
            })
          }}
          onInput={(event: any) => {
            onChange(event.target.textContent)
          }}
          onCopy={(event) => {
            let [start, end] = getFieldSelection()

            let data = serializeStyleInRange(start, end)

            setText({
              ...text,
              lastCopy: data,
            })
          }}
          onDrop={(event) => {
            let text = event.dataTransfer.getData("text")

            if (text.trim() == "") return

            // console.log(getSelectionPrecedingSum("anchorNode"))
            // console.log(getSelectionPrecedingSum("focusNode"))
            // console.log(window.getSelection())

            setText({
              ..._text.current,
              dropped: {
                status: true,
                text: text,
                previous: getFieldSelection(),
              },
            })
          }}
        ></div>
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <button
        className="my-1 rounded bg-cyan-800 p-2 py-1 text-white"
        onClick={() => {
          let onSubmit = props.onSubmit || (() => {})

          onSubmit(text.content, text.stylings)
        }}
      >
        Submit
      </button>
    </div>
  )
}
