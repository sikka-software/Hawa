import React from "react";
import PropTypes from "prop-types";
import { HawaButton } from "../../elements";

export const NotFound = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div className="text-6xl font-bold">404</div>
      <div className="m-2 text-xl font-bold">Page Not Found</div>
      <div className="flex w-40 flex-col rounded-xl bg-blue-300 p-4">
        <div className="text-center">
          If you're lost please contact us help@sikka.io{" "}
        </div>
        <HawaButton width="full">Home</HawaButton>
      </div>
    </div>
  );
};
NotFound.propTypes = {
  /**
   *  An object of all the texts in the blocks
   */
  texts: PropTypes.shape({
    emailLabel: PropTypes.string
  })
};
