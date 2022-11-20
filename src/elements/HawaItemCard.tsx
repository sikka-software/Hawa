import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export const HawaItemCard = ({
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
      className="relative block max-w-sm rounded-lg border border-gray-200 bg-white pt-6 shadow-md  dark:border-gray-700 dark:bg-gray-800 "
      {...props}
    >
      {headerActions && (
        <div className="absolute right-0 top-0 flex justify-end pt-3 pr-3">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="inline-block rounded-lg text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            type="button"
            onClick={handleOpenActionHeader}
          >
            <span className="sr-only">Open dropdown</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className={`absolute ${
              openActionHeader ? "block" : "hidden"
            } right-0 top-7 z-10 w-44 list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:bg-gray-700`}
          >
            <ul className="py-1" aria-labelledby="dropdownButton">
              {headerActions.map(({ label, action }) => {
                return (
                  <li onClick={action}>
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className="px-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {header}{" "}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
      <div className="mt-6 flex justify-end rounded-b-lg p-3">{actions}</div>
    </div>
  );
};
HawaItemCard.propTypes = {
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
