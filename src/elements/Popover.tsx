import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import { cn } from "../util"

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
 
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 rounded border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:shadow-dark" ,
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

interface PopoverProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
  align?: "start" | "center" | "end"
  sideOffset?: number
  side?: "top" | "right" | "bottom" | "left"
}

const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  className,
  align = "center",
  side,
  sideOffset = 4,
}) => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger>{trigger}</PopoverPrimitive.Trigger>
    <PopoverContent
      side={side}
      className={className}
      align={align}
      sideOffset={sideOffset}
    >
      {children}
    </PopoverContent>
  </PopoverPrimitive.Root>
)

export { Popover }
