import { MoreVert } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import React from "react";

export const DraggableCard = (props) => {
  return (
    <Stack
      variant="card"
      direction="row"
      maxWidth={props.maxWidth}
      style={{ paddingLeft: 5 }}
    >
      <div
        style={{
        //   backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          //   paddingRight: 5,
          borderRight: "1px solid grey",
          marginRight: 20
        }}
      >
        <MoreVert />
      </div>

      <div
        style={{
          //   backgroundColor: "red",
          width: "100%"
        }}
      >
        {props.children}
      </div>
    </Stack>
  );
};
