import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button, Card, CardContent, Input, Textarea } from "../../elements";
import { cn } from "../../util";
import { TextInputType } from "@/components/types/textTypes";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  cardless?: boolean;
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
  onSubmit,
}) => {
  const contactFormSchema = z.object({
    name: z
      .string({ required_error: texts?.name.required })
      .min(1, texts?.name.required),
    email: z
      .string({ required_error: texts?.email?.required })
      .min(1, { message: texts?.email?.required })
      .email({ message: texts?.email?.invalid }),

    message: z
      .string({ required_error: texts?.message.required })
      .min(10, texts?.message.invalid),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  let sizeStyle = {
    sm: "hawa-max-w-sm",
    default: "hawa-w-full",
  };
  return (
    <Card
      className={cn(
        sizeStyle[size],
        cardless &&
          "hawa-bg-transparent hawa-border-none hawa-shadow-none hawa-drop-shadow-none"
      )}
      style={cardless ? { boxShadow: "none" } : undefined}
    >
      <CardContent headless>
        <form
          noValidate
          onSubmit={handleSubmit((e) => {
            if (onSubmit) {
              return onSubmit(e);
            } else {
              console.log("Form is submitted but onSubmit prop is missing");
            }
          })}
          className="hawa-space-y-2"
        >
          <div
            className={cn(
              "hawa-justify-start hawa-gap-2 hawa-items-start hawa-flex",
              {
                "hawa-flex-row": size === "default",
                "hawa-flex-col": size === "sm",
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
                  placeholder={texts?.name.placeholder}
                  type="text"
                  {...field}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <Input
                  type="text"
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
                  ...field,
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
