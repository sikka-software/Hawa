import React from "react";
import { HawaButton } from "../../elements";

export const PayWithWallet = (props) => {
  return (
    <div className="flex flex-col bg-blue-300 rounded-xl p-4">
      <div className="text-5xl font-extrabold text-center">
        {props.walletBalance || "0"}
        <div className="text-sm font-normal">{props.currency || "SAR"}</div>
      </div>
      <HawaButton type="submit" fullWidth onClick={props.handlePayWithWallet}>
        {"Pay Now"}
      </HawaButton>
    </div>
  );
};
