import { useState, useEffect, memo, useCallback, useRef } from "react";
import CForm from "../Form/CForm";
import Card from "../Form/Card";

const initialState = {
  cardNumber: "#### #### #### ####",
  cardHolder: "FULL NAME",
  cardMonth: "",
  cardYear: "",
  cardCvv: "",
  isCardFlipped: false
};

const Payfort = (props) => {
  const [state, setState] = useState(initialState);
  const [currentFocusedElm, setCurrentFocusedElm] = useState(null);

  const updateStateValues = useCallback(
    (keyName, value) => {
      setState({
        ...state,
        [keyName]: value || initialState[keyName]
      });
    },
    [state]
  );
  // References for the Form Inputs used to focus corresponding inputs.
  let formFieldsRefObj = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef(),
    cardCvv: useRef()
  };

  let focusFormFieldByKey = useCallback((key) => {
    formFieldsRefObj[key].current.focus();
  });

  // This are the references for the Card DIV elements.
  let cardElementsRef = {
    cardNumber: useRef(),
    cardHolder: useRef(),
    cardDate: useRef()
  };

  let onCardFormInputFocus = (_event, inputName) => {
    const refByName = cardElementsRef[inputName];
    setCurrentFocusedElm(refByName);
  };

  let onCardInputBlur = useCallback(() => {
    setCurrentFocusedElm(null);
  }, []);

  return (
    <CForm
      cardNumber={state.cardNumber}
      cardHolder={state.cardHolder}
      cardMonth={state.cardMonth}
      cardYear={state.cardYear}
      cardCvv={state.cardCvv}
      onUpdateState={updateStateValues}
      cardNumberRef={formFieldsRefObj.cardNumber}
      cardHolderRef={formFieldsRefObj.cardHolder}
      cardDateRef={formFieldsRefObj.cardDate}
      cardCvvRef={formFieldsRefObj.cardCvv}
      onCardInputFocus={onCardFormInputFocus}
      onCardInputBlur={onCardInputBlur}
      handlePaymentPayfort={props.handlePaymentPayfort}
      paymentMethod={props.paymentMethod}
      register={props.register}
    >
      <Card
        cardNumber={state.cardNumber}
        cardHolder={state.cardHolder}
        cardMonth={state.cardMonth}
        cardYear={state.cardYear}
        cardCvv={state.cardCvv}
        isCardFlipped={state.isCardFlipped}
        currentFocusedElm={currentFocusedElm}
        onCardElementClick={focusFormFieldByKey}
        cardNumberRef={cardElementsRef.cardNumber}
        cardHolderRef={cardElementsRef.cardHolder}
        cardDateRef={cardElementsRef.cardDate}
      ></Card>
    </CForm>
  );
};

export default Payfort;
