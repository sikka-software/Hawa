import React from "react"
import { FaClone } from "react-icons/fa"
import { HawaAlert, HawaButton, HawaTable, HawaTooltip } from "../../elements"
import { HawaContainer } from "../../layout"

type ReferralAccount = {
  referralLink: string
  referralCode: string
}

export const ReferralAccount: React.FunctionComponent<ReferralAccount> = ({
  referralLink,
  referralCode,
}) => {
  return (
    <HawaContainer maxWidth="normal">
      <div className="my-2 mt-0">
        <div className="mb-1">Referral Code</div>
        <div className="flex flex-row items-center justify-between rounded-lg bg-white">
          <span className="ml-3 font-bold">{referralCode}</span>
          <HawaButton
            tooltip="Copy"
            className="mr-1.5"
            onClick={() => navigator.clipboard.writeText(referralCode)}
          >
            <span className="bg-red flex items-center justify-center">
              <FaClone />
            </span>
          </HawaButton>
        </div>
      </div>
      <div className="my-2 mt-0">
        <div className="mb-1">Referral Link</div>
        <div className="flex flex-row items-center justify-between rounded-lg bg-white">
          <span className="ml-3 font-bold">{referralLink}</span>
          <HawaButton
            tooltip="Copy"
            className="mr-1.5"
            onClick={() => navigator.clipboard.writeText(referralLink)}
          >
            <span className="bg-red flex items-center justify-center">
              <FaClone />
            </span>
          </HawaButton>
        </div>
      </div>
    </HawaContainer>
  )
}
