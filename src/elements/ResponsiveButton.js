import React from "react";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";

export const ResponsiveButton = (props) => {
  if (props.showText) {
    return (
      <button variant="adaptive-dark" onClick={props.onClick}>
        {props.icon}
        <div style={{ width: 10 }} />
        {props.buttonText}
      </button>
    );
  } else {
    //icon only
    return (
      <Tooltip title={props.buttonText} placement="top">
        <button variant="adaptive-dark" onClick={props.onClick}>
          {props.icon}
        </button>
      </Tooltip>
    );
  }
};

ResponsiveButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  showText: PropTypes.bool,
};
