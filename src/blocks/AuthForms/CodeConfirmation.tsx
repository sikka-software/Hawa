import React, { useState, FC } from "react"
import { HawaAlert, HawaPinInput } from "../../elements"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"

type TConfirmation = {
  showError?: any
  errorTitle?: any
  errorText?: any
  texts?: {
    checkYourPhone: string
    weSentCode: string
    didntGetCode: string
    resendCode: string
    codeLabel: string
    codePlaceholder: string
    codeRequiredText: string
    confirm: string
    cancel: string
  }
  phoneNumber?: string
  submitConfirmation?: any
  handleSignIn?: any
}

export const CodeConfirmation: FC<TConfirmation> = (props) => {
  const [pins, setPins] = useState(null)
  return (
    <Card>
      <CardContent headless>
        {props.showError && (
          <HawaAlert
            title={props.errorTitle}
            text={props.errorText}
            severity="error"
          />
        )}
        <div className="mb-4 dark:text-white">
          <div className="text-lg font-bold">
            {props.texts.checkYourPhone ?? "Please check your phone"}
          </div>
          <div className="text-muted-foreground">
            <span>{props.texts.weSentCode ?? "We've sent a code to "}</span>
            <span>{props.phoneNumber}</span>
          </div>{" "}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (pins) {
              props.submitConfirmation(pins)
            }
          }}
        >
          <HawaPinInput width="full" digits={6} getPins={(e) => setPins(e)} />
          <div className=" py-2 text-center text-xs text-muted-foreground">
            <span>{props.texts.didntGetCode ?? "Didn't get the code?"}</span>{" "}
            <span className="cursor-pointer text-buttonPrimary-500">
              {props.texts.resendCode ?? "Click to resend"}
            </span>
          </div>
          <div className="mt-4  grid grid-cols-2 gap-2">
            <Button variant="secondary">
              {props.texts.cancel ?? "Cancel"}
            </Button>
            <Button>{props.texts.confirm ?? "Confirm"}</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
