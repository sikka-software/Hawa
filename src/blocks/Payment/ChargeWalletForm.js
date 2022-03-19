import React, { useState } from "react";
import { HawaTextField, ActionButton, HawaTypography } from "../../ui";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";

export const ChargeWalletForm = (props) => {
  const [walletAmount, setWalletAmount] = useState(0);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Box maxWidth={400} noColor noMargin noPadding>
      <Box noMargin>
        <HawaTypography variant="h2" align="center">
          {Number(walletAmount).toLocaleString("en")}{" "}
          <span style={{ fontSize: 20, letterSpacing: 1 }}>
            {props.currency}
          </span>
        </HawaTypography>
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
              name="amount"
              placeholder="Enter amount"
              type="number"
              value={walletAmount}
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.amount?.message}
            />
            <ActionButton
              last
              fullWidth
              text={"Charge Wallet"} //move this to props
              onClick={props.handleSignIn}
            />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
