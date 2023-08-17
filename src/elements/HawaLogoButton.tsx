import React, { FC } from "react"

type LogoButtonTypes = {
  lang?: any
  logo?:
    | "google"
    | "github"
    | "twitter"
    | "wallet"
    | "googlepay"
    | "applepay"
    | "stcpay"
    | "visa/master"
    | "paypal"
    | "mada"
  onClick?: any
  buttonText?: any
}
export const HawaLogoButton: FC<LogoButtonTypes> = (props) => {
  let isArabic = props.lang === "ar"
  let logoElement: any = ""
  switch (props.logo?.toLowerCase()) {
    case "google":
      logoElement = (
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          }
          className="h-6"
        />
      )
      break
    case "github":
      logoElement = (
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 32 32"
          className="h-7 w-7"
        >
          <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z" />
        </svg>
      )
      break
    case "twitter":
      logoElement = (
        <svg
          version="1.1"
          x="0px"
          y="0px"
          className="h-5 w-5"
          viewBox="0 0 512.002 512.002"
        >
          <path
            // style="fill:#73A1FB;"
            d="M500.398,94.784c-8.043,3.567-16.313,6.578-24.763,9.023c10.004-11.314,17.631-24.626,22.287-39.193
     c1.044-3.265-0.038-6.839-2.722-8.975c-2.681-2.137-6.405-2.393-9.356-0.644c-17.945,10.643-37.305,18.292-57.605,22.764
     c-20.449-19.981-48.222-31.353-76.934-31.353c-60.606,0-109.913,49.306-109.913,109.91c0,4.773,0.302,9.52,0.9,14.201
     c-75.206-6.603-145.124-43.568-193.136-102.463c-1.711-2.099-4.347-3.231-7.046-3.014c-2.7,0.211-5.127,1.734-6.491,4.075
     c-9.738,16.709-14.886,35.82-14.886,55.265c0,26.484,9.455,51.611,26.158,71.246c-5.079-1.759-10.007-3.957-14.711-6.568
     c-2.525-1.406-5.607-1.384-8.116,0.054c-2.51,1.439-4.084,4.084-4.151,6.976c-0.012,0.487-0.012,0.974-0.012,1.468
     c0,39.531,21.276,75.122,53.805,94.52c-2.795-0.279-5.587-0.684-8.362-1.214c-2.861-0.547-5.802,0.456-7.731,2.638
     c-1.932,2.18-2.572,5.219-1.681,7.994c12.04,37.591,43.039,65.24,80.514,73.67c-31.082,19.468-66.626,29.665-103.939,29.665
     c-7.786,0-15.616-0.457-23.279-1.364c-3.807-0.453-7.447,1.795-8.744,5.416c-1.297,3.622,0.078,7.66,3.316,9.736
     c47.935,30.735,103.361,46.98,160.284,46.98c111.903,0,181.907-52.769,220.926-97.037c48.657-55.199,76.562-128.261,76.562-200.451
     c0-3.016-0.046-6.061-0.139-9.097c19.197-14.463,35.724-31.967,49.173-52.085c2.043-3.055,1.822-7.094-0.545-9.906
     C507.7,94.204,503.76,93.294,500.398,94.784z"
          />
        </svg>
      )
      break
    case "mada":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/mada.png"
          className="h-6"
        />
      )
      break
    case "stcpay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/stc-pay.png"
          // height={20}
          className="h-6"
        />
      )
      break
    case "visa/master":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/visa-master.png"
          className="h-6"
        />
      )
      break
    case "paypal":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/paypal.png"
          className="h-6"
        />
      )
      break
    case "googlepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/google-pay.png"
          className="h-6"
        />
      )
      break
    case "applepay":
      logoElement = (
        <img
          src="https://sikka-images.s3.ap-southeast-1.amazonaws.com/payments/apple-pay.png"
          className="h-11"
        />
      )
      break
    case "wallet":
      logoElement = (
        <svg
          version="1.1"
          viewBox="0 0 223 223"
          className="h-6 w-6"
        >
          <g>
            <path
              d="M223,94.5c0-6.075-4.925-11-11-11h-63c-6.075,0-11,4.925-11,11v33c0,6.075,4.925,11,11,11h63c6.075,0,11-4.925,11-11V94.5z
           M169.515,123.967c-7.082,0-12.823-5.741-12.823-12.823c0-7.082,5.741-12.823,12.823-12.823c7.082,0,12.823,5.741,12.823,12.823
          C182.338,118.225,176.597,123.967,169.515,123.967z"
            />
            <path
              d="M123.509,68.5H205v-33c0-8.271-6.395-15-14.667-15h-175C7.062,20.5,0,27.229,0,35.5v152c0,8.271,7.062,15,15.333,15h175
          c8.271,0,14.667-6.729,14.667-15v-34h-81.342L123.509,68.5z"
            />
          </g>
        </svg>
      )
      break
    default:
      break
  }

  return (
    <button
      style={{ direction: isArabic ? "rtl" : "ltr" }}
      onClick={props.onClick}
      className="my-2 flex h-11 w-full flex-row justify-center rounded bg-white align-middle transition-all hover:ring-1 hover:ring-buttonPrimary-500 hover:brightness-90"
    >
      <div className="flex h-full flex-row items-center justify-end">
        {logoElement}
      </div>
      <div style={{ width: 10 }} />
      <div className="flex h-full flex-col items-start justify-center dark:text-black">
        {props.buttonText}
      </div>
    </button>
  )
}
