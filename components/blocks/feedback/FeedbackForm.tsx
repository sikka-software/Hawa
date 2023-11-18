import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Label,
  Select,
  Textarea,
  Button,
  Card,
  CardContent,
} from "../../elements";
import { cn } from "../../util";
import { BaseInputType } from "@/components/types/textTypes";

type FeedbackFormRequestTypeInputProps = BaseInputType & {
  required?: string;
  noOptions?: string;
};
type FeedbackFormDescriptionInputProps = BaseInputType & {
  required?: string;
  tooShort?: string;
};

type FeedbackFormType = {
  onSubmit: (e: any) => void;
  requestTypes?: { label: string; value: any }[];
  selectProps?: any;
  cardless?: boolean;
  texts: {
    requestType: FeedbackFormRequestTypeInputProps;
    description: FeedbackFormDescriptionInputProps;
    submit?: string;
  };
};

export const FeedbackForm: React.FC<FeedbackFormType> = (props) => {
  const formSchema = z.object({
    requestType: z
      .string({ required_error: props.texts?.requestType?.required })
      .min(1, { message: props.texts?.requestType?.required }),
    description: z
      .string({ required_error: props.texts?.description?.required })
      .min(10, { message: props.texts?.description?.tooShort }),
  });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  return (
    <Card
      className={cn(
        props.cardless
          ? "hawa-bg-transparent hawa-border-none hawa-shadow-none"
          : ""
      )}
    >
      <CardContent headless>
        <form
          noValidate
          onSubmit={handleSubmit((e) => {
            if (props.onSubmit) {
              return props.onSubmit(e);
            } else {
              console.log("Form is submitted but onSubmit prop is missing");
            }
          })}
          className="hawa-flex hawa-flex-col hawa-gap-4"
        >
          <Label>{props.texts?.requestType?.label}</Label>
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                {...props.selectProps}
                onChange={(option: any) => field.onChange(option.value)}
                options={props.requestTypes}
                helperText={formState.errors.requestType?.message?.toString()}
                placeholder={props.texts?.requestType?.placeholder}
                texts={{
                  noOptions: props.texts?.requestType?.noOptions,
                }}
              />
            )}
          />
          <Label>{props.texts?.description?.label}</Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea
                {...field}
                helperText={
                  formState.errors.description &&
                  formState.errors.description?.message?.toString()
                }
                placeholder={props.texts?.description?.placeholder}
              />
            )}
          />
          <Button type="submit">{props.texts?.submit}</Button>
        </form>
      </CardContent>
    </Card>
  );
};
