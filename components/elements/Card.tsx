import * as React from "react";
import { cn } from "../util";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  clickable?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, clickable = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "hawa-rounded-lg hawa-border hawa-bg-card hawa-text-card-foreground hawa-shadow-sm",
        clickable &&
          "hawa-cursor-pointer hawa-transition-all hover:hawa-drop-shadow-md dark:hover:hawa-shadow-dark",
        className
      )}
      {...props}
    />
  )
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
} & React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ headless, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "hawa-p-6",
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
