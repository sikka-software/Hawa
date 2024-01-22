import React from "react";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@util/index";
import * as z from "zod";

import { Button } from "@elements/button";
import { Card, CardContent } from "@elements/card";
import { Input } from "@elements/input";
import { Select } from "@elements/select";
import { Textarea } from "@elements/textarea";

import { RadioOptionType } from "@_types/commonTypes";
import { TextInputType } from "@_types/textTypes";

type ContactFormData = { name: string; email: string; message: string } & {
  [key: string]: string;
};

type CustomField = {
  label: string;
  type: "text" | "number" | "select";
  name: string;
  placeholder?: string;
  options?: RadioOptionType[];
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
  customFields?: CustomField[];
};
export const ContactForm: React.FC<ContactFormProps> = ({
  cardless,
  size = "default",
  texts,
  formId,
  formAutoComplete,
  onSubmit,
  customFields
}) => {
  const customFieldsSchema = z.object({
    ...customFields?.reduce(
      (acc: { [key: string]: z.ZodType<any, any> }, curr: CustomField) => {
        switch (curr.type) {
          case "text":
            acc[curr.name] = z.string().optional().default("");
            break;
          case "number":
            acc[curr.name] = z.string().optional().default("");
            break;
          case "select":
            acc[curr.name] = z.string().optional().default("");
            break;
          default:
            break;
        }
        return acc;
      },
      {}
    )
  });

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

  const customFieldsDefaultValues = customFields?.reduce(
    (acc: { [key: string]: any }, curr: CustomField) => {
      acc[curr.name] = "";
      return acc;
    },
    {}
  );
  const MainSchema = contactFormSchema.merge(customFieldsSchema);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(MainSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      ...customFieldsDefaultValues
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

  return (
    <Card
      className={cn(
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
          {customFields &&
            customFields.map((customField: CustomField) => {
              console.log("custom", customField);
              return (
                <Controller
                  control={control}
                  name={customField.name}
                  render={({ field }) => {
                    const { type, label, placeholder } = customField;

                    switch (type) {
                      case "text":
                      case "number":
                        return (
                          <Input
                            id={customField.name}
                            type={type}
                            label={label}
                            placeholder={placeholder}
                            {...field}
                          />
                        );
                      case "select":
                        return (
                          <Select
                            label={label}
                            options={customField.options}
                            value={field.value}
                            onChange={(option: any) =>
                              field.onChange(option.value)
                            }
                          />
                        );
                      default:
                        return <div>Unknown type</div>;
                    }
                  }}
                />
              );
            })}
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
