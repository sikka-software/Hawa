import React from "react";
import { HawaLogoButton } from "./HawaLogoButton";

export const ApplePayButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <img
        src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/apple-pay.png"
        height={40}
      />{" "}
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
