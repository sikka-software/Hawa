import React from "react";
import { HawaButton } from "../../elements";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout/HawaContainer";

export const AppLanding = (props) => {
  return (
    <HawaContainer>
      {props.handleSignIn && (
        <HawaButton color="primary" width="full" onClick={props.handleSignIn}>
          {props.texts.signIn}
        </HawaButton>
      )}
      {props.handleSignUp && (
        <HawaButton color="primary" width="full" onClick={props.handleSignUp}>
          {props.texts.signUp}
        </HawaButton>
      )}
      <HawaButton color="primary" width="full" onClick={props.handleLangauge}>
        {props.texts.lang}
      </HawaButton>
    </HawaContainer>
  );
};
AppLanding.propTypes = {
  texts: PropTypes.shape({
    signIn: PropTypes.string,
    signUp: PropTypes.string,
    lang: PropTypes.string
  }),
  handleSignIn: PropTypes.func,
  handleSignUp: PropTypes.func,
  handleLangauge: PropTypes.func
};
