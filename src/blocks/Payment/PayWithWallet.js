import React from "react";
import { HawaButton } from "../../elements";
import { HawaContainer } from "../../layout";

export const PayWithWallet = (props) => {
  return (
    <HawaContainer>
      <div className="text-5xl font-extrabold text-center">
        {props.walletBalance || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <HawaButton
        type="submit"
        fullWidth
        onClick={props.handlePayWithWallet}
        text={"Pay Now"}
      />
    </HawaContainer>
  );
};
