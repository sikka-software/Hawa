import React, { useState, useEffect } from "react";

export const useBreakpoint = () => {
  // Initialize breakpoint with a null value.
  const [breakpoint, setBreakpoint] = useState<any>(null);

  useEffect(() => {
    // Check if window is defined (i.e., if running on the client side)
    if (typeof window !== "undefined") {
      // Define the resize function within the effect.
      const resize = () => {
        setBreakpoint(window.innerWidth);
      };

      // Call resize initially to set the breakpoint based on the initial window size.
      resize();

      // Set up the resize event listener.
      window.addEventListener("resize", resize);

      // Clean up the event listener when the component is unmounted.
      return () => {
        window.removeEventListener("resize", resize);
      };
    }
  }, []); // The empty array ensures this useEffect runs once, similar to componentDidMount.

  return breakpoint;
};

// import React, { useState, useEffect } from "react";

// export const useBreakpoint = () => {
//   const [breakpoint, setBreakpoint] = useState(window?.innerWidth);
//   const resize = () => {
//     setBreakpoint(window?.innerWidth);
//   };

//   useEffect(() => {
//     // Ensure this code is only run on the client side
//     if (typeof window !== "undefined") {
//       // Now it's safe to use window
//       setBreakpoint(window?.innerWidth);
//       window?.addEventListener("resize", resize);

//       return () => {
//         window?.removeEventListener("resize", resize);
//       };
//     }
//   }, []); // Empty dependency array ensures this useEffect runs once, similar to componentDidMount

//   return breakpoint;
// };
