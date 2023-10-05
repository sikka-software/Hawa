import React, { FC } from "react";
import { Card, CardContent, CardFooter, Button } from "../../elements";

type AnnouncementTypes = {
  onActionClick: () => void;
  actionText?: string;
  title?: string;
  subtitle?: string;
};
export const Announcement: FC<AnnouncementTypes> = ({
  onActionClick,
  ...props
}) => {
  return (
    <Card>
      <CardContent
        headless
        className="hawa-flex hawa-flex-row hawa-items-center hawa-justify-between"
      >
        <div className="hawa-flex hawa-flex-col hawa-items-start hawa-justify-center ">
          <span className="hawa-text-lg hawa-font-bold">{props.title}</span>
          <span className="hawa-text-sm">{props.subtitle}</span>
        </div>
        <Button
          onClick={() => onActionClick()}
          className="hawa-whitespace-nowrap"
        >
          {props.actionText}
        </Button>
      </CardContent>
    </Card>
  );
};
