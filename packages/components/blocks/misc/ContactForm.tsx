import React from "react";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@elements/button";
import { Card, CardContent } from "@elements/card";
import { Input } from "@elements/input";
import { Textarea } from "@elements/textarea";

import { TextInputType } from "@/types/textTypes";

import { cn } from "@util/index";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  cardless?: boolean;
  formId?: string;
  formAutoComplete?: "on" | "off";
  size?: "sm" | "default";
  onSubmit?: (e: ContactFormData) => void;
  texts?: {
    submit: string;
    name: TextInputType;
    email: TextInputType;
    message: TextInputType;
  };
};
export const ContactForm: React.FC<ContactFormProps> = ({
  cardless,
  size = "default",
  texts,
  formId,
  formAutoComplete,
  onSubmit
}) => {
  const contactFormSchema = z.object({
    name: z
      .string({ required_error: texts?.name.required })
      .min(1, texts?.name.required)
      .default(""),
    email: z
      .string({ required_error: texts?.email?.required })
      .min(1, { message: texts?.email?.required })
      .email({ message: texts?.email?.invalid })
      .default(""),

    message: z
      .string({ required_error: texts?.message.required })
      .min(10, texts?.message.invalid)
      .default("")
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const handleFormSubmit = (data: ContactFormData) => {
    if (onSubmit) {
      onSubmit(data);
      reset();
    } else {
      console.log("Form is submitted but onSubmit prop is missing");
    }
  };

  let sizeStyle = {
    sm: "hawa-max-w-sm",
    default: "hawa-w-full"
  };
  return (
    <Card
      className={cn(
        // sizeStyle[size],
        "hawa-w-full",
        cardless &&
          "hawa-border-none hawa-bg-transparent hawa-shadow-none hawa-drop-shadow-none"
      )}
      style={cardless ? { boxShadow: "none" } : undefined}
    >
      <CardContent headless>
        <form
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          className="hawa-space-y-2"
          id={formId}
          autoComplete={formAutoComplete}
        >
          <div
            className={cn(
              "hawa-flex hawa-items-start hawa-justify-start hawa-gap-2",
              {
                "hawa-flex-row": size === "default",
                "hawa-flex-col": size === "sm"
              }
            )}
          >
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Input
                  label={texts?.name.label}
                  id={texts?.name.label}
                  {...field}
                  placeholder={texts?.name.placeholder}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  label={texts?.email.label}
                  id={texts?.email.label}
                  {...field}
                  placeholder={texts?.email.placeholder}
                  helperText={errors.email?.message}
                />
              )}
            />
          </div>
          <Controller
            control={control}
            name="message"
            render={({ field }) => (
              <Textarea
                label={texts?.message.label}
                id={texts?.message.label}
                textareaProps={{
                  placeholder: texts?.message.placeholder,
                  ...field
                }}
                helperText={errors.message?.message}
              />
            )}
          />

          <Button type="submit" className="hawa-w-full">
            {texts?.submit || "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
