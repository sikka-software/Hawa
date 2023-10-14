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

type FeedbackFormType = {
  onSubmit: (e: any) => void;
  requestTypes?: { label: string; value: any }[];
  texts: {
    requestType?: string;
    requestTypeRequired?: string;
    description?: string;
    descriptionRequired?: string;
    descriptionTooShort?: string;
    submit?: string;
  };
};

export const FeedbackForm: React.FC<FeedbackFormType> = (props) => {
  const formSchema = z.object({
    requestType: z
      .string({ required_error: props.texts.requestTypeRequired })
      .nonempty({ message: props.texts.requestTypeRequired }),
    description: z
      .string({ required_error: props.texts.descriptionRequired })
      .min(10, { message: props.texts.descriptionTooShort }),
  });

  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  // TODO: translate this and have texts object
  return (
    <Card>
      <CardContent headless>
        <form
          onSubmit={handleSubmit((e) => {
            if (props.onSubmit) {
              return props.onSubmit(e);
            } else {
              console.log("Form is submitted but onSubmit prop is missing");
            }
          })}
          className="hawa-flex hawa-flex-col hawa-gap-4"
        >
          <Label>{props.texts?.requestType}</Label>
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(option: any) => field.onChange(option.value)}
                options={props.requestTypes}
                helperText={
                  formState.errors.requestType &&
                  formState.errors.requestType?.message
                }
              />
            )}
          />
          <Label>{props.texts.description}</Label>
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
              />
            )}
          />
          <Button type="submit">{props.texts?.submit}</Button>
        </form>
      </CardContent>
    </Card>
  );
};
