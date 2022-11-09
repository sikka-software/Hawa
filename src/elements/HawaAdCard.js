import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { HawaChip } from "./HawaChip";

export const HawaAdCard = ({
  actions,
  content,
  headerActions,
  header,
  ...props
}) => {
  const [openActionHeader, setOpenActionHeader] = useState(false);

  function handleOpenActionHeader() {
    setOpenActionHeader(!openActionHeader);
  }

  useEffect(() => {
    window.onclick = () => {
      console.log("clicking, state = ", openActionHeader);
      if (openActionHeader) {
        setOpenActionHeader(false);
      }
    };
    return () => (window.onClick = null);
  }, [openActionHeader]);

  return (
    <div
      className="flex max-w-xs rounded-lg border-gray-200 bg-white p-2 shadow-md  dark:border-gray-700 dark:bg-gray-800 "
      {...props}
    >
      <span className="mr-2 h-fit rounded bg-blue-100 px-2.5 py-0.5 text-[8px] font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
        Ad
      </span>
      <div>
        <div className="font-bold">Seera</div>
        <div>Try turning your CV into a link!</div>
      </div>
    </div>
  );
};
HawaAdCard.propTypes = {
  lang: PropTypes.string,
  actions: PropTypes.element,
  content: PropTypes.element,
  headerActions: PropTypes.arrayOf({
    label: PropTypes.string,
    action: PropTypes.func
  }),
  header: PropTypes.element,
  onCardClick: PropTypes.func
};
