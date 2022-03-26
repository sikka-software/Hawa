import React from "react";
import { ConfirmationPage } from "../../../blocks/Payment";

export default {
  title: "Blocks/Payment/Confirmation",
  component: [ConfirmationPage],
  argTypes: {
    lang: {
      control: "select",
      options: ["ar", "en"],
      description:
        "A array of arrays. Each array inside the main array is a single row"
    },
    confirmationTitle: {
      control: "text",
      description: "The title of the confirmation page",
      table: {
        type: {
          summary: "Example",
          detail: "Payment Successful, Payment Failed, Payment Error"
        }
      }
    },
    handlePrint: {
      control: "function",
      description: "Function to trigger printing the invoice"
    },
    handleHistory: {
      control: "function",
      description: "Function to go to the history page"
    },
    handleHome: {
      control: "function",
      description: "Function to go to the home page"
    },
    handleRefundPolicyLink: {
      control: "function",
      description: "Function to go to the refund policy page"
    },
    orderNumber: {
      control: "text",
      description: "The order number, preferably starts with #"
    },
    userEmail: {
      control: "text",
      description: "The user email that will get the invoice email"
    },
    total: {
      control: "number",
      description: "The calculated total price of the products listed"
    },
    products: {
      control: "array",
      description:
        "An array of arrays, each array inside the main array is a product row in the order details "
    }
  },
  args: {}
};

export const Confirmation = (args) => {
  return (
    <ConfirmationPage
      confirmationTitle={"Payment Successful"}
      lang={args.lang}
      handlePrint={() => console.log("printing invoice")}
      handleHistory={() => console.log("go to history")}
      handleHome={() => console.log("going to home")}
      handleRefundPolicyLink={() => console.log("going to refund policy")}
      products={[
        ["Logo Design", "1,200 SAR"],
        ["Website Design", "1,500 SAR"],
        ["Website Development", "900 SAR"],
        ["Hosting", "200 SAR"],
        ["Social Media Management", "700 SAR"]
      ]}
      total={"5,330 SAR"}
      orderNumber={"#00001237"}
      userEmail={"zmasri@sikka.io"}
      texts={{
        print: "Print",
        history: "History",
        homePage: "Home Page",
        successMessage:
          "Thank you, your payment has been successful. A confirmation email has been send to your email",
        orderDetails: "Order Details",
        fasterPaymentNote:
          "For faster payment next time you order, save your payment preferences in account settings",
        billingAddress: "Billing Address",
        payNow: "Pay Now",
        yourOrderNumber: "Your order number is",
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
        zipCodeLabel: "Zip Code",
        refundPolicy: "Refund Policy"
      }}
    />
  );
};

Confirmation.args = {};
