import React from "react";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { HawaLogoButton } from "./HawaLogoButton";

export const WalletButton = (props) => {
  return (
    <HawaLogoButton {...props}>
      <WalletIcon />
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
