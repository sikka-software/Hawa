import React from "react";
import PropTypes from "prop-types";

export const HawaItemCard = (props) => {
  let isArabic = props.lang === "ar";
  const handleParentClick = (e) => {
    e.stopPropagation();
    props.onCardClick();
  };
  return (
    <div
      // href="#"
      class="block pt-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 "
    >
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
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="px-6">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </div>
      <div className="p-3 mt-6 rounded-b-lg flex justify-end">
        <div class="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              class="mr-0 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* Profile */}
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              class="mr-0 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
            {/* Settings */}
          </button>
          <button
            type="button"
            class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
          >
            <svg
              aria-hidden="true"
              class="mr-0 w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            {/* Downloads */}
          </button>
        </div>
      </div>
    </div>

    // <Container
    //   onClick={handleParentClick}
    //   maxWidth="xs"
    //   variant="card-container"
    //   dataValue="parent"
    //   //   variant={props.selectedPlan ? "selected-plan-card" : "plan-card"}
    //   style={{ direction: isArabic ? "rtl" : "ltr" }}
    // >
    //   {props.header && (
    //     <Container style={{ zIndex: 20 }} variant="card-header">
    //       {props.headerActions && (
    //         <div
    //           style={{
    //             margin: 0,
    //             marginRight: -20,
    //             marginLeft: -20,
    //             marginBottom: -20,
    //             // backgroundColor: "red",
    //             display: "flex",
    //             paddingTop: 5,
    //             paddingLeft: 5,
    //             paddingRight: 5,
    //             justifyContent: "flex-end"
    //           }}
    //         >
    //           {props.headerActions}
    //         </div>
    //       )}
    //       {props.header}
    //     </Container>
    //   )}
    //   {props.content && (
    //     <Container style={{ zIndex: 20 }} variant="card-content">
    //       {props.content}
    //     </Container>
    //   )}

    //   {props.actions && (
    //     <Container style={{ zIndex: 20 }} variant="card-actions">
    //       {props.actions}
    //     </Container>
    //   )}
    // </Container>
  );
};
HawaItemCard.propTypes = {
  lang: PropTypes.string,
  onCardClick: PropTypes.func
};
