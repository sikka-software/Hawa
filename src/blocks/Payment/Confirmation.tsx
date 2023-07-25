import React, { FC } from "react"
import { HawaButton, HawaTable } from "../../elements"
import { HawaContainer } from "../../layout"

type ConfirmationPageTypes = {
  texts: {
    print: string
    history: string
    homePage: string
    successMessage: string
    orderDetails: string
    fasterPaymentNote: string
    billingAddress: string
    payNow: string
    yourOrderNumber: string
    emailLabel: string
    emailRequiredText: string
    emailInvalidText: string
    firstNameLabel: string
    required: string
    lastNameLabel: string
    streetAddressLabel: string
    buildingNumberLabel: string
    cityLabel: string
    stateLabel: string
    countryLabel: string
    zipCodeLabel: string
    refundPolicy: string
  }
  products: any
  countriesList: any
  lang: string
  total: string
  userEmail: string
  orderNumber: string
  confirmationTitle: string
  handleHome: any
  handlePrint: any
  handleHistory: any
  handleRefundPolicyLink: any
}

export const ConfirmationPage: FC<ConfirmationPageTypes> = (props) => {
  let isArabic = props.lang === "ar"

  return (
    <HawaContainer>
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
      {/* <div className="py-5">
        <div className="mb-3 text-center text-xl font-semibold">
          {props.texts.orderDetails}
        </div>
        {props.products && (
          <HawaTable
            direction={isArabic ? "rtl" : "ltr"}
            columns={[
              { hidden: false, value: "Product" },
              { hidden: false, value: "Price" },
            ]}
            rows={props.products}
          />
        )}
      </div> */}
      <div className="flex flex-col items-center justify-center py-5 pt-0">
        <HawaButton color="primary" width="full" onClick={props.handlePrint}>
          {props.texts.print}
        </HawaButton>
        <HawaButton color="primary" width="full" onClick={props.handleHistory}>
          {props.texts.history}
        </HawaButton>
        <HawaButton color="primary" width="full" onClick={props.handleHome}>
          {props.texts.homePage}
        </HawaButton>
        <div className="mb-5 mt-5 text-center text-sm">
          {props.texts.fasterPaymentNote}
        </div>
        <a
          className="w-fit cursor-pointer  text-center text-xs font-normal"
          onClick={props.handleRefundPolicyLink}
        >
          {props.texts.refundPolicy}
        </a>
      </div>
    </HawaContainer>
  )
}
