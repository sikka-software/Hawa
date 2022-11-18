import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HawaButton, HawaPhoneInput } from "../../elements";
import { HawaContainer } from "../../layout";

export const SignInPhone = (props) => {
  const [phone, setPhone] = useState("");
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;
  return (
    <HawaContainer>
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <HawaPhoneInput
              country={props.country ?? ""}
              label={props.label ?? ""}
              onChange={(e) => {
                props.onChange(e);
                setPhone(e);
              }}
              value={props.value ?? props.value}
              {...field}
            />
          )}
          rules={{
            required: props.phoneRequiredText
          }}
        />
        <div className="mt-2"></div>
        <HawaButton color="primary"  width="full" type="submit">
          {props.SignInButtonText}
        </HawaButton>
      </form>
    </HawaContainer>
  );
};
