import useTranslation from "next-translate/useTranslation";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import PropTypes from "prop-types";

export const PaymentMethod = (props) => {
  const { t } = useTranslation("common");
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  return (
    <>
      {props.wallet ? (
        <PaymentMethodButton
          imageURL={`/wallet.png`}
          methodCode="wallet"
          methodLabel={t("current-wallet")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.creditcard ? (
        <PaymentMethodButton
          imageURL={`/visa-master.png`}
          methodCode="creditcard"
          methodLabel={t("credit-card")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.mada ? (
        <PaymentMethodButton
          imageURL={`/mada.png`}
          methodCode="mada"
          methodLabel={t("mada")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.stcpay ? (
        <PaymentMethodButton
          methodCode="stcpay"
          methodLabel={"STC Pay"}
          chip={t("soon")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {props.paypal ? (
        <PaymentMethodButton
          methodCode="paypal"
          methodLabel={t("paypal")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
      {isSafari && applepay && (
        <PaymentMethodButton
          methodCode="applepay"
          methodLabel={t("applepay")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      )}
      {props.googlepay ? (
        <PaymentMethodButton
          methodCode="googlepay"
          chip={t("soon")}
          methodLabel={t("googlepay")}
          handlePaymentMethod={props.handlePaymentMethod}
        />
      ) : null}
    </>
  );
};

const PaymentMethodButton = (props) => {
  return (
    <Button
      disabled={props?.chip ? true : false}
      fullWidth
      variant="contained"
      color="secondary"
      style={{
        backgroundColor: "white",
        opacity: props.chip ? 0.7 : 1,
        padding: 20,
        width: "90%",
        margin: 10
      }}
      onClick={(e) => props.handlePaymentMethod(e, props.methodCode)}
    >
      {props.imageURL ? (
        <div
          style={{
            width: "50%",
            textAlign: "right",
            paddingRight: 20
          }}
        >
          <img
            src={props.imageURL}
            style={{
              maxWidth: 70,
              maxHeight: 70,
              height: "auto"
            }}
          />
        </div>
      ) : null}
      <div
        style={{
          width: "50%",
          textAlign: props.imageURL ? "left" : "center"
        }}
      >
        {props.methodLabel}
        {props.chip ? (
          <Chip
            size="small"
            color="primary"
            label={props.chip}
            style={{ marginRight: 10, marginLeft: 10 }}
          />
        ) : null}
      </div>
    </Button>
  );
};

PaymentMethod.propTypes = {
  wallet: PropTypes.bool,
  handlePaymentMethod: PropTypes.func
};
