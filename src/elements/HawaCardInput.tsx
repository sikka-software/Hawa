import React, { useState } from "react"
import { HawaButton } from "./HawaButton"

const CARDS = {
  mada: "^(4(0(0861|1757|3024|6136|6996|7(197|395)|9201)|1(0621|0685|2565|7633|9593)|2(281(7|8|9)|0(132)|1(141)|6(897)|8(1|331|67(1|2|3)))|3(1361|2328|4107|9954)|4(0(533|647|795)|5564|6(393|404|672))|5(5(036|708)|7865|7997|8456)|6(2220|854(0|1|2|3))|7(4491)|8(301(0|1|2)|4783|609(4|5|6)|931(7|8|9))|93428)|5(0(4300|6968|8160)|13213|2(0058|1076|4(130|514)|9(415|741))|3(0060|0906|1095|1196|2013|5(825|989)|6023|7767|9931)|4(3(085|357)|9760)|5(4180|7606|8563|8848)|8(5265|8(8(4(5|6|7|8|9)|5(0|1))|98(2|3))|9(005|206)))|6(0(4906|5141)|36120)|9682(0(1|2|3|4|5|6|7|8|9)|1(0|1)))",
  visa: "^4",
  amex: "^(34|37)",
  mastercard: "^5[1-5]",
  discover: "^6011",
  unionpay: "^62",
  troy: "^9792",
  diners: "^(30[0-5]|36)",
}

const currentYear = new Date().getFullYear()
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1
  return month <= 9 ? "0" + month : month
})
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i)

