import React from "react";

export const StopPropagationWrapper = (props: any) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return <div onClick={handleClick}>{props.children}</div>;
};
