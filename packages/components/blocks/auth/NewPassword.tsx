import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import { Card, CardContent } from "@elements/card";
import { Input } from "@elements/input";

import { DirectionType } from "@_types/commonTypes";
import { NewPasswordTextsTypes } from "@_types/textTypes";

type NewPasswordTypes = {
  handleNewPassword: (e: any) => void;
  handleRouteToRegister: () => void;
  isLoading: boolean;
  direction?: DirectionType;
  allowRegister?: boolean;
  showSuccess: boolean;
  texts: NewPasswordTextsTypes;
  /** If true, an error alert is displayed at the top of the form.   */
  showError?: boolean;
  /** Title text of error alert.   */
  errorTitle?: string;
  /** Description text of error alert.   */
  errorText?: string;
};

export const NewPasswordForm: FC<NewPasswordTypes> = ({
  texts,
  isLoading,
  ...props
}) => {
  const formSchema = z
    .object({
      password: z
        .string({ required_error: texts?.password?.required })
        .min(1, { message: texts?.password?.required })
        .min(8, { message: texts?.password?.tooShort }),
      confirm_password: z
        .string({ required_error: texts?.confirm?.required })
        .refine((value) => value !== "", {
          message: texts?.password?.required,
        }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: texts?.confirm?.dontMatch,
      path: ["confirm_password"],
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card dir={props.direction}>
      {props.showSuccess ? (
        <CardContent headless>
          <div className="hawa-text-center">{texts?.passwordChanged}</div>
        </CardContent>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit((e) => {
            if (props.handleNewPassword) {
              return props.handleNewPassword(e);
            } else {
              console.log(
                "Form is submitted but handleSubmission prop is missing",
              );
            }
          })}
        >
          <CardContent headless className="hawa-flex hawa-flex-col">
            {props.showError && (
              <Alert
                direction={props.direction}
                title={props.errorTitle}
                text={props.errorText}
                severity="error"
              />
            )}
            <div className="hawa-flex hawa-flex-col hawa-gap-4 hawa-mb-4">
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="password"
                    autoComplete="new-password"
                    label={texts?.password?.label}
                    placeholder={texts?.password?.placeholder}
                    helperText={formState.errors.password?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                control={control}
                name="confirm_password"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="password"
                    autoComplete="new-password"
                    label={texts?.confirm?.label}
                    placeholder={texts?.confirm?.placeholder}
                    helperText={formState.errors.confirm_password?.message}
                    {...field}
                  />
                )}
              />
            </div>
            <Button className="hawa-w-full" type="submit" isLoading={isLoading}>
              {texts?.updatePassword}
            </Button>
            {props.allowRegister && (
              <div className="hawa-mt-4 hawa-pb-0 hawa-text-center hawa-text-sm dark:hawa-text-gray-300">
                {texts?.dontHaveAccount ?? "Don't have an account? "}
                <span
                  className="clickable-link"
                  onClick={props.handleRouteToRegister}
                >
                  {texts?.registerText ?? "Register"}
                </span>
              </div>
            )}
          </CardContent>
        </form>
      )}
    </Card>
  );
};
