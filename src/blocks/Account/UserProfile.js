import React from "react";
import { HawaInputLabel, ActionButton, HawaTextField } from "../../ui";
import { Box } from "../../layout";
import { FormProvider, useForm } from "react-hook-form";

export const UserProfile = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit
  } = methods;

  return (
    <Box maxWidth={400} noMargin>
      <Box noMargin noColor>
        <FormProvider {...methods}>
          <form>
            <HawaTextField
              type="text"
              name="fullName"
              inputLabel="Full Name"
              placeholder="Fulan AlFulani"
              rules={{
                required: "Email is required"
              }}
              helperText={errors.fullName?.message}
            />
            <HawaTextField
              type="text"
              name="email"
              inputLabel="New Email"
              placeholder="Enter your new email"
              rules={{
                required: "Email is required"
              }}
              helperText={errors.email?.message}
            />
            <HawaTextField
              type="password"
              name="password"
              inputLabel="New password"
              placeholder="Enter your new password"
              rules={{
                required: "Email is required"
              }}
              helperText={errors.password?.message}
            />
            <HawaTextField
              type="password"
              name="confirmPassword"
              inputLabel="Confirm new password"
              placeholder="Confirm new password"
              rules={{
                required: "Email is required"
              }}
              helperText={errors.confirmPassword?.message}
            />

            <ActionButton fullWidth last text="Update Account" />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
