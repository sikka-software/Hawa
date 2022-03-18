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
            handleClick={props.handleWallet}
          />
        )}
        {props.viaCreditCard && (
          <VisaMasterButton
            themeType={props.theme}
            outlined
            buttonText={props.visaMasterLabel}
            handleClick={props.handleCreditCard}
          />
        )}
        {props.viaMada && (
          <MadaButton
            themeType={props.theme}
            outlined
            buttonText={props.madaLabel}
            handleClick={props.handleMada}
          />
        )}

        {props.viaSTCPay && (
          <STCPayButton
            themeType={props.theme}
            outlined
            buttonText={props.stcPayLabel}
            handleClick={props.handleSTCPay}
          />
        )}
        {props.viaPayPal && (
          <PayPalButton
            themeType={props.theme}
            outlined
            buttonText={props.paypalLabel}
            handleClick={props.handlePayPal}
          />
        )}
        {props.viaGooglePay && (
          <GooglePayButton
            themeType={props.theme}
            outlined
            buttonText={props.googlePayLabel}
            handleClick={props.handleGooglePay}
          />
        )}

        {props.viaApplePay && (
          <ApplePayButton
            themeType={props.theme}
            outlined
            buttonText={props.applePayLabel}
            handleClick={props.handleApplePay}
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
  viaPayPal: PropTypes.bool,
  handleApplePay: PropTypes.func
};
