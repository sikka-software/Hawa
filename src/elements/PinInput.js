import {
  Input,
  makeStyles,
  TextField,
  InputLabel,
  Typography,
  Stack
} from "@mui/material";
import { object } from "prop-types";
import React, { useEffect, useState } from "react";
import { replaceAt } from "../util";

export const HawaPinInput = ({
  children,
  type,
  defaultValue,
  onChange,
  onComplete,
  ...props
}) => {
  const [value, setValue] = useState(
    defaultValue ? defaultValue.split("") : []
  );
  const [pinLength, setPinLength] = useState(0);

  useEffect(() => {
    let length = 0;
    React.Children.map(children, (child) => {
      if (
        React.isValidElement(child) &&
        child.type?.displayName &&
        child.type?.displayName === "HawaPinInputField"
      ) {
        length++;
      }
    });
    setPinLength(length);
  }, []);

  const childrenWithProps = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      if (
        child.type?.displayName &&
        child.type?.displayName === "HawaPinInputField" &&
        defaultValue &&
        defaultValue[index]
      ) {
        return React.cloneElement(child, {
          type,
          defaultValue: defaultValue[index],
          index: index,
          setValue: setValue,
          value: value,
          onChangeAction: (currentValue) => onChange(currentValue),
          onCompleteAction: (finalValue) => onComplete(finalValue),
          pinLength: pinLength
        });
      }
      return React.cloneElement(child, {
        type,
        setValue: setValue,
        value: value,
        index: index,
        onChangeAction: (currentValue) => onChange(currentValue),
        onCompleteAction: (finalValue) => onComplete(finalValue),
        pinLength: pinLength
      });
    }
    return child;
  });

  useEffect(() => {
    if (value.length === pinLength) {
      onComplete(value);
    }
  }, [value]);

  return (
    <div style={props.inForm && { width: "100%" }}>
      <div style={{ width: props.fullWidth ? "100%" : "fit-content" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {props.label && <InputLabel>{props.label}</InputLabel>}
          {props.helperText && (
            <Typography
              style={{ marginBottom: !props.label && 10 }}
              variant="validation"
            >
              {props.helperText}
            </Typography>
          )}
        </div>
        <Stack
          direction={"row"}
          spacing={2}
          justifyContent="center"
          alignItems={"center"}
        >
          {childrenWithProps}
        </Stack>
      </div>
    </div>
  );
};

export const HawaPinInputField = (props) => {
  return (
    <Input
      type={props.type && props.type == "alphanumeric" ? "text" : "number"}
      id={"pinInput" + props.index}
      defaultValue={props.defaultValue || ""}
      variant="pin"
      disableUnderline
      inputProps={{ maxLength: 1 }}
      onChange={(e) => {
        let newValue = props.value;
        newValue[props.index] = e.target.value;
        props.setValue(newValue);
        props.onChangeAction(newValue.toString().replaceAll(",", ""));
        if (
          parseInt(e.target.attributes["maxlength"].value) >= 1 &&
          e.target.value != ""
        ) {
          let i = document.getElementById("pinInput" + (props.index + 1));
          if (i) {
            i.focus();
          }
        }
        if (props.value.length === props.pinLength) {
          props.onCompleteAction(props.value.toString().replaceAll(",", ""));
        }
      }}
    />
  );
};
