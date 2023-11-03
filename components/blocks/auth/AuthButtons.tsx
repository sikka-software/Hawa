import React from "react";
import { ThirdPartyAuthTextsTypes } from "../../types/textTypes";
import { Button, Loading, Logos } from "../../elements";

type AuthButtonsType = {
  texts?: ThirdPartyAuthTextsTypes;
  viaGoogle?: boolean;
  viaTwitter?: boolean;
  viaGithub?: boolean;
  viaMicrosoft?: boolean;
  viaEmail?: boolean;
  viaPhone?: boolean;
  viaApple?: boolean;
  isGoogleLoading?: boolean;
  isGithubLoading?: boolean;
  isTwitterLoading?: boolean;
  isMicrosoftLoading?: boolean;
  isEmailLoading?: boolean;
  isPhoneLoading?: boolean;
  isAppleLoading?: boolean;
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
          disabled={props.isGoogleLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleGoogle}
        >
          {props.isGoogleLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.google className="hawa-icon" />
          )}
          {props.texts?.continueWithGoogle ?? "Continue With Google"}
        </Button>
      )}
      {props.viaGithub && (
        <Button
          disabled={props.isGithubLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleGithub}
        >
          {props.isGithubLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.github className="hawa-icon" />
          )}
          {props.texts?.continueWithGithub ?? "Continue With Github"}
        </Button>
      )}
      {props.viaTwitter && (
        <Button
          disabled={props.isTwitterLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleTwitter}
        >
          {props.isTwitterLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.twitter className="hawa-icon" />
          )}
          {props.texts?.continueWithTwitter ?? "Continue With Twitter"}
        </Button>
      )}
      {props.viaApple && (
        <Button
          disabled={props.isAppleLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleApple}
        >
          {props.isAppleLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.apple className="hawa-icon" />
          )}

          {props.texts?.continueWithApple ?? "Continue With Apple"}
        </Button>
      )}
      {props.viaMicrosoft && (
        <Button
          disabled={props.isMicrosoftLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleMicrosoft}
        >
          {props.isMicrosoftLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.microsoft className="hawa-icon" />
          )}
          {props.texts?.continueWithMicrosoft ?? "Continue With Microsoft"}
        </Button>
      )}
      {props.viaEmail && (
        <Button
          disabled={props.isEmailLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleEmail}
        >
          {props.isEmailLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.mail className="hawa-icon" />
          )}
          {props.texts?.continueWithEmail ?? "Continue With Email"}
        </Button>
      )}
      {props.viaPhone && (
        <Button
          disabled={props.isPhoneLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handlePhone}
        >
          {props.isPhoneLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.phone className="hawa-icon" />
          )}
          {props.texts?.continueWithPhone ?? "Continue With Phone"}
        </Button>
      )}
    </div>
  );
};
