import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export const HawaAlert = (props) => {
  return (
    <Alert severity={props.severity} icon={props.hideIcon}>
      {props.title && <AlertTitle>{props.title}</AlertTitle>}
      {props.text}
    </Alert>
  );
};
