import React from "react";

type AddLinkType = {
  test?: any;
};

export const AddLink: React.FC<AddLinkType> = ({ test, ...props }) => {
  return <div>AddLink</div>;
};
