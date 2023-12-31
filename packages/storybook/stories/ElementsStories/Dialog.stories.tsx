import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/button";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogStep,
  DialogBody,
  DialogCarousel,
  DialogSteps,
  DialogCarouselContent
} from "@sikka/hawa/dialog";
import { useDialogCarousel, useMultiStepDialog } from "@sikka/hawa/hooks";
import { Input } from "@sikka/hawa/input";

import { setLocale, t } from "../../translations/i18n";
import { PropsTable } from "../../utils";

const meta = {
  title: "Elements/Dialog",
  component: DialogContent,
  parameters: {
    docs: {
      toc: { headingSelector: "h1" },
      page: () => (
        <>
          <h1>{"<Dialog />"}</h1>
          <span>Default dialog that can be closed by clicking outside</span>
          <Story of={Default} />
          <PropsTable
            title={"Props"}
            componentProps={[
              {
                name: "id",
                type: "string",
                default: "",
                required: true,
                description:
                  "The id of the checkbox. Must be unique if there are more than one checkbox inside the elements."
              },
              {
                name: "label",
                type: "React.ReactNode",
                default: "",
                description: "The primary text next to the checkbox"
              },
              {
                name: "sublabel",
                type: "string",
                default: "",
                description: "The gray text underneath the label"
              },
              {
                name: "helperText",
                type: "string",
                default: "",
                description:
                  "The red warning text underneath the label. Use it conditionally if there's a warning or an error. "
              },
              {
                name: "onCheckedChange",
                type: "function",
                default: "",
                description:
                  "A callback function to handle checking and unchecking the checkbox."
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: ""
              }
            ]}
          />

          <h1>Dialog Content</h1>
        </>
      )
    }
  },
  tags: ["autodocs"]
} as Meta;

export default meta;
type Story = StoryObj<typeof DialogContent>;

