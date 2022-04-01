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
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity: PropTypes.oneOf(["error", "info", "success", "warning"]),
  /**
   * The title of the alert in bold. Can be left empty.
   */
  title: PropTypes.string,
  /**
   * The text of the alert.
   */
  text: PropTypes.string,
  hideIcon: PropTypes.bool
};
