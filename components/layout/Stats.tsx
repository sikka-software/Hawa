import React, { FC } from "react";
import {
  Skeleton,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../elements";
import { cn } from "../util";

type StatTypes = {
  label?: string;
  color?: string;
  number?: string;
  helperText?: string;
  chart?: any;
  icon?: any;
  variant?:
    | "default"
    | "plain"
    | "contained"
    | "outlined"
    | "brutalist"
    | "dropshadow";
  width?: "full" | "min" | "normal";
  isLoading?: boolean;
  handleClick?: () => void;
  className?: string;
};
export const Stats: FC<StatTypes> = ({ variant = "default", ...props }) => {
  return (
    <Card
      onClick={props.handleClick}
      clickable={Boolean(props.handleClick)}
      className={cn(props.className)}
    >
      {/* className="hawa-flex hawa-bg-red-500 hawa-flex-row hawa-items-center hawa-justify-between hawa-space-y-0 hawa-pb-2" */}
      {/* <CardHeader className="hawa-flex"> */}
      <div className="hawa-flex hawa-flex-row hawa-justify-between hawa-p-4 hawa-items-center">
        <CardTitle className="hawa-text-sm hawa-font-medium">
          {props.label}
        </CardTitle>
        {props.icon && <span>{props.icon}</span>}
      </div>
      {/* </CardHeader> */}
      <CardContent>
        {props.isLoading ? (
          <Skeleton className="hawa-h-8 hawa-w-3/4" />
        ) : (
          <div className="hawa-text-2xl hawa-font-bold">{props.number}</div>
        )}
        {props.isLoading && props.helperText ? (
          <Skeleton className="hawa-mt-2 hawa-h-4 hawa-w-1/2" />
        ) : (
          props.helperText && (
            <p className="hawa-text-xs hawa-text-muted-foreground">
              {props.helperText}
            </p>
          )
        )}
        {props.isLoading && props.chart ? (
          <Skeleton className="hawa-mt-2 hawa-h-4 hawa-w-1/2" />
        ) : (
          props.chart
        )}
      </CardContent>
    </Card>
  );
};