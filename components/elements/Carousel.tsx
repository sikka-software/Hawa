import React, { PropsWithChildren, useEffect, useState } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { cn } from "../util";

interface CarouselProps {
  items: React.ReactNode[];
  showArrows?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
}
type Props = CarouselProps & EmblaOptionsType;

export const Carousel = (props: PropsWithChildren<Props>) => {
  const {
    children,
    items,
    showArrows,
    autoplay,
    autoplayInterval = 3000,
    ...options
  } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: autoplay ? true : options.loop || false,
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
          <div className="hawa-h-full hawa-flex">
            {items?.map((item, i) => (
              <div
                key={i}
                className="hawa-h-full hawa-justify-center hawa-flex  hawa-items-center  hawa-min-w-0 hawa-flex-[0_0_100%]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dots
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

type DotsProps = {
  itemsLength: number;
  selectedIndex: number;
  onDotClick: (index: number) => void;
};
const Dots = ({ onDotClick, itemsLength, selectedIndex }: DotsProps) => {
  const arr = new Array(itemsLength).fill(0);
  return (
    <div className="hawa-flex hawa-gap-1 hawa-z-50 hawa-my-2 hawa-justify-center">
      {arr.map((_, index) => {
        const selected = index === selectedIndex;
        return (
          <div
            onClick={() => onDotClick(index)}
            className={cn(
              "hawa-h-2 hover:hawa-cursor-pointer hawa-rounded-full hawa-transition-all hawa-duration-300 hawa-bg-primary",
              !selected
                ? "hawa-opacity-50 hawa-w-2"
                : "hawa-opacity-100 hawa-w-6"
            )}
            key={index}
          ></div>
        );
      })}
    </div>
  );
};

type ControlsProps = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: ControlsProps) => {
  return (
    <div className="hawa-flex hawa-justify-end hawa-gap-2 ">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={cn(
          "hawa-p-2 hawa-rounded-full hawa-absolute -hawa-translate-y-2 hawa-top-1/2 hawa-start-0 hawa-text-white ",
          !props.canScrollPrev && "hawa-bg-primary/50",
          props.canScrollPrev && "hawa-bg-primary"
        )}
      >
        <svg
          aria-label="Chevron Right Icon"
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="hawa-h-2 hawa-w-2 hawa-rotate-180 hawa-shrink-0 hawa-transition-transform hawa-duration-200 "
        >
          <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
        </svg>
      </button>
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={cn(
          "hawa-p-2 hawa-rounded-full hawa-absolute -hawa-translate-y-2 hawa-top-1/2 hawa-end-0 hawa-text-white ",
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
