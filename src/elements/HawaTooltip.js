import React from "react";
import "flowbite";
export const HawaTooltip = (props) => {
  const screenSize = {
    width: 1500,
    height: 200
  };
  return (
    <div
      id={props.tooltipID}
      role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
    >
      Tooltip content
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

    // <Tooltip
    //   placement={screenSize.width > 400 ? "bottom-center" : "top-center"}
    //   enterTouchDelay={100}
    //   title={
    //     props.hint ? (
    //       props.hint
    //     ) : (
    //       <div>
    //         <div
    //           style={{
    //             fontSize: 20,
    //             fontWeight: 800,
    //             padding: 10,
    //             paddingBottom: 5,
    //             textAlign: "center"
    //           }}
    //         >
    //           {props.hintTitle}
    //         </div>
    //         <div
    //           style={{
    //             fontSize: 13,
    //             fontWeight: 100,
    //             padding: 10,
    //             textAlign: "center"
    //           }}
    //         >
    //           {props.hintContent}
    //         </div>
    //       </div>
    //     )
    //   }
    // >
    //   {props.children}
    // </Tooltip>
  );
};
