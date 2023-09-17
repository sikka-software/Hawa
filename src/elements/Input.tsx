import * as React from "react"
import { cn } from "../util"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  preview?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, preview, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          preview &&
            "  disabled:cursor-default disabled:opacity-100 border-opacity-25 "
        )}
        disabled={preview}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
