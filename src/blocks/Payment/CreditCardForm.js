import React from "react";
import { HawaButton, HawaTextField } from "../../elements";
import { Controller, useForm } from "react-hook-form";

export const CreditCardForm = (props) => {
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <div className="flex flex-col bg-blue-300 rounded-xl p-4">
      <form onSubmit={handleSubmit(props.handle)}>
        <HawaTextField
          fullWidth
          name="password"
          placeholder="Enter password"
          type="tel"
          label="Card Number"
          rules={{
            required: "Password is rquired"
          }}
          helperText={errors.password?.message}
        />

        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              name="password"
              placeholder="Enter password"
              type="password"
              label="Name On Card"
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              name="password"
              placeholder="Enter password"
              type="password"
              label="Expiry Date"
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="cardName"
          render={({ field }) => (
            <HawaTextField
              fullWidth
              name="password"
              placeholder="Enter password"
              type="password"
              label="CCV"
              rules={{
                required: "Password is rquired"
              }}
              helperText={errors.password?.message}
            />
          )}
        />

        <HawaButton
          type="submit"
          fullWidth
          onClick={props.handlePayWithCreditCard}
        >
          {"Pay with Credit Card"}
        </HawaButton>
      </form>
    </div>
  );
};
