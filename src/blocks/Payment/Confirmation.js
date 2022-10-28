import React from "react";
import { HawaButton, HawaTable } from "../../elements";
import PropTypes from "prop-types";

export const ConfirmationPage = (props) => {
  let isArabic = props.lang === "ar";

  return (
    <div className="flex flex-col divide-gray-300 bg-blue-300 divide-y rounded-xl p-4">
      <div className="text-3xl font-bold text-center py-5">
        {props.confirmationTitle}
      </div>
      <div className="py-5">
        <div className="text-center mb-2">
          {props.texts.successMessage} <strong>{props.userEmail}</strong>
        </div>
        <div className="text-center">{props.texts.yourOrderNumber}</div>
        <div className="font-bold text-center">{props.orderNumber}</div>
      </div>

      <div className="py-5">
        <div className="text-xl font-semibold mb-3 text-center">
          {props.texts.orderDetails}
        </div>
        {props.products && (
          <HawaTable
            lang={props.lang}
            columns={["Product", "Price"]}
            rows={props.products}
            end={["Total", props.total]}
          />
        )}
      </div>
      <div className="flex flex-col py-5 justify-center items-center">
        <HawaButton fullWidth onClick={props.handlePrint}>
          {props.texts.print}
        </HawaButton>
        <HawaButton fullWidth onClick={props.handleHistory}>
          {props.texts.history}
        </HawaButton>
        <HawaButton fullWidth onClick={props.handleHome}>
          {props.texts.homePage}
        </HawaButton>
        <div className="mt-5 mb-5 text-center text-sm">
          {props.texts.fasterPaymentNote}
        </div>
        <a
          className="w-fit text-center cursor-pointer text-xs font-normal"
          onClick={props.handleRefundPolicyLink}
        >
          {props.texts.refundPolicy}
        </a>
      </div>
    </div>
  );
};

ConfirmationPage.propTypes = {
  /**
   * The texts object for all the texts in the block
   */
  texts: PropTypes.shape({
    print: PropTypes.string,
    history: PropTypes.string,
    homePage: PropTypes.string,
    successMessage: PropTypes.string,
    orderDetails: PropTypes.string,
    fasterPaymentNote: PropTypes.string,
    billingAddress: PropTypes.string,
    payNow: PropTypes.string,
    yourOrderNumber: PropTypes.string,
    emailLabel: PropTypes.string,
    emailRequiredText: PropTypes.string,
    emailInvalidText: PropTypes.string,
    firstNameLabel: PropTypes.string,
    required: PropTypes.string,
    lastNameLabel: PropTypes.string,
    streetAddressLabel: PropTypes.string,
    buildingNumberLabel: PropTypes.string,
    cityLabel: PropTypes.string,
    stateLabel: PropTypes.string,
    countryLabel: PropTypes.string,
    zipCodeLabel: PropTypes.string,
    refundPolicy: PropTypes.string
  }),
  products: PropTypes.array,
  countriesList: PropTypes.array,
  lang: PropTypes.string,
  total: PropTypes.string,
  userEmail: PropTypes.string,
  orderNumber: PropTypes.string,
  confirmationTitle: PropTypes.string,
  handleHome: PropTypes.func,
  handlePrint: PropTypes.func,
  handleHistory: PropTypes.func,
  handleRefundPolicyLink: PropTypes.func
};
