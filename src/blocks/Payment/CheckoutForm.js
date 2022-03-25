import React from "react";
import {
  HawaTextField,
  ActionButton,
  HawaTypography,
  HawaTable
} from "../../elements";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Container, Typography } from "@mui/material";

export const CheckoutForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Container maxWidth="xs">
      <Typography
        align="center"
        variant="h4"
        fontWeight={400}
        style={{ marginBottom: 10 }}
      >
        Order Details
      </Typography>
      <HawaTable
        columns={["Product", "Price"]}
        rows={[
          ["Logo Design", "1,200 SAR"],
          ["Website Design", "1,500 SAR"],
          ["Website Development", "900 SAR"],
          ["Hosting", "200 SAR"],
          ["Social Media Management", "700 SAR"]
        ]}
        end={["Total", "5,330 SAR"]}
      />
      <Typography
        align="center"
        variant="h4"
        fontWeight={400}
        style={{ marginTop: 10 }}
      >
        Billing Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handle)}>
          <HawaTextField
            fullWidth
            name="password"
            placeholder="Enter password"
            type="tel"
            label="Card Number"
            // variant="unscrollable"
            // startAdornment={
            //   <InputAdornment position="start">
            //     <PasswordIcon />
            //   </InputAdornment>
            // }
            rules={{
              required: "Password is rquired"
            }}
            helperText={errors.password?.message}
          />

          <HawaTextField
            fullWidth
            name="password"
            placeholder="Enter password"
            type="password"
            label="Name On Card"
            // startAdornment={
            //   <InputAdornment position="start">
            //     <PasswordIcon />
            //   </InputAdornment>
            // }
            rules={{
              required: "Password is rquired"
            }}
            helperText={errors.password?.message}
          />

          <Button
            type="submit"
            fullWidth
            variant="last"
            onClick={props.handlePayWithCreditCard}
          >
            {/* {props.texts.signInText} */}
            {"Pay with Credit Card"}
          </Button>
        </form>
      </FormProvider>
    </Container>
  );
};
