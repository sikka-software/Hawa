import React from "react";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

export const OfflineBanner = (props) => {
  return (
    <Snackbar
      style={{ outline: "1px solid red" }}
      open={props.open}
      onClose={props.handleClose}
    >
      <Alert icon={false} severity={"error"}>
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.text}
      </Alert>
    </Snackbar>
  );
};
