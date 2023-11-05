import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./Dialog";  // Import your Dialog components

interface StepConfig {
  component: React.ReactNode;
  title: string;
  description?: string;
}

interface MultiStepDialogProps {
  steps: StepConfig[];
  isOpen: boolean;
  onClose: () => void;
}

const MultiStepDialog: React.FC<MultiStepDialogProps> = ({ steps, isOpen, onClose }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    // Reset the step index when the dialog is opened
    if (isOpen) {
      setCurrentStepIndex(0);
    }
  }, [isOpen]);

  const handleNext = () => {
    setCurrentStepIndex((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStepIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const currentStep = steps[currentStepIndex];

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{currentStep.title}</DialogTitle>
          {currentStep.description && (
            <DialogDescription>{currentStep.description}</DialogDescription>
          )}
        </DialogHeader>
        {currentStep.component}
        <DialogFooter>
          {currentStepIndex > 0 && <button onClick={handleBack}>Back</button>}
          {currentStepIndex < steps.length - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
          {currentStepIndex === steps.length - 1 && (
            <button onClick={onClose}>Finish</button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MultiStepDialog;
