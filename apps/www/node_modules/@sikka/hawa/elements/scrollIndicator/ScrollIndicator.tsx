import React, { FC, RefObject, useState, useEffect } from "react";

type ScrollIndicatorProps = {
  anchor: RefObject<HTMLInputElement>;
  inContainer?: boolean;
};

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({
  anchor,
  inContainer = false
}) => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const onScroll = () => {
    const scrollElement = anchor.current;
    if (scrollElement) {
      const { scrollTop, scrollHeight, clientHeight } = scrollElement;
      const totalScroll = scrollHeight - clientHeight;
      const scrollPosition = scrollTop;
      const percentageScrolled = (scrollPosition / totalScroll) * 100;
      setScrollPercentage(percentageScrolled);
    }
  };

  useEffect(() => {
    if (!anchor.current) return;

    anchor.current.addEventListener("scroll", onScroll);

    return () => {
      anchor.current?.removeEventListener("scroll", onScroll);
    };
  }, [anchor]);

  return (
    <div
      style={{
        position: inContainer ? "absolute" : "fixed",
        top: 0,
        left: 0,
        height: "5px",
        width: `${scrollPercentage}%`,
        backgroundColor: "hsl(var(--primary))"
      }}
    ></div>
  );
};
