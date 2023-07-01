import React, { useRef, useState, useEffect } from "react"
import { RichTextarea } from "rich-textarea"
import clsx from "clsx"

const Property = (props) => {
  return (
    <div
      className="border-box mr-[5px] flex h-[32px] w-[32px] items-center justify-center rounded bg-gray-400 p-2"
      onClick={props.onClick}
    >
      {props.name}
    </div>
  )
}

type ComponentTypes = {
  foo?: string
}

// TODO: Handle copy pasting by assigning to local storage ?

const styleClasses = {
  bold: "font-bold",
  italic: "italic",
  under: "underline",
  strike: "line-through",
}

export const FloatingComment: React.FunctionComponent<ComponentTypes> = (
  props
) => {
  const [text, setText] = useState({
    content: "",
    stylings: [], // A styling is an object with 2 indices specifying a substring of text, and the applied effect
  })

  const field = useRef(null)

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
    var selectionStart = field.current.selectionStart
    var selectionEnd = field.current.selectionEnd

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
    let difference = value.length - text.content.length

    let selection = field.current.selectionStart - difference

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

    setText({ ...text, content: value, stylings: stylings })
  }

  return (
    <div className="align-center box-border flex h-min w-[400px] flex-col items-center justify-center rounded bg-gray-300 shadow-md">
      <div className={clsx("flex w-full flex-row justify-start p-2")}>
        <Property
          name="B"
          onClick={() => {
            perform("bold")
          }}
        />
        <Property
          name="I"
          onClick={() => {
            perform("italic")
          }}
        />
        <Property
          name="U"
          onClick={() => {
            perform("under")
          }}
        />
        <Property
          name="S"
          onClick={() => {
            perform("strike")
          }}
        />
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <div className="w-full">
        <RichTextarea
          ref={field}
          value={text.content}
          style={{ width: "100%" }} // tailwind w-full does not work
          className="order-none h-[150px] resize-none p-2 outline-none"
          onChange={(e) => {
            onChange(e.target.value)
          }}
        >
          {(value) => {
            // Get all styling indices
            let indices = text.stylings
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
            let last = text.content.length
            if (indices[indices.length - 1] != last) indices.push(last)

            let result = []

            for (let i = 0; i < indices.length - 1; i++) {
              result.push([
                indices[i],
                value.substring(indices[i], indices[i + 1]),
              ])
            }

            return result.map((_data, index) => {
              let [start, data] = _data

              // Get stylings encompassing an index within it's range
              let stylings = getIntersectStylings(start)

              return (
                <span
                  key={index}
                  className={`${stylings
                    .map((styling) => styleClasses[styling.type])
                    .join(" ")}
                  `}
                >
                  {data}
                </span>
              )
            })
          }}
        </RichTextarea>
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <button className="my-1 rounded bg-cyan-800 p-2 py-1 text-white">
        Submit
      </button>
    </div>
  )
}
