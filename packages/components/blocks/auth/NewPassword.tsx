import React, { useState, FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle
} from "@elements/card";
import { Input } from "@elements/input";

import { DirectionType } from "@_types/commonTypes";
import { NewPasswordTextsTypes } from "@_types/textTypes";

type NewPasswordTypes = {
  handleNewPassword: (e: any) => void;
  handleRouteToRegister: () => void;
  direction?: DirectionType;
  headless?: boolean;
  allowRegister?: boolean;
  passwordChanged: any;
  texts: NewPasswordTextsTypes;
};

export const NewPasswordForm: FC<NewPasswordTypes> = ({ texts, ...props }) => {
  const formSchema = z
    .object({
      password: z
        .string({ required_error: texts?.password?.required })
        .min(1, { message: texts?.password?.required })
        .min(8, { message: texts?.password?.tooShort }),
      confirm_password: z
        .string({ required_error: texts?.confirm?.required })
        .refine((value) => value !== "", {
          message: texts?.password?.required
        })
    })
    .refine((data) => data.password === data.confirm_password, {
      message: texts?.confirm?.dontMatch,
      path: ["confirm_password"]
    });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema)
  });

  const [matchError, setMatchError] = useState(false);

  return (
    <Card dir={props.direction}>
      {matchError && (
        <Alert text={texts?.confirm?.dontMatch} severity="error" />
      )}
      {props.passwordChanged ? (
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
          </CardContent>
          <CardFooter className="hawa-flex hawa-flex-col">
            <Button className="hawa-w-full" type="submit">
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
          </CardFooter>
        </form>
      )}
    </Card>
  );
};
