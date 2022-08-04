import { Button, Container } from "@mui/material";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import HawaPhoneInput from "../../elements/HawaPhoneInput";

export const SignInPhone = (props) => {
  const [phone, setPhone] = useState("");
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;
  return (
    <Container
      maxWidth="xs"
      variant="auth"
      style={{ direction: props.lang === "ar" ? "rtl" : "ltr" }}
    >
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <HawaPhoneInput
              country={props.country ?? ""}
              label={props.label ?? ""}
              onChange={(e) => {
                props.onChange(e);
                setPhone(e);
              }}
              value={props.value ?? props.value}
              {...field}
            />
          )}
        />
        <Button fullWidth type="submit" variant="last">
          {props.SignInButtonText}
        </Button>
      </form>
    </Container>
  );
};
