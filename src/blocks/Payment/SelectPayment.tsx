import React, { FC, useState } from "react"
import { Button } from "../../elements"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../elements/Card"
import { cn } from "../../util"

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
  handleContinue: (string) => void
}

export const SelectPayment: FC<SelectPaymentTypes> = (props) => {
  const [selectedMethod, setSelectedMethod] = useState("")
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choose Payment Method</CardTitle>
        <CardDescription>
          And you'll be directed to the next step to complete the payment
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <Button
          className={cn(
            "flex w-full flex-col gap-2 pt-6",
            selectedMethod === "mada" && "outline outline-4 outline-primary"
          )}
          variant="outline"
          size="heightless"
          disabled={!props.viaMada}
          onClick={() => setSelectedMethod("mada")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/mada.png"
            className="h-6"
          />
          <span>{props.madaLabel}</span>
        </Button>

        <Button
          className={cn(
            "flex w-full flex-col gap-2",
            selectedMethod === "apple-pay" &&
              "outline outline-4 outline-primary"
          )}
          variant="outline"
          size="heightless"
          disabled={!props.viaApplePay}
          onClick={() => setSelectedMethod("apple-pay")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/apple-pay.png"
            className="h-11"
          />
          <span>{props.applePayLabel}</span>
        </Button>

        <Button
          className={cn(
            "flex w-full flex-col gap-2",
            selectedMethod === "visa-master" &&
              "outline outline-4 outline-primary"
          )}
          variant="outline"
          size="heightless"
          disabled={!props.viaCreditCard}
          onClick={() => setSelectedMethod("visa-master")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/visa-master.png"
            className="h-6"
          />
          <span>{props.visaMasterLabel}</span>
        </Button>

        <Button
          variant="outline"
          size="heightless"
          className={cn(
            "flex w-full flex-col gap-2",
            selectedMethod === "wallet" && "outline outline-4 outline-primary"
          )}
          disabled={!props.viaWallet}
          onClick={() => setSelectedMethod("wallet")}
        >
          <svg
            version="1.1"
            fill="currentColor"
            viewBox="0 0 223 223"
            className="h-6 w-6"
          >
            <g>
              <path
                d="M223,94.5c0-6.075-4.925-11-11-11h-63c-6.075,0-11,4.925-11,11v33c0,6.075,4.925,11,11,11h63c6.075,0,11-4.925,11-11V94.5z
                  M169.515,123.967c-7.082,0-12.823-5.741-12.823-12.823c0-7.082,5.741-12.823,12.823-12.823c7.082,0,12.823,5.741,12.823,12.823
                  C182.338,118.225,176.597,123.967,169.515,123.967z"
              />
              <path
                d="M123.509,68.5H205v-33c0-8.271-6.395-15-14.667-15h-175C7.062,20.5,0,27.229,0,35.5v152c0,8.271,7.062,15,15.333,15h175
                  c8.271,0,14.667-6.729,14.667-15v-34h-81.342L123.509,68.5z"
              />
            </g>
          </svg>
          <span>{props.walletLabel}</span>
        </Button>
        <Button
          variant="outline"
          size="heightless"
          className={cn(
            "flex w-full flex-col gap-2",
            selectedMethod === "stc-pay" && "outline outline-4 outline-primary"
          )}
          disabled={!props.viaSTCPay}
          onClick={() => setSelectedMethod("stc-pay")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/stc-pay.png"
            className="h-6"
          />
          <span>{props.stcPayLabel}</span>
        </Button>

        <Button
          variant="outline"
          size="heightless"
          className={cn(
            "flex w-full flex-col gap-2",
            selectedMethod === "google-pay" &&
              "outline outline-4 outline-primary"
          )}
          disabled={!props.viaGooglePay}
          onClick={() => setSelectedMethod("google-pay")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/google-pay.png"
            className="h-6"
          />
          <span>{props.googlePayLabel}</span>
        </Button>
        <Button
          variant="outline"
          size="heightless"
          className={cn(
            "col-span-2 flex w-full flex-col gap-2",
            selectedMethod === "paypal" && "outline outline-4 outline-primary"
          )}
          disabled={!props.viaPayPal}
          onClick={() => setSelectedMethod("paypal")}
        >
          <img
            src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/paypal.png"
            className="h-6"
          />
          <span>{props.paypalLabel}</span>
        </Button>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => props.handleContinue(selectedMethod)}
          className="w-full"
          disabled={!selectedMethod}
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
