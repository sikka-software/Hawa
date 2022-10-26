import React, { useState } from "react";
import { HawaTextField, HawaAlert, HawaButton } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";

export const NewPasswordForm = (props) => {
  const [matchError, setMatchError] = useState(false);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  const handleSubmission = (e) => {
    console.log("handling subb", e);
    if (e.password === e.confirmPassword) {
      props.handleNewPassword();
    } else {
      setMatchError(true);
    }
  };

  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
      {matchError && (
        <HawaAlert text={props.texts.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <div className="text-center">{props.texts.passwordChanged}</div>
      ) : (
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmission)}>
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <HawaTextField
                  fullWidth
                  type="password"
                  value={field.value ?? ""}
                  label={props.texts.passwordLabel}
                  placeholder={props.texts.passwordPlaceholder}
                  helperText={errors.password?.message}
                  {...field}
                />
              )}
              rules={{
                required: props.texts.passwordRequiredText
              }}
            />
            <Controller
              control={control}
              name="confirmPassword"
              render={({ field }) => (
                <HawaTextField
                  fullWidth
                  type="password"
                  value={field.value ?? ""}
                  label={props.texts.confirmPasswordLabel}
                  placeholder={props.texts.confirmPasswordPlaceholder}
                  helperText={errors.confirmPassword?.message}
                  {...field}
                />
              )}
              rules={{
                required: props.texts.confirmPasswordRequiredText
              }}
            />

            <HawaButton type="submit" fullWidth>
              {props.texts.updatePassword}
            </HawaButton>
          </form>
        </FormProvider>
      )}
    </div>
  );
};
NewPasswordForm.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    passwordPlaceholder: PropTypes.string,
    updatePassword: PropTypes.string,
    passwordRequiredText: PropTypes.string,
    passwordLabel: PropTypes.string,
    confirmPasswordPlaceholder: PropTypes.string,
    confirmPasswordLabel: PropTypes.string,
    confirmPasswordRequiredText: PropTypes.string,
    passwordMatchError: PropTypes.string,
    forgotPasswordText: PropTypes.string,
    passwordChanged: PropTypes.string
  }),
  /**
   * A boolean to replace the form with a success message
   */
  passwordChanged: PropTypes.bool,
  handleNewPassword: PropTypes.func
};
