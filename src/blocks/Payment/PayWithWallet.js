import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const PayWithWallet = (props) => {
  return (
    <Container maxWidth="xs">
      <Typography align="center">Wallet Balance</Typography>
      <Typography align="center" variant="h1">
        {props.walletBalance || "0"}
        <Typography>{props.currency || "SAR"}</Typography>
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="last"
        onClick={props.handlePayWithWallet}
      >
        {"Pay Now"}
      </Button>
    </Container>
  );
};
