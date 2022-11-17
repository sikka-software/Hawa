import React, { useState } from "react";


type THawaToolTip = {
  children : React.ReactElement
  content : string
}

export const HawaTooltip : React.FunctionComponent<THawaToolTip> = ({children, content}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <div className="relative">
      <div
        className="w-fit"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        {children}
      </div>
      <div
        className={
          isHovered
            ? "absolute top-10 left-0 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-100 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
            : "absolute top-10 left-0 z-10 inline-block w-fit max-w-xs rounded-lg bg-gray-900 py-2 px-3 text-center text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
        }
      >
        {content}
      </div>
    </div>
  );
};
