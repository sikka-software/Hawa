import React, { FC, useState } from "react"

type DatepickerTypes = {}

export const HawaDatepicker: FC<DatepickerTypes> = () => {
  const [selectedDate, setSelectedDate] = useState("")

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
  }
  return (
    <div className="relative inline-block text-left">
      <span className="rounded-md shadow-sm">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="block w-full rounded border border-gray-300 bg-white p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
      </span>
    </div>
  )
}
