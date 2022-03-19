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
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <HawaTypography align="center">Choose Payment Method</HawaTypography>
        {props.viaWallet && (
          <WalletButton
            buttonText={props.walletLabel}
            onClick={props.handleWallet}
          />
        )}
        {props.viaCreditCard && (
          <VisaMasterButton
            buttonText={props.visaMasterLabel}
            handleClick={props.handleCreditCard}
          />
        )}
        {props.viaMada && (
          <MadaButton
            buttonText={props.madaLabel}
            handleClick={props.handleMada}
          />
        )}
        {props.viaSTCPay && (
          <STCPayButton
            buttonText={props.stcPayLabel}
            handleClick={props.handleSTCPay}
          />
        )}
        {props.viaPayPal && (
          <PayPalButton
            buttonText={props.paypalLabel}
            handleClick={props.handlePayPal}
          />
        )}
        {props.viaGooglePay && (
          <GooglePayButton
            buttonText={props.googlePayLabel}
            handleClick={props.handleGooglePay}
          />
        )}
        {props.viaApplePay && (
          <ApplePayButton
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
