import React, { FC } from "react";

type IconCountTypes = {
  /** The icon of the counter */
  icon: React.JSX.Element;
  /** The text next to the icon */
  count?: string;
};

export const Count: FC<IconCountTypes> = (props) => {
  return (
    <div className="hawa-flex hawa-h-fit hawa-flex-row hawa-items-center hawa-gap-2 hawa-px-2">
      <div>{props.icon}</div>
      <div className="hawa-text-sm">{props.count}</div>
    </div>
  );
};
