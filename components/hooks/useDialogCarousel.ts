import React, { useEffect, useState } from "react";

import AutoHeight from "embla-carousel-auto-height";
import useEmblaCarousel from "embla-carousel-react";

export const useDialogCarousel = (options?: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, watchDrag: false, startIndex: 0, ...options },
    [AutoHeight({ destroyHeight: "fit", active: true })]
  );
  // const [currentStep, setCurrentStep] = useState(initialStepId);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const checkCanScrollPrev = () => {
    if (emblaApi) {
      setCanScrollPrev(emblaApi.canScrollPrev());
    }
  };
  const nextStep = () => {
    if (emblaApi) {
      console.log("going to NEXT 👉");
      emblaApi.scrollNext();
    }
  };

  const prevStep = () => {
    if (emblaApi) {
      console.log("going to BACK 👈");
      emblaApi.scrollPrev();
    }
  };
  useEffect(() => {
    checkCanScrollPrev(); // Initial check
    emblaApi && emblaApi.on("select", checkCanScrollPrev); // Update on slide change
    return () => {
      emblaApi && emblaApi.off("select", checkCanScrollPrev);
    };
  }, [emblaApi]);

  return {
    emblaRef,
    emblaApi,
    nextStep,
    prevStep,
    canScrollPrev
  };
};
