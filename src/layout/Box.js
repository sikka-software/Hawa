import React from "react";

export const Box = (props) => {
  // let boxStyle = {};

  // let currentTheme = Object.keys(hawaTheme.layout).find(
  //   (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  // );
  // if (currentTheme) {
  //   boxStyle = {
  //     display: "flex",
  //     flexDirection: props.horizontal ? "row" : "column",
  //     ...hawaTheme?.layout[currentTheme],
  //     backgroundColor: props.noColor
  //       ? "none"
  //       : hawaTheme.layout[currentTheme].backgroundColor,
  //     padding: props.noPadding ? 0 : hawaTheme?.layout[currentTheme].padding,
  //     margin: props.noMargin ? 0 : hawaTheme?.layout[currentTheme].margin,
  //     maxWidth: props.maxWidth
  //   };
  // } else {
  //   boxStyle = {
  //     display: "flex",
  //     flexDirection: props.horizontal ? "row" : "column",
  //     color: "white",
  //     marginTop: props.last ? 10 * 2 : 0,
  //     backgroundColor: props.noColor ? "none" : "lightGrey",
  //     padding: props.noPadding ? 0 : 10,
  //     margin: props.noMargin ? 0 : 10,
  //     maxWidth: props.maxWidth,
  //   };
  // }

  return (
    <div
    // style={boxStyle}
    >
      {props.children}
    </div>
  );
};