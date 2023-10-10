import React, { useState, FC } from "react";
import { Button, Card, CardContent, Alert, PinInput } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type TConfirmation = {
  showError?: any;
  errorTitle?: any;
  errorText?: any;
  texts?: {
    checkYourPhone?: string;
    weSentCode?: string;
    didntGetCode?: string;
    resendCode?: string;
    codeLabel?: string;
    codePlaceholder?: string;
    codeRequiredText?: string;
    codeTooShort?: string;
    confirm?: string;
    cancel?: string;
  };
  phoneNumber?: string;
  handleConfirm?: any;
};

export const CodeConfirmation: FC<TConfirmation> = (props) => {
  const formSchema = z.object({
    otp_code: z
      .string({ required_error: props.texts?.codeRequiredText })
      .min(6, { message: props.texts?.codeTooShort }),
  });

  const { handleSubmit, control, formState, setValue } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card>
      <CardContent headless>
        {props.showError && (
          <Alert
            title={props.errorTitle}
            text={props.errorText}
            severity="error"
          />
        )}
        <div className="hawa-mb-4 dark:hawa-text-white">
          <div className="hawa-text-lg hawa-font-bold">
            {props.texts?.checkYourPhone ?? "Please check your phone"}
          </div>
          <div className="hawa-text-muted-foreground">
            <span>{props.texts?.weSentCode ?? "We've sent a code to "}</span>
            <span>{props.phoneNumber}</span>
          </div>{" "}
        </div>
        <form
          onSubmit={handleSubmit((e) => {
            if (props.handleConfirm) {
              return props.handleConfirm(e);
            } else {
              console.log(
                "Form is submitted but handleConfirm prop is missing"
              );
            }
          })}
        >
          <Controller
            control={control}
            name="otp_code"
            render={({ field }) => (
              <PinInput
                width="full"
                digits={6}
                getPins={(e: any) => setValue("otp_code", e.join(""))}
                helperText={formState.errors.otp_code?.message}
              />
            )}
          />
          <div className=" hawa-py-2 hawa-text-center hawa-text-xs hawa-text-muted-foreground">
            <span>{props.texts?.didntGetCode ?? "Didn't get the code?"}</span>{" "}
            <span className="clickable-link">
              {props.texts?.resendCode ?? "Click to resend"}
            </span>
          </div>
          <div className="hawa-mt-4 hawa-grid hawa-grid-cols-2 hawa-gap-2">
            <Button variant="secondary">
              {props.texts?.cancel ?? "Cancel"}
            </Button>
            <Button>{props.texts?.confirm ?? "Confirm"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
