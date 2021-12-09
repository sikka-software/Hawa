import React, { useState, useContext } from "react";
import { ThemeProvider } from "../HawaProvider";

export const StyledRadioSelector = (props) => {
  const [options, setOptions] = useState(props.options);
  const [value, setValue] = useState(props.defaultValue);
  const theme = useContext(ThemeProvider);
  console.log("theme is ", theme);
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        margin: theme.margins,
        // padding: theme.paddings,
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
                    borderRadius: theme.borderRadius,
                    padding: theme.paddings,
                    backgroundColor:
                      theme.primaryColor || props.bgSelectedColor || "blue",
                    color: props.textSelectedColor || "lightgray"
                  }
                : {
                    borderRadius: theme.borderRadius,
                    padding: theme.paddings
                  }
            }
          >
            {o.text}
          </div>
        );
      })}
    </div>
  );
};
