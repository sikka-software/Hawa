import React from "react";
import { ActionButton, WalletButton } from "../../ui";
import { Box } from "../../layout";

export const PayWithWallet = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <div>Wallet Balance</div>
        <ActionButton text="Pay now" themeType={props.theme} />
      </Box>
    </Box>
  );
};
