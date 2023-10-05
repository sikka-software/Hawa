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

type NewPasswordTypes = {
  handleNewPassword: () => void;
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
  };
};

export const NewPasswordForm: FC<NewPasswordTypes> = (props) => {
  const [matchError, setMatchError] = useState(false);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = methods;

  const handleSubmission = (e: any) => {
    if (e.password === e.confirmPassword) {
      props.handleNewPassword();
    } else {
      setMatchError(true);
    }
  };

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
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(handleSubmission)}>
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
                    helperText={errors.password?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
                rules={{
                  required: props.texts.passwordRequiredText,
                }}
              />
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <Input
                    width="full"
                    type="password"
                    autoComplete="new-password"
                    label={props.texts.confirmPasswordLabel}
                    placeholder={props.texts.confirmPasswordPlaceholder}
                    helperText={errors.confirmPassword?.message}
                    {...field}
                    value={field.value ?? ""}
                  />
                )}
                rules={{
                  required: props.texts.confirmPasswordRequiredText,
                }}
              />
            </CardContent>

            <CardFooter>
              <Button className="hawa-w-full" type="submit">
                {props.texts.updatePassword}
              </Button>
            </CardFooter>
          </form>
        </FormProvider>
      )}
    </Card>
  );
};
