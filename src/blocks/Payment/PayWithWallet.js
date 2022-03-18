import React from "react";
import {
  HawaTextField,
  ActionButton,
  GoogleButton,
  TwitterButton,
  GithubButton,
  VisaMasterButton,
  MadaButton,
  STCPayButton,
  PayPalButton,
  GooglePayButton,
  ApplePayButton,
  WalletButton
} from "../../ui";
import { Box } from "../../layout";
import PropTypes from "prop-types";

export const PayWithWallet = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <div>Wallet Balance</div>
        {props.viaWallet && (
          <WalletButton
            themeType={props.theme}
            outlined
            buttonText={props.walletLabel}
            handleClick={props.handleWallet}
          />
        )}
      </Box>
    </Box>
  );
};
