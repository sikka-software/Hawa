import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import PropTypes from "prop-types";

export const HawaAlert = (props) => {
  return (
    <Alert severity={props.severity} icon={props.hideIcon}>
      {props.title && <AlertTitle>{props.title}</AlertTitle>}
      {props.text}
    </Alert>
  );
};
HawaAlert.propTypes = {
  severity: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  hideIcon: PropTypes.bool
};
