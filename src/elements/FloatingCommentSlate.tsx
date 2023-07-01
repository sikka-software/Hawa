// Import React dependencies.
import React, { useState, useCallback } from "react"
// Import the Slate editor factory.
import { Editor, Transforms, Element, createEditor } from "slate"

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react"

// TypeScript users only add this code
import { BaseEditor, Descendant } from "slate"
import { ReactEditor } from "slate-react"

type CustomElement = { type: "paragraph"; children: CustomText[] }
type CustomText = { text: string }

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
]

let styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecoration: "underline" },
  strikethrough: { textDecoration: "line-through" },
}

const Leaf = (props) => {
  let data = Object.assign({}, props.leaf)
  delete data.text

  let keys = Object.entries(data)
    .filter(([key, value]) => value)
    .map(([key, _]) => key)

  let types = {}

  if (keys.length != 0) {
    keys.map((type) => {
      Object.entries(styles[type]).map(([key, value]) => {
        types[key] = value
      })
    })
  }

  return (
    <span {...props.attributes} style={types}>
      {props.children}
    </span>
  )
}

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

export const FloatingCommentSlate = () => {
  const [editor] = useState(() => withReact(createEditor()))

  // Define a leaf rendering function that is memoized with `useCallback`.
  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />
  }, [])

  const perform = (event, type) => {
    event.preventDefault() // This does not take focus away from field which allows the function to retrieve the current selection data

    let current = Editor.marks(editor)[type] || false
    console.log(Editor.marks(editor))
    // if (!types.includes(type)) types.push(type)

    Editor.addMark(editor, type, !current)
  }

  return (
    <div className="align-center box-border flex h-min w-[400px] flex-col items-center justify-center rounded bg-blue-300 shadow-md">
      <div className={"flex w-full flex-row justify-start p-2"}>
        <Property
          name="B"
          onMouseDown={(event) => {
            perform(event, "bold")
          }}
        />
        <Property
          name="I"
          onMouseDown={(event) => {
            perform(event, "italic")
          }}
        />
        <Property
          name="U"
          onMouseDown={(event) => {
            perform(event, "underline")
          }}
        />
        <Property
          name="S"
          onMouseDown={(event) => {
            perform(event, "strikethrough")
          }}
        />
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <div className="w-full">
        <Slate editor={editor} initialValue={initialValue}>
          <Editable
            renderLeaf={renderLeaf}
            className="h-[150px] p-2"
            onKeyDown={(event) => {
              if (!event.ctrlKey) {
                return
              }

              switch (event.key) {
                // When "B" is pressed, bold the text in the selection.
                case "b": {
                  event.preventDefault()
                  Editor.addMark(editor, "bold", true)
                  break
                }
              }
            }}
          />
        </Slate>
      </div>
      <div className="h-[1px] w-full bg-slate-600">&nbsp;</div>
      <button className="my-1 rounded bg-cyan-800 p-2 py-1 text-white">
        Submit
      </button>
    </div>
  )
}
