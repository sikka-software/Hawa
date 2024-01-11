import React, { useEffect, useState } from "react";

import { DirectionType } from "@_types/commonTypes";
// import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { cn } from "@util/index";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  items: React.ReactNode[];
  showArrows?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  options?: EmblaOptionsType;
  direction?: DirectionType;
};
type DotsProps = {
  itemsLength: number;
  selectedIndex: number;
  direction: DirectionType;
  onDotClick: (index: number) => void;
};
type ControlsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  showArrows,
  options,
  autoplay,
  direction = "ltr",
  autoplayInterval = 3000,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    direction,
    loop: autoplay ? true : options?.loop || false
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function selectHandler() {
      const index = emblaApi?.selectedScrollSnap();
      setSelectedIndex(index || 0);
    }

    emblaApi?.on("select", selectHandler);
    return () => {
      emblaApi?.off("select", selectHandler);
    };
  }, [emblaApi]);

  useEffect(() => {
    let autoplayTimer: ReturnType<typeof setTimeout>;
    if (autoplay && emblaApi) {
      autoplayTimer = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);
    }

    return () => {
      if (autoplayTimer) clearInterval(autoplayTimer);
    };
  }, [emblaApi, autoplay, autoplayInterval]);

  const length = React.Children.count(items);
  const canScrollNext = !!emblaApi?.canScrollNext();
  const canScrollPrev = !!emblaApi?.canScrollPrev();
  return (
    <div className=" hawa-relative hawa-h-full">
      <div className="hawa-h-full hawa-overflow-hidden">
        <div className="hawa-h-full" ref={emblaRef}>
          <div className="hawa-flex hawa-h-full">
            {items?.map((item: any, i: any) => (
              <div
                key={i}
                className="hawa-flex hawa-h-full hawa-min-w-0  hawa-flex-[0_0_100%]  hawa-items-center hawa-justify-center"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dots
        direction={direction}
        itemsLength={length}
        selectedIndex={selectedIndex}
        onDotClick={(index) => emblaApi?.scrollTo(index)}
      />

      {showArrows && (
        <CarouselControls
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      )}
    </div>
  );
};

const Dots = ({
  onDotClick,
  itemsLength,
  selectedIndex,
  direction
}: DotsProps) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div
      dir={direction}
      className="hawa-z-50 hawa-my-2 hawa-flex hawa-justify-center hawa-gap-1"
    >
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            key={index}
            onClick={() => onDotClick(index)}
            className={cn(
              "hawa-h-2 hawa-rounded-full hawa-bg-primary hawa-transition-all hawa-duration-300 hover:hawa-cursor-pointer",
              !selected
                ? "hawa-w-2 hawa-opacity-50"
                : "hawa-w-6 hawa-opacity-100"
            )}
          ></div>
        );
      })}
    </div>
  );
};

const CarouselControls = (props: ControlsProps) => {
  return (
    <div className="hawa-flex hawa-justify-end hawa-gap-2 ">
      <button
        onClick={() => props.canScrollPrev && props.onPrev()}
        disabled={!props.canScrollPrev}
        className={cn(
          "hawa-absolute hawa-start-0 hawa-top-1/2 -hawa-translate-y-2 hawa-rounded-full hawa-p-2 hawa-text-white ",
          !props.canScrollPrev && "hawa-bg-primary/50",
          props.canScrollPrev && "hawa-bg-primary"
        )}
      >
        <svg
          aria-label="Chevron Right Icon"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="hawa-h-2 hawa-w-2 hawa-shrink-0 hawa-rotate-180 hawa-transition-transform hawa-duration-200 "
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </button>
      <button
        onClick={() => props.canScrollNext && props.onNext()}
        disabled={!props.canScrollNext}
        className={cn(
          "hawa-absolute hawa-end-0 hawa-top-1/2 -hawa-translate-y-2 hawa-rounded-full hawa-p-2 hawa-text-white ",
          !props.canScrollNext && "hawa-bg-primary/50",
          props.canScrollNext && "hawa-bg-primary"
        )}
      >
        <svg
          aria-label="Chevron Right Icon"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="hawa-h-2 hawa-w-2  hawa-shrink-0 hawa-transition-transform hawa-duration-200 "
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </button>
    </div>
  );
};
