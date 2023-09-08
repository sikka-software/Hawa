import React, { FC, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { HawaButton } from "./HawaButton"
import { Button } from "./Button"

type ComponentTypes = {
  title?: string
  question: string
  options?: []
  texts?: {
    least: string
    most: string
  }
  position?: "bottom-right" | "bottom-left"
  onOptionClicked?: (option) => void
}
export const UserFeedback: FC<ComponentTypes> = ({
  position = "bottom-right",
  ...props
}) => {
  const [closed, setClosed] = useState(false)
  const [answered, setAnswered] = useState(false)
  const [clickedOption, setClickedOption] = useState(null)
  const [closingTimer, setClosingTimer] = useState(5)
  const popUpRef = useRef(null)

  const boxPosition = {
    "bottom-right": "right-4",
    "bottom-left": "left-4",
  }
  useEffect(() => {
    //To change opacity and hide the component
    const timeoutHide = setTimeout(() => {
      if (closingTimer >= 0) {
        setClosingTimer(closingTimer - 1)
      }
    }, 1000)

    return () => {
      clearTimeout(timeoutHide)
    }
  }, [closingTimer])

  const slowClose = () => {
    setClosed(true)
    setTimeout(() => {
      popUpRef.current.removeChild(popUpRef.current.children[0])
    }, 200)
  }
  return (
    <div
      ref={popUpRef}
      className={clsx("fixed bottom-4 ", boxPosition[position])}
    >
      <div
        className={clsx(
          "relative flex w-full max-w-sm flex-col gap-2 rounded border bg-background p-4 shadow-md transition-all",
          closed ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="absolute left-2 top-2 p-1.5 text-sm">{props.title}</div>
        <button
          type="button"
          className="absolute right-2 top-2 inline-flex h-8 w-8 rounded p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={() => slowClose()}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="mt-8">{props.question}</div>
        <div className="flex w-full flex-row gap-1 rounded">
          {props.options.map((op) => (
            <span
              onClick={() => {
                props.onOptionClicked(op)
                setClickedOption(op)
                setAnswered(true)
                const timeoutDestroy = setTimeout(() => {
                  setClosed(true)
                }, 4800)
                setTimeout(() => {
                  popUpRef.current.removeChild(popUpRef.current.children[0])
                  clearTimeout(timeoutDestroy)
                }, 5300)
              }}
              className={clsx(
                "w-full cursor-pointer rounded border  p-4 text-center transition-all ",
                clickedOption === op
                  ? "bg-gray-500 text-white"
                  : "border bg-background hover:bg-gray-300 dark:hover:bg-gray-700"
              )}
            >
              {op}
            </span>
          ))}
        </div>
        {props.texts && (
          <div className=" flex flex-row justify-between text-xs">
            <span>{props.texts.least}</span>
            <span>{props.texts.most}</span>
          </div>
        )}
        {answered && (
          <div className="absolute left-0 top-0 gap-2 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-80 p-4 text-center transition-all">
            <span className="font-bold text-white">
              Thank you for your answer. This box will disappear in
              {" " + closingTimer} seconds
            </span>
            <div className="flex flex-row gap-2">
              <Button onClick={() => slowClose()}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
