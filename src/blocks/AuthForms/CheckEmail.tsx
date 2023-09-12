import React, { useState, FC } from "react"
import { HawaAlert, HawaPinInput } from "../../elements"
import { Card, CardContent, CardFooter } from "../../elements/Card"
import { Button } from "../../elements/Button"

type CheckEmailBlocks = {
  texts?: {
    checkEmail: string
    resendEmail: string
    pleaseVerify: string
  }
  handleResend?: () => void
}

export const CheckEmail: FC<CheckEmailBlocks> = ({ texts, handleResend }) => {
  return (
    <Card>
      <CardContent headless>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 flex-col items-center justify-center rounded-3xl bg-primary text-6xl font-bold  text-primary-foreground">
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
          <div className="m-2 text-xl font-bold">
            {texts?.checkEmail ?? "Check you email"}
          </div>

          <div className="text-sm">
            {texts?.pleaseVerify ??
              "Thank you for signing up! To complete your registration, we've sent a verification email to the address you provided. Please check your inbox and follow the instructions in the email to activate your account."}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center ">
        <span className="clickable-link text-sm" onClick={handleResend}>
          {texts?.resendEmail ?? "Resend Email"}
        </span>
      </CardFooter>
    </Card>
  )
}
