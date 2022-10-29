import React, { useEffect, useState, useRef } from "react";
import sha256 from "crypto-js/sha256";
import useTranslation from "next-translate/useTranslation";
import axios from "axios";
import { HawaButton } from "../../../elements";

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function CForm({
  cardHolder,
  cardMonth,
  cardYear,
  cardCvv,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardDateRef,
  cardCvvRef,
  onCardInputFocus,
  onCardInputBlur,
  children,
  selectedPaymentMethod,
  transaction
}) {
  const payfortFormref = useRef();
  const [loading, setLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [merchantIdentifier, setMerchantIdentifier] = useState("");
  const [shaRequestPassphrase, setSHARequestPassphrase] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [signature, setSignature] = useState("");
  const [ip, setIP] = useState("");
  const { t, lang } = useTranslation("common");

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    onUpdateState(name, value);
  };

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  const generateSignature = () => {
    // Calculate request signature
    let shaString = "";

    // array request
    let arrData = {
      access_code: process.env.NEXT_PUBLIC_QAWAIM_SOFTWARE_PAYFOR_ACCESS_TOKEN,
      language: lang,
      merchant_identifier:
        process.env.NEXT_PUBLIC_QAWAIM_SOFTWARE_PAYFOR_MERCHANT_ID,
      merchant_reference: "",
      return_url: `${process.env.NEXT_PUBLIC_QAWAIM_USER_PORTAL_URL}/aps_online/response`,
      service_command: "TOKENIZATION"
    };

    if (
      transaction &&
      transaction?.getTransactionByIDInvoice?.transaction_payment_token
    ) {
      arrData.token_name =
        transaction?.getTransactionByIDInvoice?.transaction_payment_token;
    }

    console.log("arrData=", arrData);

    shaString = `${process.env.NEXT_PUBLIC_QAWAIM_SOFTWARE_PAYFOR_SHA_REQUEST_PHRASE}${shaString}`;
    for (const [key, value] of Object.entries(arrData)) {
      shaString = `${shaString}${key}=${value}`;
    }
    shaString = `${shaString}${process.env.NEXT_PUBLIC_QAWAIM_SOFTWARE_PAYFOR_SHA_REQUEST_PHRASE}`;

    console.log("shaString=", shaString);

    // your request signature
    let signature = sha256(shaString);

    console.log("signature=", signature);
    setSignature(signature);
  };
  useEffect(() => {
    if (selectedPaymentMethod && selectedPaymentMethod !== "APPLEPAY") {
      getData();
      generateSignature();
    }
  }, [selectedPaymentMethod, accessCode, shaRequestPassphrase]);

  useEffect(() => {
    if (cardMonth && cardYear) {
      setExpiryDate(`${cardYear.substring(2)}${cardMonth}`);
    }
  }, [cardMonth, cardYear]);

  // TODO: We can improve the regex check with a better approach like in the card component.
  const onCardNumberChange = (event) => {
    let { value, name } = event.target;
    let cardNumber = value;
    value = value.replace(/\D/g, "");
    if (/^3[47]\d{0,13}$/.test(value)) {
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
    }

    setCardNumber(cardNumber.trimRight());
    onUpdateState(name, cardNumber);
  };

  const onCvvFocus = (event) => {
    onUpdateState("isCardFlipped", true);
  };

  const onCvvBlur = (event) => {
    onUpdateState("isCardFlipped", false);
  };

  const handlePayfortForm = (e) => {};

  // NOTE: Currently the cursor on the card number field gets reset if we remove a number, the code bellow was used
  // in class components, need to transform this to work with functional components.
  // getSnapshotBeforeUpdate() {
  //     return this.props.cardNumberRef.current.selectionStart;
  // }

  // const componentDidUpdate = function (prevProps, prevState, cursorIdx) {
  //     const node = cardNumberRef.current;
  //     const { cardNumber: cardNum } = state;
  //     const { cardNumber: prevCardNum } = prevState;
  //     if (
  //         cardNum.length > prevCardNum.length &&
  //         cardNum[cursorIdx - 1] === ' '
  //     ) {
  //         cursorIdx += 1;
  //     } else if (prevCardNum[cursorIdx - 1] === ' ') {
  //         cursorIdx -= 1;
  //     }
  //     node.selectionStart = node.selectionEnd = cursorIdx;
  // };

  return (
    <div className="card-form">
      <div className="card-list">{children}</div>
      <div className="card-form__inner">
        <div className="card-input">
          <label htmlFor="cardNumber" className="card-input__label">
            {t("cardNumber")}
          </label>
          <input
            type="tel"
            name="cardNumber"
            className="card-input__input"
            autoComplete="off"
            onChange={onCardNumberChange}
            maxLength="19"
            ref={cardNumberRef}
            onFocus={(e) => onCardInputFocus(e, "cardNumber")}
            onBlur={onCardInputBlur}
            value={cardNumber}
          />
        </div>

        <div className="card-input">
          <label htmlFor="cardName" className="card-input__label">
            {t("cardHolder")}
          </label>
          <input
            type="text"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange={handleFormChange}
            ref={cardHolderRef}
            onFocus={(e) => onCardInputFocus(e, "cardHolder")}
            onBlur={onCardInputBlur}
          />
        </div>

        <div className="card-form__row">
          <div className="card-form__col">
            <div className="card-form__group">
              <label htmlFor="cardMonth" className="card-input__label">
                {t("cardExpiration")}
              </label>
              <select
                className="card-input__input -select"
                value={cardMonth}
                name="cardMonth"
                onChange={handleFormChange}
                ref={cardDateRef}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  {t("cardMonth")}
                </option>

                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <select
                name="cardYear"
                className="card-input__input -select"
                value={cardYear}
                onChange={handleFormChange}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
              >
                <option value="" disabled>
                  {t("cardYear")}
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="card-form__col -cvv">
            <div className="card-input">
              <label htmlFor="cardCvv" className="card-input__label">
                {t("cvv")}
              </label>
              <input
                type="tel"
                className="card-input__input"
                maxLength="4"
                autoComplete="off"
                name="cardCvv"
                onChange={handleFormChange}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                ref={cardCvvRef}
              />
            </div>
          </div>
        </div>
        <div className="card-input" style={{ marginTop: "20px" }}>
          <form
            ref={payfortFormref}
            action={`${process.env.NEXT_PUBLIC_QAWAIM_SOFTWARE_PAYFOR_ENVIRONMENT_URL}`}
            method="POST"
          >
            <input type="hidden" name="access_code" value={`${accessCode}`} />
            <input type="hidden" name="card_holder_name" value={cardHolder} />
            <input
              type="hidden"
              name="card_number"
              value={cardNumber.replace(/\s/g, "")}
            />
            <input type="hidden" name="card_security_code" value={cardCvv} />
            <input type="hidden" name="expiry_date" value={expiryDate} />
            <input type="hidden" name="language" value={lang} />
            <input
              type="hidden"
              name="merchant_identifier"
              value={`${merchantIdentifier}`}
            />
            <input type="hidden" name="merchant_reference" value={""} />
            <input type="hidden" name="remember_me" value="NO" />
            <input
              type="hidden"
              name="return_url"
              value={`${process.env.NEXT_PUBLIC_QAWAIM_USER_PORTAL_URL}/aps_online/register`}
            />
            <input type="hidden" name="service_command" value="TOKENIZATION" />
            <input type="hidden" name="signature" value={signature} />
            {transaction &&
              transaction?.getTransactionByIDInvoice
                ?.transaction_payment_token && (
                <input
                  type="hidden"
                  name="token_name"
                  value={
                    transaction?.getTransactionByIDInvoice
                      ?.transaction_payment_token
                  }
                />
              )}
          </form>
          <HawaButton
            fullWidth
            onClick={handlePayfortForm}
            text={<span className="pay-new-btn-txt">{t("pay-now")}</span>}
          />{" "}
        </div>
      </div>
    </div>
  );
}
