import { FC } from "react"
import { FaClone } from "react-icons/fa"
import { HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type ReferralAccount = {
  referralLink: string
  referralCode: string
}

export const ReferralAccount: FC<ReferralAccount> = ({
  referralLink,
  referralCode,
}) => {
  return (
    <HawaContainer>
      <div className="my-2 mt-0">
        <div className="mb-1">Referral Code</div>
        <div className="flex flex-row items-center justify-between rounded bg-white">
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
        <div className="flex flex-row items-center justify-between rounded bg-white">
          <span className="ml-3 font-bold">{referralLink}</span>
          <HawaButton
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
