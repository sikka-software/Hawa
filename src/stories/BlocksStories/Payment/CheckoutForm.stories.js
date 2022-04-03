import React from "react";
import { CheckoutForm } from "../../../blocks/Payment";
import { HawaPageControls } from "../../../layout/HawaPageControls";

export default {
  title: "Blocks/Payment/Checkout",
  component: [CheckoutForm],
  argTypes: {
    lang: {
      control: "select",
      options: ["ar", "en"],
      description:
        "A array of arrays. Each array inside the main array is a single row"
    }
  },
  args: {}
};

export const Checkout = (args) => {
  return (
    <>
      <HawaPageControls
        backText="Back"
        backAction={() => console.log("going back")}
        maxWidth="sm"
        actionButtons={[
          { label: "action1", action: () => console.log("action1 is clicked") },
          { label: "action2", action: () => console.log("action2 is clicked") },
          { label: "action3", action: () => console.log("action3 is clicked") }
        ]}
      />
      <CheckoutForm
        lang={args.lang}
        handlePayNow={(e) => console.log("submitting checkout", e)}
        countriesList={["Saudi Arabia", "Qatar", "Kuwait"]}
        products={[
          ["Logo Design", "1,200 SAR"],
          ["Website Design", "1,500 SAR"],
          ["Website Development", "900 SAR"],
          ["Hosting", "200 SAR"],
          ["Social Media Management", "700 SAR"]
        ]}
        total={"5,330 SAR"}
        texts={{
          orderDetails: "Order Details",
          billingAddress: "Billing Address",
          payNow: "Pay Now",
          emailLabel: "Email",
          emailRequiredText: "Email is required",
          emailInvalidText: "Invalid email address",
          firstNameLabel: "First Name",
          required: "Required",
          lastNameLabel: "Last Name",
          streetAddressLabel: "Street Address",
          buildingNumberLabel: "Building Number",
          cityLabel: "City",
          stateLabel: "State/Province",
          countryLabel: "Country",
          zipCodeLabel: "Zip Code"
        }}
      />
    </>
  );
};

Checkout.args = {};
