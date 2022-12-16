import React from "react"

type SpinnerTypes = {}
export const HawaSpinner: React.FunctionComponent<SpinnerTypes> = (props) => {
  return (
    <div className="flex flex-row gap-x-3">
      <div className="h-4 w-4 animate-spin rounded-full  border-2 border-gray-400 border-t-white text-white"></div>
    </div>
  )
}
