import React, { FC, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Alert } from "@elements/alert";
import { Button } from "@elements/button";
import { Card, CardContent } from "@elements/card";
import { PinInput } from "@elements/pinInput";

type TConfirmation = {
  texts?: {
    checkYourPhone?: string;
    weSentCode?: string;
    didntGetCode?: string;
    resendCode?: string;
    resendCodeTimer?: string;
    codeRequiredText?: string;
    codeTooShort?: string;
    confirm?: string;
    cancel?: string;
    seconds?: string;
  };
  showError?: any;
  errorTitle?: any;
  errorText?: any;
  phoneNumber?: string;
  confirmLoading?: boolean;
  handleConfirm?: any;
  handleResend?: any;
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
  const [resendTimer, setResendTimer] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(0);
  const [showResendTimer, setShowResendTimer] = useState(false);

  const startResendTimer = () => {
    if (resendTimer !== null) {
      clearInterval(resendTimer);
      setResendTimer(null);
    }
    const timerDuration = 60;
    setRemainingTime(timerDuration);
    setShowResendTimer(true);

    const newTimer = window.setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(newTimer);
          setShowResendTimer(false);
          return 0;
        }
      });
    }, 1000);
    setResendTimer(newTimer);
  };

  useEffect(() => {
    return () => {
      if (resendTimer !== null) {
        clearInterval(resendTimer);
      }
    };
  }, []);
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
            {props.texts?.checkYourPhone || "Please check your phone"}
          </div>
          <div className="hawa-text-muted-foreground">
            <span>{props.texts?.weSentCode || "We've sent a code to "}</span>
            <span>{props.phoneNumber}</span>
          </div>
        </div>
        <form
          noValidate
          onSubmit={handleSubmit((e) => {
            if (props.handleConfirm) {
              return props.handleConfirm(e);
            } else {
              console.log(
                "Form is submitted but handleConfirm prop is missing",
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
          {showResendTimer ? (
            <div className=" hawa-py-2 hawa-text-center hawa-text-xs hawa-text-muted-foreground">
              {props.texts?.resendCodeTimer} <strong>{remainingTime}</strong>{" "}
              {props.texts?.seconds}
            </div>
          ) : (
            <div className=" hawa-py-2 hawa-text-center hawa-text-xs hawa-text-muted-foreground">
              <span>{props.texts?.didntGetCode ?? "Didn't get the code?"}</span>{" "}
              <span
                className="clickable-link"
                onClick={() => {
                  startResendTimer();
                  props.handleResend();
                }}
              >
                {props.texts?.resendCode || "Click to resend"}
              </span>
            </div>
          )}

          <div className="hawa-mt-4 hawa-grid hawa-grid-cols-2 hawa-gap-2">
            <Button variant="secondary">
              {props.texts?.cancel || "Cancel"}
            </Button>
            <Button isLoading={props.confirmLoading}>
              {props.texts?.confirm || "Confirm"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
