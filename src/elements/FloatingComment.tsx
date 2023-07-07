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

// FIXME: Highlighting a part of styled text with a bit on the left with an overall length not equal to clipboard copied text will result in paste issues

// FIXME: Highlighting the beginning characters of styled text and then pasting text sometimes doesn't register as right intersecting
// This expecially happens when the selection is for example, [0, 2] and the styling is [0, 3], this might be failure of addition which doesn't offset the styling

export const FloatingComment: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [text, _setText] = useState({
    content: "",
    stylings: [], // A styling is an object with 2 indices specifying a substring of text, and the applied effect
    revert: [0, 0],
    lastCopy: [],
    pasted: { status: false, length: 0 },
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

  // Full reversion achieved !
  const getFieldSelection = () => {
    if (document.activeElement != field.current) return [0, 0]

    let selection = window.getSelection()
    let nodes = Array.from(field.current.childNodes)

    nodes = nodes.filter(
      (item: any) => !["#text", "BR"].includes(item.nodeName)
    )

    let startParent: any = selection.anchorNode.parentNode

    let startNodeIndex =
      startParent == field.current
        ? nodes.length
        : // : parseInt(startParent.dataset.childIndex)
          getChildIndex(startParent)

    let startPrecedingSum = nodes
      .slice(0, startNodeIndex)
      .map((span: any) => span.textContent.length)
      .reduce((a, b) => a + b, 0)

    let endParent: any = selection.focusNode.parentNode
    let endNodeIndex =
      endParent == field.current
        ? nodes.length
        : // : parseInt(endParent.dataset.childIndex)
          getChildIndex(endParent)

    let endPrecedingSum = nodes
      .slice(0, endNodeIndex)
      .map((span: any) => span.textContent.length)
      .reduce((a, b) => a + b, 0)

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

    console.log(`Addition (${length})`)
    console.log([start, end])
    if (stylings.length > 0) {
      console.log([stylings[0].start, stylings[0].finish])
    }

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

    console.log(length)

    console.log(`Encapsulated: ${encapsulated.length}`)

    console.log(`Succeeding: ${succeeding.length}`)
    console.log(`Preceding: ${preceding.length}`)
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
    console.log(`Paste:`)
    console.log([start, end])
    console.log(stylings)
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

    console.log(`Encapsulating: ${encapsulating.length}`)
    console.log(`Encapsulated: ${encapsulated.length}`)
    console.log(`Left Intersecting: ${left.length}`)
    console.log(`Right Intersecting: ${right.length}`)

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

    console.log(stylings)

    return stylings
  }

  const onChange = (value) => {
    setTimeout(function () {
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

        {/* <Property
          name="B"
          onMouseDown={(event) => {
            event.preventDefault() // This does not take focus away from field which allows the function to retrieve the current selection data
            perform("bold")
          }}
        />
        <Property
          name="I"
          onMouseDown={(event) => {
            event.preventDefault()
            perform("italic")
          }}
        />
        <Property
          name="U"
          onMouseDown={(event) => {
            event.preventDefault()
            perform("under")
          }}
        />
        <Property
          name="S"
          onMouseDown={(event) => {
            event.preventDefault()
            perform("strike")
          }}
        /> */}
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <div className="w-full">
        <div
          ref={field}
          contentEditable="true"
          className="rtl h-[150px] w-full resize-none overflow-auto overflow-x-hidden border-none p-2 outline-none"
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

            // let [start, end] = getFieldSelection()

            // console.log(index)
            // console.log(start)

            // let index = start - data.length
            // let stylings = text.stylings.slice()

            // FIXME:
            // stylings.push({
            //   type: "bold",
            //   start: 5,
            //   finish: 7,
            // })

            // let copy = text.lastCopy
            // if (copy.length != 0) {
            //   for (let styling of copy) {
            //     stylings.push({
            //       type: styling.type,
            //       start: styling.start + start,
            //       finish: styling.finish + start,
            //     })
            //   }
            // }

            // let content: any = text.content
            // let original = content.length

            // // If not collapsed, insert text
            // if (start == end) {
            //   content = content.split("")
            //   content.splice(start, 0, data)
            //   content = content.join("")
            // } else {
            //   console.log(content)
            //   // Otherwise, replace substring
            //   content =
            //     content.substring(0, start) +
            //     data +
            //     content.substring(end, content.length)
            // }

            // let difference = content.length - original

            // stylings = handleDeletion()

            // setText({
            //   ...text,
            //   content: content,
            //   stylings: stylings,
            //   revert: [start + data.length, start + data.length],
            // })
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
          // onKeyDown={(event: any) => {
          //   event.preventDefault()
          //   console.log(event)
          // }}
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
