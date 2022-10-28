import React, { useState } from "react";

import Container from "@mui/material/Container";
import PropTypes from "prop-types";

export const HawaPanelTabs = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <Container variant={props.location || "panelTabs"}>
      {props.options.map((singleOption, i) => {
        return (
          <button
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
          </button>
        );
      })}
    </Container>
  );
};

HawaPanelTabs.propTypes = {
  lang: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  location: PropTypes.string
};
