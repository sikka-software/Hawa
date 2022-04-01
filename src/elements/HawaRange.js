import React, { useState } from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import { Slider, Stack } from "@mui/material";

export const HawaRange = (props) => {
  const [value, setValue] = useState(props.defaultValue);
  return (
    <Stack spacing={2} direction="row" alignItems="center">
      {props.startElement}
      <Slider
        size="small"
        aria-label="Volume"
        value={props.value}
        onChange={props.handleChange}
      />
      {props.endElement}
    </Stack>
  );
};
HawaRange.propTypes = {
  startElement: PropTypes.element,
  endElement: PropTypes.element,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  location: PropTypes.string
};
