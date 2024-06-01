import React, { FC, RefObject, useState, useEffect, useRef } from "react";

import { cn } from "@util/index";

import { Button } from "../button";

type BackToTopTypes = {
  /** Horizontal padding relative to the attached corner */
  paddingX?: number;
  /** Vertical padding relative to the attached corner */
  paddingY?: number;
  /** Increase to the threshold of the scroll value that has to be passed for the button to appear */
  paddingThreshold?: number;
  corner?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  anchor: RefObject<HTMLInputElement>;
};

export const BackToTop: FC<BackToTopTypes> = ({ ...props }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [rect, _setRect] = useState<DOMRect | null>(null);
  const self = useRef<HTMLButtonElement>(null);
  const _rect = useRef(rect);
  const setRect = (data: any) => {
    _rect.current = data;
    _setRect(data);
  };

  const getCoords = () => {
    let anchor = props.anchor.current;
    if (anchor) {
      return [anchor.scrollTop, anchor.scrollLeft];
    }
    return [0, 0];
  };

  const onScroll = () => {
    let [scrollTop, scrollLeft] = getCoords();
    let rect = props.anchor.current?.getBoundingClientRect();
    if (rect) {
      setVisible(scrollTop >= rect.height + (props.paddingThreshold || 100));
    }
  };

  const backToTop = () => {
    if (props.anchor.current) {
      props.anchor.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // FIXME: Observers and listeners run twice
  useEffect(() => {
    if (!props.anchor.current) return;

    props.anchor.current.addEventListener("scroll", onScroll);

    // Listens to rect changes. Alternatives like ResizeObserver & IntersectionObserver fail to detect positional changes consistently
    let interval = setInterval(() => {
      if (!props.anchor.current) return;

      let newRect = props.anchor.current.getBoundingClientRect();
      if (_rect.current == null) return setRect(newRect);

      if (
        !(
          _rect.current.top == newRect.top &&
          _rect.current.left == newRect.left &&
          _rect.current.width == newRect.width &&
          _rect.current.height == newRect.height
        )
      ) {
        setRect(newRect);
      }
    }, 1);

    return () => {
      props.anchor.current?.removeEventListener("scroll", onScroll);
      clearInterval(interval);
    };
  }, [onScroll, props.anchor]);

  const getStyles = () => {
    if (!props.anchor.current || !self.current) return {};

    let corner = props.corner || "bottom-right";
    let [vertical, horizontal] = corner.split("-");

    let anchorRect = props.anchor.current.getBoundingClientRect();
    let selfRect = self.current?.getBoundingClientRect();

    let width = horizontal == "right" ? anchorRect.width - selfRect.width : 0;
    let height = vertical == "bottom" ? anchorRect.height - selfRect.height : 0;

    let style = {
      top:
        anchorRect.y +
        height +
        (vertical == "bottom" ? -1 : 1) * (props.paddingX || 10),
      left:
        anchorRect.x +
        width +
        (horizontal == "right" ? -1 : 1) * (props.paddingX || 25),
    };

    return style;
  };

  return (
    <Button
      className={cn(
        "hawa-fixed hawa-cursor-pointer hawa-rounded hawa-transition-all",
        visible
          ? "hawa-pointer-events-all hawa-opacity-100"
          : "hawa-pointer-events-none hawa-opacity-0",
      )}
      onClick={backToTop}
      style={{
        ...getStyles(),
        transitionProperty: "opacity, background-color",
      }}
      ref={self}
      size="icon"
    >
      <svg
        className={cn(
          "hawa-h-6 hawa-w-6 hawa-shrink-0 hawa-rotate-180 hawa-transition-all disabled:hawa-bg-gray-200",
        )}
        aria-label="Arrow Icon"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
      </svg>
    </Button>
  );
};
