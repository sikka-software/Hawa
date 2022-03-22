import React from "react";
// import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const HawaTypography = (props) => {
  // const currentTheme = Object.keys(hawaTheme.typography).find(
  //   (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  // );
  // let typographyStyle = {};

  // if (currentTheme) {
  //   typographyStyle = { ...hawaTheme.typography[currentTheme] };
  // } else {
  //   typographyStyle = {
  //     color: "black"
  //   };
  // }

  // const StyledTypography = styled(Typography)(({ theme }) => {
  //   return {
  //     ...typographyStyle
  //   };
  // });

  return <Typography {...props}>{props.children}</Typography>;
};
