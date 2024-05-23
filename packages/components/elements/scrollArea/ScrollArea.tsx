import * as React from "react";

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { cn } from "@util/index";

import { OrientationType } from "@_types/commonTypes";

type ScrollAreaProps = React.ComponentPropsWithoutRef<
  typeof ScrollAreaPrimitive.Root
> & {
  orientation?: OrientationType;
};

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, orientation = "vertical", ...props }, ref) => {
  const scrollAreaRef = React.useRef<HTMLDivElement | null>(null);
  const isDragging = React.useRef(false);
  const startPos = React.useRef({ x: 0, y: 0 });
  const scrollPos = React.useRef({ top: 0, left: 0 });

  const [showLeftFade, setShowLeftFade] = React.useState(false);
  const [showRightFade, setShowRightFade] = React.useState(false);

  const checkOverflow = () => {
    if (scrollAreaRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollAreaRef.current;
      setShowLeftFade(scrollLeft > 0);
      setShowRightFade(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startPos.current = { x: e.clientX, y: e.clientY };
    if (scrollAreaRef.current) {
      scrollPos.current = {
        top: scrollAreaRef.current.scrollTop,
        left: scrollAreaRef.current.scrollLeft,
      };
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !scrollAreaRef.current) return;
    const dx = e.clientX - startPos.current.x;
    const dy = e.clientY - startPos.current.y;
    if (orientation === "vertical") {
      scrollAreaRef.current.scrollTop = scrollPos.current.top - dy;
    } else {
      scrollAreaRef.current.scrollLeft = scrollPos.current.left - dx;
      checkOverflow();
    }
  };

  const onMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  React.useEffect(() => {
    checkOverflow();
    if (scrollAreaRef.current) {
      scrollAreaRef.current.addEventListener("scroll", checkOverflow);
      window.addEventListener("resize", checkOverflow);
    }
    return () => {
      if (scrollAreaRef.current) {
        scrollAreaRef.current.removeEventListener("scroll", checkOverflow);
      }
      window.removeEventListener("resize", checkOverflow);
    };
  }, []);

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn("hawa-relative hawa-overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "hawa-pointer-events-none hawa-absolute hawa-bg-background/  hawa-h-full hawa-w-[50px] hawa-z-10 hawa-start-0  hawa-mask-fade-right",
          showLeftFade ? "hawa-block" : "hawa-hidden",
        )}
      />
      <div
        className={cn(
          "hawa-pointer-events-none hawa-absolute hawa-bg-background/ hawa-mask-fade-left hawa-end-0 hawa-h-full hawa-w-[50px] hawa-z-10 ",
          showRightFade ? "hawa-block" : "hawa-hidden",
        )}
      />
      <ScrollAreaPrimitive.Viewport
        ref={scrollAreaRef}
        className="hawa-h-full hawa-w-full hawa-rounded-[inherit]"
        onMouseDown={onMouseDown}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation={orientation} />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});

ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "hawa-flex hawa-touch-none hawa-select-none hawa-transition-colors",
      orientation === "vertical" &&
        "hawa-h-full hawa-w-2.5 hawa-border-l hawa-border-l-transparent hawa-p-[1px]",
      orientation === "horizontal" &&
        "hawa-h-2.5 hawa-border-t hawa-border-t-transparent hawa-p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb
      className={cn(
        "hawa-relative hawa-rounded-full hawa-bg-border",
        orientation === "vertical" && "hawa-flex-1",
      )}
    />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));

ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
