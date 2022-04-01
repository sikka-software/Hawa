import { useTheme } from "@mui/system";
import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ColorInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  cursor: pointer;
  height: 35px;
  border-radius: ${(props) => props.borderRadius}px;
  background-color: ${(props) => props.value};
  &::-webkit-color-swatch {
    border: none;
  }
  &::-moz-color-swatch {
    border: none;
  }
`;
const ColorText = styled.input`
  max-width: 70px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  //   height: 30px;
  padding: 10px;
  border-radius: ${(props) => props.borderRadius}px;
  &::-webkit-color-swatch {
    border: none;
  }
  &::-moz-color-swatch {
    border: none;
  }
`;
export const HawaColorPicker = (props) => {
  const theme = useTheme();
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <ColorText
        type={"text"}
        value={props.color}
        borderRadius={theme.allBorderRadius}
        onChange={props.handleChange}
      />
      <div style={{ width: 10 }} />
      <ColorInput
        type={"color"}
        value={props.color}
        onChange={props.handleChange}
        borderRadius={theme.allBorderRadius}
      />
    </div>
  );
};

HawaColorPicker.propTypes = {
  color: PropTypes.string,
  handleChange: PropTypes.func
};
