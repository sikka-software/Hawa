import React from "react";

import { Button } from "@elements/button";
import { Loading } from "@elements/loading";
import { Logos } from "@elements/logos";

import { ThirdPartyAuthTextsTypes } from "@_types/textTypes";

type AuthButtonsType = {
  texts?: ThirdPartyAuthTextsTypes;

  viaMetamask?: boolean;
  viaNafath?: boolean;
  viaGoogle?: boolean;
  viaTwitter?: boolean;
  viaGithub?: boolean;
  viaMicrosoft?: boolean;
  viaEmail?: boolean;
  viaPhone?: boolean;
  viaApple?: boolean;

  isMetamaskLoading?: boolean;
  isNafathLoading?: boolean;
  isGoogleLoading?: boolean;
  isGithubLoading?: boolean;
  isTwitterLoading?: boolean;
  isMicrosoftLoading?: boolean;
  isEmailLoading?: boolean;
  isPhoneLoading?: boolean;
  isAppleLoading?: boolean;

  handleMetamask?: () => void;
  handleNafath?: () => void;
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
      {/* Metamask */}
      {props.viaMetamask && (
        <Button
          disabled={props.isMetamaskLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleMetamask}
        >
          {props.isMetamaskLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.metamask className="hawa-h-6" />
          )}
          {props.texts?.continueWithMetamask ?? "Connect Metamask"}
        </Button>
      )}
      {/* Nafath */}
      {props.viaNafath && (
        <Button
          disabled={props.isNafathLoading}
          className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2"
          variant="outline"
          onClick={props.handleNafath}
        >
          {props.isNafathLoading ? (
            <Loading size="button" />
          ) : (
            <Logos.nafath className="hawa-h-4" />
          )}
          {props.texts?.continueWithNafath ?? "Continue With Nafath"}
        </Button>
      )}

      {/* Google */}
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

      {/* Github */}
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

      {/* Twitter */}
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

      {/* Apple */}
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

      {/* Microsoft */}
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

      {/* Email */}
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

      {/* Phone */}
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
