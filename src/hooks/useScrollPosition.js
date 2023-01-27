import { useState, useEffect, useRef } from "react";

function useScrollPosition(ref) {
  const [scrollPosition, setScrollPosition] = useState(0);
  // const savedRef = useRef();

  // useEffect(() => {
  //   savedRef.current = ref;
  // }, [ref]);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(ref.current.scrollTop);
    }

    if (ref.current) {
      ref.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref]);

  return scrollPosition;
}

export default useScrollPosition;
