import React from "react";

export const HawaTextField = (props) => {
  return (
    <div>
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message..."
        ></textarea>
      ) : (
        <input
          {...props}
          className="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      )}

      {props.helperText && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          {/* <span className="font-medium">Oh, snapp!</span> */}
          {props.helperText}
        </p>
      )}
    </div>
  );
};
