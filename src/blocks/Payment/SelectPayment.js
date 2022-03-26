import React from "react";
import PropTypes from "prop-types";
import { HawaTextField, HawaTypography, HawaLogoButton } from "../../elements";
import Container from "@mui/material/Container";

export const SelectPayment = (props) => {
  return (
    <Container maxWidth="xs">
      <HawaTypography align="center">Choose Payment Method</HawaTypography>
      {props.viaWallet && (
        <HawaLogoButton
          logo="wallet"
          buttonText={props.walletLabel}
          onClick={props.handleWallet}
        />
      )}
      {props.viaCreditCard && (
        <HawaLogoButton
          logo="visa/master"
          buttonText={props.visaMasterLabel}
          onClick={props.handleCreditCard}
        />
      )}
      {props.viaMada && (
        <HawaLogoButton
          logo="mada"
          buttonText={props.madaLabel}
          onClick={props.handleMada}
        />
      )}
      {props.viaSTCPay && (
        <HawaLogoButton
          logo="stcpay"
          buttonText={props.stcPayLabel}
          onClick={props.handleSTCPay}
        />
      )}
      {props.viaPayPal && (
        <HawaLogoButton
          logo="paypal"
          buttonText={props.paypalLabel}
          onClick={props.handlePayPal}
        />
      )}
      {props.viaGooglePay && (
        <HawaLogoButton
          logo="googlepay"
          buttonText={props.googlePayLabel}
          onClick={props.handleGooglePay}
        />
      )}
      {props.viaApplePay && (
        <HawaLogoButton
          logo="applepay"
          buttonText={props.applePayLabel}
          onClick={props.handleApplePay}
        />
      )}
    </Container>
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
