import React from "react"
import { FaClone } from "react-icons/fa"
import { HawaButton, HawaTooltip } from "../elements"
import { HawaContainer } from "../layout"

type TReferralBlock = {
  referralLink: string
  referralCode: string
}

export const ReferralBlock: React.FunctionComponent<TReferralBlock> = ({
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
      <div className="mb-1">Stats</div>
      <div className="justi flex flex-row gap-1">
        <NumberCard title="Clicks" number={22} />
        <NumberCard title="Sign-ups" number={32} />
        <NumberCard title="Commission" number={"213.22 SAR"} />
      </div>
      <div>
        <HawaButton width="full">Withdraw Money</HawaButton>
      </div>
      <div className="mt-3">
        <div className="mb-1">Sign ups</div>
        <div className="rounded-lg">
          <ReferralSignUpCard
            date="2020/10/11 @ 9:45 pm"
            email="zakher@sikka.io"
            amount="3.4 SAR / Month"
          />
          <ReferralSignUpCard
            date="2022/10/11 @ 9:45 pm"
            email="zakher@sikka.io"
            amount="3.4 SAR / Month"
          />
          <ReferralSignUpCard
            date="2022/10/11 @ 9:45 pm"
            email="zakher@sikka.io"
            amount="3.4 SAR / Month"
          />
          <ReferralSignUpCard
            date="2022/10/11 @ 9:45 pm"
            email="zakher@sikka.io"
            amount="3.4 SAR / Month"
          />
          <ReferralSignUpCard
            date="2022/10/11 @ 9:45 pm"
            email="zakher@sikka.io"
            amount="3.4 SAR / Month"
          />
        </div>
      </div>
    </HawaContainer>
  )
}

const NumberCard = (props) => (
  <div className="w-full rounded-lg bg-white p-2">
    <div className="text-sm">{props.title}</div>
    <div className="font-bold">{props.number}</div>
  </div>
)
const ReferralSignUpCard = (props) => (
  <div className="mb-3 rounded-lg border-b bg-white p-2">
    <div className="text-xs">{props.date}</div>
    <div className="flex flex-row justify-between">
      <div>{props.email}</div>
      <div>{props.amount}</div>
    </div>
  </div>
)
