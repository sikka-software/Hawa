import React from "react";
import { HawaTextField } from "../../elements";
import { FormProvider, useForm } from "react-hook-form";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const UserProfileForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors }
  } = methods;

  return (
    <Container maxWidth="sm">
      <FormProvider {...methods}>
        <form>
          <HawaTextField
            fullWidth
            type="text"
            name="fullName"
            label="Full Name"
            placeholder="Fulan AlFulani"
            rules={{
              required: "Email is required"
            }}
            helperText={errors.fullName?.message}
          />
          <HawaTextField
            fullWidth
            type="text"
            name="fullName"
            label="Phone Number"
            placeholder="+966"
            rules={{
              required: "Email is required"
            }}
            // helperText={errors.fullName?.message}
          />
          <HawaTextField
            fullWidth
            type="text"
            name="email"
            label="New Email"
            placeholder="Enter your new email"
            rules={{
              required: "Email is required"
            }}
            helperText={errors.email?.message}
          />
          <HawaTextField
            fullWidth
            type="password"
            name="password"
            label="New password"
            placeholder="Enter your new password"
            rules={{
              required: "Email is required"
            }}
            helperText={errors.password?.message}
          />
          <HawaTextField
            fullWidth
            type="password"
            name="confirmPassword"
            label="Confirm new password"
            placeholder="Confirm new password"
            rules={{
              required: "Email is required"
            }}
            helperText={errors.confirmPassword?.message}
          />
          <Button type="submit" fullWidth variant="last">
            update profile
          </Button>{" "}
        </form>
      </FormProvider>
    </Container>
  );
};
