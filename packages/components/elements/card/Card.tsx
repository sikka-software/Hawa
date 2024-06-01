import * as React from "react";

import { cn } from "@util/index";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  clickable?: boolean;
  variant?: "default" | "neoBrutalism";
  asContainer?: boolean;
}

type CardContentProps = {
  headless?: boolean;
  noPadding?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "default",
      clickable = false,
      asContainer = false,
      ...props
    },
    ref,
  ) => {
    let variantStyles = {
      default: cn(
        "hawa-rounded-lg hawa-border hawa-bg-card hawa-text-card-foreground hawa-shadow-sm",
        clickable &&
          "hawa-cursor-pointer hawa-transition-all hover:hawa-drop-shadow-md dark:hover:dark-shadow",
      ),
      neoBrutalism: cn(
        "neo-brutalism",
        // "hawa-transition-all hawa-uppercase hawa-font-mono  dark:hawa-bg-black hawa-font-bold hawa-py-2 hawa-px-4 hawa-rounded hawa-border-2 hawa-border-primary hawa-shadow-color-primary hawa-transition-[hawa-transform_50ms, hawa-box-shadow_50ms] transition-all uppercase font-mono  dark:bg-black font-bold py-2 px-4 rounded border-2 border-primary shadow-color-primary transition-[transform_50ms, box-shadow_50ms]",
        clickable &&
          "hawa-cursor-pointer active:hawa-translate-x-0.5 active:hawa-translate-y-0.5 active:hawa-shadow-color-primary-active active:translate-x-0.5 active:translate-y-0.5 active:shadow-color-primary-active",
      ),
    };
    return (
      <div
        ref={ref}
        className={cn(className, !asContainer && variantStyles[variant])}
        {...props}
      />
    );
  },
);

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  actions?: React.ReactNode;
};
const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div className="hawa-flex hawa-flex-row hawa-justify-between">
      <div
        ref={ref}
        className={cn(
          "hawa-flex hawa-flex-col hawa-space-y-1.5 hawa-p-6",
          className,
        )}
        {...props}
      />
      {props.actions && <div className="hawa-p-6">{props.actions}</div>}
    </div>
  ),
);
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("hawa-text-2xl hawa-font-semibold", className)}
    {...props}
  />
));
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
const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ headless, noPadding, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        noPadding ? "hawa-p-0" : "hawa-p-6",
        headless ? "hawa-pt-6" : "hawa-pt-0",
        className,
      )}
      {...props}
    />
  ),
);
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { noPadding?: boolean }
>(({ className, noPadding, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      noPadding ? "hawa-p-0" : "hawa-p-6",
      "hawa-flex hawa-items-center hawa-pt-0",
      className,
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardHeader.displayName = "CardHeader";
CardFooter.displayName = "CardFooter";
CardTitle.displayName = "CardTitle";
Card.displayName = "Card";

export {
  CardDescription,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  Card,
};
