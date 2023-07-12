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

// FIXME:
// - Creating a new line, and typing data in it, and then setting two different stylings on the same text
// FIXME:
// - Type characters, create new line, remove the new line immediately

// FIXME: Line at first index of content editable

// FIXME: Typing behind a line break identifier
// One way to prevent it, is to check in the onChange event if the data added (removed might not be needed here), is behind a line break identifier
// if  so, move the start and end index by the length of the added, and replace the added, and then add the added back in the offset index

// FIXME:
// Deleting all text in a line removes that line entirely

const lineBreakIdentifier = "​"

export const FloatingComment: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [text, _setText] = useState({
    content: "",
    stylings: [], // A styling is an object with 2 indices specifying a substring of text, and the applied effect
    revert: [0, 0],
    clipboard: [],
    events: {
      paste: { is: false, length: null },
      drop: { is: false, text: null, drag: null },
    },
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

  const getRelativePrecedingSum = (element, endIndex) => {
    let nodes: any = Array.from(element.childNodes)
    let sum = nodes
      .slice(0, endIndex)
      .map((node) => node.textContent.length)
      .reduce((a, b) => a + b, 0)
    return sum
  }

  const getLinePrecedingSum = (endIndex) => {
    let fieldNodes = Array.from(field.current.childNodes)
    let sum = fieldNodes
      .slice(0, endIndex)
      .map((lineNode: any) => {
        let lineNodes = Array.from(lineNode.childNodes)
        return getRelativePrecedingSum(lineNode, lineNodes.length)
      })
      .reduce((a, b) => a + b, 0)

    return sum
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

    let node = selection[name]
    let parent: any = node.parentNode
    let sum = 0
    // let special = 0

    const isNodeLine =
      node.nodeName == "DIV" && Array.from(node.classList).includes("line")

    // If the parent node is a span, this must be a text node
    if (parent.nodeName == "SPAN") {
      // Get index of span within line
      let spanIndex = getChildIndex(parent)

      // Get relative sum within line
      sum += getRelativePrecedingSum(parent.parentNode, spanIndex)

      // Get parent line index
      let lineIndex = getChildIndex(parent.parentNode)

      // Get relative sum within entire field
      sum += getLinePrecedingSum(lineIndex)
    }

    // If the parent node is a line element, this must be a new line, so return the preceding sum
    if (Array.from(parent.classList).includes("line")) {
      // If the node is a text node, then that must mean this is a non-styled drop
      if (node.nodeName == "#text") {
        let spanIndex = getChildIndex(node)

        sum += getRelativePrecedingSum(parent, spanIndex)
      }

      // Get line element index
      let lineIndex = getChildIndex(parent)

      // Get relative sum within entire field
      sum += getLinePrecedingSum(lineIndex)
    }

    if (isNodeLine) {
      // Get line element index
      let lineIndex = getChildIndex(node)

      // Get relative sum within entire field
      sum = getLinePrecedingSum(lineIndex)
    }

    // If the parent is the field, return zero
    // FIXME: Should we return zero here?
    if (parent == field.current && !isNodeLine) {
      return 0
    }

    // // Special case for dropping text near or inside styled text
    // if (!Array.from(parent.parentNode.classList).includes("selection-ignore")) {
    //   parent = parent.parentNode

    //   let index = getChildIndex(selection[name].parentNode)
    //   special = Array.from(parent.childNodes)
    //     .slice(0, index)
    //     .map((e: any) => e.textContent.length)
    //     .reduce((a, b) => a + b, 0)
    // }

    // let index = parent == field.current ? nodes.length : getChildIndex(parent)

    // let sum =
    //   nodes
    //     .slice(0, index)
    //     .map((span: any) => span.textContent.length)
    //     .reduce((a, b) => a + b, 0) + special

    return sum
  }

  const getFieldSelection = () => {
    if (document.activeElement != field.current) return [0, 0]
    let selection = window.getSelection()

    let startPrecedingSum = getSelectionPrecedingSum("anchorNode")
    let endPrecedingSum = getSelectionPrecedingSum("focusNode")

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
      // let nodes = Array.from(field.current.childNodes)
      let nodes = Array.from(field.current.getElementsByTagName("span"))

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

  // Get stylings encompassing an index within it's range
  const getIntersectStylings = (
    stylings,
    index,
    startOffset = 0,
    finishOffset = 0
  ) => {
    // Find all stylings with encompassing range
    let matches = stylings.filter(
      ({ start, finish }) =>
        index >= start + startOffset && index < finish + finishOffset
    )

    return matches
  }

  const getStylingsInRange = (stylings, startIndex, endIndex) => {
    // Get all intersecting stylings within range
    let result = stylings.filter(
      ({ start, finish }) =>
        (finish > startIndex && start < endIndex) ||
        (start < endIndex && finish > startIndex)
    )

    // Clamp start and end values, and offset by start index to reach the relative minimum
    result = result.map((styling) => {
      return {
        ...styling,
        start: getMaximum([styling.start, startIndex]) - startIndex,
        finish: getMinimum([styling.finish, endIndex]) - startIndex,
      }
    })

    return result
  }

  const splitStyling = (styling, index, offset = 0) => {
    // Get first split
    let first = {
      ...styling,
      start: styling.start,
      finish: index,
    }

    // Get second split
    let second = {
      ...styling,
      start: index + offset,
      finish: styling.finish + offset,
    }

    return [first, second]
  }

  const additionTo = (stylings, startIndex, length, defaultBehavior = true) => {
    // console.log(`Adding text of length ${length} at index ${startIndex}`)

    // Required operations:
    // Offset succeeding stylings
    // Split intersecting stylings
    // Styling continuation at end (only for normal addition)

    stylings = stylings.map((styling) => {
      // A succeeding styling
      if (styling.start >= startIndex && styling.finish > startIndex) {
        console.log("succeeding")
        return {
          ...styling,
          start: styling.start + length,
          finish: styling.finish + length,
        }
      }

      // An intersecting styling
      if (styling.start < startIndex && styling.finish > startIndex) {
        // Normal addition (non-drop & non-paste), adds to the length of the styling
        if (defaultBehavior) {
          return {
            ...styling,
            finish: styling.finish + length,
          }
        } else {
          // Special addition (drop & paste), splits the styling and offsets the second half by length of addition
          return splitStyling(styling, startIndex, length)
        }
      }

      // A connected styling at the end
      if (styling.finish == startIndex) {
        // Normal addition (non-drop & non-paste), continues the styling by addition length
        if (defaultBehavior) {
          return {
            ...styling,
            finish: styling.finish + length,
          }
        }
      }

      return styling
    })

    return stylings.flat()
  }

  const deletionOf = (stylings, startIndex, endIndex) => {
    // console.log(`Removing text from ${startIndex} to ${endIndex}`)

    let length = Math.abs(endIndex - startIndex)

    // Required operations:
    // Offset succeeding stylings
    // Remove stylings completely within range
    // Shrink stylings surrounding range
    // Clamp left resumptions and offset
    // Clamp right resumptions

    stylings = stylings.map((styling) => {
      // A succeeding styling, but not a right resumption
      if (
        styling.start >= startIndex &&
        styling.start >= endIndex &&
        styling.finish >= startIndex &&
        styling.finish >= endIndex
      ) {
        return {
          ...styling,
          start: styling.start - length,
          finish: styling.finish - length,
        }
      }

      // A styling completely within deletion range
      if (styling.start >= startIndex && styling.finish <= endIndex) {
        return null
      }

      // A styling surrounding deletion range
      if (styling.start <= startIndex && styling.finish >= endIndex) {
        return {
          ...styling,
          finish: styling.finish - length,
        }
      }

      // A styling not fully within deletion range, while the range exceeds to the left
      if (styling.start > startIndex && styling.start < endIndex) {
        return {
          ...styling,
          start: getMaximum([styling.start, endIndex]) - length,
          finish: styling.finish - length,
        }
      }

      // A styling not full within deletion range, while the range exceeds to the right
      if (styling.finish > startIndex && styling.finish < endIndex) {
        return {
          ...styling,
          finish: getMinimum([styling.finish, startIndex]),
        }
      }

      return styling
    })

    return stylings.flat().filter((styling) => styling)
  }

  const processNormal = (
    stylings,
    difference,
    selectionStart,
    selectionEnd
  ) => {
    if (difference == 0) return stylings

    if (difference > 0) {
      stylings = additionTo(stylings, selectionStart - difference, difference)
    } else {
      stylings = deletionOf(
        stylings,
        selectionStart,
        selectionEnd + Math.abs(difference)
      )
    }

    return stylings
  }

  const processPaste = (stylings, difference, selectionStart, selectionEnd) => {
    let pasteLength = _text.current.events.paste.length

    // console.log(
    //   `Pasting for length ${pasteLength} at [${selectionStart}, ${selectionEnd}]`
    // )
    // console.log(
    //   `Accompanied stylings: ${JSON.stringify(
    //     _text.current.clipboard,
    //     null,
    //     2
    //   )}`
    // )

    // Get addition start index
    let additionStart = selectionStart - pasteLength

    // Get removal range
    let removalStart = additionStart
    let removalEnd = additionStart + pasteLength - difference

    // Compute deletion
    stylings = deletionOf(stylings, removalStart, removalEnd)

    // Compute addition
    stylings = additionTo(stylings, additionStart, pasteLength, false)

    // Add rich copied stylings offset by paste start index
    stylings = stylings.concat(
      _text.current.clipboard.map((styling) => {
        return {
          ...styling,
          start: styling.start + additionStart,
          finish: styling.finish + additionStart,
        }
      })
    )

    // console.log(`End result: ${JSON.stringify(stylings, null, 2)}`)

    return stylings
  }

  const processDrop = (stylings, difference, dropStart, dropEnd) => {
    console.log(`Dropped at: ${[dropStart, dropEnd]}`)

    let dropLength = _text.current.events.drop.text.length

    let [dragStart, dragEnd] = _text.current.events.drop.drag

    let dropDifference = dropStart - dragStart

    // Get stylings at drag range
    let dragStylings = getStylingsInRange(stylings, dragStart, dragEnd)

    // Removal range
    let removalStart = dragStart
    let removalEnd = dragEnd

    // If the drag precedes the drop (positive difference)
    if (dropDifference > 0) {
      // Addition start index
      let additionStart = dropEnd

      // Compute addition first
      stylings = additionTo(stylings, additionStart, dropLength, false)

      // Compute removal second
      stylings = deletionOf(stylings, removalStart, removalEnd)
    }

    // If the drop precedes the drag (negative difference)
    if (dropDifference < 0) {
      // Addition start index
      let additionStart = dropStart

      // Compute removal first
      stylings = deletionOf(stylings, removalStart, removalEnd)

      // Compute addition second
      stylings = additionTo(stylings, additionStart, dropLength, false)
    }

    // Add rich dragged stylings offset
    stylings = stylings.concat(
      dragStylings.map((styling) => {
        return {
          ...styling,
          start: styling.start + dropStart,
          finish: styling.finish + dropStart,
        }
      })
    )

    return stylings
  }

  const onChange = (value, selectionStart, selectionEnd) => {
    // Since drop events cause onChange to invoke twice, ignore the first incomplete event
    if (
      _text.current.events.drop.is &&
      value.length != _text.current.content.length
    )
      return

    console.log(`Changed at: ${[selectionStart, selectionEnd]}`)

    setTimeout(function () {
      // let [selectionStart, selectionEnd] = getFieldSelection()
      let difference = value.length - _text.current.content.length
      let stylings = _text.current.stylings

      // Paste event
      if (_text.current.events.paste.is) {
        stylings = processPaste(
          stylings,
          difference,
          selectionStart,
          selectionEnd
        )
      } else if (_text.current.events.drop.is) {
        stylings = processDrop(
          stylings,
          difference,
          selectionStart,
          selectionEnd
        )
      } else {
        stylings = processNormal(
          stylings,
          difference,
          selectionStart,
          selectionEnd
        )
      }

      setText({
        ..._text.current,
        content: value,
        stylings: stylings,
        revert: [selectionStart, selectionEnd],
        events: {
          paste: { is: false, length: null },
          drop: { is: false, text: null, drag: null },
        },
      })
    }, 0)
  }

  const getContent = () => {
    // console.clear()
    let content = _text.current.content
    let stylings = [..._text.current.stylings]

    let result = []

    // Get line indices
    let lineIndices = content
      .split("")
      .map((character, index) => {
        if (character == lineBreakIdentifier) return index
        return null
      })
      .filter((item) => item)

    // Add end point
    lineIndices.unshift(0)
    lineIndices.push(content.length)

    // Ignore last element
    for (let i = 0; i < lineIndices.length - 1; i++) {
      let lineStart = lineIndices[i]
      let lineEnd = lineIndices[i + 1]

      let lineContent = content.slice(lineStart, lineEnd)

      // console.log(
      //   `Line: ${lineStart} -> ${lineEnd}, with content: ${lineContent}`
      // )

      // Get all stylings within line
      let lineStylings = getStylingsInRange(stylings, lineStart, lineEnd)

      // Collect all spans relative to stylings within line
      let spans = []

      // Acquire all flattened unique indices
      let indices = lineStylings
        .map(({ start, finish }) => [start, finish])
        .flat()
        .sort((a, b) => a - b)

      indices = indices.filter(
        (element, index) => indices.indexOf(element) == index
      )

      // Add first index if not present
      if (indices[0] != 0) indices.unshift(0)

      // Add last index if not present
      let last = lineContent.length
      if (indices[indices.length - 1] != last) indices.push(last)

      // Iterate through all indices except the last
      for (let i = 0; i < indices.length - 1; i++) {
        let startIndex = indices[i]
        let endIndex = indices[i + 1]

        spans.push({
          content: lineContent.substring(startIndex, endIndex),
          types: getIntersectStylings(lineStylings, startIndex).map(
            (styling) => styling.type
          ),
        })
      }

      result.push(spans)
    }

    // // Get all styling indices
    // let indices = _text.current.stylings
    //   .map(({ start, finish }) => [start, finish])
    //   .flat()

    // // Sort ascendingly
    // indices = indices.sort((a, b) => a - b)

    // // Remove duplicates
    // indices = indices.filter(
    //   (element, index) => indices.indexOf(element) == index
    // )

    // // Add first index if not present
    // if (indices[0] != 0) indices.unshift(0)

    // // Add last index if not present
    // let last = content.length
    // if (indices[indices.length - 1] != last) indices.push(last)

    // // let result = []

    // for (let i = 0; i < indices.length - 1; i++) {
    //   result.push([indices[i], content.substring(indices[i], indices[i + 1])])
    // }

    return result
  }

  // dangerouslySetInnerHTML incorrectly renders when the entire text is highlighted, copied, and then pasted in succession
  useEffect(() => {
    let html = getContent()
      .map((line, index) => {
        return `<div class="line" data-line-index="${index}">${line
          .map((span, _index) => {
            return `<span class="${span.types
              .map((type) => stylers[type].css)
              .join(" ")}" data-child-index="${_index}">${span.content}</span>`
          })
          .join("")}</div>`
      })
      .join("")

    // let html = getContent()
    //   .map((_data, index) => {
    //     let [start, data] = _data

    //     // Get stylings encompassing an index within it's range
    //     let stylings = getIntersectStylings(_text.current.stylings, start)
    //     return `<span class="${stylings
    //       .map((styling) => stylers[styling.type].css)
    //       .join(" ")}" data-child-index="${index}">${data}</span>`
    //   })
    //   .join("")

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
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      {/* <div className="selection-ignore rtl h-[150px] w-full resize-none overflow-auto overflow-x-hidden border-none font-['Arial'] text-[16px] outline-none">
        <div className="line" data-line-index="0">
          <span className="" data-child-index="0">
            asd
          </span>
        </div>
        <div className="line" data-line-index="1">
          <br />
        </div>
      </div>
       */}
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
            let data = event.clipboardData.getData("text/plain")
            data = data.replaceAll("\n", "")
            data = data.replaceAll("\r", "")

            document.execCommand("insertHTML", false, data)

            //   selection.anchorOffset <= 1 &&
            //   selection.focusOffset <= 1
            // ) {
            //   let lineIndex = getChildIndex(anchorNode.parentNode.parentNode)

            //   let _content = content
            //   if (content.startsWith(lineBreakIdentifier)) {
            //     _content = _content.slice(1)
            //   }

            //   let originalLine: any =
            //     _content.split(lineBreakIdentifier)[lineIndex]

            //   console.log(_content.split(lineBreakIdentifier))

            //   originalLine = originalLine.split("")
            //   originalLine.splice(0, 0, eventData)
            //   originalLine = originalLine.join("")

            //   let lines = _content.split(lineBreakIdentifier)

            //   lines[lineIndex] = originalLine

            //   textContent = lines.join(lineBreakIdentifier)

            //   if (content.startsWith(lineBreakIdentifier)) {
            //     textContent = lineBreakIdentifier + textContent
            //   }

            //   start += 1
            //   end += 1
            // }

            setText({
              ..._text.current,
              events: {
                ..._text.current.events,
                paste: { is: true, length: data.length },
              },
            })
          }}
          onInput={(event: any) => {
            // console.log(event)
            // console.log(event.target.textContent)
            // console.log(event.target.textContent.split(""))

            let [start, end] = getFieldSelection()
            let textContent = event.target.textContent
            let content = _text.current.content
            // Try creating twice the lines if the index is at 0,0
            // if (!textContent.startsWith(lineBreakIdentifier)) {
            //   textContent = lineBreakIdentifier + textContent
            // }

            let eventType = event.nativeEvent.inputType

            if (eventType == "insertParagraph") {
              console.log(`Inserted new line at [${start}, ${end}]`)

              let split = textContent.split("")

              split.splice(start, 0, lineBreakIdentifier)
              if (start == 0 && !content.startsWith(lineBreakIdentifier)) {
                split.splice(start, 0, lineBreakIdentifier)
                start += 1
                end += 1
              }

              textContent = split.join("")

              // Increase selection by one to accomodate for the new line
              start += 1
              end += 1
            } else {
              let selection = window.getSelection()
              let { anchorNode, focusNode } = selection

              let eventData = event.nativeEvent.data

              // Handle typing behind lines
              if (
                anchorNode.parentNode == focusNode.parentNode &&
                anchorNode.parentNode.nodeName == "SPAN" &&
                selection.anchorOffset <= 1 &&
                selection.focusOffset <= 1 &&
                eventType == "insertText"
              ) {
                let lineIndex = getChildIndex(anchorNode.parentNode.parentNode)

                let _content = content
                if (content.startsWith(lineBreakIdentifier)) {
                  _content = _content.slice(1)
                }

                let originalLine: any =
                  _content.split(lineBreakIdentifier)[lineIndex]

                console.log(_content.split(lineBreakIdentifier))

                originalLine = originalLine.split("")
                originalLine.splice(0, 0, eventData)
                originalLine = originalLine.join("")

                let lines = _content.split(lineBreakIdentifier)

                lines[lineIndex] = originalLine

                textContent = lines.join(lineBreakIdentifier)

                if (content.startsWith(lineBreakIdentifier)) {
                  textContent = lineBreakIdentifier + textContent
                }

                start += 1
                end += 1
              }
            }

            // if (
            //   eventData != null &&
            //   start - eventData.length == 0 &&
            //   end - eventData.length == 0 &&
            //   content.startsWith(lineBreakIdentifier)
            // ) {
            //   console.log("STOP")
            // }

            // console.log(event.nativeEvent.inputType)

            onChange(textContent, start, end)
          }}
          onCopy={() => {
            let [start, end] = getFieldSelection()

            let stylings = _text.current.stylings.slice()
            stylings = getStylingsInRange(stylings, start, end)

            setText({
              ...text,
              clipboard: stylings,
            })
          }}
          onDrop={(event) => {
            let text = event.dataTransfer.getData("text")

            if (text.trim() == "") return

            setText({
              ..._text.current,
              events: {
                ..._text.current.events,
                drop: { is: true, text: text, drag: getFieldSelection() },
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
