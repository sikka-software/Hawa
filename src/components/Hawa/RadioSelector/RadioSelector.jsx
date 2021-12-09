import React, { useState, useContext } from "react";
import { ThemeProvider } from "../HawaProvider";

const MuiRadioSelector = ({ props, defaultValue }) => {
  const [options, setOptions] = useState(props.options);
  const [value, setValue] = useState(defaultValue);
  const  theme  = useContext(ThemeProvider);
  console.log(theme);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        borderRadius: theme.borderRadius || props.bdRadius || 10,
        margin : theme.margins,
        padding : theme.paddings,
        marginBottom: 10
      }}
    >
      {options.map((o) => {
        return (
          <div
            key={o.label}
            className="radio_option"
            onClick={() => {
              setValue(o.label);
              if (props.handleChange) {
                props.handleChange();
              }
            }}
            style={
              value.toLowerCase() === o.label.toLowerCase()
                ? {
                    backgroundColor: theme.primaryColor || props.bgSelectedColor || "blue",
                    color: props.textSelectedColor || "lightgray"
                  }
                : null
            }
          >
            {o.text}
          </div>
        );
      })}
    </div>
  );
};

export const StyledRadioSelector = (props) => {
  return (
    <React.Fragment>
      <MuiRadioSelector
        props={props}
        value={props.value}
        handleClick={props.onChange}
        handleChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </React.Fragment>
  );
};
