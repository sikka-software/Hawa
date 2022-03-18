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

export const SelectPayment = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <div>Choose Payment</div>
        {props.viaWallet && (
          <WalletButton
            themeType={props.theme}
            outlined
            buttonText={props.walletLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}
        {props.viaCreditCard && (
          <VisaMasterButton
            themeType={props.theme}
            outlined
            buttonText={props.visaMasterLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}
        {props.viaMada && (
          <MadaButton
            themeType={props.theme}
            outlined
            buttonText={props.madaLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}

        {props.viaSTCPay && (
          <STCPayButton
            themeType={props.theme}
            outlined
            buttonText={props.stcPayLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}
        {props.viaPayPal && (
          <PayPalButton
            themeType={props.theme}
            outlined
            buttonText={props.paypalLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}
        {props.viaGooglePay && (
          <GooglePayButton
            themeType={props.theme}
            outlined
            buttonText={props.googlePayLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}

        {props.viaApplePay && (
          <ApplePayButton
            themeType={props.theme}
            outlined
            buttonText={props.applePayLabel}
            handleClick={props.handleGoogleSignIn}
          />
        )}
      </Box>
    </Box>
  );
};

HawaTextField.propTypes = {
  theme: PropTypes.oneOf(["secondary", "primary"]),
  viaApplePay: PropTypes.bool,
  viaGooglePay: PropTypes.bool,
  viaSTCPay: PropTypes.bool,
  viaCreditCard: PropTypes.bool,
  viaPayPal: PropTypes.bool
};
