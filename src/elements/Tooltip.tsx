// "use client"

// import * as React from "react"
// import * as TooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "../util"

// const TooltipProvider = TooltipPrimitive.Provider

// const TooltipRoot = TooltipPrimitive.Root

// const TooltipTrigger = TooltipPrimitive.Trigger

// const TooltipContent = React.forwardRef<
//   React.ElementRef<typeof TooltipPrimitive.Content>,
//   React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
// >(({ className, sideOffset = 4, ...props }, ref) => (
//   <TooltipPrimitive.Content
//     ref={ref}
//     sideOffset={sideOffset}
//     className={cn(
//       "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
//       className
//     )}
//     {...props}
//   />
// ))
// TooltipContent.displayName = TooltipPrimitive.Content.displayName

// interface TooltipProps {
//   // TooltipProvider props
//   delayDurationProvider?: number
//   skipDelayDuration?: number
//   disableHoverableContentProvider?: boolean

//   // TooltipRoot props
//   defaultOpen?: boolean
//   open?: boolean
//   onOpenChange?: (open: boolean) => void
//   delayDurationRoot?: number
//   disableHoverableContentRoot?: boolean

//   // TooltipContent props
//   content: React.ReactNode
//   asChild?: boolean
//   ariaLabel?: string
//   onEscapeKeyDown?: () => void
//   onPointerDownOutside?: (event: MouseEvent | TouchEvent) => void
//   forceMount?: boolean
//   side?: "top" | "right" | "bottom" | "left"
//   sideOffset?: number
//   align?: "start" | "center" | "end"
//   alignOffset?: number
//   avoidCollisions?: boolean
//   collisionBoundary?: Element | Element[];
//   collisionPadding?: number
//   arrowPadding?: number
//   sticky?: "partial" | "always";
//   hideWhenDetached?: boolean

//   children: React.ReactNode
// }

// const Tooltip: React.FC<TooltipProps> = (props) => {
//   const { content, children, ...rest } = props
//   return (
//     <TooltipProvider
//       delayDuration={props.delayDurationProvider}
//       skipDelayDuration={props.skipDelayDuration}
//       disableHoverableContent={props.disableHoverableContentProvider}
//     >
//       <TooltipRoot
//         defaultOpen={props.defaultOpen}
//         open={props.open}
//         onOpenChange={props.onOpenChange}
//         delayDuration={props.delayDurationRoot}
//         disableHoverableContent={props.disableHoverableContentRoot}
//       >
//         <TooltipTrigger asChild>{children}</TooltipTrigger>
//         <TooltipContent
//           asChild={props.asChild}
//           aria-label={props.ariaLabel}
//           onEscapeKeyDown={props.onEscapeKeyDown}
//           onPointerDownOutside={props.onPointerDownOutside}
//         //   forceMount={props.forceMount}
//           side={props.side}

//           sideOffset={props.sideOffset}
//           align={props.align}
//           alignOffset={props.alignOffset}
//           avoidCollisions={props.avoidCollisions}
//           collisionBoundary={props.collisionBoundary}
//           collisionPadding={props.collisionPadding}
//           arrowPadding={props.arrowPadding}
//           sticky={props.sticky}
//           hideWhenDetached={props.hideWhenDetached}
//           {...rest}
//         >
//           {content}
//         </TooltipContent>
//       </TooltipRoot>
//     </TooltipProvider>
//   )
// }

// your-tooltip.jsx
import React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

const TooltipArrow = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Arrow>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Arrow>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Arrow
    ref={ref}
    className={cn(
      //   "bg-popover",
      "bg-red-500 text-blue-500 ",
      //   "z-50 overflow-hidden rounded-md border bg-popover  text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipArrow.displayName = TooltipPrimitive.Arrow.displayName

type TooltipTypes = {
  side?: "top" | "right" | "bottom" | "left"
  children?: any
  content?: any
  open?: any
  defaultOpen?: any
  onOpenChange?: any
  delayDuration?: any
}

export const Tooltip: React.FunctionComponent<TooltipTypes> = ({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration = 300,
  side,
  ...props
}) => {
  return (
    <TooltipPrimitive.TooltipProvider delayDuration={delayDuration}>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipContent side={side} align="center" {...props}>
          {content}
          {/* <TooltipArrow width={21} height={5} /> */}
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  )
}
// export { Tooltip, TooltipRoot, TooltipTrigger, TooltipContent, TooltipProvider }
