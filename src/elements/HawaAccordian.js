import React from "react";
import PropTypes from "prop-types";
import "flowbite";

const AccordionItem = (props) => {
  let noRounding =
    "flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white";
  let roundedTop =
    "rounded-t-xl border-b-0 flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white";
  let roundedBottom =
    "rounded-b-xl border-t-0 flex items-center justify-between w-full p-5 font-medium text-left border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white";
  let accPaper =
    "p-5 font-light border border-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900";
  let accPaperRounded =
    "p-5 font-light border border-b-xl rounded-b-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900";
  return (
    <div>
      <h2 id={"accordion-collapse-heading-" + props.count}>
        <button
          type="button"
          className={
            props.count === 0 ? roundedTop : noRounding
            // : props.count === -1
            // ? roundedBottom
            // : noRounding
          }
          data-accordion-target={"#accordion-collapse-body-" + props.count}
          aria-expanded="true"
          aria-controls={"accordion-collapse-body-" + props.count}
        >
          <span>What is Flowbite?</span>
          <svg
            data-accordion-icon=""
            className="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id={"accordion-collapse-body-" + props.count}
        className=""
        aria-labelledby={"accordion-collapse-heading-" + props.count}
      >
        <div className={props.count === -1 ? accPaperRounded : accPaper}>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="/docs/getting-started/introduction/"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};
export const HawaAccordian = (props) => {
  let accordionContent = [
    { title: "etete", content: "teoite" },
    { title: "etete", content: "teoite" },
    { title: "etete", content: "teoite" },
    { title: "etete", content: "teoite" }
  ];
  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {accordionContent.map((acc, i) => {
        return (
          <AccordionItem
            title={acc.title}
            content={acc.content}
            count={accordionContent.length - 1 === i ? -1 : i}
          />
        );
      })}
    </div>
  );
};
HawaAccordian.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};
