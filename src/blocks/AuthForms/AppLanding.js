import React from "react";
import { HawaButton } from "../../elements";
import PropTypes from "prop-types";
import { HawaContainer } from "../../layout/HawaContainer";

export const AppLanding = (props) => {
  return (
    <HawaContainer>
      <HawaButton fullWidth text={"Sign In"} />
      <HawaButton fullWidth text={"Sign Up"} />
      <HawaButton fullWidth text={"عربي"} />
    </HawaContainer>
  );
};
AppLanding.propTypes = {
  texts: PropTypes.shape({
    signIn: PropTypes.string,
    signUp: PropTypes.string,
    language: PropTypes.string
  })
};
