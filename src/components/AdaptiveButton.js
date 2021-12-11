import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ThemeProvider } from "./HawaProvider";
import { StyledTooltip } from "./StyledTooltip";
import { getTextColor } from "../util";

export const AdaptiveButton = (props) => {
  const { showText } = props;
  const theme = useContext(ThemeProvider);
  const screenSize = {
    width: 1500,
    height: 200
  };
  const [tooltip, setTooltip] = useState(false);
  const [hovered, setHovered] = useState(false);
  //full button
  if (showText) {
    return (
      <motion.div
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 1.2 }}
        whileHover={{
          // backgroundColor: props.hoverColor,
          borderRadius: theme.borderRadius,
          color: "red"
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => setHovered(true)}
        onMouseUp={() => setHovered(false)}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <Button
          disableRipple
          disabled={props.disabled}
          aria-label={props.buttonLabel}
          color={props.danger ? "secondary" : "primary"}
          onClick={props.handleClick}
          style={{
            backgroundColor: theme.primaryColor,
            borderRadius: theme.borderRadius,
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
      </motion.div>
    );
  } else if (props.buttonLabelOnly) {
    return (
      <motion.div
        transition={{ duration: 0.2 }}
        initial={{
          width: "fit-content",
          backgroundColor: props.buttonColor,
          borderRadius: theme.borderRadius
        }}
        whileTap={{ scale: 1.2 }}
        whileHover={{
          backgroundColor: props.hoverColor,
          borderRadius: theme.borderRadius
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => {
          setHovered(true);
          setTooltip(true);
        }}
        onMouseUp={() => {
          setHovered(false);
          setTooltip(true);
        }}
        onMouseOver={() => {
          setHovered(true);
          setTooltip(true);
        }}
        onMouseOut={() => {
          setHovered(false);
          // setTooltip(true);
        }}
      >
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
      </motion.div>
    );
  } else {
    //icon only
    return (
      <motion.div
        transition={{ duration: 0.2 }}
        initial={{
          width: "fit-content",
          backgroundColor: props.buttonColor,
          borderRadius: theme.borderRadius,
          // padding: 5,
          margin: 5
        }}
        whileTap={{ scale: 1.2 }}
        whileHover={{
          backgroundColor: props.hoverColor,
          borderRadius: theme.borderRadius
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseDown={() => {
          setHovered(true);
          setTooltip(true);
        }}
        onMouseUp={() => {
          setHovered(false);
          setTooltip(true);
        }}
        onMouseOver={() => {
          setHovered(true);
          setTooltip(true);
        }}
        onMouseOut={() => {
          setHovered(false);
          // setTooltip(true);
        }}
      >
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
        {/* <Tooltip
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

        </Tooltip> */}
      </motion.div>
    );
  }
};

AdaptiveButton.propTypes = {
  buttonLabel: PropTypes.string,
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  showText: PropTypes.bool
};
