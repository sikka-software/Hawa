import React, { useState } from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import PropTypes from "prop-types";
import { StyledTooltip } from "./StyledTooltip";
import { getTextColor } from "../util";

export const AdaptiveButton = (props) => {
  const { showText } = props;

  const [tooltip, setTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  //full button
  if (showText) {
    return (
      <Button
        disableRipple
        disabled={props.disabled}
        aria-label={props.buttonLabel}
        color={props.danger ? "secondary" : "primary"}
        onClick={props.handleClick}
        style={{
          backgroundColor: theme.primaryColor,
          // borderRadius: theme.borderRadius,
          padding: theme.paddings,
          color: getTextColor(theme.primaryColor)
          // color: hovered
          //   ? "#ffffff"
          //   : props.danger
          //   ? "#f50057"
          //   : "var(--blue)"
        }}
      >
        {props.icon}
        {props.showText ? (
          <span style={{ marginLeft: props.icon ? 5 : 0 }}>
            {props.buttonLabel}
          </span>
        ) : null}
      </Button>
    );
  } else if (props.buttonLabelOnly) {
    return (
      <>
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
          <Button
            disabled={props.disabled}
            size="small"
            disableRipple
            aria-label={props.buttonLabel}
            onClick={props.handleClick}
            color={props.danger ? "secondary" : "primary"}
            style={{
              padding: 10,
              color: hovered
                ? "#ffffff"
                : props.danger
                ? "#f50057"
                : "var(--blue)"
            }}
          >
            {props.buttonLabel}
          </Button>
        </Tooltip>
      </>
    );
  } else {
    //icon only
    return (
      <StyledTooltip hintTitle="Example" hintContent="More explaination here">
        <Button
          disabled={props.disabled}
          size="small"
          disableRipple
          aria-label={props.buttonLabel}
          onClick={props.handleClick}
          color={props.danger ? "secondary" : "primary"}
          style={{
            padding: 10,
            color: hovered
              ? "#ffffff"
              : props.danger
              ? "#f50057"
              : "var(--blue)"
          }}
        >
          {props.icon}
        </Button>
      </StyledTooltip>
    );
  }
};

AdaptiveButton.propTypes = {
  buttonLabel: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  showText: PropTypes.bool
};
