import React from "react";

const useOutsideClick = (callback: () => void) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // document.addEventListener("click", handleClick, true);
    document.addEventListener("mousedown", handleClickOutside, true);
    document.addEventListener("touchstart", handleClickOutside, true); // Ensure touch events are handled

    return () => {
      // document.removeEventListener("click", handleClick, true);
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
    };
  }, [ref, callback]);

  return ref;
};
export default useOutsideClick;
