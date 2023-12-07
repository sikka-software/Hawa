import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../util";
import { Loading } from "../loading/Loading";

const buttonVariants = cva(
  "hawa-inline-flex hawa-items-center  hawa-select-none hawa-rounded-md hawa-text-sm hawa-font-medium hawa-ring-offset-background hawa-transition-colors focus-visible:hawa-outline-none focus-visible:hawa-ring-2 focus-visible:hawa-ring-ring focus-visible:hawa-ring-offset-2 disabled:hawa-pointer-events-none disabled:hawa-opacity-50",
  {
    variants: {
      variant: {
        default:
          "hawa-bg-primary hawa-text-primary-foreground hover:hawa-bg-primary/90",
        light: "hawa-bg-primary/20 hawa-text-primary hover:hawa-bg-primary/40",
        destructive:
          "hawa-bg-destructive hawa-text-destructive-foreground hover:hawa-bg-destructive/90",
        outline:
          "hawa-border hawa-border-input hawa-bg-transparent hover:hawa-bg-accent hover:hawa-text-accent-foreground",
        secondary:
          "hawa-bg-secondary hawa-text-secondary-foreground hover:hawa-bg-secondary/80",
        ghost: "hover:hawa-bg-accent hover:hawa-text-accent-foreground",
        link: "hawa-text-primary hawa-underline-offset-4 hover:hawa-underline",
        combobox: "hawa-bg-background hawa-border",
        neoBrutalism: "neo-brutalism"
        // "hawa-cursor-pointer hawa-transition-all hawa-uppercase hawa-font-mono  dark:hawa-bg-black hawa-font-bold hawa-py-2 hawa-px-4 hawa-rounded hawa-border-2 hawa-border-primary hawa-shadow-color-primary hawa-transition-[hawa-transform_50ms, hawa-box-shadow_50ms] active:hawa-translate-x-0.5 active:hawa-translate-y-0.5 active:hawa-shadow-color-primary-active shadow-color-primary active:shadow-color-primary-active",
      },
      size: {
        default: "hawa-h-10 hawa-px-4 hawa-py-2",
        heightless: "hawa-px-4 hawa-py-4",
        xs: "hawa-h-fit hawa-min-h-[25px] hawa-py-1 hawa-text-[10px] hawa-px-2 ",
        sm: "hawa-h-9  hawa-text-[11px] hawa-rounded-md hawa-px-3",
        lg: "hawa-h-11 hawa-rounded-md hawa-px-8",
        xl: "hawa-h-14 hawa-rounded-md hawa-px-10",
        icon: "hawa-h-10 hawa-w-10",
        smallIcon: "hawa-h-7 hawa-w-7"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  centered?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      centered = true,
      isLoading,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = "button";

    // Determine the color for the HawaLoading component based on the variant
    const loadingColor =
      variant === "outline" || variant === "ghost" || variant === "neoBrutalism"
        ? "hawa-bg-primary"
        : "hawa-bg-primary-foreground";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          centered && "hawa-justify-center"
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <Loading
            design={
              size === "icon" || size === "smallIcon" ? "spinner" : "dots-pulse"
            }
            themeMode={variant === "outline" ? "light" : "dark"}
            color={loadingColor}
            size={size === "sm" || size === "xs" ? "xs" : "button"}
          />
        ) : (
          children
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
