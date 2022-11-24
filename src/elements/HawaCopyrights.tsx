import React, { useEffect, useState } from "react"

type CopyRightsTypes = {
  withLogo: boolean
  lang: string
  version: string
}

export const HawaCopyrights: React.FunctionComponent<CopyRightsTypes> = (
  props
) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "grey",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      {props.withLogo ? (
        <a href={"https://qawaim.app/" + props.lang}>
          <div style={{ cursor: "pointer" }}>
            <image
              // src="/qawaim-logo.svg"
              // alt="Qawaim"
              width={100}
              height={50}
            />
          </div>
        </a>
      ) : null}

      <div>{props.version}</div>
    </div>
  )
}
