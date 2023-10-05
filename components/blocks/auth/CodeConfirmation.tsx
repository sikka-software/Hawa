import React, { useState, FC } from "react";
import { Button, Card, CardContent, Alert, PinInput } from "../../elements";

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
    confirm?: string;
    cancel?: string;
  };
  phoneNumber?: string;
  submitConfirmation?: any;
  handleSignIn?: any;
};

export const CodeConfirmation: FC<TConfirmation> = (props) => {
  const [pins, setPins] = useState(null);
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
          onSubmit={(e) => {
            e.preventDefault();
            if (pins) {
              props.submitConfirmation(pins);
            }
          }}
        >
          <PinInput width="full" digits={6} getPins={(e: any) => setPins(e)} />
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
