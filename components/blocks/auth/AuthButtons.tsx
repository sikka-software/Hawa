import React from "react";
import { Button, Logos } from "../../elements";
import { ThirdPartyAuthTextsTypes } from "@/components/types/textTypes";

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
          <Logos.google className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithGoogle ?? "Continue With Google"}
        </Button>
      )}
      {props.viaGithub && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleGithub}
        >
          <Logos.github className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithGithub ?? "Continue With Github"}
        </Button>
      )}
      {props.viaTwitter && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleTwitter}
        >
          <Logos.twitter className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithTwitter ?? "Continue With Twitter"}
        </Button>
      )}
      {props.viaApple && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleApple}
        >
          <Logos.apple className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithApple ?? "Continue With Apple"}
        </Button>
      )}
      {props.viaMicrosoft && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleMicrosoft}
        >
          <Logos.microsoft className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithMicrosoft ?? "Continue With Microsoft"}
        </Button>
      )}
      {props.viaEmail && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleEmail}
        >
          <Logos.mail className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithEmail ?? "Continue With Email"}
        </Button>
      )}
      {props.viaPhone && (
        <Button
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handlePhone}
        >
          <Logos.phone className="hawa-h-4 hawa-w-4" />
          {props.texts?.continueWithPhone ?? "Continue With Phone"}
        </Button>
      )}
    </div>
  );
};
