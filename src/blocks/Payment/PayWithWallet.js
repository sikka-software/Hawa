import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { HawaButton } from "../../elements";

export const PayWithWallet = (props) => {
  return (
    <Container maxWidth="xs">
      <Typography align="center">Wallet Balance</Typography>
      <Typography align="center" variant="h1">
        {props.walletBalance || "0"}
        <Typography>{props.currency || "SAR"}</Typography>
      </Typography>
      <HawaButton
        type="submit"
        fullWidth
        onClick={props.handlePayWithWallet}
      >
        {"Pay Now"}
      </HawaButton>
    </Container>
  );
};
