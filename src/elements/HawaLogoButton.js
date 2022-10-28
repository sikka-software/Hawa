import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PropTypes from "prop-types";

export const HawaLogoButton = (props) => {
  let isArabic = props.lang === "ar";
  let logoElement = "";
  switch (props.logo?.toLowerCase()) {
    case "google":
      logoElement = (
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          }
        />
      );
      break;
    case "github":
      logoElement = <GitHubIcon />;
      break;
    case "twitter":
      logoElement = <TwitterIcon />;
      break;
    case "mada":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/mada.png"
          // height={20}
          className="h-6"
        />
      );
      break;
    case "stcpay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/stc-pay.png"
          // height={20}
          className="h-6"
        />
      );
      break;
    case "visa/master":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/visa-master.png"
          // height={30}
          className="h-6"
        />
      );
      break;
    case "paypal":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/paypal.png"
          // height={25}
          className="h-6"
        />
      );
      break;
    case "googlepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/google-pay.png"
          // height={20}
          className="h-6"
        />
      );
      break;
    case "applepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/apple-pay.png"
          // height={40}
          className="h-11"
        />
      );
      break;
    case "wallet":
      logoElement = <WalletIcon />;
      break;

    default:
      break;
  }
  return (
    <button
      style={{ direction: isArabic ? "rtl" : "ltr" }}
      {...props}
      // variant="withLogo"
      className="bg-white rounded-xl my-2 h-11 flex flex-row justify-center align-middle"
    >
      <div className="h-full w-1/2 flex flex-row justify-end items-center">
        {logoElement}
      </div>
      <div style={{ width: 10 }} />
      <div className="h-full w-1/2 flex flex-col justify-center items-start">
        {props.buttonText}
      </div>
    </button>
  );
};

HawaLogoButton.propTypes = {
  lang: PropTypes.string,
  /**
   * The logo/icon of the button
   */
  logo: PropTypes.oneOf([
    "google",
    "github",
    "twitter",
    "wallet",
    "googlepay",
    "applepay",
    "stcpay",
    "visa/master",
    "paypal",
    "mada"
  ]),
  /**
   * The text next to the logo in the button
   */
  buttonText: PropTypes.string
};
