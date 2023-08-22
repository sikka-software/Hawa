import React, { FC } from "react"
import { HawaLogoButton } from "../../elements"
import { Card, CardContent, CardHeader, CardTitle } from "../../elements/Card"

type SelectPaymentTypes = {
  viaMada: boolean
  viaWallet: boolean
  viaSTCPay: boolean
  viaPayPal: boolean
  viaApplePay: boolean
  viaCreditCard: boolean
  viaGooglePay: boolean
  madaLabel: string
  stcPayLabel: string
  paypalLabel: string
  walletLabel: string
  applePayLabel: string
  visaMasterLabel: string
  googlePayLabel: string
  handleMada: any
  handleWallet: any
  handleSTCPay: any
  handlePayPal: any
  handleApplePay: any
  handleCreditCard: any
  handleGooglePay: any
}

export const SelectPayment: FC<SelectPaymentTypes> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Payment Method</CardTitle>
      </CardHeader>
      <CardContent>
        {props.viaWallet && (
          <HawaLogoButton
            logo="wallet"
            buttonText={props.walletLabel}
            onClick={props.handleWallet}
          />
        )}
        {props.viaCreditCard && (
          <HawaLogoButton
            logo="visa/master"
            buttonText={props.visaMasterLabel}
            onClick={props.handleCreditCard}
          />
        )}
        {props.viaMada && (
          <HawaLogoButton
            logo="mada"
            buttonText={props.madaLabel}
            onClick={props.handleMada}
          />
        )}
        {props.viaSTCPay && (
          <HawaLogoButton
            logo="stcpay"
            buttonText={props.stcPayLabel}
            onClick={props.handleSTCPay}
          />
        )}
        {props.viaPayPal && (
          <HawaLogoButton
            logo="paypal"
            buttonText={props.paypalLabel}
            onClick={props.handlePayPal}
          />
        )}
        {props.viaGooglePay && (
          <HawaLogoButton
            logo="googlepay"
            buttonText={props.googlePayLabel}
            onClick={props.handleGooglePay}
          />
        )}
        {props.viaApplePay && (
          <HawaLogoButton
            logo="applepay"
            buttonText={props.applePayLabel}
            onClick={props.handleApplePay}
          />
        )}
      </CardContent>
    </Card>
  )
}
