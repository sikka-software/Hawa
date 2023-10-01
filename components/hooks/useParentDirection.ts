import { useEffect, useRef, useState } from "react"

function useParentDirection() {
  const parentRef = useRef(null)
  const [parentDirection, setParentDirection] = useState("ltr") // Default to 'ltr'

  useEffect(() => {
    // Function to get the computed direction of the parent element
    function getParentDirection() {
      if (parentRef.current) {
        const computedStyle = window.getComputedStyle(parentRef.current)
        const direction = computedStyle.getPropertyValue("direction")
        setParentDirection(direction)
      }
    }

    // Call the function initially
    getParentDirection()

    // Listen for resize or other events that might change the direction
    window.addEventListener("resize", getParentDirection)
    // Add more event listeners if needed

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", getParentDirection)
      // Remove other event listeners as necessary
    }
  }, [])

  return { parentRef, parentDirection }
}

export default useParentDirection
