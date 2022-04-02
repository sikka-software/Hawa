import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

export const HawaRange = (props) => {
  return (
    <Stack spacing={2} direction="row" alignItems="center" style={props.style}>
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
  /**
   * The element at the side where the range value is 0
   * Can be an icon
   */
  startElement: PropTypes.element,
  /**
   * The element at the side where the range value is 100
   */
  endElement: PropTypes.element,
  handleChange: PropTypes.func
};
