import clsx from "clsx"
import React, { FC } from "react"

type LandingCardTypes = {
  orientation: "vertical" | "horizontal"
  title: string
  description: string
  imageURL: string
  handleHide: any
  texts?: {
    titleTip?: string
    title?: string
    description?: string
    linkText?: string
  }
  buttonLink?: string
}
export const HawaLandingCard: FC<LandingCardTypes> = ({
  orientation,
  ...props
}) => {
  let cardStyles = {
    horizontal:
      "flex max-w-xl rounded border-gray-200 bg-gray-100 shadow-md  dark:border-gray-700 dark:bg-gray-800 ",
    vertical:
      "flex max-w-xs rounded border-gray-200 bg-gray-100 shadow-md  dark:border-gray-700 dark:bg-gray-800 ",
  }

  let imageStyles = {
    horizontal: "w-8 h-8 rounded",
    vertical: "w-14 h-14 rounded",
  }

  return (
    <div
      className={clsx(
        cardStyles[orientation],
        "flex flex-col p-10",
        "relative overflow-hidden"
      )}
      {...props}
    >
      {props.texts.titleTip && (
        <div className="text-sm text-red-600">{props.texts.titleTip}</div>
      )}
      {props.imageURL && (
        <img
          className="absolute -bottom-10 -right-10 h-40 w-auto "
          src={props.imageURL}
        />
      )}

      {props.texts.title && (
        <div className="mt-2 text-lg font-medium">{props.texts.title} </div>
      )}
      {props.texts.description && (
        <div className="z-10 mt-4 text-sm">{props.texts.description}</div>
      )}
      {props.texts.linkText && (
        <div className="z-10 mt-6 text-sm underline underline-offset-8">
          {props.texts.linkText}
        </div>
      )}
    </div>
  )
}
