// import useTranslation from "next-translate/useTranslation"
import React from "react"
import { HawaChip } from "../../../elements"

type PaymentMethodTypes = {
  wallet: boolean
  creditCard: boolean
  mada: boolean
  stcPay: boolean
  paypal: boolean
  googlePay: boolean
  applePay: boolean
  handlePaymentMethod: any
}

export const PaymentMethod: React.FunctionComponent<PaymentMethodTypes> = (
  props
) => {
  // const { t } = useTranslation("common")
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
  return (
    <>
      {props.wallet ? (
        <PaymentMethodButton
          imageURL={`/wallet.png`}
          methodCode="wallet"
          // methodLabel={t("current-wallet")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.creditCard ? (
        <PaymentMethodButton
          imageURL={`/visa-master.png`}
          methodCode="creditcard"
          // methodLabel={t("credit-card")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.mada ? (
        <PaymentMethodButton
          imageURL={`/mada.png`}
          methodCode="mada"
          // methodLabel={t("mada")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.stcPay ? (
        <PaymentMethodButton
          methodCode="stcpay"
          methodLabel={"STC Pay"}
          // chip={t("soon")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.paypal ? (
        <PaymentMethodButton
          methodCode="paypal"
          // methodLabel={t("paypal")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {isSafari && props.applePay && (
        <PaymentMethodButton
          methodCode="applepay"
          // methodLabel={t("applepay")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      )}
      {props.googlePay ? (
        <PaymentMethodButton
          methodCode="googlepay"
          // chip={t("soon")}
          // methodLabel={t("googlepay")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
    </>
  )
}

type PaymentButtonTypes = {
  chip?: any
  imageURL?: any
  methodCode?: any
  methodLabel?: any
  handlePaymentMethod?: any
}
const PaymentMethodButton: React.FunctionComponent<PaymentButtonTypes> = (
  props
) => {
  return (
    <button
      disabled={props?.chip ? true : false}
      // variant="contained"
      // color="secondary"
      style={{
        backgroundColor: "white",
        opacity: props.chip ? 0.7 : 1,
        padding: 20,
        width: "90%",
        margin: 10,
      }}
      onClick={(e) => props.handlePaymentMethod(e, props.methodCode)}
    >
      {props.imageURL ? (
        <div
          style={{
            width: "50%",
            textAlign: "right",
            paddingRight: 20,
          }}
        >
          <img
            src={props.imageURL}
            style={{
              maxWidth: 70,
              maxHeight: 70,
              height: "auto",
            }}
          />
        </div>
      ) : null}
      <div
        style={{
          width: "50%",
          textAlign: props.imageURL ? "left" : "center",
        }}
      >
        {props.methodLabel}
        {props.chip ? <HawaChip label="test" /> : null}x
      </div>
    </button>
  )
}
