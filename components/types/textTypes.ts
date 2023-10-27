export type ThirdPartyAuthTextsTypes = {
  continueWithGoogle?: string;
  continueWithTwitter?: string;
  continueWithApple?: string;
  continueWithMicrosoft?: string;
  continueWithGithub?: string;
  continueWithEmail?: string;
  continueWithPhone?: string;
};

export type ValidationTexts = {
  required?: string;
  invalid?: string;
};

export type TextInputType = ValidationTexts & {
  label?: string;
  placeholder?: string;
};

export type PasswordInputType = TextInputType & {
  tooShort?: string;
};

export type LoginFormTextsTypes = ThirdPartyAuthTextsTypes & {
  email?: TextInputType;
  username?: TextInputType;
  phone?: TextInputType;
  password?: PasswordInputType;
  forgotPassword?: string;
  newUserText?: string;
  createAccount?: string;
  loginText?: string;
};
