import * as React from "react";

import { cn } from "@util/index";
import { OTPInput, OTPInputContext, OTPInputProps } from "input-otp";
import { Dot } from "lucide-react";

import { HelperText } from "../helperText";

const PinInputRoot = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "hawa-flex hawa-items-center hawa-gap-2 has-[:disabled]:hawa-opacity-50",
      containerClassName,
    )}
    className={cn("disabled:hawa-cursor-not-allowed", className)}
    {...props}
  />
));
PinInputRoot.displayName = "PinInputRoot";

const PinInputGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("hawa-flex hawa-items-center", className)} {...props} />
));
PinInputGroup.displayName = "PinInputGroup";

const PinInputSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const pinInputContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = pinInputContext.slots[index];

  return (
    <div
      ref={ref}
      className={cn(
        "hawa-border-input hawa-relative hawa-flex hawa-h-10 hawa-w-10 hawa-items-center hawa-justify-center hawa-border-y hawa-border-r hawa-text-sm hawa-transition-all first:hawa-rounded-l-md first:hawa-border-l last:hawa-rounded-r-md",
        isActive && "hawa-ring-ring hawa-ring-offset-background hawa-z-10 hawa-ring-2",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="hawa-pointer-events-none hawa-absolute hawa-inset-0 hawa-flex hawa-items-center hawa-justify-center">
          <div className="hawa-animate-caret-blink hawa-bg-foreground hawa-h-4 hawa-w-px hawa-duration-1000" />
        </div>
      )}
    </div>
  );
});
PinInputSlot.displayName = "PinInputSlot";

const PinInputSeperator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
));
PinInputSeperator.displayName = "PinInputSeperator";

type PinInputProps = Omit<OTPInputProps, "render"> & {
  /*
   * The position of the separator in the pin input
   * @default 3
   */
  separatorPosition?: number;
  helperText?: any;
};

const PinInput: React.FC<PinInputProps> = ({ separatorPosition = 0, ...props }) => {
  const maxLength = props.maxLength || 6; // Assuming a default maxLength of 6 if not provided
  const clampedSeparatorPosition = Math.min(separatorPosition, maxLength);

  const firstGroupLength = clampedSeparatorPosition > 0 ? clampedSeparatorPosition : 0;
  const secondGroupLength = maxLength - firstGroupLength;

  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-2" dir="ltr">
      <PinInputRoot {...props}>
        {firstGroupLength > 0 && (
          <PinInputGroup className="hawa-w-full hawa-gap-2">
            {[...Array(firstGroupLength)].map((_, index) => (
              <PinInputSlot key={index} index={index} className="hawa-w-full hawa-border" />
            ))}
          </PinInputGroup>
        )}
        {separatorPosition > 0 && separatorPosition < props.maxLength && <PinInputSeperator />}
        {secondGroupLength > 0 && (
          <PinInputGroup className="hawa-w-full hawa-gap-2">
            {[...Array(secondGroupLength)].map((_, index) => (
              <PinInputSlot
                key={index + firstGroupLength}
                index={index + firstGroupLength}
                className="hawa-w-full hawa-border"
              />
            ))}
          </PinInputGroup>
        )}
      </PinInputRoot>
      <HelperText helperText={props.helperText} />
    </div>
  );
};

export { PinInput, PinInputRoot, PinInputGroup, PinInputSlot, PinInputSeperator };
