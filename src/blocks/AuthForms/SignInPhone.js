import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HawaButton } from "../../elements";
import HawaPhoneInput from "../../elements/HawaPhoneInput";
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
        />
        <div className="mt-2"></div>
        <HawaButton fullWidth type="submit" text={props.SignInButtonText} />
      </form>
    </HawaContainer>
  );
};
