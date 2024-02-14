import React from "react";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@util/index";
import * as z from "zod";

import { Button } from "@elements/button";
import { Card, CardContent } from "@elements/card";
import { Label } from "@elements/label";
import { Select } from "@elements/select";
import { Textarea } from "@elements/textarea";

import { BaseInputType } from "@_types/textTypes";

type FeedbackFormRequestTypeInputProps = BaseInputType & {
  required?: string;
  noOptions?: string;
};
type FeedbackFormDescriptionInputProps = BaseInputType & {
  required?: string;
  tooShort?: string;
};

type FeedbackFormType = {
  sent?: boolean;
  onSubmit: (e: any) => void;
  loadingSubmission?: boolean;
  requestTypes?: { label: string; value: any }[];
  selectProps?: any;
  cardless?: boolean;
  texts: {
    requestType: FeedbackFormRequestTypeInputProps;
    description: FeedbackFormDescriptionInputProps;
    submit?: string;
    sentTitle?: string;
    sentSubtitle?: string;
  };
};

export const FeedbackForm: React.FC<FeedbackFormType> = (props) => {
  const formSchema = z.object({
    requestType: z
      .string({ required_error: props.texts?.requestType?.required })
      .min(1, { message: props.texts?.requestType?.required }),
    description: z
      .string({ required_error: props.texts?.description?.required })
      .min(10, { message: props.texts?.description?.tooShort })
  });

  const { handleSubmit, control, formState, reset } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { requestType: "", description: "" }
  });

  return (
    <Card
      className={cn(
        props.cardless
          ? "hawa-border-none hawa-bg-transparent hawa-shadow-none"
          : ""
      )}
      style={props.cardless ? { boxShadow: "none" } : undefined}
    >
      <CardContent headless className={props.cardless ? "!hawa-p-0" : ""}>
        {props.sent ? (
          <div className="hawa-text-center hawa-min-h-[200px] hawa-flex hawa-flex-col hawa-justify-center">
            <div className="hawa-font-bold hawa-text-lg">
              {props.texts.sentTitle || "Form submitted"}
            </div>
            <div className="hawa-text-md">
              {props.texts.sentSubtitle || "Thank you for your submission"}
            </div>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={handleSubmit((e) => {
              if (props.onSubmit) {
                return props.onSubmit(e);
              } else {
                console.log("Form is submitted but onSubmit prop is missing");
              }
            })}
            className="hawa-flex hawa-flex-col hawa-gap-2"
          >
            <Label></Label>
            <Controller
              name="requestType"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  {...props.selectProps}
                  label={props.texts?.requestType?.label}
                  onChange={(option: any) => field.onChange(option.value)}
                  options={props.requestTypes}
                  helperText={formState.errors.requestType?.message?.toString()}
                  placeholder={props.texts?.requestType?.placeholder}
                  texts={{
                    noOptions: props.texts?.requestType?.noOptions
                  }}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  helperText={
                    formState.errors.description &&
                    formState.errors.description?.message?.toString()
                  }
                  classNames={{ textarea: "hawa-h-full hawa-min-h-20" }}
                  label={props.texts?.description?.label}
                  textareaProps={{
                    onChange: (e) => {
                      field.onChange(e.target.value);
                    },

                    value: field.value,
                    placeholder: props.texts?.description?.placeholder
                  }}
                />
              )}
            />
            <Button isLoading={props.loadingSubmission} type="submit">
              {props.texts?.submit}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
