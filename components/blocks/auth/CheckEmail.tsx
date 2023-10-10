import React, { useState, FC } from "react";
// import { HawaAlert, HawaPinInput } from "../../elements"
// import { Card, CardContent, CardFooter } from "../../elements/Card"
// import { Button } from "../../elements/Button"
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Alert,
  PinInput,
} from "../../elements";

type CheckEmailBlocks = {
  texts?: {
    checkEmail: string;
    resendEmail: string;
    pleaseVerify: string;
  };
  handleResend?: () => void;
};

export const CheckEmail: FC<CheckEmailBlocks> = ({ texts, handleResend }) => {
  return (
    <Card>
      <CardContent headless>
        <div className="hawa-flex hawa-flex-col hawa-items-center hawa-justify-center hawa-text-center">
          <div className="hawa-flex hawa-h-16 hawa-w-16 hawa-flex-col hawa-items-center hawa-justify-center hawa-rounded-3xl hawa-bg-primary hawa-text-6xl hawa-font-bold  hawa-text-primary-foreground">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="0.5em"
              width="0.5em"
              xmlns="http://www.w3.org/2000/svg"
              // {...props}
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="hawa-m-2 hawa-text-xl hawa-font-bold">
            {texts?.checkEmail || "Check your Email"}
          </div>

          <div className="hawa-text-sm">
            {texts?.pleaseVerify ||
              "Thank you for signing up! To complete your registration, we've sent a verification email to the address you provided. Please check your inbox and follow the instructions in the email to activate your account."}
          </div>
        </div>
      </CardContent>
      <CardFooter className="hawa-flex hawa-flex-col hawa-justify-center ">
        <span className="clickable-link hawa-text-sm" onClick={handleResend}>
          {texts?.resendEmail || "Resend Email"}
        </span>
      </CardFooter>
    </Card>
  );
};