import React, { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(window?.innerWidth);
  const resize = () => {
    setBreakpoint(window?.innerWidth);
  };

  useEffect(() => {
    // Ensure this code is only run on the client side
    if (typeof window !== "undefined") {
      // Now it's safe to use window
      setBreakpoint(window?.innerWidth);
      window?.addEventListener("resize", resize);

      return () => {
        window?.removeEventListener("resize", resize);
      };
    }
  }, []); // Empty dependency array ensures this useEffect runs once, similar to componentDidMount

  return breakpoint;
};
