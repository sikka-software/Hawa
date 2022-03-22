import React from "react";
import { HawaTextField, ActionButton } from "../../elements";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Container } from "@mui/material";

export const CreditCardForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Container maxWidth="xs">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handle)}>
          <HawaTextField
            fullWidth
            name="password"
            placeholder="Enter password"
            type="number"
            label="Card Number"
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
