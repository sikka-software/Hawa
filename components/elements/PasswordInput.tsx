import React, { useEffect, useState } from "react";

import { CheckMark, EyeIcon, HiddenEyeIcon, UncheckMark } from "../icons";
import { Input } from "./input/Input";
import { Popover } from "./Popover";

type PasswordInputIndicatorProps = {
  strength?: any;
};
export const PasswordStrengthIndicator: React.FC<
  PasswordInputIndicatorProps
> = ({ strength }) => {
  const strengthLevels = [
    "none",
    "very-weak",
    "weak",
    "medium",
    "strong",
    "very-strong"
  ];
  const strengthColors: any = {
    none: "hawa-bg-red-700",
    "very-weak": "hawa-bg-red-600",
    weak: "hawa-bg-red-500",
    medium: "hawa-bg-yellow-500",
    strong: "hawa-bg-green-400",
    "very-strong": "hawa-bg-green-600"
  };
  const currentStrengthLevel = strengthLevels[strength];
  const width = {
    none: "0%",
    "very-weak": "20%",
    weak: "40%",
    medium: "60%",
    strong: "80%",
    "very-strong": "100%"
  }[currentStrengthLevel];

  return (
    <div className="hawa-mt-0.5 hawa-h-2 hawa-w-full hawa-rounded hawa-bg-gray-200">
      <div
        className={`${strengthColors[currentStrengthLevel]} hawa-h-full hawa-rounded hawa-transition-all hawa-duration-300`}
        style={{ width }}
      />
    </div>
  );
};

type PasswordInputType = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hidePopover?: boolean;
};

export const PasswordInput: React.FC<PasswordInputType> = ({
  hidePopover,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [currentStr, setCurrentStr] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  // States for each criterion
  const [lengthCriteriaMet, setLengthCriteriaMet] = useState(false);
  const [numberCriteriaMet, setNumberCriteriaMet] = useState(false);
  const [specialCharCriteriaMet, setSpecialCharCriteriaMet] = useState(false);
  const [lowercaseCriteriaMet, setLowercaseCriteriaMet] = useState(false);
  const [uppercaseCriteriaMet, setUppercaseCriteriaMet] = useState(false);

  useEffect(() => {
    // Calculate strength based on the criteria met
    const calculateStrength = () => {
      let strengthScore = 0;
      if (lengthCriteriaMet) strengthScore += 1;
      if (numberCriteriaMet) strengthScore += 1;
      if (specialCharCriteriaMet) strengthScore += 1;
      if (lowercaseCriteriaMet) strengthScore += 1;
      if (uppercaseCriteriaMet) strengthScore += 1;
      return strengthScore;
    };

    const currentStrengthScore = calculateStrength();
    setCurrentStr(currentStrengthScore);
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    if (props.onChange) {
      props.onChange(event);
    }
    setInputValue(newPassword);

    // Update each criterion state based on the new password
    setLengthCriteriaMet(newPassword.length >= 8);
    setNumberCriteriaMet(/\d/.test(newPassword));
    setSpecialCharCriteriaMet(/[!@#$%^&*(),.?":{}|<>]/.test(newPassword));
    setLowercaseCriteriaMet(/[a-z]/.test(newPassword));
    setUppercaseCriteriaMet(/[A-Z]/.test(newPassword));
  };

  // Event handler for when the input gains focus
  const handleInputFocus = () => {
    if (!hidePopover) {
      setIsInputFocused(true);
    }
  };

  // Event handler for when the input loses focus
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const getCriteriaClass = (isMet: boolean) =>
    isMet
      ? "hawa-flex hawa-flex-row hawa-gap-2 hawa-text-sm hawa-items-center hawa-text-green-500"
      : "hawa-flex hawa-flex-row hawa-gap-2 hawa-text-sm hawa-items-center hawa-text-red-600";

  return (
    <div>
      <Popover
        width="trigger"
        sideOffset={20}
        open={isInputFocused}
        onOpenChange={setIsInputFocused}
        triggerProps={{ asChild: true }}
        contentProps={{ onOpenAutoFocus: (e: any) => e.preventDefault() }}
        trigger={
          <div
            onClick={(e) => {
              e.preventDefault();
              if (!hidePopover) {
                setIsInputFocused(true);
              }
            }}
          >
            <Input
              width="full"
              className="hawa-w-full"
              label={"test"}
              onChange={handleInputChange}
              onFocus={handleInputFocus} // Set the input as focused
              onBlur={handleInputBlur}
              type={passwordVisible ? "text" : "password"}
              endIcon={
                <div
                  className="hawa-cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <EyeIcon className="hawa-text-gray-500" />
                  ) : (
                    <HiddenEyeIcon className="hawa-text-gray-500" />
                  )}{" "}
                </div>
              }
            />
          </div>
        }
      >
        <div className="hawa-rounded hawa-p-2">
          <ul className="hawa-rounded hawa-p-2">
            <li className={getCriteriaClass(lengthCriteriaMet)}>
              {lengthCriteriaMet ? (
                <CheckMark size="sm" />
              ) : (
                <UncheckMark size="sm" />
              )}
              At least 8 characters long
            </li>
            <li className={getCriteriaClass(numberCriteriaMet)}>
              {numberCriteriaMet ? (
                <CheckMark size="sm" />
              ) : (
                <UncheckMark size="sm" />
              )}
              At least 1 number
            </li>
            <li className={getCriteriaClass(specialCharCriteriaMet)}>
              {specialCharCriteriaMet ? (
                <CheckMark size="sm" />
              ) : (
                <UncheckMark size="sm" />
              )}
              At least 1 special character
            </li>
            <li className={getCriteriaClass(lowercaseCriteriaMet)}>
              {lowercaseCriteriaMet ? (
                <CheckMark size="sm" />
              ) : (
                <UncheckMark size="sm" />
              )}
              At least 1 lowercase letter
            </li>
            <li className={getCriteriaClass(uppercaseCriteriaMet)}>
              {uppercaseCriteriaMet ? (
                <CheckMark size="sm" />
              ) : (
                <UncheckMark size="sm" />
              )}
              At least 1 uppercase letter
            </li>
          </ul>
        </div>
      </Popover>
      <PasswordStrengthIndicator strength={currentStr} />
    </div>
  );
};
