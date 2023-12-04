import React, { FC } from "react";

import { Card, CardContent, CardFooter, Button } from "../../elements";

type EmptyStateProps = {
  onActionClick: () => void;
  texts?: {
    youreCaughtUp?: string;
    actionText?: string;
  };
};

export const EmptyState: FC<EmptyStateProps> = ({ texts, onActionClick }) => {
  return (
    <Card>
      <CardContent headless>
        <div className="hawa-flex hawa-flex-col hawa-items-center hawa-justify-center hawa-text-center ">
          <div className="hawa-flex hawa-h-10 hawa-w-10 hawa-flex-col hawa-items-center hawa-justify-center hawa-rounded-3xl hawa-bg-primary hawa-text-6xl hawa-font-bold hawa-text-primary-foreground">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="0.35em"
              width="0.35em"
            >
              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
            </svg>
          </div>
          <div className="hawa-m-2 hawa-text-xl hawa-font-bold">
            {texts?.youreCaughtUp || "You're all caught up"}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="hawa-w-full" onClick={() => onActionClick()}>
          {texts?.actionText || "Go Home"}
        </Button>
      </CardFooter>
    </Card>
  );
};
