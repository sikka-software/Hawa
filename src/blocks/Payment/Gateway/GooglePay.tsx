import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import useTranslation from "next-translate/useTranslation";
import Script from "next/script";

const GooglePay = (props) => {
  const transaction = props.currenttransactiongpay;
  const router = useRouter();
  console.log("transaction=", transaction);
  const { t, lang } = useTranslation("common");
  const [googlepayloaded, setGooglePayLoaded] = useState(false);
  const [googlepay, setGooglePay] = useState(false);
  const [braintreegatewayclient, setBraintreeGatewayClient] = useState(false);
  const [braintreegatewaygooglepayment, setBraintreeGatewayGooglePayment] =
    useState(false);
  const [braintreegatewaydatacollector, setBraintreeGatewayDataCollector] =
    useState(false);

    let paymentsClient;

  useEffect(() => {
    if (
      !googlepayloaded &&
      googlepay &&
      braintreegatewaydatacollector &&
      braintreegatewayclient &&
      braintreegatewaygooglepayment
    ) {
      console.log("okkkk");
      onGooglePayLoaded();
    }
  }, [
    googlepay,
    braintreegatewayclient,
    braintreegatewaygooglepayment,
    braintreegatewaydatacollector,
    googlepayloaded
  ]);

  /**
   * Add a Google Pay purchase button alongside an existing checkout button
   *
   * @see {@link https://developers.google.com/pay/api/web/reference/request-objects#ButtonOptions|Button options}
   * @see {@link https://developers.google.com/pay/api/web/guides/brand-guidelines|Google Pay brand guidelines}
   */
  const addGooglePayButton = (googlePaymentInstance, clientInstance) => {
    //ok
    const button = paymentsClient.createButton({
      onClick: (event) =>
        onGooglePaymentButtonClicked(
          event,
          googlePaymentInstance,
          clientInstance
        ),
      buttonLocale: lang
    });
    document.getElementById("qawaim-googlepay").appendChild(button);
  };

  /**
   * Show Google Pay payment sheet when Google Pay payment button is clicked
   */
  const onGooglePaymentButtonClicked = (
    event,
    googlePaymentInstance,
    clientInstance
  ) => {
    let paymentDataRequest = googlePaymentInstance.createPaymentDataRequest({
      merchantInfo: {
        // @todo a merchant ID is available for a production environment after approval by Google
        // See {@link https://developers.google.com/pay/api/web/guides/test-and-deploy/integration-checklist|Integration checklist}
        merchantId: `${process.env.NEXT_PUBLIC_QAWAIM_GOOGLE_MERCHANT_ID}`,
        merchantName: `${process.env.NEXT_PUBLIC_QAWAIM_GOOGLEPAY_MERCHANT_NAME}`
      },
      transactionInfo: {
        displayItems: [
          {
            label: "Subtotal",
            type: "SUBTOTAL",
            price: `${transaction.amount}`
          }
        ],
        currencyCode: `${transaction.currency}`,
        totalPriceStatus: "FINAL",
        totalPrice: `${transaction.amount}`,
        totalPriceLabel: "Total"
      }
    });

    // We recommend collecting billing address information, at minimum
    // billing postal code, and passing that billing postal code with all
    // Google Pay card transactions as a best practice.
    // See all available options at https://developers.google.com/pay/api/web/reference/object
    let cardPaymentMethod = paymentDataRequest.allowedPaymentMethods[0];
    cardPaymentMethod.parameters.billingAddressRequired = true;
    cardPaymentMethod.parameters.billingAddressParameters = {
      format: "FULL",
      phoneNumberRequired: true
    };

    paymentsClient
      .loadPaymentData(paymentDataRequest)
      .then(function (paymentData) {
        googlePaymentInstance.parseResponse(
          paymentData,
          function (err, result) {
            if (err) {
              console.log(err);
              // Handle parsing error
              router.push("/payment/error");
            }

            // Send result.nonce to your server
            // result.type may be either "AndroidPayCard" or "PayPalAccount", and
            // paymentData will contain the billingAddress for card payments
            braintree.dataCollector.create(
              {
                client: clientInstance
              },
              async function (err, dataCollectorInstance) {
                if (err) {
                  // Handle error in creation of data collector
                  return;
                }
                // At this point, you should access the dataCollectorInstance.deviceData value and provide it
                // to your server, e.g. by injecting it into your form as a hidden input.
                let deviceData = dataCollectorInstance.deviceData;
                const data = {
                  deviceDataClient: deviceData,
                  nonce: result.nonce,
                  billing_address: transaction.billing_address,
                  amount: `${transaction.amount}`,
                  currency: token.SelectedCurrency?.toUpperCase(),
                  transaction_id: `${transaction._id}`
                };
                let checkoutgpay = await axios.post(
                  `${process.env.NEXT_PUBLIC_QAWAIM_API_URL}/braintreegateway/googlepay`,
                  qs.stringify(data)
                );
                if (checkoutgpay.data.ok === true) {
                  router.push(`/confirmation/${transaction._id}`);
                  //setCurrentTransaction(checkoutInfo.data.data.transaction);
                  router.push(
                    `/confirmation/${checkoutgpay.data.data.transaction._id}`
                  );
                } else {
                  router.push("/payment/error");
                }
              }
            );
          }
        );
      })
      .catch(function (err) {
        console.log(err);
        router.push("/payment/error");
        // Handle errors
      });
  };

  const onGooglePayLoaded = () => {
    // Make sure to have https://pay.google.com/gp/p/js/pay.js loaded on your page
    // You will need a button element on your page styled according to Google's brand guidelines
    // https://developers.google.com/pay/api/web/guides/brand-guidelines
    paymentsClient = new google.payments.api.PaymentsClient({
      environment: process.env.NEXT_PUBLIC_QAWAIM_GOOGLEPAY_ENVIRONMENT // 'TEST' Or 'PRODUCTION'
    });

    setGooglePayLoaded(true);

    braintree.client.create(
      {
        authorization: `${process.env.NEXT_PUBLIC_QAWAIM_BRAINTREE_TOKENIZATION_KEY}`
      },
      function (clientErr, clientInstance) {
        console.log("clientErr=", clientErr);
        console.log("clientInstance=", clientInstance);
        braintree.googlePayment.create(
          {
            client: clientInstance,
            googlePayVersion: 2,
            googleMerchantId: `${process.env.NEXT_PUBLIC_QAWAIM_GOOGLE_MERCHANT_ID}` // Optional in sandbox; if set in sandbox, this value must be a valid production Google Merchant ID
          },
          function (googlePaymentErr, googlePaymentInstance) {
            console.log("googlePaymentErr=", googlePaymentErr);
            console.log("googlePaymentInstance=", googlePaymentInstance);
            paymentsClient
              .isReadyToPay({
                // see https://developers.google.com/pay/api/web/reference/object#IsReadyToPayRequest
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods:
                  googlePaymentInstance.createPaymentDataRequest()
                    .allowedPaymentMethods,
                existingPaymentMethodRequired: true // Optional
              })
              .then(function (response) {
                if (response.result) {
                  addGooglePayButton(googlePaymentInstance, clientInstance);
                }
              })
              .catch(function (err) {
                console.log(err);
                router.push("/payment/error");
                // Handle errors
              });
          }
        );

        // Set up other Braintree components
      }
    );
  };
  return (
    <>
      <Script
        id="googlepay"
        src="https://pay.google.com/gp/p/js/pay.js"
        onLoad={() => {
          setGooglePay(true);
        }}
      />
      <Script
        id="braintreegateway-client"
        src="https://js.braintreegateway.com/web/3.82.0/js/client.min.js"
        onLoad={() => {
          setBraintreeGatewayClient(true);
        }}
      />
      <Script
        id="braintreegateway-data-collector"
        src="https://js.braintreegateway.com/web/3.82.0/js/data-collector.min.js"
        onLoad={() => {
          setBraintreeGatewayDataCollector(true);
        }}
      />
      <Script
        id="braintreegateway-google-payment"
        src="https://js.braintreegateway.com/web/3.82.0/js/google-payment.min.js"
        onLoad={() => {
          setBraintreeGatewayGooglePayment(true);
        }}
      />
      <div id="qawaim-googlepay"></div>
    </>
  );
};

export default GooglePay;