export const HawaCardInput = ({
  cardHolder,
  cardMonth,
  cardYear,
  cardCvv,
  rememberMe,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
  cardCvvRef,
  rememberMeRef,
  onCardInputFocus,
  onCardInputBlur,
  children,
  handlePaymentPayfort,
  selectedPaymentMethod,
  isRegister,
  accessCode,
  shaRequestPassphrase,
  transaction,
  signature,
  isCheckout,
}) => {
  //   const token = getToken()
  //   const router = useRouter()
  //   const formRegister = useRef()
  //   const [loading, setLoading] = useState(false)
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [binCardType, setBinCardType] = useState("")
  //   const [tokenName, setTokenName] = useState("")
  //   const [registeredCard, setRegisteredCard] = useState("")
  const [registerSignature, setRegisterSignature] = useState("")
  const [card, setCard] = useState("")
  //   const [payfortForm, setPayfortForm] = useState("")
  //   const classes = useStyles()
  //   const [value, setValue] = React.useState("")
  //   const [error, setError] = React.useState(false)
  //   const [helperText, setHelperText] = React.useState("Choose wisely")

  //   const { data: allCards, loading: loadingCards } = useQuery(getCards(), {
  //     variables: { userId: token.User._id },
  //   })

  //   const { t, lang } = useTranslation("common")

  const cardType = (cardNumber) => {
    const number = cardNumber.replace(/\D/g, "")
    let re
    for (const [card, pattern] of Object.entries(CARDS)) {
      re = new RegExp(pattern)
      console.log("number=", number)
      console.log("card=", card)
      console.log("pattern=", pattern)
      console.log("res=", re.test(number))
      if (number.match(re) != null) {
        return card
      }
    }

    return "" // default type
  }

  // TODO: We can improve the regex check with a better approach like in the card component.

  const onCardNumberChange = (event) => {
    let { value, name } = event.target
    let cardNumber = value
    value = value.replace(/\D/g, "")
    if (/^3[47]\d{0,13}$/.test(value)) {
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ")
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ")
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ")
    }

    setCardNumber(cardNumber.trimRight())
    setBinCardType(cardType(cardNumber.trimRight()))
    onUpdateState(name, cardNumber)
  }
  const handleFormChange = (event) => {
    const { name, value } = event.target
    if (name === "rememberMe") {
      onUpdateState(name, !rememberMe)
    } else {
      onUpdateState(name, value)
    }
  }

  return (
    <div>
      <div>
        <div>{children}</div>
        <div>
          <div className="w-fit bg-red-200 p-2">
            <label htmlFor="cardNumber" className="relative">
              Card Number
              <input
                type="tel"
                name="cardNumber"
                className="mb-0 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                autoComplete="off"
                onChange={onCardNumberChange}
                maxLength={19}
                ref={cardNumberRef}
                onFocus={(e) => onCardInputFocus(e, "cardNumber")}
                onBlur={onCardInputBlur}
                value={cardNumber}
              />
              {/* {binCardType && (
                  <img className="bg-red-700" src={`/${binCardType}.png`} />
                )} */}
              <img
                className="absolute right-2 top-1/2 translate-y-1/2 bg-red-700"
                src={`../Assets/images/card-type/${binCardType}.png`}
              />
            </label>
          </div>

          <div className="flex w-fit flex-col bg-red-300 p-2">
            <label htmlFor="cardName" className="card-input__label">
              Card Holder{" "}
            </label>
            <input
              type="text"
              //   className="card-input__input"
              className="mb-0 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              autoComplete="off"
              name="cardHolder"
              onChange={handleFormChange}
              ref={cardHolderRef}
              onFocus={(e) => onCardInputFocus(e, "cardHolder")}
              onBlur={onCardInputBlur}
            />
          </div>

          <div className="flex w-fit flex-col bg-red-400 p-2">
            <div className="flex flex-col">
              <label htmlFor="cardMonth" className="card-input__label">
                Expiration
              </label>
              <div className="flex flex-row gap-2">
                <select
                  className="rounded-lg p-2.5"
                  value={cardMonth}
                  name="cardMonth"
                  onChange={handleFormChange}
                  ref={cardDateRef}
                  onFocus={(e) => onCardInputFocus(e, "cardDate")}
                  onBlur={onCardInputBlur}
                >
                  <option value="" disabled>
                    Month
                  </option>

                  {monthsArr.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
                <select
                  name="cardYear"
                  className="rounded-lg p-2.5"
                  value={cardYear}
                  onChange={handleFormChange}
                  onFocus={(e) => onCardInputFocus(e, "cardDate")}
                  onBlur={onCardInputBlur}
                >
                  <option value="" disabled>
                    Year
                  </option>

                  {yearsArr.map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex w-fit flex-col bg-red-500 p-2">
            <label htmlFor="cardCvv">CCV</label>
            <input
              type="tel"
              className="mb-0 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              maxLength={4}
              autoComplete="off"
              name="cardCvv"
              onChange={handleFormChange}
              //   onFocus={onCvvFocus}
              //   onBlur={onCvvBlur}
              ref={cardCvvRef}
            />
          </div>
          {isCheckout && (
            <div className="card-input">
              <label htmlFor="rememberMe" className="card-input__label">
                <input
                  type="checkbox"
                  autoComplete="off"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleFormChange}
                  ref={rememberMeRef}
                />
                Store Payment Details{" "}
              </label>
            </div>
          )}
          <div className="card-input" style={{ marginTop: "20px" }}>
            <form
              onSubmit={(e) => e.preventDefault()}
              //   ref={(ref) => setPayfortForm(ref)}
              id="formSendToAps"
              action={`${process.env.NEXT_PUBLIC_QAWAIM_PAYFORT_ENVIRONMENT_URL}`}
              method="POST"
            >
              <input type="hidden" name="access_code" value={accessCode} />
              <input
                type="hidden"
                name="merchant_identifier"
                value={`${process.env.NEXT_PUBLIC_QAWAIM_PAYFORT_MERCHANT_ID}`}
              />
              <input type="hidden" name="language" value={"en"} />
              <input
                type="hidden"
                name="card_number"
                value={cardNumber.replace(/\s/g, "")}
              />
              <input type="hidden" name="expiry_date" value={expiryDate} />
              <input
                type="hidden"
                name="signature"
                value={isCheckout ? signature : registerSignature}
              />
              <input type="hidden" name="card_holder_name" value={cardHolder} />
              <input
                type="hidden"
                name="merchant_reference"
                // value={isCheckout ? transaction?._id : card?._id}
              />
              <input
                type="hidden"
                name="service_command"
                value={isCheckout ? "TOKENIZATION" : "CREATE_TOKEN"}
              />
              <input
                type="hidden"
                name="return_url"
                // value={
                //   isCheckout
                //     ? `${process.env.NEXT_PUBLIC_QAWAIM_USER_PORTAL_URL}/aps_online/response`
                //     : `${process.env.NEXT_PUBLIC_QAWAIM_USER_PORTAL_URL}/aps_online/register`
                // }
              />
              {!isCheckout && (
                <input
                  type="hidden"
                  name="currency"
                  //   value={token.User.default_currency?.toUpperCase()}
                />
              )}
              {isCheckout && (
                <>
                  <input
                    type="hidden"
                    name="card_security_code"
                    value={cardCvv}
                  />

                  {/* {tokenName && (
                    <input type="hidden" name="token_name" value={tokenName} />
                  )} */}
                </>
              )}

              <HawaButton>Pay</HawaButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
