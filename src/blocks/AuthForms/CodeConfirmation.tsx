import React, { useState, FC } from "react"
import { HawaAlert, HawaButton, HawaPinInput } from "../../elements"
import { HawaContainer } from "../../layout"

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
    <HawaContainer>
      {props.showError && (
        <HawaAlert
          title={props.errorTitle}
          text={props.errorText}
          severity="error"
        />
      )}
      <div className="mb-4">
        <div className="text-lg font-bold">
          {props.texts.checkYourPhone ?? "Please check your phone"}
        </div>
        <div className="text-gray-500">
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
        <div className=" py-2 text-center text-xs">
          <span>{props.texts.didntGetCode ?? "Didn't get the code?"}</span>{" "}
          <span className="cursor-pointer text-buttonPrimary-500">
            {props.texts.resendCode ?? "Click to resend"}
          </span>
        </div>
        <div className="mt-4  grid grid-cols-2 gap-2">
          <HawaButton margins={"none"} variant="outlined" width="full">
            {props.texts.cancel ?? "Cancel"}
          </HawaButton>
          <HawaButton margins={"none"} color="primary" width="full">
            {props.texts.confirm ?? "Confirm"}
          </HawaButton>
        </div>
      </form>
    </HawaContainer>
  )
}
