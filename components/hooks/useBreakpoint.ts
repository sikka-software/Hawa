import React, { useState, useEffect } from "react"

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(window?.innerWidth)
  const resize = () => {
    setBreakpoint(window?.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Client-side-only code

      window?.addEventListener("resize", resize)

      return () => {
        window?.removeEventListener("resize", resize)
      }
    }
  }, [])

  return breakpoint
}

export default useBreakpoint
