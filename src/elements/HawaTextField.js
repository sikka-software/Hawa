import React from "react";

export const HawaTextField = (props) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          id="message"
          rows="4"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Your message..."
        />
      ) : (
        <input
          {...props}
          className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      )}

      {props.helperText && (
        <p className="mb-1 mt-1 text-xs text-red-600 dark:text-red-500">
          {/* <span className="font-medium">Oh, snapp!</span> */}
          {props.helperText}
        </p>
      )}
    </div>
  );
};
