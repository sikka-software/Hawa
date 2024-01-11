import React, { FC } from "react";

import { Card, CardContent } from "@elements/card";

import { DirectionType, ThirdPartyAuthTextsTypes } from "@_types/index";

import { AuthButtons } from "./AuthButtons";

type AppLandingTextsTypes = ThirdPartyAuthTextsTypes & {
  newUserText?: string;
  createAccount?: string;
};

type AppLandingTypes = {
  texts?: AppLandingTextsTypes;
  viaGoogle?: boolean;
  viaTwitter?: boolean;
  viaGithub?: boolean;
  viaMicrosoft?: boolean;
  viaEmail?: boolean;
  viaPhone?: boolean;
  viaApple?: boolean;
  allowRegister?: boolean;
  size?: "small" | "normal" | "full";
  direction?: DirectionType;
  handleRouteToRegister?: () => void;
  handleGoogle?: () => void;
  handleTwitter?: () => void;
  handleApple?: () => void;
  handleMicrosoft?: () => void;
  handleGithub?: () => void;
  handleEmail?: () => void;
  handlePhone?: () => void;
};

export const AppLanding: FC<AppLandingTypes> = ({ texts, ...props }) => {
  const thirdPartyAuthTexts: ThirdPartyAuthTextsTypes = {
    continueWithGoogle: texts?.continueWithGoogle,
    continueWithTwitter: texts?.continueWithTwitter,
    continueWithApple: texts?.continueWithApple,
    continueWithMicrosoft: texts?.continueWithMicrosoft,
    continueWithGithub: texts?.continueWithGithub,
    continueWithEmail: texts?.continueWithEmail,
    continueWithPhone: texts?.continueWithPhone
  };

  return (
    <div dir={props.direction}>
      <Card>
        <CardContent headless className="hawa-flex hawa-flex-col hawa-gap-6">
          <AuthButtons
            texts={thirdPartyAuthTexts}
            viaApple={props.viaApple}
            viaGoogle={props.viaGoogle}
            viaEmail={props.viaEmail}
            viaGithub={props.viaGithub}
            viaMicrosoft={props.viaMicrosoft}
            viaPhone={props.viaPhone}
            viaTwitter={props.viaTwitter}
            handleApple={props.handleApple}
            handleGoogle={props.handleGoogle}
            handleTwitter={props.handleTwitter}
            handleMicrosoft={props.handleMicrosoft}
            handleGithub={props.handleGithub}
            handleEmail={props.handleEmail}
            handlePhone={props.handlePhone}
          />

          {props.allowRegister && (
            <div className="hawa-p-3 hawa-text-center hawa-text-sm hawa-font-normal dark:hawa-text-gray-300">
              {texts?.newUserText}{" "}
              <span
                onClick={props.handleRouteToRegister}
                className="clickable-link"
              >
                {texts?.createAccount}
              </span>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
