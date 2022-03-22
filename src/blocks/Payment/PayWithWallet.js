import React from "react";
import { ActionButton } from "../../ui";
import { Box } from "../../layout";
import { Button, Container, Typography } from "@mui/material";

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
        {"Pay Wallet"}
      </Button>
    </Container>
  );
};
