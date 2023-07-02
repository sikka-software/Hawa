import React, { useRef, useState, useEffect } from "react"
import { RichTextarea } from "rich-textarea"
import clsx from "clsx"

const Property = (props) => {
  return (
    <div
      className="border-box mr-[5px] flex h-[32px] w-[32px] items-center justify-center rounded bg-gray-400 p-2"
      onMouseDown={props.onMouseDown}
    >
      {props.name}
    </div>
  )
}

type ComponentTypes = {
  foo?: string
}

const styleClasses = {
  bold: "font-bold",
  italic: "italic",
  under: "underline",
  strike: "line-through",
}

export const FloatingCommentCE: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [text, _setText] = useState({
    content: "",
    stylings: [], // A styling is an object with 2 indices specifying a substring of text, and the applied effect
    revert: [0, 0],
  })

  const field = useRef(null)
  const _text = useRef(text)
  const setText = (data) => {
    _text.current = data
    _setText(data)
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
        : parseInt(startParent.dataset.childIndex)

    let startPrecedingSum = nodes
      .slice(0, startNodeIndex)
      .map((span: any) => span.textContent.length)
      .reduce((a, b) => a + b, 0)

    let endParent: any = selection.anchorNode.parentNode
    let endNodeIndex =
      endParent == field.current
        ? nodes.length
        : parseInt(endParent.dataset.childIndex)

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
      let [start, end] = text.revert

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
    }, 0)
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
    let stylings = text.stylings.slice()
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

  const onChange = (value) => {
    let [selectionStart, selectionEnd] = getFieldSelection()

    let difference = value.length - text.content.length

    let selection = selectionStart - difference

    let stylings = text.stylings.slice()
    let succeeding = getSucceedStylings(selection)
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

    let intersecting = getIntersectStylings(selection, 1, 1)

    for (let intersect of intersecting) {
      let index = getStylingIndex(intersect)
      let styling = stylings[index]

      changes.push([index, styling.start, styling.finish + difference])
    }

    let spliced = []
    for (let [index, start, finish] of changes) {
      stylings[index] = {
        ...stylings[index],
        start: start,
        finish: finish,
      }

      if (start >= finish) spliced.push(index)
    }

    stylings = stylings.filter((_, index) => !spliced.includes(index))

    // if (difference == 1) difference = 0

    setText({
      ...text,
      content: value,
      stylings: stylings,
      revert: [selectionStart, selectionEnd],
    })
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

  // dangerouslySetInnerHTML incorrectly renders when the entire text is highlighted, copied, and then pasted in succession
  useEffect(() => {
    let html = getContent()
      .map((_data, index) => {
        let [start, data] = _data

        // Get stylings encompassing an index within it's range
        let stylings = getIntersectStylings(start)

        return `<span class="${stylings
          .map((styling) => styleClasses[styling.type])
          .join(" ")}" data-child-index="${index}">${data}</span>`
      })
      .join("")

    field.current.innerHTML = html
  }, [text])

  return (
    <div className="align-center box-border flex h-min w-[400px] flex-col items-center justify-center rounded bg-blue-300 shadow-md">
      <div className={clsx("flex w-full flex-row justify-start p-2")}>
        <Property
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
        />
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <div className="w-full">
        <div
          ref={field}
          contentEditable="true"
          className="h-[150px] w-full resize-none border-none p-2 outline-none"
          onInput={(event: any) => {
            onChange(event.target.textContent)
          }}
        ></div>
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <button className="my-1 rounded bg-cyan-800 p-2 py-1 text-white">
        Submit
      </button>
    </div>
  )
}
