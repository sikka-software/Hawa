import React from "react";
import { HawaLogoButton } from "./HawaLogoButton";

export const PayPalButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <img
        src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/paypal.png"
        height={25}
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
