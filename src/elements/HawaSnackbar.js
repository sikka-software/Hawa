import React from "react";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";

export const HawaSnackbar = (props) => {
  return (
    <Snackbar open={props.open} onClose={props.handleClose}>
      <Alert icon={false} severity={props.severity}>
        {props.title && <AlertTitle>{props.title}</AlertTitle>}
        {props.text}
      </Alert>
    </Snackbar>
  );
};
