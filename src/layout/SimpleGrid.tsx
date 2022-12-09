import { useState } from "@storybook/addons"
import clsx from "clsx"
import { FC, ReactNode } from "react"

type TSimpleGrid = {
  columns: number
  spacing?: number
  spacingX?: number
  spacingY?: number
  children?: ReactNode
}

const SimpleGrid: FC<TSimpleGrid> = ({
  columns = 2,
  spacing,
  spacingX,
  spacingY,
  children,
  ...props
}) => {
  const cols_num = "grid-cols-" + columns
  const grid_spacing = "gap-" + spacing
  const grid_spacing_x = "gap-x-" + spacingX
  const grid_spacing_y = "gap-y-" + spacingY


  return (
    <div
      className={clsx(
        "grid",
        cols_num,
        spacing ?? grid_spacing,
        grid_spacing_x,
       grid_spacing_y
      )}
    >
      {children}
    </div>
  )
}

export default SimpleGrid
