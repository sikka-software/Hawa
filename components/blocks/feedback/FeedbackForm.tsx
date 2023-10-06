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

const formSchema = z.object({
  requestType: z.string().nonempty({ message: "Request type is required." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters." }),
});

type FeedbackFormType = {
  onSubmit: (data: any) => void;
};

export const FeedbackForm: React.FC<FeedbackFormType> = ({ onSubmit }) => {
  const { handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });
  // TODO: translate this and have texts object
  return (
    <Card>
      <CardContent headless>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="hawa-flex hawa-flex-col hawa-gap-4"
        >
          <Label>Request Type:</Label>
          <Controller
            name="requestType"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                onChange={(option: any) => field.onChange(option.value)}
                options={[
                  {
                    label: "Bug",
                    value: "bug",
                  },
                  {
                    label: "Feature",
                    value: "feature",
                  },
                  {
                    label: "Complain",
                    value: "complain",
                  },
                  {
                    label: "Support",
                    value: "support",
                  },
                ]}
                helperText={
                  formState.errors.requestType &&
                  formState.errors.requestType?.message
                }
              />
            )}
          />
          <Label>Description:</Label>
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
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};
