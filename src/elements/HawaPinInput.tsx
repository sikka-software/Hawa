import clsx from "clsx"
import React, { useEffect, useState } from "react"

type PinInputTypes = {
  label?: string
  icon?: JSX.Element
  digits: number
  width?: "normal" | "full"
  getPins?: any
}
export const HawaPinInput: React.FunctionComponent<PinInputTypes> = ({
  label,
  icon,
  digits,
  width = "normal",
  getPins,
  ...props
}) => {
  const [pin, setPin] = useState(Array.from(Array(digits)))

  const handleKeyDown = (e, index) => {
    let backTo = 0
    if (e.key === "Backspace") {
      e.target.value.length === 0 ? (backTo = index - 1) : (backTo = index)
      const previousInput = document.getElementById(`input-${backTo}`)
      previousInput?.focus()
    }
  }
  useEffect(() => {
    let unfilled = pin.includes(undefined)
    if (!unfilled) {
      getPins(pin)
    }
  })
  const handleChange = (e, index) => {
    if (!/^\d*$/.test(e.target.value)) {
      const newPin = [...pin]
      newPin[index] = ""
      setPin(newPin)
      return
    } else {
      const newPin = [...pin]
      newPin[index] = e.target.value
      setPin(newPin)

      if (e.target.value.length === 1) {
        const nextInput = document.getElementById(`input-${index + 1}`)
        nextInput?.focus()
      } else if (e.target.value.length === 0) {
        const previousInput = document.getElementById(`input-${index - 1}`)
        previousInput?.focus()
      }
    }
  }

  return (
    <div className="flex w-full flex-row justify-center gap-2">
      {pin.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          id={`input-${index}`}
          pattern="[0-9]*"
          className={clsx(
            "h-10 rounded bg-white text-center",
            width === "full" ? "w-full" : "w-10"
          )}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          {...props}
        />
      ))}
    </div>
  )
}
