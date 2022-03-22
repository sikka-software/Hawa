import React, { useState } from "react";
import { HawaTextField } from "../../ui";
import { FormProvider, useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ChargeWalletForm = (props) => {
  const [walletAmount, setWalletAmount] = useState(0);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Container maxWidth="xs">
      <Typography align="center" variant="h1">
        {Number(walletAmount).toLocaleString("en") || "0"}
        <Typography>{props.currency || "SAR"}</Typography>
      </Typography>
      <FormProvider {...methods}>
        <form
          onChange={(e) => {
            e.preventDefault();
            setWalletAmount(methods.getValues().amount);
          }}
          style={{ marginTop: 10 }}
          onSubmit={handleSubmit(props.handleChargeWallet)}
        >
          <HawaTextField
            fullWidth
            name="amount"
            placeholder="Enter amount"
            type="number"
            value={walletAmount}
            rules={{
              required: "Password is rquired"
            }}
            helperText={errors.amount?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="last"
            onClick={props.handleSignIn}
          >
            {/* {props.texts.signInText} */}
            {"Charge Wallet"}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
