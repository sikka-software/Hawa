import React, { useState } from "react";
import { HawaTextField, ActionButton, HawaTypography } from "../../ui";
import { Box } from "../../layout";

export const ChargeWalletForm = (props) => {
  const [walletAmount, setWalletAmount] = useState(0);
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <HawaTypography variant="h2" align="center" themeType={props.theme}>
          {walletAmount.toLocaleString("en")}{" "}
          <span style={{ fontSize: 20, letterSpacing: 1 }}>
            {props.currency}
          </span>
        </HawaTypography>
        <HawaTypography themeType={props.theme}></HawaTypography>
        <HawaTextField
          themeType={props.theme}
          type="number"
          inputLabel="Amount" //move this to props
          onChange={(e) => setWalletAmount(e.target.value)}
        />
        <ActionButton
          last
          text={"Charge Wallet"} //move this to props
          themeType={props.theme}
          onClick={props.handleSignIn}
        />
      </Box>
    </Box>
  );
};
