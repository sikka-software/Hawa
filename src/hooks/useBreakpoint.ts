import { useState, useEffect } from "react"

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(1200)
  const resize = () => {
    setBreakpoint(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
    }
  }, [])

  return breakpoint
}

export default useBreakpoint
