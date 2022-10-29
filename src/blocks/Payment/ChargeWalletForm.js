import React, { useState } from "react";
import { HawaButton, HawaTextField } from "../../elements";
import { Controller, FormProvider, useForm } from "react-hook-form";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout";

export const ChargeWalletForm = (props) => {
  const [walletAmount, setWalletAmount] = useState(0);
  const methods = useForm();
  const {
    formState: { errors },
    handleSubmit,
    control
  } = methods;

  return (
    <HawaContainer>
      {" "}
      <div className="text-5xl font-extrabold text-center">
        {Number(walletAmount).toLocaleString("en") || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(props.handleChargeWallet)}>
          <Controller
            control={control}
            name="amount"
            render={({ field }) => (
              <HawaTextField
                fullWidth
                placeholder={props.texts.amountLabel}
                type="number"
                value={field.value ?? ""}
                {...field}
                inputProps={{
                  inputMode: "numeric",
                  min: "1",
                  max: "9999999",
                  step: "0.01"
                }}
                onChange={(e) => {
                  field.onChange(parseFloat(e.target.value));
                  setWalletAmount(e.target.value);
                }}
                helperText={errors.amount?.message}
              />
            )}
            rules={{
              required: props.texts.amountRequired
            }}
          />

          <HawaButton
            type="submit"
            fullWidth
            text={props.texts.chargeWallet}
          ></HawaButton>
        </form>
      </FormProvider>
    </HawaContainer>
  );
};

ChargeWalletForm.propTypes = {
  /**
   * The texts object for all the texts in the block
   */
  texts: PropTypes.shape({
    amountLabel: PropTypes.string,
    chargeWallet: PropTypes.string,
    amountRequired: PropTypes.string
  }),
  /**
   * Function called when charge wallet button is clicked
   */
  handleChargeWallet: PropTypes.func,
  /**
   * The currency text under the amount
   */
  currency: PropTypes.string
};
