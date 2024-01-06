import React from "react";

import { Button } from "@sikka/hawa/elements/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@sikka/hawa/elements/dialog";

import { cn } from "../../../components/util";

type DialogStep = "paymentMethod" | "formFill" | "result";

export const MultiStepDialog: React.FC = () => {
  const [currentStep, setCurrentStep] =
    React.useState<DialogStep>("paymentMethod");
  const [dialogHeight, setDialogHeight] = React.useState<any>(null);
  const visibleStepRef = React.useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  React.useEffect(() => {
    if (visibleStepRef.current) {
      console.log(visibleStepRef.current.offsetHeight); // log the offsetHeight

      setDialogHeight(visibleStepRef.current.offsetHeight);
    }
  }, [currentStep, isDialogOpen]);
  // Handler to advance to the next step
  const handleNext = () => {
    switch (currentStep) {
      case "paymentMethod":
        setCurrentStep("formFill");
        break;
      case "formFill":
        setCurrentStep("result");
        break;
      default:
        break;
    }
  };

  const handleBack = () => {
    switch (currentStep) {
      case "formFill":
        setCurrentStep("paymentMethod");
        break;
      case "result":
        setCurrentStep("formFill");
        break;
      default:
        break;
    }
  };

  return (
    <Dialog onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button> Open Multistep Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="hawa-relative" style={{ height: dialogHeight }}>
          {["paymentMethod", "formFill", "result"].map((step) => (
            <div
              ref={currentStep === step ? visibleStepRef : null}
              key={step}
              className={cn(
                "hawa-absolute hawa-left-0 hawa-top-0 hawa-transition-opacity hawa-duration-300",
                currentStep === step ? "hawa-opacity-100" : "hawa-opacity-0",
                currentStep === step ? "hawa-visible" : "hawa-invisible"
              )}
            >
              {step === "paymentMethod" && (
                <PaymentMethodDefaultStep onNext={handleNext} />
              )}
              {step === "formFill" && (
                <FormFillDefaultStep onNext={handleNext} onBack={handleBack} />
              )}
              {step === "result" && <ResultDefaultStep onBack={handleBack} />}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const PaymentMethodDefaultStep: React.FC<{ onNext: () => void }> = ({
  onNext
}) => (
  <div>
    <div>Select Payment Method</div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      aperiam expedita fugit corporis voluptates corrupti vero, illum officia
      quisquam sunt earum iusto, praesentium assumenda iure nulla cumque
      architecto molestias et!
    </div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      aperiam expedita fugit corporis voluptates corrupti vero, illum officia
      quisquam sunt earum iusto, praesentium assumenda iure nulla cumque
      architecto molestias et!
    </div>
    <Button onClick={onNext}>Next</Button>
  </div>
);

const FormFillDefaultStep: React.FC<{
  onNext: () => void;
  onBack: () => void;
}> = ({ onNext, onBack }) => (
  <div>
    <div>Fill the form</div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      aperiam expedita fugit corporis voluptates corrupti vero, illum officia
      quisquam sunt earum iusto, praesentium assumenda iure nulla cumque
      architecto molestias et!
    </div>
    <Button onClick={onBack}>Back</Button>
    <Button onClick={onNext}>Next</Button>
  </div>
);
const ResultDefaultStep: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <div>
    <div>Results here</div>
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      aperiam expedita fugit corporis voluptates corrupti vero, illum officia
      quisquam sunt earum iusto, praesentium assumenda iure nulla cumque
      architecto molestias et!
    </div>
    <Button onClick={onBack}>Back</Button>
  </div>
);
