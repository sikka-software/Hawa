import React from "react";
import HawaPhoneInput from "../../elements/HawaPhoneInput";

export default {
  title: "Elements/PhoneInput",
  component: [HawaPhoneInput],
  args: {
    country: "sa",
    onchange: (e) => console.log(e),
    required: true,
    name: "phone",
    label: "phone number"
  }
};

export const PhoneInput = (args) => {
  return <HawaPhoneInput {...args} />;
};
