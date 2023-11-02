import React, { FC } from "react";
import { Progress, Tooltip } from "../elements";

type UsageCardTypes = {
  tooltip?: any;
  title: any;
  percent: any;
  currentUsage: any;
};
export const Usage: FC<UsageCardTypes> = (props) => {
  return (
    <div className="hawa-flex hawa-w-full hawa-flex-col hawa-gap-1 hawa-rounded hawa-border hawa-bg-card hawa-p-4">
      <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2">
        <span className="hawa-bg-white-200">{props.title}</span>
        {props.tooltip && (
          <Tooltip content={props.tooltip}>
            <svg
              stroke="currentColor"
              aria-label="Exclamation Circle"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
          </Tooltip>
        )}
      </div>
      <div className="hawa-bg-white-100 hawa-flex hawa-flex-row">
        <div>{props.currentUsage}</div>
        <div> ({props.percent}%)</div>
      </div>
      <Progress value={props.percent ?? 0} />
    </div>
  );
};
