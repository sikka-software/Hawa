import React from "react";
import { CheckoutForm } from "../../../blocks/Payment";
// import { HawaPageControls } from "../../../layout/HawaPageControls";

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
    <div className="max-w-md">
      <CheckoutForm
        lang={args.lang}
        handlePayNow={(e) => console.log("submitting checkout", e)}
        countriesList={["Saudi Arabia", "Qatar", "Kuwait"]}
        products={[
          [
            { hidden: false, value: "Logo Design" },
            { hidden: true, value: "230423847239838" },
            { hidden: false, value: "1,200 SAR" }
          ],
          [
            { hidden: false, value: "Logo Design" },
            { hidden: true, value: "230423847239838" },
            { hidden: false, value: "1,200 SAR" }
          ],
          [
            { hidden: false, value: "Logo Design" },
            { hidden: true, value: "230423847239838" },
            { hidden: false, value: "1,200 SAR" }
          ]
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
    </div>
  );
};

Checkout.args = {};
