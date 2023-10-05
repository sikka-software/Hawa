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
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
    control,
  } = methods;
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
          <form onSubmit={handleSubmit(props.handleResetPassword)}>
            <CardContent
              headless={props.headless}
              //   className="hawa-flex hawa-flex-col hawa-gap-4"
            >
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="text"
                    label={props.texts?.emailLabel}
                    helperText={errors.email?.message}
                    placeholder={props.texts?.emailPlaceholder}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
                rules={{
                  required: props.texts?.emailRequiredText,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message:
                      props.texts?.emailInvalidText ||
                      "Email format is invalid",
                  },
                }}
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
