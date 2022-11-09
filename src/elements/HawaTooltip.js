import React, { useState } from "react";

export const HawaTooltip = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div
        className="w-fit"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {props.children}
      </div>
      <div
        className={
          isHovered
            ? "relative top-2 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            : "relative top-2 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        }
      >
        {props.content}
      </div>
    </div>
  );
};
