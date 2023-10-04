import React, { FC, useState } from "react";
import { Popover, Button, Textarea } from "../../elements";
import { cn } from "../../util";

type ComponentTypes = {
  handleSubmit: ({}) => void;
  showSuccess?: boolean;
};
export const FeedbackEmoji: FC<ComponentTypes> = (props) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [helperText, setHelperText] = useState(false);

  let emojis = [
    { icon: <VeryGoodEmoji />, value: "very-good" },
    { icon: <GoodEmoji />, value: "good" },
    { icon: <BadEmoji />, value: "bad" },
    { icon: <VeryBadEmoji />, value: "very-bad" },
  ];

  const onFeedbackSubmit = async () => {
    console.log("submitting");
    if (feedbackText) {
      setLoadingSubmit(true);
      try {
        await props.handleSubmit({
          choice: selectedEmoji,
          feedback: feedbackText,
        });
      } catch (error) {
        console.error("Error during submission:", error);
        setLoadingSubmit(false);
      }
      await setLoadingSubmit(false);
    } else {
      setLoadingSubmit(false);
      setHelperText(true);
    }
  };
  return (
    <div
      className={cn(
        "hawa-flex  hawa-flex-col hawa-gap-2 hawa-rounded hawa-border  hawa-p-2 hawa-transition-all",
        selectedEmoji ? "hawa-h-[185px]  hawa-min-w-fit" : "hawa-h-[44px] "
      )}
    >
      <div className="hawa-flex hawa-flex-row   hawa-items-center hawa-justify-center hawa-gap-2 ">
        {/* <span className="whitespace-nowrap text-sm">
          Was this helpful?
        </span>*/}
        <div className="hawa-flex hawa-flex-row hawa-justify-center  hawa-gap-0.5 ">
          {emojis.map((emoji, i) => (
            <Button
              key={i}
              onClick={() => {
                if (selectedEmoji === emoji.value) {
                  setSelectedEmoji("");
                } else {
                  setSelectedEmoji(emoji.value);
                }
              }}
              variant="ghost"
              size="smallIcon"
              className={cn(
                selectedEmoji === emoji.value
                  ? "hawa-bg-primary/10 hover:hawa-bg-primary/10 "
                  : "hawa-text-[#666666]"
              )}
            >
              {emoji.icon}
            </Button>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "hawa-flex hawa-flex-col hawa-overflow-clip  hawa-transition-all hawa-duration-500 hawa-ease-in-out ",
          selectedEmoji
            ? "hawa-visible hawa-opacity-100"
            : "hawa-invisible hawa-opacity-0 "
        )}
      >
        {props.showSuccess ? (
          <div className="hawa-flex hawa-h-full hawa-flex-col hawa-items-center hawa-justify-center hawa-gap-2  hawa-pt-4">
            <div className="hawa-rounded hawa-bg-primary hawa-p-2 hawa-text-primary-foreground">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="0.5em"
                width="0.5em"
              >
                <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
              </svg>
            </div>
            <div className="hawa-text-sm hawa-flex hawa-flex-col hawa-text-center">
              <span>Your feedback has been received!</span>
              <span>Thank you for your help</span>
            </div>
          </div>
        ) : (
          <div className="hawa-flex hawa-flex-col hawa-gap-2">
            <Popover
              className="hawa-select-none hawa-p-1 hawa-text-xs "
              open={helperText}
              trigger={
                <Textarea
                  className={cn("hawa-mb-2 hawa-h-full hawa-resize-none")}
                  placeholder="Your feedback"
                  onChange={(e) => {
                    if (e.target.value) {
                      setHelperText(false);
                    }
                    setFeedbackText(e.target.value);
                    console.log("changing to", e.target.value);
                  }}
                />
              }
            >
              <span>Please enter your feedback</span>{" "}
            </Popover>
            <Button
              isLoading={loadingSubmit}
              onClick={onFeedbackSubmit}
              className="hawa-w-full"
              size="sm"
            >
              Submit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

const VeryGoodEmoji = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_166)">
      <path
        clipRule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.5 8.97498H3.875V9.59998C3.875 11.4747 5.81046 12.8637 7.99817 12.8637C10.1879 12.8637 12.125 11.4832 12.125 9.59998V8.97498H11.5H4.5ZM7.99817 11.6137C6.59406 11.6137 5.63842 10.9482 5.28118 10.225H10.7202C10.3641 10.9504 9.40797 11.6137 7.99817 11.6137Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        clipRule="evenodd"
        d="M6.15295 4.92093L5.375 3.5L4.59705 4.92093L3 5.21885L4.11625 6.39495L3.90717 8L5.375 7.30593L6.84283 8L6.63375 6.39495L7.75 5.21885L6.15295 4.92093ZM11.403 4.92093L10.625 3.5L9.84705 4.92093L8.25 5.21885L9.36625 6.39495L9.15717 8L10.625 7.30593L12.0928 8L11.8837 6.39495L13 5.21885L11.403 4.92093Z"
        fill="#FF990A"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
const GoodEmoji = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_167)">
      <path
        clipRule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
const BadEmoji = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_152)">
      <path
        clipRule="evenodd"
        d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.75 7.75C6.30228 7.75 6.75 7.30228 6.75 6.75C6.75 6.19772 6.30228 5.75 5.75 5.75C5.19772 5.75 4.75 6.19772 4.75 6.75C4.75 7.30228 5.19772 7.75 5.75 7.75ZM11.25 6.75C11.25 7.30228 10.8023 7.75 10.25 7.75C9.69771 7.75 9.25 7.30228 9.25 6.75C9.25 6.19772 9.69771 5.75 10.25 5.75C10.8023 5.75 11.25 6.19772 11.25 6.75ZM11.5249 11.2622L11.8727 11.7814L10.8342 12.4771L10.4863 11.9578C9.94904 11.1557 9.0363 10.6298 8.00098 10.6298C6.96759 10.6298 6.05634 11.1537 5.51863 11.9533L5.16986 12.4719L4.13259 11.7744L4.48137 11.2558C5.2414 10.1256 6.53398 9.37982 8.00098 9.37982C9.47073 9.37982 10.7654 10.1284 11.5249 11.2622Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
const VeryBadEmoji = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_53_151)">
      <path
        d="M11.841 12.0225C12.7197 12.9324 12.7197 14.4077 11.841 15.3176C10.9623 16.2275 9.53769 16.2275 8.65901 15.3176C7.78033 14.4077 7.78033 12.9324 8.65901 12.0225L10.25 10.375L11.841 12.0225Z"
        fill="#0070F3"
      ></path>
      <path
        clipRule="evenodd"
        d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 10.9668 3.48826 13.4711 6.20649 14.2496L5.79351 15.6916C2.44895 14.7338 0 11.6539 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.4652 15.6054 10.8405 14.9162 12.023L13.6203 11.2677C14.1794 10.3083 14.5 9.19272 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);