export const Default: Story = {
  render: (args: any) => {
    const [openDialog, setOpenDialog] = useState(false);
    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog onOpenChange={setOpenDialog} open={openDialog}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{t("are-you-sure")}</DialogTitle>
              <DialogDescription>
                {t("are-you-sure-description")}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant={"destructive"}
                onClick={() => setOpenDialog(false)}
              >
                {t("yes")}
              </Button>
              <Button variant={"outline"} onClick={() => setOpenDialog(false)}>
                {t("cancel")}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  args: {
    persist: true
  }
};
export const Persistent: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible}>
          <DialogTrigger asChild>
            <Button>Open Persistent Dialog</Button>
          </DialogTrigger>
          <DialogContent {...args}>
            <DialogHeader>
              <DialogTitle>Clicking outside doesn't close this</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setIsDialogVisible(false)}
                variant={"destructive"}
              >
                Yes, I am
              </Button>
              <Button
                variant={"outline"}
                onClick={() => setIsDialogVisible(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
  args: {
    persist: true,
    hideCloseButton: true
  }
};
export const RTL: Story = {
  render: (args: any) => {
    const [openDialog, setOpenDialog] = useState(false);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog onOpenChange={setOpenDialog} open={openDialog}>
          <DialogTrigger asChild>
            <Button>Open RTL Dialog</Button>
          </DialogTrigger>
          <DialogContent dir="rtl">
            <DialogHeader dir="rtl">
              <DialogTitle>هل انت متأكد؟</DialogTitle>
              <DialogDescription>
                لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك نهائيًا
                وإزالة بياناتك من خوادمنا.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                onClick={() => setOpenDialog(false)}
                variant={"destructive"}
              >
                نعم
              </Button>
              <Button onClick={() => setOpenDialog(false)} variant={"outline"}>
                إلغاء
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
};
export const Multistep: Story = {
  name: "Multistep",
  render: (args: any) => {
    const [openDialog, setOpenDialog] = useState(false);
    const stepIds = ["step-1", "step-2", "step-3"];
    const { currentStep, visibleStepRef, handleNext, handleBack } =
      useMultiStepDialog(stepIds[0], stepIds, setOpenDialog);

    return (
      <Dialog onOpenChange={setOpenDialog}>
        <DialogTrigger asChild>
          <Button> Open Multistep Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogSteps
            currentStep={currentStep}
            visibleStepRef={visibleStepRef}
          >
            <div>
              step 1
              <div>
                <PaymentMethodStep onMethodClicked={handleNext} />
                <Button onClick={handleNext}>Next</Button>
              </div>
            </div>
            <div>
              step 2
              <div>
                <FormFillStep />
                <div className="hawa-flex hawa-flex-row hawa-gap-2">
                  <Button onClick={handleBack}>Back</Button>
                  <Button onClick={handleNext}>Next</Button>
                </div>
              </div>
            </div>
            <div>
              step 3
              <div>
                <ResultStep />
                <Button onClick={handleBack}>Back</Button>
              </div>
            </div>
          </DialogSteps>
        </DialogContent>
      </Dialog>
    );
  }
};
export const MultistepCarousel: Story = {
  name: "Multistep - Carousel",
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const { emblaApi, emblaRef, nextStep, prevStep, canScrollPrev } =
      useDialogCarousel({
        direction: direction
      });
    const [openDialog, setOpenDialog] = useState(true);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog onOpenChange={setOpenDialog} open={openDialog}>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogCarouselContent
            hidePrevButton={!canScrollPrev} // Conditionally hide if cannot scroll to previous
            onPrev={emblaApi?.canScrollPrev && prevStep}
            persist
            dir={direction}
          >
            <DialogCarousel
              direction={direction}
              stepsApi={emblaApi}
              stepsRef={emblaRef}
            >
              <DialogStep id={"step-1"}>
                <DialogHeader>
                  <DialogTitle>Select Payment Method</DialogTitle>
                  <DialogDescription>
                    Please select a method of payment to move to the next step
                  </DialogDescription>
                </DialogHeader>
                <DialogBody className="hawa-flex hawa-flex-col hawa-justify-start hawa-gap-4">
                  <Button
                    onClick={() => nextStep()}
                    variant={"outline"}
                    className="hawa-w-full"
                  >
                    Credit Card
                  </Button>

                  <Button
                    onClick={() => nextStep()}
                    variant={"outline"}
                    className="hawa-w-full"
                  >
                    Paypal
                  </Button>
                  <Button
                    onClick={() => nextStep()}
                    variant={"outline"}
                    className="hawa-w-full"
                  >
                    Apple Pay
                  </Button>
                  <Button
                    onClick={() => nextStep()}
                    variant={"outline"}
                    className="hawa-w-full"
                  >
                    Crypto
                  </Button>
                </DialogBody>
              </DialogStep>
              <DialogStep id={"step-2"}>
                <DialogHeader>
                  <DialogTitle>Select Payment Method</DialogTitle>
                  <DialogDescription>
                    Please select a method of payment to move to the next step
                  </DialogDescription>
                </DialogHeader>

                <FormFillStep />
                <DialogFooter className="hawa-flex hawa-w-full hawa-flex-row  hawa-justify-between">
                  <Button onClick={() => prevStep()}>Back</Button>
                  <Button onClick={() => nextStep()}>Next</Button>
                </DialogFooter>
              </DialogStep>
              <DialogStep id={"step-3"}>
                <DialogHeader>
                  <DialogTitle>Congratulations</DialogTitle>
                  <DialogDescription>
                    Your payment was successfully processed{" "}
                  </DialogDescription>
                </DialogHeader>
                <ResultStep />
                <DialogFooter>
                  <Button onClick={() => setOpenDialog(false)}>Close</Button>
                </DialogFooter>
              </DialogStep>
            </DialogCarousel>
          </DialogCarouselContent>
        </Dialog>
      </div>
    );
  }
};

const PaymentMethodStep = (props: any) => (
  <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
    <Button
      onClick={props.onMethodClicked}
      variant={"outline"}
      className="hawa-w-full"
    >
      Credit Card
    </Button>
    <Button
      onClick={props.onMethodClicked}
      variant={"outline"}
      className="hawa-w-full"
    >
      Paypal
    </Button>
    <Button
      onClick={props.onMethodClicked}
      variant={"outline"}
      className="hawa-w-full"
    >
      Apple Pay
    </Button>
    <Button
      onClick={props.onMethodClicked}
      variant={"outline"}
      className="hawa-w-full"
    >
      Crypto
    </Button>
  </DialogBody>
);
const FormFillStep = () => (
  <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
    <Input label="Card number" placeholder="422 422 422 422" />
    <Input label="Name on card" placeholder="Fulan AlFulani" />
    <div className="hawa-flex hawa-flex-row hawa-gap-4">
      <Input label="Expiry date" placeholder="10/25" />
      <Input label="CVV" placeholder="123" />
    </div>
  </DialogBody>
);
const ResultStep = () => (
  <div>
    <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
      You paid for pro plan for 45 SAR /month
    </DialogBody>
  </div>
);