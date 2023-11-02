import React, { useEffect, useState, useRef, RefObject, FC } from "react";
import { cn } from "../util";

type BadgeTypes = {
  position: "right" | "left";
  anchor: RefObject<HTMLElement>;
};

export const Badge: FC<BadgeTypes> = ({ anchor, position = "right" }) => {
  const [badgePosition, setBadgePosition] = useState<any>(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const handlePositioning = () => {
      if (anchor.current && indicatorRef.current) {
        const rect = anchor.current.getBoundingClientRect();
        const parentRect = (
          indicatorRef.current as HTMLElement
        ).parentElement?.getBoundingClientRect();
        const style = window.getComputedStyle(anchor.current);
        const marginTop = parseFloat(style.marginTop.replace("px", ""));
        const marginRight = parseFloat(style.marginRight.replace("px", ""));

        if (parentRect) {
          setBadgePosition({
            top: rect.top - parentRect.top - marginTop - 4,
            left:
              position === "right"
                ? parentRect.right - parentRect.left - 6
                : rect.right -
                  parentRect.left -
                  parentRect.width -
                  marginRight -
                  4,
          });
        }
      }
    };

    handlePositioning();
    window.addEventListener("resize", handlePositioning);
    return () => {
      window.removeEventListener("resize", handlePositioning);
    };
  }, [anchor]);

  return (
    <div ref={indicatorRef} className="hawa-relative">
      {badgePosition && (
        <div
          style={{
            position: "absolute",
            top: badgePosition?.top,
            left: badgePosition?.left,
          }}
          className="hawa-bg-red-500 hawa-origin-center hawa-w-3 hawa-h-3 hawa-rounded-full "
        ></div>
      )}
    </div>
  );
};

export const BadgedComponent = ({
  children,
  className,
  hideBadge,
  position,
}: any) => {
  const ref = useRef(null);

  return (
    <div className={cn("hawa-relative", className)} ref={ref}>
      {!hideBadge && <Badge position={position} anchor={ref} />}
      {children}
    </div>
  );
};
