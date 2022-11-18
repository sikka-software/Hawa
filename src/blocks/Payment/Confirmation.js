import React from "react";
import { HawaButton, HawaTable } from "../../elements";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout";

export const ConfirmationPage = (props) => {
  let isArabic = props.lang === "ar";

  return (
    <HawaContainer withDividers>
      {" "}
      <div className="py-5 text-center text-3xl font-bold">
        {props.confirmationTitle}
      </div>
      <div className="py-5">
        <div className="mb-2 text-center">
          {props.texts.successMessage} <strong>{props.userEmail}</strong>
        </div>
        <div className="text-center">{props.texts.yourOrderNumber}</div>
        <div className="text-center font-bold">{props.orderNumber}</div>
      </div>
      <div className="py-5">
        <div className="mb-3 text-center text-xl font-semibold">
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
      <div className="flex flex-col justify-center py-5 pt-0">
        <HawaButton width="full" onClick={props.handlePrint}>
          {props.texts.print}
        </HawaButton>
        <HawaButton width="full" onClick={props.handleHistory}>
          {props.texts.history}
        </HawaButton>
        <HawaButton width="full" onClick={props.handleHome}>
          {props.texts.homePage}
        </HawaButton>
        <div className="mt-5 mb-5 text-center text-sm">
          {props.texts.fasterPaymentNote}
        </div>
        <a
          className="w-fit cursor-pointer text-center text-xs font-normal"
          onClick={props.handleRefundPolicyLink}
        >
          {props.texts.refundPolicy}
        </a>
      </div>
    </HawaContainer>
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
