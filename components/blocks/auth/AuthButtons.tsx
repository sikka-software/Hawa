import React from "react";
import { ThirdPartyAuthTextsTypes } from "../../types/textTypes";
import { Button, Logos } from "../../elements";

type AuthButtonsType = {
  texts?: ThirdPartyAuthTextsTypes;
  viaGoogle?: boolean;
  viaTwitter?: boolean;
  viaGithub?: boolean;
  viaMicrosoft?: boolean;
  viaEmail?: boolean;
  viaPhone?: boolean;
  viaApple?: boolean;
  handleGoogle?: () => void;
  handleTwitter?: () => void;
  handleApple?: () => void;
  handleMicrosoft?: () => void;
  handleGithub?: () => void;
  handleEmail?: () => void;
  handlePhone?: () => void;
};

export const AuthButtons: React.FC<AuthButtonsType> = (props) => {
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      {props.viaGoogle && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleGoogle}
        >
          <Logos.google className="hawa-icon" />
          {props.texts?.continueWithGoogle ?? "Continue With Google"}
        </Button>
      )}
      {props.viaGithub && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleGithub}
        >
          <Logos.github className="hawa-icon" />
          {props.texts?.continueWithGithub ?? "Continue With Github"}
        </Button>
      )}
      {props.viaTwitter && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleTwitter}
        >
          <Logos.twitter className="hawa-icon" />
          {props.texts?.continueWithTwitter ?? "Continue With Twitter"}
        </Button>
      )}
      {props.viaApple && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleApple}
        >
          <Logos.apple className="hawa-icon" />
          {props.texts?.continueWithApple ?? "Continue With Apple"}
        </Button>
      )}
      {props.viaMicrosoft && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleMicrosoft}
        >
          <Logos.microsoft className="hawa-icon" />
          {props.texts?.continueWithMicrosoft ?? "Continue With Microsoft"}
        </Button>
      )}
      {props.viaEmail && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleEmail}
        >
          <Logos.mail className="hawa-icon" />
          {props.texts?.continueWithEmail ?? "Continue With Email"}
        </Button>
      )}
      {props.viaPhone && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handlePhone}
        >
          <Logos.phone className="hawa-icon" />
          {props.texts?.continueWithPhone ?? "Continue With Phone"}
        </Button>
      )}
    </div>
  );
};
