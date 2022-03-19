import React from "react";
import { HawaLogoButton } from "./HawaLogoButton";

export const GoogleButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
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
