import React from "react";
import { Controller, useForm } from "react-hook-form";
import { HawaButton, HawaTextField } from "../../elements";
import PropTypes from "prop-types";

export const ResetPasswordForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control
  } = methods;
  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
      {!props.sent ? (
        <form onSubmit={handleSubmit(props.handleResetPassword)}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                type="text"
                value={field.value ?? ""}
                label={props.texts.emailLabel}
                helperText={errors.email?.message}
                placeholder={props.texts.emailPlaceholder}
                {...field}
              />
            )}
            rules={{
              required: props.texts.emailRequiredText,
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: props.texts.emailInvalidText
              }
            }}
          />
          <HawaButton fullWidth type="submit">
            {props.texts.resetPassword}
          </HawaButton>
        </form>
      ) : (
        <div className="text-center">{props.texts.emailSentText}</div>
      )}
    </div>
  );
};
ResetPasswordForm.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string,
    emailPlaceholder: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    emailSentText: PropTypes.string,
    resetPassword: PropTypes.string
  }),
  /**
   * a boolean to replace the form with a success message
   */
  sent: PropTypes.bool,
  handleResetPassword: PropTypes.func
};
