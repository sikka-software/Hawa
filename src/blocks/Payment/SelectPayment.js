import React from "react";
import PropTypes from "prop-types";
import { Box } from "../../layout";
import { HawaTextField, HawaTypography, HawaLogoButton } from "../../ui";

export const SelectPayment = (props) => {
  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
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
            handleClick={props.handleCreditCard}
          />
        )}
        {props.viaMada && (
          <HawaLogoButton
            logo="mada"
            buttonText={props.madaLabel}
            handleClick={props.handleMada}
          />
        )}
        {props.viaSTCPay && (
          <HawaLogoButton
            logo="stcpay"
            buttonText={props.stcPayLabel}
            handleClick={props.handleSTCPay}
          />
        )}
        {props.viaPayPal && (
          <HawaLogoButton
            logo="paypal"
            buttonText={props.paypalLabel}
            handleClick={props.handlePayPal}
          />
        )}
        {props.viaGooglePay && (
          <HawaLogoButton
            logo="googlepay"
            buttonText={props.googlePayLabel}
            handleClick={props.handleGooglePay}
          />
        )}
        {props.viaApplePay && (
          <HawaLogoButton
            logo="applepay"
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
