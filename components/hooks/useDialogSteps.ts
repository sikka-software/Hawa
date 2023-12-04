import React, { useState, useEffect, useRef } from "react";

export const useMultiStepDialog = (
  initialStep: any,
  stepIds: any[],
  setOpenDialog: any
) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [dialogHeight, setDialogHeight] = useState(null);
  const visibleStepRef = useRef<any>(null);

  useEffect(() => {
    if (visibleStepRef.current) {
      setDialogHeight(visibleStepRef.current.offsetHeight);
    }
  }, [currentStep, setOpenDialog]);

  const handleNext = () => {
    const currentIndex = stepIds.indexOf(currentStep);
    if (currentIndex < stepIds.length - 1) {
      setTimeout(() => {
        setCurrentStep(stepIds[currentIndex + 1]);
      }, 100);
    }
  };
  const handleBack = () => {
    const currentIndex = stepIds.indexOf(currentStep);
    if (currentIndex > 0) {
      setTimeout(() => {
        setCurrentStep(stepIds[currentIndex - 1]);
      }, 100);
    }
  };

  return {
    currentStep,
    dialogHeight,
    visibleStepRef,
    handleNext,
    handleBack
  };
};
