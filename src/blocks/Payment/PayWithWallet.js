import React from "react";
import { ActionButton, WalletButton } from "../../ui";
import { Box } from "../../layout";

export const PayWithWallet = (props) => {
  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <div>Wallet Balance</div>
        <ActionButton text="Pay now" />
      </Box>
    </Box>
  );
};
