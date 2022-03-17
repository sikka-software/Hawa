import React, { useState, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";

export const StyledTooltip = (props) => {
  const screenSize = {
    width: 1500,
    height: 200
  };
  return (
    <Tooltip
      placement={screenSize.width > 400 ? "bottom-center" : "top-center"}
      enterTouchDelay={100}
      title={
        props.hint ? (
          props.hint
        ) : (
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                padding: 10,
                paddingBottom: 5,
                textAlign: "center"
              }}
            >
              {props.hintTitle}
            </div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 100,
                padding: 10,
                textAlign: "center"
              }}
            >
              {props.hintContent}
            </div>
          </div>
        )
      }
    >
      {props.children}
    </Tooltip>
  );
};
