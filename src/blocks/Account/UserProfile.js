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
    <Box themeType={props.theme} maxWidth={400} noMargin>
      <Box themeType={props.theme} noMargin noColor>
        <FormProvider {...methods}>
          <form>
            <HawaTextField
              type="text"
              name="fullName"
              inputLabel="Full Name"
              placeholder="Fulan AlFulani"
              themeType={props.theme}
              rules={{
                required: "Email is required"
              }}
              helperText={errors.fullName?.message}
            />

            <ActionButton fullWidth last text="Update Account" />
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};
