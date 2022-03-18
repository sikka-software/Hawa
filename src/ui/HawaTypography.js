import React, { useContext } from "react";
import { styled, alpha } from "@mui/material/styles";
import PropTypes from "prop-types";
import { ThemeProvider } from "../themes/HawaProvider";
import Typography from "@mui/material/Typography";

export const HawaTypography = (props) => {
  const theme = useContext(ThemeProvider);
  const currentTheme = Object.keys(theme.actionButton).find(
    (themeName) => themeName.toLowerCase() === props.themeType?.toLowerCase()
  );
  let typographyStyle = {};

  if (currentTheme) {
    typographyStyle = { ...theme.typography[currentTheme] };
  } else {
    typographyStyle = {
      color: "black"
    };
  }

  const StyledTypography = styled(Typography)(({ theme }) => {
    return {
      ...typographyStyle
    };
  });

  return <StyledTypography {...props}>{props.children}</StyledTypography>;
};
