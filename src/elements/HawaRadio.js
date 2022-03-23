import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const HawaRadio = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <Container variant={props.location || "panelTabs"}>
      {props.options.map((singleOption, i) => {
        return (
          <Button
            key={i}
            onClick={() => {
              props.handleChange(singleOption.value);
              setValue(singleOption.value);
            }}
            fullWidth
            variant={
              value?.toLowerCase() === singleOption.value?.toLowerCase()
                ? "selected"
                : "unselected"
            }
          >
            {singleOption.label}
          </Button>
        );
      })}
    </Container>
  );
};
