import React, { FC } from "react"

type AdCardTypes = {
  orientation: "vertical" | "horizontal"
  title: string
  description: string
  imageURL: string
  handleHide: any
}
export const HawaAdCard: FC<AdCardTypes> = ({ orientation, ...props }) => {
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
    <div className={cardStyles[orientation]} {...props}>
      <div className=" m-2 mr-0 flex  w-full max-w-fit items-center">
        <img
          src={
            props.imageURL ? props.imageURL : "https://via.placeholder.com/50"
          }
          className={imageStyles[orientation]}
        />
      </div>
      <div className="w-full p-2 text-xs">
        <div className="font-bold">{props.title}</div>
        <div>{props.description}</div>
      </div>
      <span
        onClick={props.handleHide}
        className="h-fit rounded-bl-lg rounded-tr-lg bg-blue-100 px-2.5 py-0.5 text-[10px] font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
      >
        Hide
      </span>
    </div>
  )
}
