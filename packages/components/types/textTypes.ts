export type PricingPlanTexts = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  cycleText?: string;
  currencyText?: string;
  soon?: string;
  recommended?: string;
  priceless?: string;
};
export type ThirdPartyAuthTextsTypes = {
  continueWithGoogle?: string;
  continueWithTwitter?: string;
  continueWithApple?: string;
  continueWithMicrosoft?: string;
  continueWithGithub?: string;
  continueWithEmail?: string;
  continueWithPhone?: string;
  continueWithNafath?: string;
  continueWithMetamask?: string;
};
export type BaseInputType = {
  label?: string;
  placeholder?: string;
};
type ValidationTexts = {
  required?: string;
  invalid?: string;
};
export type TextInputType = ValidationTexts & {
  label?: string;
  placeholder?: string;
};
type PasswordInputType = BaseInputType & {
  required?: string;
  tooShort?: string;
};
type UsernameInputType = TextInputType & {
  tooShort?: string;
  tooLong?: string;
};
type ConfirmInputType = BaseInputType & {
  required?: string;
  dontMatch?: string;
};
export type LoginFormTextsTypes = ThirdPartyAuthTextsTypes & {
  email?: TextInputType;
  username?: UsernameInputType;
  phone?: TextInputType;
  password?: PasswordInputType;
  forgotPassword?: string;
  newUserText?: string;
  createAccount?: string;
  loginText?: string;
};
export type RegisterFormTextsTypes = ThirdPartyAuthTextsTypes & {
  fullName?: BaseInputType;
  email?: TextInputType;
  username?: UsernameInputType;
  phone?: TextInputType;
  password?: PasswordInputType;
  confirm?: ConfirmInputType;
  userReference?: BaseInputType;
  subscribeToNewsletter?: string;
  termsRequired?: string;
  refCode?: string;
  refCodePlaceholder?: string;
  existingUserText?: string;
  termsText?: string;
  iAcceptText?: string;
  registerText?: string;
  loginText?: string;
};
export type ResetPasswordTextsTypes = {
  email?: TextInputType;
  emailSentText?: string;
  registerText?: string;
  resetPassword?: string;
  dontHaveAccount?: string;
  headTitle?: string;
  headDescription?: string;
};
export type NewPasswordTextsTypes = {
  password?: PasswordInputType;
  confirm?: ConfirmInputType;
  updatePassword?: string;
  passwordChanged?: string;
  dontHaveAccount?: string;
  registerText?: string;
};
