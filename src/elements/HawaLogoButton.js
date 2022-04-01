import React from "react";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Typography from "@mui/material/Typography";
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
          height={20}
        />
      );
      break;
    case "stcpay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/stc-pay.png"
          height={20}
        />
      );
      break;
    case "visa/master":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/visa-master.png"
          height={30}
        />
      );
      break;
    case "paypal":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/paypal.png"
          height={25}
        />
      );
      break;
    case "googlepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/google-pay.png"
          height={20}
        />
      );
      break;
    case "applepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/apple-pay.png"
          height={40}
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
    <Button
      style={{ direction: isArabic ? "rtl" : "ltr" }}
      {...props}
      variant="withLogo"
    >
      {logoElement}
      <div style={{ width: 10 }} />
      <Typography
        style={{
          color: "black",
          fontSize: 14,
          textAlign: "center",
          letterSpacing: 0.4,
          fontFamily: "Roboto",
          fontWeight: 500
        }}
      >
        {props.buttonText}
      </Typography>
    </Button>
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
