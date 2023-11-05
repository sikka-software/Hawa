import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";

const useDialogSteps = (initialStepId: any, stepIds: any) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: false, watchDrag: false },
    [AutoHeight({ destroyHeight: "fit", active: true })]
  );
  const [currentStep, setCurrentStep] = useState(initialStepId);

  const nextStep = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const prevStep = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  //   useEffect(() => {
  //     console.log("ref", emblaRef.current);
  //     if (emblaRef.current) {
  //       const tabIndex = emblaRef.current.id;
  //       console.log(tabIndex); // This will log the tabIndex value to the console
  //       setCurrentStep(tabIndex);
  //     }
  //   }, [emblaRef]);

  return {
    emblaRef,
    emblaApi,
    currentStep,
    nextStep,
    prevStep,
  };
};

export default useDialogSteps;
