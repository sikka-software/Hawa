import React, { useState, FC } from "react";
import {
  Alert,
  Input,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
} from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type NewPasswordTypes = {
  handleNewPassword: (e: any) => void;
  direction?: "rtl" | "ltr";
  headless?: boolean;
  passwordChanged: any;
  texts: {
    passwordPlaceholder: string;
    updatePassword: string;
    passwordRequiredText: string;
    passwordLabel: string;
    confirmPasswordPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordRequiredText: string;
    passwordMatchError: string;
    passwordChanged: string;
    passwordTooShortText: string;
    confirmPasswordRequired: string;
  };
};

export const NewPasswordForm: FC<NewPasswordTypes> = (props) => {
  const formSchema = z
    .object({
      password: z
        .string({ required_error: props.texts.passwordRequiredText })
        .min(5, { message: props.texts.passwordTooShortText })
        .refine((value) => value !== "", {
          message: props.texts.passwordRequiredText,
        }),
      confirm_password: z
        .string({ required_error: props.texts.confirmPasswordRequired })
        .refine((value) => value !== "", {
          message: props.texts.passwordRequiredText,
        }),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords don't match",
      path: ["confirm_password"],
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [matchError, setMatchError] = useState(false);

  return (
    <Card dir={props.direction}>
      {matchError && (
        <Alert text={props.texts.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <CardContent headless>
          <div className="hawa-text-center">{props.texts.passwordChanged}</div>
        </CardContent>
      ) : (
        <form
          onSubmit={handleSubmit((e) => {
            if (props.handleNewPassword) {
              return props.handleNewPassword(e);
            } else {
              console.log(
                "Form is submitted but handleSubmission prop is missing"
              );
            }
          })}
        >
          {!props.headless && (
            <CardHeader>
              <CardTitle>Create Password</CardTitle>
              <CardDescription>
                Set a new password for your account
              </CardDescription>
            </CardHeader>
          )}
          <CardContent
            headless={props.headless}
            className="hawa-flex hawa-flex-col hawa-gap-4"
          >
            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <Input
                  width="full"
                  type="password"
                  autoComplete="new-password"
                  label={props.texts.passwordLabel}
                  placeholder={props.texts.passwordPlaceholder}
                  helperText={formState.errors.password?.message}
                  {...field}
                  value={field.value ?? ""}
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
                  label={props.texts.confirmPasswordLabel}
                  placeholder={props.texts.confirmPasswordPlaceholder}
                  helperText={formState.errors.confirm_password?.message}
                  {...field}
                  value={field.value ?? ""}
                />
              )}
            />
          </CardContent>

          <CardFooter>
            <Button className="hawa-w-full" type="submit">
              {props.texts.updatePassword}
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  );
};
