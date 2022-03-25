import React from "react";
// import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HawaTypography = (props) => {
  return <Typography {...props}>{props.children}</Typography>;
};
