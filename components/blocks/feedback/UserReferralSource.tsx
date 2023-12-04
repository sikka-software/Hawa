import React, { FC, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Button,
  Radio,
  Textarea,
  Card,
  CardContent,
  RadioOptionsTypes
} from "../../elements";
import { DirectionType } from "../../types/commonTypes";
import { cn } from "../../util";

type ComponentTypes = {
  title?: string;
  question: string;
  description?: string;
  tag?: any;
  options?: RadioOptionsTypes[];
  position?: "bottom-right" | "bottom-left";
  direction?: DirectionType;
  onSubmitForm?: (e: any) => void;
  texts?: {
    pleaseSelectOption: string;
    textTooShort: string;
    submit?: string;
  };
};
export const UserReferralSource: FC<ComponentTypes> = ({
  position = "bottom-right",
  options = [],
  ...props
}) => {
  const [closed, setClosed] = useState(false);
  const popUpRef = useRef<HTMLDivElement>(null);

  const formSchema = z.object({
    source: z.string({ required_error: props.texts?.pleaseSelectOption }),
    feedback: z.string().optional()
  });

  const { handleSubmit, control, formState, watch } = useForm({
    resolver: zodResolver(formSchema)
  });
  const selectedSource = watch("source");

  const boxPosition = {
    "bottom-right": "hawa-right-4",
    "bottom-left": "hawa-left-4"
  };
  const optionsWithOther = [
    ...options,
    {
      value: "other",
      label: "Other"
    }
  ];
  return (
    <div
      className={cn(
        "hawa-transition-all",
        closed ? "hawa-opacity-0" : "hawa-opacity-100"
      )}
      ref={popUpRef}
    >
      <Card
        className={cn(
          "hawa-fixed hawa-bottom-4 hawa-p-0 ",
          boxPosition[position]
        )}
        dir={props.direction}
      >
        <button
          type="button"
          className={cn(
            props.direction === "rtl" ? "hawa-left-2" : "hawa-right-2",
            "hawa-absolute  hawa-top-2 hawa-inline-flex hawa-h-8 hawa-w-8 hawa-rounded hawa-p-1.5 hawa-text-gray-400 hawa-transition-all hover:hawa-bg-gray-100 hover:hawa-text-gray-900 focus:hawa-ring-2 focus:hawa-ring-gray-300 dark:hawa-bg-gray-800 dark:hawa-text-gray-500 dark:hover:hawa-bg-gray-700 dark:hover:hawa-text-white"
          )}
          data-dismiss-target="#toast-default"
          aria-label="Close"
          onClick={() => {
            setClosed(true);
            setTimeout(() => {
              if (popUpRef?.current) {
                popUpRef?.current.removeChild(popUpRef?.current.children[0]);
              }
            }, 200);
          }}
        >
          <svg
            aria-hidden="true"
            className="hawa-h-5 hawa-w-5"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <CardContent headless>
          <form
            noValidate
            onSubmit={handleSubmit((e) => {
              if (props.onSubmitForm) {
                props.onSubmitForm(e);
              } else {
                console.log("onSubmitForm was not provided");
              }
            })}
          >
            <div
              className={cn(
                "hawa-flex hawa-flex-col hawa-gap-4 hawa-transition-all",
                closed ? "hawa-opacity-0" : "hawa-opacity-100"
              )}
            >
              <div className="hawa-mt-4 hawa-font-bold">{props.question}</div>
              <div className="hawa-flex hawa-w-full hawa-flex-row hawa-gap-1 hawa-rounded ">
                <Controller
                  control={control}
                  name="source"
                  render={({ field }) => (
                    <Radio
                      direction={props.direction}
                      orientation="vertical"
                      options={optionsWithOther}
                      defaultValue={field.value}
                      onChangeTab={(e: any) => field.onChange(e.value)}
                      helperText={formState.errors.source?.message?.toString()}
                    ></Radio>
                  )}
                />
              </div>
              <div>
                <Controller
                  control={control}
                  name="feedback"
                  render={({ field }) => (
                    <Textarea
                      {...field}
                      textareaProps={{
                        onChange: (e) => field.onChange(e.target.value),
                        disabled: selectedSource !== "other"
                      }}
                      helperText={formState.errors.feedback?.message?.toString()}
                    />
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="hawa-mt-4 hawa-w-full">
              {props.texts?.submit || "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
