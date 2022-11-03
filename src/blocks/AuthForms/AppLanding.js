import React from "react";
import { HawaButton } from "../../elements";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout/HawaContainer";

export const AppLanding = (props) => {
  return (
    <HawaContainer>
      <HawaButton
        fullWidth
        text={props.texts.signIn}
        onClick={props.handleSignIn}
      />
      <HawaButton
        fullWidth
        text={props.texts.signUp}
        onClick={props.handleSignUp}
      />
      <HawaButton
        fullWidth
        text={props.texts.langauge}
        onClick={props.handleLangauge}
      />
    </HawaContainer>
  );
};
AppLanding.propTypes = {
  texts: PropTypes.shape({
    signIn: PropTypes.string,
    signUp: PropTypes.string,
    language: PropTypes.string
  }),
  handleSignIn: PropTypes.func,
  handleSignUp: PropTypes.func,
  handleLangauge: PropTypes.func
};
