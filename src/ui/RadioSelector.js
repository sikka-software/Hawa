import React, { useState, useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";

export const StyledRadioSelector = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  const theme = useContext(ThemeProvider);

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        margin: theme.margins,
        padding: theme.paddings,
        marginBottom: 10
      }}
    >
      {props.options.map((singleOption) => {
        return (
          <div
            key={singleOption.label}
            className="radio_option"
            onClick={() => {
              setValue(singleOption.label);
              if (props.handleChange) {
                props.handleChange();
              }
            }}
            style={
              value.toLowerCase() === singleOption.label.toLowerCase()
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
            {singleOption.text}
          </div>
        );
      })}
    </div>
  );
};
