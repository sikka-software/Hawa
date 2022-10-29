import React from "react";
import PropTypes from "prop-types";

export const HawaItemCard = (props) => {
  return (
    <div class="block pt-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
      {props.headerActions && (
        <div class="flex justify-end pr-6">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-6 h-6"
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
            class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
          >
            <ul class="py-1" aria-labelledby="dropdownButton">
              {props.headerActions.map((action) => {
                return (
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {action.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div class="px-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.header}{" "}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {props.content}
        </p>
      </div>
      <div className="p-3 mt-6 rounded-b-lg flex justify-end">
        {props.actions}
      </div>
    </div>
  );
};
HawaItemCard.propTypes = {
  lang: PropTypes.string,
  onCardClick: PropTypes.func
};
