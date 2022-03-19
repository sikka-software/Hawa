import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { styled, alpha, darken } from "@mui/material/styles";
import { HawaLogoButton } from "./HawaLogoButton";

export const TwitterButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <TwitterIcon />
      <div style={{ width: 10 }} />
      <p
        style={{
          color: "black",
          fontSize: 14,
          textAlign: "center",
          letterSpacing: 0.4,
          fontFamily: "Roboto",
          fontWeight: 500
        }}
      >
        {props.buttonText}
      </p>
    </HawaLogoButton>
  );
};
