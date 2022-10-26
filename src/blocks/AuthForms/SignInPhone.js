import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HawaButton } from "../../elements";
import HawaPhoneInput from "../../elements/HawaPhoneInput";

export const SignInPhone = (props) => {
  const [phone, setPhone] = useState("");
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;
  return (
    <div className="flex flex-col divide-y divide-gray-300 bg-blue-300 rounded-xl p-4">
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
        <HawaButton fullWidth type="submit">
          {props.SignInButtonText}
        </HawaButton>
      </form>
    </div>
  );
};
