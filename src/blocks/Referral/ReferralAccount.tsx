import React, { FC } from "react"
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
        <div className="flex flex-row items-center justify-between rounded border bg-background">
          <span className="ml-3 font-bold">{referralCode}</span>
          <HawaButton
            tooltip="Copy"
            className="mr-1.5"
            onClick={() => navigator.clipboard.writeText(referralCode)}
          >
            <span className="bg-red flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
              >
                <path d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"></path>
              </svg>{" "}
            </span>
          </HawaButton>
        </div>
      </div>
      <div className="my-2 mt-0">
        <div className="mb-1">Referral Link</div>
        <div className="flex flex-row items-center justify-between rounded border bg-background">
          <span className="ml-3 font-bold">{referralLink}</span>
          <HawaButton
            className="mr-1.5"
            onClick={() => navigator.clipboard.writeText(referralLink)}
          >
            <span className="bg-red flex items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
              >
                <path d="M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z"></path>
              </svg>{" "}
            </span>
          </HawaButton>
        </div>
      </div>
    </HawaContainer>
  )
}
