import clsx from "clsx"
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
      "flex flex-row  max-w-xl rounded border-gray-200 bg-gray-100 shadow-md p-2 gap-2 items-center relative  dark:border-gray-700 dark:bg-gray-800 ",
    vertical:
      "flex flex-col max-w-[200px] justify-start rounded border-gray-200 bg-gray-100 gap-2 shadow-md p-2 relative dark:border-gray-700 dark:bg-gray-800 ",
  }

  let imageStyles = {
    horizontal: "w-auto h-full bg-blue-500  rounded-inner",
    vertical: "bg-blue-500 rounded-inner w-auto ",
  }

  return (
    <div
      className={clsx(cardStyles[orientation], "dark:text-white")}
      {...props}
    >
      <div className="flex aspect-square w-full  max-w-fit  items-start ">
        <img
          src={
            props.imageURL ? props.imageURL : "https://via.placeholder.com/50"
          }
          className={imageStyles[orientation]}
        />
      </div>
      <div className="w-full text-xs">
        <div className="font-bold">{props.title}</div>
        <div className="text-[12px]">{props.description}</div>
      </div>
      <span
        onClick={props.handleHide}
        className="absolute right-0 top-0 h-fit cursor-pointer select-none rounded-bl-lg rounded-tr-lg bg-blue-100 px-2.5 py-0.5 text-[10px] font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800"
      >
        Hide
      </span>
    </div>
  )
}
