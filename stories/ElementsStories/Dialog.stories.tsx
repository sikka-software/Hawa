import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogStep,
  DialogBody,
  DialogSteps,
  Input,
} from "../../components/elements";
import { Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useEffect, useState } from "react";
import { PropsTable } from "../../sharedUI/docsUI";
import { MultiStepDialog } from "./MultiStepDialogStory";
import useDialogSteps from "../../components/hooks/useDialogSteps";

const meta = {
  title: "Elements/Dialog",
  component: DialogContent,
  argTypes: {
    "Dialog.persist": {
      name: "persist",
      description: "Description for persist prop",
    },
    "DialogContent.persist": {
      name: "persist",
      description: "Description for persist prop",
    },
    persist: {
      name: "persist",
      description: "Description for persist prop",
      type: { name: "boolean", required: false },
      defaultValue: false,
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
  },
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
                  "The id of the checkbox. Must be unique if there are more than one checkbox inside the elements.",
              },
              {
                name: "label",
                type: "React.ReactNode",
                default: "",
                description: "The primary text next to the checkbox",
              },
              {
                name: "sublabel",
                type: "string",
                default: "",
                description: "The gray text underneath the label",
              },
              {
                name: "helperText",
                type: "string",
                default: "",
                description:
                  "The red warning text underneath the label. Use it conditionally if there's a warning or an error. ",
              },
              {
                name: "onCheckedChange",
                type: "function",
                default: "",
                description:
                  "A callback function to handle checking and unchecking the checkbox.",
              },
              {
                name: "disabled",
                type: "boolean",
                default: "false",
                description: "",
              },
            ]}
          />

          <h1>Dialog Content</h1>
        </>
      ),
    },
  },
  tags: ["autodocs"],
} as Meta;

export default meta;
type Story = StoryObj<typeof DialogContent>;

export const Default: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Dialog>
        <DialogTrigger>
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
            <Button variant={"destructive"}>{t("yes")}</Button>
            <Button variant={"outline"}>{t("cancel")}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),

  args: {
    persist: true,
  },
};
export const Persistent: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    setLocale(locale);
    const [isDialogVisible, setIsDialogVisible] = useState(false);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog open={isDialogVisible} onOpenChange={setIsDialogVisible}>
          <DialogTrigger>
            <Button>Open Persistent Dialog</Button>
          </DialogTrigger>
          <DialogContent persist>
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
  },
};
export const RTL: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <Dialog>
        <DialogTrigger>
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
            <Button variant={"destructive"}>نعم</Button>
            <Button variant={"outline"}>إلغاء</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  ),
};
export const Multistep: Story = {
  render: (args: any) => (
    <div className="hawa-flex hawa-flex-row hawa-gap-2">
      <MultiStepDialog />
    </div>
  ),
};

export const Multistep2: Story = {
  render: (args: any) => {
    const stepIds = ["step-1", "step-2", "step-3"];
    const { emblaApi, emblaRef, currentStep, nextStep, prevStep } =
      useDialogSteps("step-1", stepIds);

    return (
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <Dialog open={true}>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            {/* {currentStep} */}
            <DialogSteps
              stepsApi={emblaApi}
              stepsRef={emblaRef}
              activeStep={currentStep}
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
                <DialogFooter className="hawa-flex hawa-flex-row hawa-justify-between  hawa-w-full">
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
                  <Button onClick={() => nextStep()}>Next (Loop)</Button>
                </DialogFooter>
              </DialogStep>
            </DialogSteps>
          </DialogContent>
        </Dialog>
      </div>
    );
  },
};

const PaymentMethodStep = () => (
  <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
    <Button variant={"outline"} className="hawa-w-full">
      Credit Card
    </Button>
    <Button variant={"outline"} className="hawa-w-full">
      Paypal
    </Button>
    <Button variant={"outline"} className="hawa-w-full">
      Apple Pay
    </Button>
    <Button variant={"outline"} className="hawa-w-full">
      Crypto
    </Button>
  </DialogBody>
);
const FormFillStep = () => (
  <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
    <Input label="Card number" placeholder="422 422 422 422" />
    <Input label="Card number" placeholder="422 422 422 422" />
    <Input label="Card number" placeholder="422 422 422 422" />
    <Input label="Card number" placeholder="422 422 422 422" />
  </DialogBody>
);

const ResultStep = () => (
  <div>
    <DialogBody className="hawa-flex hawa-flex-col hawa-gap-4">
      You paid for pro plan for 22.50 SAR /month
    </DialogBody>
  </div>
);
