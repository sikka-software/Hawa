import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { StyledTooltip } from "./StyledTooltip";
import { getTextColor } from "../util";

export const AdaptiveButton = (props) => {
  if (props.showText) {
    return (
      <Button variant="adaptive-dark" onClick={props.onClick}>
        {props.icon}
        <div style={{ width: 10 }} />
        {props.buttonText}
      </Button>
    );
  } else {
    //icon only
    return (
      <Tooltip title={props.buttonText} placement="top">
        <Button variant="adaptive-dark" onClick={props.onClick}>
          {props.icon}
        </Button>
      </Tooltip>
    );
  }
};

AdaptiveButton.propTypes = {
  buttonText: PropTypes.string,
  showText: PropTypes.bool
};
