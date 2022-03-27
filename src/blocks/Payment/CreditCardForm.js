import React from "react";
import { HawaTextField } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

export const CreditCardForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <Container maxWidth="xs">
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

       
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
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
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              name="password"
              placeholder="Enter password"
              type="password"
              label="Expiry Date"
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
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              name="password"
              placeholder="Enter password"
              type="password"
              label="CCV"
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
          )}
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
    </Container>
  );
};
