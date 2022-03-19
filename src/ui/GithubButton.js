import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HawaLogoButton } from "./HawaLogoButton";

export const GithubButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <GitHubIcon />
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
