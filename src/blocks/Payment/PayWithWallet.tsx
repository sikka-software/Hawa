import React, { FC } from "react"
import { Card, CardContent } from "../../elements/Card"
import { Button } from "../../elements/Button"

type PayWithWalletTypes = {
  walletBalance: any
  currency: any
  handlePayWithWallet: any
}
export const PayWithWallet: FC<PayWithWalletTypes> = (props) => {
  return (
    <Card>
      <CardContent headless>
        <div className="text-center text-5xl font-extrabold">
          {props.walletBalance || "0"}
          <div className="text-sm font-normal">{props.currency || "SAR"}</div>
        </div>
        <Button className="mt-6 w-full" onClick={props.handlePayWithWallet}>
          Pay Now
        </Button>
      </CardContent>
    </Card>
  )
}
