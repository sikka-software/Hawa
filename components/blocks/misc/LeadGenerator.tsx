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
  };
  handleNewsletterSub: (e: string) => void;
};

export const LeadGenerator: FC<TLeadGenerator> = ({
  texts,
  handleNewsletterSub,
}) => {
  const { handleSubmit, control, formState } = useForm();
  const onSubmit = (data: any) => {
    if (handleNewsletterSub) {
      handleNewsletterSub(data.email);
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

          // onSubmit={(e) => {
          //   e.preventDefault();
          // }}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }} // Add this line
            defaultValue=""
            render={({ field }) => (
              <Input {...field} type="email" placeholder="example@sikka.io" />
            )}
          />
          {/* <Input type="email" name="email" placeholder="example@sikka.io" /> */}
          <Button type="submit" disabled={!formState.isValid}>
            {texts?.submit ?? "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

// console.log("e is ", e);
// handleNewsletterSub(e.target?.value);
