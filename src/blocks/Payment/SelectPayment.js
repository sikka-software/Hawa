import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../layout";
import {
  HawaTextField,
  VisaMasterButton,
  MadaButton,
  STCPayButton,
  PayPalButton,
  GooglePayButton,
  ApplePayButton,
  WalletButton,
  HawaTypography
} from "../../ui";

export const SelectPayment = (props) => {
  return (
    <Box themeType={props.theme} maxWidth={400} noColor noMargin noPadding>
      <Box themeType={props.theme} noMargin>
        <HawaTypography themeType={props.theme} align="center">
          Choose Payment
        </HawaTypography>
        {props.viaWallet && (
          <WalletButton
            outlined
            themeType={props.theme}
            buttonText={props.walletLabel}
            onClick={props.handleWallet}
          />
        )}
        {props.viaCreditCard && (
          <VisaMasterButton
            outlined
            themeType={props.theme}
            buttonText={props.visaMasterLabel}
            handleClick={props.handleCreditCard}
          />
        )}
        {props.viaMada && (
          <MadaButton
            outlined
            themeType={props.theme}
            buttonText={props.madaLabel}
            handleClick={props.handleMada}
          />
        )}

        {props.viaSTCPay && (
          <STCPayButton
            outlined
            themeType={props.theme}
            buttonText={props.stcPayLabel}
            handleClick={props.handleSTCPay}
          />
        )}
        {props.viaPayPal && (
          <PayPalButton
            outlined
            themeType={props.theme}
            buttonText={props.paypalLabel}
            handleClick={props.handlePayPal}
          />
        )}
        {props.viaGooglePay && (
          <GooglePayButton
            outlined
            themeType={props.theme}
            buttonText={props.googlePayLabel}
            handleClick={props.handleGooglePay}
          />
        )}

        {props.viaApplePay && (
          <ApplePayButton
            outlined
            themeType={props.theme}
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
