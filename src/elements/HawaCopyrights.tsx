import React, { useEffect, useState } from "react"

type CopyRightsTypes = {
  withLogo?: boolean
  lang?: any
  version?: string
  credits?: string
  logoURL?: string
  onLogoClicked?: any
}

export const HawaCopyrights: React.FunctionComponent<CopyRightsTypes> = (
  props
) => {
  return (
    <div className="my-2 flex flex-col items-center justify-center gap-1 text-xs text-gray-400">
      {props.withLogo ? (
        <a href={props.onLogoClicked}>
          <div className="cursor-pointer">
            <image href={props.logoURL} width={100} height={50} />
          </div>
        </a>
      ) : null}
      <div>{props.version}</div>
      {props.credits ? props.credits : null}
    </div>
  )
}
