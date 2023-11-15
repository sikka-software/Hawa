import * as React from "react";
import { cn } from "../util";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  clickable?: boolean;
  variant?: "default" | "neoBrutalism";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", clickable = false, ...props }, ref) => {
    let variantStyles = {
      default: cn(
        "hawa-rounded-lg hawa-border hawa-bg-card hawa-text-card-foreground hawa-shadow-sm",
        clickable &&
          "hawa-cursor-pointer hawa-transition-all hover:hawa-drop-shadow-md dark:hover:dark-shadow"
      ),
      neoBrutalism: cn(
        "neo-brutalism",
        // "hawa-transition-all hawa-uppercase hawa-font-mono  dark:hawa-bg-black hawa-font-bold hawa-py-2 hawa-px-4 hawa-rounded hawa-border-2 hawa-border-primary hawa-shadow-color-primary hawa-transition-[hawa-transform_50ms, hawa-box-shadow_50ms] transition-all uppercase font-mono  dark:bg-black font-bold py-2 px-4 rounded border-2 border-primary shadow-color-primary transition-[transform_50ms, box-shadow_50ms]",
        clickable &&
          "hawa-cursor-pointer active:hawa-translate-x-0.5 active:hawa-translate-y-0.5 active:hawa-shadow-color-primary-active active:translate-x-0.5 active:translate-y-0.5 active:shadow-color-primary-active"
      ),
    };
    return (
      <div
        ref={ref}
        className={cn(className, variantStyles[variant])}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "hawa-flex hawa-flex-col hawa-space-y-1.5 hawa-p-6",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("hawa-text-2xl hawa-font-semibold ", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("hawa-text-sm hawa-text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

type CardContentProps = {
  headless?: boolean;
  noPadding?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ headless, noPadding, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        noPadding ? "hawa-p-0" : "hawa-p-6",
        headless ? "hawa-pt-6" : "hawa-pt-0",
        className
      )}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("hawa-flex hawa-items-center hawa-p-6 hawa-pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
