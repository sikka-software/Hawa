"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "../util"

let rootSize = {
  default: "h-[25px] w-[42px]",
  sm: "h-[20px] w-[37px]",
}
let thumbSize = {
  default: "h-[21px] w-[21px]",
  sm: "h-[16px] w-[16px]",
}

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  size?: "default" | "sm" | "lg" // Define the possible sizes here
  label?: string
}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, size = "default", label, ...props }, ref) => {
  const [parentDirection, setParentDirection] = React.useState(null)
  const parentRef = React.useRef(null)

  React.useEffect(() => {
    if (parentRef.current && parentRef.current.parentNode) {
      const dir = window.getComputedStyle(
        parentRef.current.parentNode
      ).direction
      setParentDirection(dir)
    }
  })

  return (
    <div className="flex flex-row items-center" ref={parentRef}>
      <SwitchPrimitives.Root
        className={cn(
          "relative  cursor-pointer rounded-full bg-primary/20 outline-none data-[state=checked]:bg-primary",
          className,
          rootSize[size]
        )}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            thumbSize[size],
            "block   rounded-full bg-white transition-transform  duration-100 will-change-transform data-[state=checked]:bg-primary-foreground  dark:bg-background",

            parentDirection === "rtl"
              ? "-translate-x-0.5 data-[state=checked]:-translate-x-[19px]"
              : "translate-x-0.5 data-[state=checked]:translate-x-[19px]"
          )}
        />
      </SwitchPrimitives.Root>
      {label && (
        <span className="mx-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          {label}
        </span>
      )}
    </div>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName
