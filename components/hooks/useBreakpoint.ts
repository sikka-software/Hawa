import React, { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(window?.innerWidth);
  const resize = () => {
    setBreakpoint(window?.innerWidth);
  };

  useEffect(() => {
    if (typeof window == "undefined") return;

    // Client-side-only code
    window?.addEventListener("resize", resize);

    return () => {
      window?.removeEventListener("resize", resize);
    };
  }, []);

  return breakpoint;
};
