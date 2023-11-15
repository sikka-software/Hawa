import React, { FC } from "react";
import { Skeleton, Card, CardContent, CardTitle } from "../elements";
import { cn } from "../util";

interface StatTypes extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  color?: string;
  number?: string;
  helperText?: string;
  helperTextColor?: "default" | "positive" | "negative" | "muted";
  chart?: any;
  icon?: React.ReactNode;
  variant?:
    | "default"
    | "plain"
    | "contained"
    | "outlined"
    | "brutalist"
    | "dropshadow";
  width?: "full" | "min" | "normal";
  isLoading?: boolean;
  className?: string;
}
export const Stats: FC<StatTypes> = ({
  label,
  icon,
  isLoading,
  number,
  helperText,
  helperTextColor = "default",
  chart,
  variant = "default",
  ...props
}) => {
  let helperTextColorStyles = {
    default: "",
    positive: "hawa-text-green-600 dark:hawa-text-green-500",
    negative: "hawa-text-red-600 dark:hawa-text-red-500",
    muted: "hawa-text-muted-foreground",
  };
  return (
    <Card {...props} clickable={Boolean(props.onClick)}>
      <div className="hawa-flex hawa-flex-row hawa-justify-between hawa-p-4 hawa-items-center">
        <CardTitle className="hawa-text-sm hawa-font-medium">{label}</CardTitle>
        {icon && <span>{icon}</span>}
      </div>
      <CardContent className="hawa-transition-all">
        {isLoading ? (
          <Skeleton className="hawa-h-8 hawa-w-3/4" />
        ) : (
          <div className="hawa-text-2xl hawa-font-bold">{number}</div>
        )}
        {helperText && (
          <p
            className={cn(
              "hawa-my-0 hawa-text-xs  hawa-transition-all hawa-text-start",
              helperTextColorStyles[helperTextColor],
              helperText
                ? "hawa-opacity-100 hawa-h-4"
                : "hawa-opacity-0 hawa-h-0"
            )}
          >
            {isLoading ? (
              <Skeleton className="hawa-mt-2 hawa-h-4 hawa-w-1/2" />
            ) : (
              helperText
            )}
          </p>
        )}
        {chart &&
          (isLoading ? (
            <Skeleton className="hawa-mt-2 hawa-h-4 hawa-w-1/2" />
          ) : (
            chart
          ))}
      </CardContent>
    </Card>
  );
};
