import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Button,
  Input,
} from "../../elements";
import { useForm, Controller } from "react-hook-form";

type TLeadGenerator = {
  texts?: {
    title?: string;
    subtitle?: string;
    submit?: string;
    invalidEmail?: string;
  };
  submitHandler: (e: string) => void;
};

export const LeadGenerator: FC<TLeadGenerator> = ({ texts, submitHandler }) => {
  const { handleSubmit, control, formState } = useForm();
  const onSubmit = (data: any) => {
    if (submitHandler) {
      submitHandler(data.email);
    } else {
      console.log("handleNewsletterSub props was not provided");
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{texts?.title}</CardTitle>
        <CardDescription>{texts?.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          className="hawa-flex hawa-flex-row hawa-gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: texts?.invalidEmail || "Invalid email address",
              },
            }}
            // rules={{ required: true }}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} type="email" placeholder="example@sikka.io" />
            )}
          />
          <Button type="submit" disabled={!formState.isValid}>
            {texts?.submit ?? "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};