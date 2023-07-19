import { FC } from "react"

type CopyRightsTypes = {
  /** A text used as the version of the app, for example: v1.0.0 */
  version?: string
  /** Credit to the creator of the app, for example: Sikka Software */
  credits?: string
  /** The URL of the logo in the copyrights */
  logoURL?: string
  /** Enable/Disable the existance of the logo */
  withLogo?: boolean
  /** Fires when the logo is clicked, usually goes to the website of the creator of the app */
  onLogoClicked?: any
}

export const HawaCopyrights: FC<CopyRightsTypes> = (props) => {
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
