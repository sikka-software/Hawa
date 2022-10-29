import React from "react";
import PropTypes from "prop-types";
import { HawaTypography, HawaLogoButton } from "../../elements";

export const SelectPayment = (props) => {
  return (
    <div className="flex flex-col w-1/3 bg-blue-300 rounded-xl p-4">
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
    </div>
  );
};

SelectPayment.propTypes = {
  viaMada: PropTypes.bool,
  viaWallet: PropTypes.bool,
  viaSTCPay: PropTypes.bool,
  viaPayPal: PropTypes.bool,
  viaApplePay: PropTypes.bool,
  viaCreditCard: PropTypes.bool,
  madaLabel: PropTypes.string,
  stcPayLabel: PropTypes.string,
  paypalLabel: PropTypes.string,
  walletLabel: PropTypes.string,
  applePayLabel: PropTypes.string,
  visaMasterLabel: PropTypes.string,
  handleMada: PropTypes.func,
  handleWallet: PropTypes.func,
  handleSTCPay: PropTypes.func,
  handlePayPal: PropTypes.func,
  handleApplePay: PropTypes.func,
  handleCreditCard: PropTypes.func
};
