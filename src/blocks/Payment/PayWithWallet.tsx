import { FC } from "react"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type PayWithWalletTypes = {
  walletBalance: any
  currency: any
  handlePayWithWallet: any
}
export const PayWithWallet: FC<PayWithWalletTypes> = (props) => {
  return (
    <HawaContainer>
      <div className="text-center text-5xl font-extrabold">
        {props.walletBalance || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <HawaButton
        width="full"
        color="primary"
        onClick={props.handlePayWithWallet}
      >
        Pay Now
      </HawaButton>
    </HawaContainer>
  )
}
