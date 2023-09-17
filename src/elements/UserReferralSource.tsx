import React, { FC, useEffect, useRef, useState } from "react"
import clsx from "clsx"
import { Button } from "./Button"
import { HawaRadio } from "./HawaRadio"
import { Card, CardContent } from "./Card"
import { Textarea } from "./Textarea"

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
export const UserReferralSource: FC<ComponentTypes> = ({
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
    <Card
      ref={popUpRef}
      className={clsx("fixed bottom-4 p-4 ", boxPosition[position])}
    >
      <button
        type="button"
        className="absolute right-2 top-2 inline-flex h-8 w-8 rounded p-1.5 text-gray-400 transition-all hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
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
      <CardContent headless>
        <div
          className={clsx(
            "flex flex-col gap-4", // "relative flex w-full max-w-sm flex-col gap-2 rounded border bg-background p-4 shadow-md transition-all",
            closed ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="mt-4 font-bold">{props.question}</div>
          <div className="flex w-full flex-row gap-1 rounded ">
            <HawaRadio
              orientation="vertical"
              options={props.options}
            ></HawaRadio>
          </div>
          <div>
            <Textarea />
          </div>
        </div>
        <Button className="mt-4 w-full">Submit</Button>
      </CardContent>
    </Card>
  )
}
