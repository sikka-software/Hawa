import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { motion } from "framer-motion";
import { ThemeProvider } from "../HawaProvider";

const AdaptiveButton = (props) => {
  const { showText, buttonColor, borderRadius, textColor } = props;
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
        initial={{
          // direction: "rtl",
          backgroundColor: buttonColor,
          color: textColor,
          borderRadius: theme.borderRadius,
          width: "fit-content"
        }}
        whileHover={{
          backgroundColor: props.hoverColor,
          borderRadius: borderRadius
        }}
        whileTap={{ scale: 1.2 }}
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
        <Button
          disabled={props.disabled}
          disableRipple
          aria-label={props.buttonLabel}
          color={props.danger ? "secondary" : "primary"}
          onClick={props.handleClick}
          style={{
            borderRadius: borderRadius,
            padding: 10,
            color: hovered
              ? "#ffffff"
              : props.danger
              ? "#f50057"
              : "var(--blue)"
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
        transition={{
          duration: 0.2
        }}
        initial={{
          width: "fit-content",
          backgroundColor: props.buttonColor,
          borderRadius: borderRadius
        }}
        whileTap={{ scale: 1.2 }}
        whileHover={{
          backgroundColor: props.hoverColor,
          borderRadius: borderRadius
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
          borderRadius: borderRadius,
          // padding: 5,
          margin: 5
        }}
        whileTap={{ scale: 1.2 }}
        whileHover={{
          backgroundColor: props.hoverColor,
          borderRadius: borderRadius
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
            {props.icon}
          </Button>
        </Tooltip>
      </motion.div>
    );
  }
};

export default AdaptiveButton;
