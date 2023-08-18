import React, { FC } from "react"
import clsx from "clsx"

type GridTypes = {
  children?: any
}

export const HawaGrid: FC<GridTypes> = (props) => {
  return (
    // [&>*:not(:first-child)]:mt-8
    <div className=" columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>*:not(:first-child)]:mt-8">
      {props.children}
    </div>
  )
}
