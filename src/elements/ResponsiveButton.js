import React from "react";
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
      <>
        <button
          data-tooltip-target="btn1"
          variant="adaptive-dark"
          onClick={props.onClick}
        >
          {props.icon}
        </button>
        <HawaTooltip tooltipID="btn1" content={props.buttonText} />
      </>
    );
  }
};

ResponsiveButton.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func,
  showText: PropTypes.bool
};
