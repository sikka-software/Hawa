import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import {
    PayPalButtons,
    usePayPalScriptReducer,
    PayPalScriptProvider
  } from "@paypal/react-paypal-js";

// This values are the props in the UI
const currency = "USD";
const style = {
  layout: "vertical",
  color: "blue",
  shape: "rect",
  label: "paypal"
};

const Paypal = (props) => {
  return (
    <PayPalScriptProvider
    deferLoading={true}
    options={{
      "client-id": `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
      locale: lang === "ar" ? "ar_SA" : "en_US"
    }}
  >
    <ButtonWrapper
      currency={currency}
      showSpinner={false}
      amount={getFinalPricePaypal(
        invoice.currency?.toLowerCase() == "sar"
          ? invoice.invoice_discount
          : invoice.invoice_discount_usd
      )}
      lang={lang}
      invoiceObject={invoiceObject}
      router={router}
    />
  </PayPalScriptProvider>
  );
};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({
    amount,
    currency,
    showSpinner,
    lang,
    invoiceObject,
    router
  }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    console.log("amount=", amount);
    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency
        }
      });
    }, [currency, showSpinner]);
  
    return (
      <div
        style={{
          padding: "10px",
          marginTop: "10px",
          fontSize: "17px",
          width: "100%"
        }}
      >
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          //forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            console.log("lang=", amount);
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount
                    },
                    reference_id: invoiceObject._id
                    /*items: [
                      name: ,
                      unit_amount: ,
                      tax: ,
                      quantity: ,
                      description: ,
                    ]*/
                  }
                ],
                application_context: {
                  locale: lang === "ar" ? "ar-SA" : "en-US"
                }
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={async function (data, actions) {
            return actions.order.capture().then(async function (details) {
              console.log("data=", details);
              details["language"] = lang;
              let checkoutInfo = await axios.post(
                `${process.env.NEXT_PUBLIC_SIKKA_API_URL}/paypal/payment/finalize`,
                qs.stringify(details)
              );
              if (checkoutInfo.data?.ok === true) {
                router.push({
                  pathname: "/confirmation/" + checkoutInfo.data.transaction._id
                });
              } else {
                router.push({
                  pathname: "/payment/error/" + props.data.merchant_reference,
                  query: {
                    code: 74
                  }
                });
              }
            });
          }}
        />
      </div>
    );
  };

export default Paypal;
