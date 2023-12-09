import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "../../elements/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "../../elements/card";
import { Input } from "../../elements/input";
import { DirectionType } from "../../types/commonTypes";
import { ResetPasswordTextsTypes } from "../../types/textTypes";

type ResetPasswordType = {
  handleResetPassword: (e: any) => void;
  handleRouteToRegister: () => void;
  sent: any;
  headless?: boolean;
  allowRegister?: boolean;
  direction?: DirectionType;
  texts?: ResetPasswordTextsTypes;
};

export const ResetPasswordForm: FC<ResetPasswordType> = (props) => {
  const formSchema = z.object({
    email: z
      .string({ required_error: props.texts?.email?.required })
      .email({ message: props.texts?.email?.invalid })
      .min(1, { message: props.texts?.email?.required })
  });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema)
  });

  return (
    <Card dir={props.direction}>
      {!props.sent ? (
        <>
          {!props.headless && (
            <CardHeader>
              <CardTitle>
                {" "}
                {props.texts?.headTitle || "Reset Password"}
              </CardTitle>
              <CardDescription>
                {props.texts?.headDescription ||
                  "Enter your email to reset your account password"}
              </CardDescription>
            </CardHeader>
          )}
          <form
            noValidate
            onSubmit={handleSubmit((e) => {
              if (props.handleResetPassword) {
                return props.handleResetPassword(e);
              } else {
                console.log("handleResetPassword prop is missing");
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
                    label={props.texts?.email?.label}
                    helperText={formState.errors.email?.message}
                    placeholder={props.texts?.email?.placeholder}
                    {...field}
                  />
                )}
              />
            </CardContent>
            <CardFooter className="hawa-flex hawa-flex-col">
              <Button type="submit" className="hawa-w-full">
                {props.texts?.resetPassword}
              </Button>
              {props.allowRegister && (
                <div className="hawa-mt-4 hawa-pb-0 hawa-text-center hawa-text-sm dark:hawa-text-gray-300">
                  {props.texts?.dontHaveAccount ?? "Don't have an account? "}
                  <span
                    className="clickable-link"
                    onClick={props.handleRouteToRegister}
                  >
                    {props.texts?.registerText ?? "Register"}
                  </span>
                </div>
              )}
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
