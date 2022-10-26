import React from "react";

export default { title: "Elements/Buttontailwind", component: [ButtonV2] };

export const ButtonV2 = () => {
  return (
    <button className="rounded-lg bg-blue-700 text-white font-semibold text-lg px-4 py-2 hover:bg-blue-800">
      TailWind button
    </button>
  );
};
