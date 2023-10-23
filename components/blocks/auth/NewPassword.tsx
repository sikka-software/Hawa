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
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type NewPasswordTypes = {
  handleNewPassword: (e: any) => void;
  direction?: "rtl" | "ltr";
  headless?: boolean;
  passwordChanged: any;
  texts: {
    updatePassword: string;
    passwordPlaceholder: string;
    passwordRequired: string;
    passwordLabel: string;
    passwordMatchError: string;
    passwordChanged: string;
    passwordTooShort: string;
    confirmPasswordPlaceholder: string;
    confirmPasswordLabel: string;
    confirmPasswordRequired: string;
  };
};

export const NewPasswordForm: FC<NewPasswordTypes> = ({ texts, ...props }) => {
  const formSchema = z
    .object({
      password: z
        .string({ required_error: texts?.passwordRequired })
        .min(1, { message: texts?.passwordRequired })
        .min(8, { message: texts?.passwordTooShort }),
      confirm_password: z
        .string({ required_error: texts?.confirmPasswordRequired })
        .refine((value) => value !== "", {
          message: texts?.passwordRequired,
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
        <Alert text={texts?.passwordMatchError} severity="error" />
      )}
      {props.passwordChanged ? (
        <CardContent headless>
          <div className="hawa-text-center">{texts?.passwordChanged}</div>
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
                  label={texts?.passwordLabel}
                  placeholder={texts?.passwordPlaceholder}
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
                  label={texts?.confirmPasswordLabel}
                  placeholder={texts?.confirmPasswordPlaceholder}
                  helperText={formState.errors.confirm_password?.message}
                  {...field}
                />
              )}
            />
          </CardContent>

          <CardFooter>
            <Button className="hawa-w-full" type="submit">
              {texts?.updatePassword}
            </Button>
          </CardFooter>
        </form>
      )}
    </Card>
  );
};
