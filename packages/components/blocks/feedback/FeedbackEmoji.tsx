import React, { FC, useState } from "react";

import { Button } from "@elements/button";
import { Popover } from "@elements/popover";
import { Textarea } from "@elements/textarea";

import { BadEmoji, GoodEmoji, VeryBadEmoji, VeryGoodEmoji } from "../../icons";
import { cn } from "@util/index";

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
    { icon: <VeryBadEmoji />, value: "very-bad" }
  ];

  const onFeedbackSubmit = async () => {
    if (feedbackText) {
      setLoadingSubmit(true);
      try {
        await props.handleSubmit({
          choice: selectedEmoji,
          feedback: feedbackText
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
        "hawa-flex  hawa-flex-col hawa-rounded hawa-border  hawa-p-2 hawa-transition-all",
        selectedEmoji ? "hawa-h-[189px]  hawa-min-w-fit" : "hawa-h-[44px] "
      )}
    >
      <div className="hawa-flex hawa-flex-row   hawa-items-center hawa-justify-center hawa-gap-2 ">
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
            <div className="hawa-flex hawa-flex-col hawa-text-center hawa-text-sm">
              <span>Your feedback has been received!</span>
              <span>Thank you for your help</span>
            </div>
          </div>
        ) : (
          <div className="hawa-flex hawa-flex-col hawa-gap-1 hawa-p-1">
            <Popover
              className="hawa-select-none hawa-p-1 hawa-text-xs "
              open={helperText}
              trigger={
                <Textarea
                  classNames={{
                    textarea: "hawa-mt-2 hawa-h-full hawa-resize-none"
                  }}
                  placeholder="Your feedback"
                  onChange={(e) => {
                    if (e.target.value) {
                      setHelperText(false);
                    }
                    setFeedbackText(e.target.value);
                  }}
                />
              }
            >
              <span className="hawa-m-0">Please enter your feedback</span>
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
