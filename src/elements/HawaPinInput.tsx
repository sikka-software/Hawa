import clsx from "clsx"
import React from "react"

type PinInputTypes = {
  label: string
  icon?: JSX.Element
  digits?: number
}
export const HawaPinInput: React.FunctionComponent<PinInputTypes> = ({
  label,
  icon,
}) => {
  const validate = (evt) => {
    var theEvent = evt || window.event

    // Handle paste
    if (theEvent.type === "paste") {
      key = evt.clipboardData.getData("text/plain")
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which
      key = String.fromCharCode(key)
    }
    var regex = /[0-9]|\./
    if (!regex.test(key)) {
      theEvent.returnValue = false
      if (theEvent.preventDefault) theEvent.preventDefault()
    }
  }
  return (
    <div className="flex flex-row gap-2">
      <SinglePinInput
        onInput={
          (v) =>
            v.target.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1")
          // .replace(/[^0-9.]/g, "")
          // .replace(/(..*?)..*/g, "$1")
          // .replace(/^0[^.]/, "0")
        }
      />
      <SinglePinInput />
      <SinglePinInput />
      <SinglePinInput />
    </div>
  )
}

const SinglePinInput = (props) => (
  <input
    type="text"
    maxLength={1}
    className="h-10 w-10 bg-gray-200 text-center"
    {...props}
  />
)
