import React, { useEffect, useState } from "react"

type CopyRightsTypes = {
  withLogo: boolean
  lang: any
  version: string
  credits: string
  logoURL: string
}

export const HawaCopyrights: React.FunctionComponent<CopyRightsTypes> = (
  props
) => {
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-1 text-xs text-gray-400">
      {props.withLogo ? (
        <a href={"https://qawaim.app/" + props.lang}>
          <div style={{ cursor: "pointer" }}>
            <image
              // src={props.logoURL}
              href={props.logoURL}
              // alt="Qawaim"
              width={100}
              height={50}
            />
          </div>
        </a>
      ) : null}
      <div>{props.version}</div>
      {props.credits ? props.credits : null}
    </div>
  )
}
