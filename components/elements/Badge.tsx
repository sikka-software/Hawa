import React, { useEffect, useState, useRef, RefObject, FC } from "react";
import { cn } from "../util";

type BadgeTypes = {
  position: "right" | "left";
  anchor: RefObject<HTMLElement>;
  size?: "small" | "default" | "large";
  text?: string | number;
};

export const Badge: FC<BadgeTypes> = ({
  anchor,
  position = "right",
  size = "default",
  text,
}) => {
  const [badgePosition, setBadgePosition] = useState<any>(null);
  const indicatorRef = useRef(null);
  const sizeStyles = {
    small: { top: 4, left: 6, right: 7, classes: "hawa-w-3 hawa-h-3" },
    default: { top: 4, left: 7, right: 5, classes: "hawa-w-3 hawa-h-3" },
    large: { top: 6, left: 12, right: 7, classes: "hawa-w-6 hawa-h-6" },
  };
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
            top: rect.top - parentRect.top - marginTop - sizeStyles[size].top,
            left:
              position === "right"
                ? parentRect.right - parentRect.left - sizeStyles[size].left
                : rect.right -
                  parentRect.left -
                  parentRect.width -
                  marginRight -
                  sizeStyles[size].right,
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
          className={cn(
            "hawa-bg-red-500 hawa-origin-center  hawa-rounded-full ",
            sizeStyles[size].classes,
            "hawa-text-white  hawa-text-[9px] hawa-flex hawa-flex-row hawa-justify-center hawa-items-center"
          )}
        >
          {size === "large" && text && text}
        </div>
      )}
    </div>
  );
};

export const BadgedComponent = ({
  children,
  className,
  hideBadge,
  position,
  size,
  text,
}: any) => {
  const ref = useRef(null);

  return (
    <div className={cn("hawa-relative", className)} ref={ref}>
      {!hideBadge && (
        <Badge size={size} text={text} position={position} anchor={ref} />
      )}
      {children}
    </div>
  );
};
