import React, { useContext } from "react";
import { ThemeProvider } from "../themes/HawaProvider";
import { styled, darken } from "@mui/material/styles";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WalletIcon from "@mui/icons-material/AccountBalanceWallet";

export const HawaLogoButton = (props) => {
  const { hawaTheme, themeName } = useContext(ThemeProvider);
  let buttonStyle = {};
  let currentTheme = Object.keys(hawaTheme.logoButton).find(
    (tName) => tName.toLowerCase() === themeName?.toLowerCase()
  );
  if (currentTheme) {
    buttonStyle = {
      ...hawaTheme.logoButton[currentTheme],
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  } else {
    // Default theme
    buttonStyle = {
      cursor: "pointer",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      height: 50,
      padding: 30,
      paddingTop: 0,
      paddingBottom: 0,
      border: "1px solid #ced4da",
      backgroundColor: "white",
      "&:hover": {
        backgroundColor: darken("#ffffff", 0.1)
      }
    };
  }
  const StyledButton = styled(Button)(({ theme }) => {
    return {
      ...buttonStyle
    };
  });
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
    <StyledButton {...props}>
      {logoElement}
      <div style={{ width: 10 }} />
      <p
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
      </p>
    </StyledButton>
  );
};
