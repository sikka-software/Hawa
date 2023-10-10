import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
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

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type ResetPasswordType = {
  handleResetPassword: (e: any) => void;
  handleRouteToRegister: () => void;
  sent: any;
  texts?: {
    emailLabel: string;
    emailPlaceholder: string;
    emailRequiredText: string;
    emailInvalidText: string;
    emailSentText: string;
    resetPassword: string;
    registerText: string;
    dontHaveAccount: string;
  };
  headless?: boolean;
  direction?: "rtl" | "ltr";
};

export const ResetPasswordForm: FC<ResetPasswordType> = (props) => {
  const formSchema = z.object({
    email: z
      .string({ required_error: props.texts?.emailRequiredText })
      .email({ message: props.texts?.emailInvalidText })
      .nonempty({ message: props.texts?.emailRequiredText }),
  });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card dir={props.direction}>
      {!props.sent ? (
        <>
          {!props.headless && (
            <CardHeader>
              <CardTitle>Reset Password</CardTitle>
              <CardDescription>
                Enter your email to reset your account password
              </CardDescription>
            </CardHeader>
          )}
          <form
            onSubmit={handleSubmit((e) => {
              if (props.handleResetPassword) {
                return props.handleResetPassword(e);
              } else {
                console.log(
                  "Form is submitted but handleResetPassword prop is missing"
                );
              }
            })}
          >
            <CardContent headless={props.headless}>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="text"
                    label={props.texts?.emailLabel}
                    helperText={formState.errors.email?.message}
                    placeholder={props.texts?.emailPlaceholder}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
              />
              <div className="hawa-mt-2 hawa-pb-2 hawa-text-start hawa-text-sm dark:hawa-text-gray-300">
                {props.texts?.dontHaveAccount ?? "Don't have an account? "}
                <span
                  onClick={props.handleRouteToRegister}
                  className="clickable-link"
                >
                  {props.texts?.registerText ?? "Register"}
                </span>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="hawa-w-full">
                {props.texts?.resetPassword}
              </Button>
            </CardFooter>
          </form>
        </>
      ) : (
        <CardContent headless>
          <div className="hawa-text-center">{props.texts?.emailSentText}</div>
        </CardContent>
      )}
    </Card>
  );
};
