import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export const HawaRange = (props) => {
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
