import React from "react"
import { HawaAlert, HawaButton } from "../../elements"
import { HawaContainer } from "../../layout"

type TReferralStats = {
  referralLink: string
  referralCode: string
  withdrawError?: string
}

export const ReferralStats: React.FunctionComponent<TReferralStats> = ({
  referralLink,
  referralCode,
  withdrawError,
}) => {
  return (
    <HawaContainer>
      <div className="mb-1">Stats</div>
      <div className="justi flex flex-row gap-1">
        <NumberCard title="Clicks" number={22} />
        <NumberCard title="Sign-ups" number={32} />
        <NumberCard title="Commission" number={"213.22 SAR"} />
      </div>
      <div>
        <HawaButton width="full">Withdraw Money</HawaButton>
      </div>
      {withdrawError && (
        <div>
          <HawaAlert
            text={
              "Sorry can't withdraw the money at the moment. Please try again in 2022/11/20"
            }
            severity="warning"
          />
        </div>
      )}
      <div className="mt-3">
        <div className="mb-1">Sign ups</div>
        <div className="rounded">
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
  <div className="w-full rounded bg-white p-2">
    <div className="text-sm">{props.title}</div>
    <div className="font-bold">{props.number}</div>
  </div>
)
const ReferralSignUpCard = (props) => (
  <div className="mb-3 rounded border-b bg-white p-2">
    <div className="text-xs">{props.date}</div>
    <div className="flex flex-row justify-between">
      <div>{props.email}</div>
      <div>{props.amount}</div>
    </div>
  </div>
)
