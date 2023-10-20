import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Combobox, Input, Select } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Playground (AI)",
  component: Alert,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Alert/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

const ProgressBar = (props: any) => {
  const percentage = (props.currentMetric / props.maxMetric) * 100;

  return (
    <div className="hawa-p-4 hawa-bg-gray-100 hawa-rounded-md">
      {/* Numeric display of the current metric value */}
      <div className="hawa-text-center hawa-mb-4 hawa-text-xl hawa-font-bold">
        {props.currentMetric}/{props.maxMetric}
      </div>

      {/* Horizontal progress bar */}
      <div className="hawa-relative hawa-h-6 hawa-rounded-md hawa-overflow-hidden hawa-bg-gray-300">
        <div
          style={{ width: `${percentage}%` }}
          className="hawa-absolute hawa-h-full hawa-bg-gradient-to-r hawa-from-green-400 hawa-to-red-500"
        ></div>
      </div>

      {/* Timeline of past usage with small circular indicators (sample) */}
      <div className="hawa-flex hawa-justify-between hawa-mt-4">
        <span className="hawa-w-2 hawa-h-2 hawa-bg-green-400 hawa-rounded-full"></span>
        <span className="hawa-w-2 hawa-h-2 hawa-bg-yellow-400 hawa-rounded-full"></span>
        <span className="hawa-w-2 hawa-h-2 hawa-bg-red-500 hawa-rounded-full"></span>
        <span className="hawa-w-2 hawa-h-2 hawa-bg-green-400 hawa-rounded-full"></span>
        <span className="hawa-w-2 hawa-h-2 hawa-bg-yellow-400 hawa-rounded-full"></span>
      </div>
    </div>
  );
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <div className="min-h-screen flex items-center justify-center">
      <ProgressBar currentMetric={70} maxMetric={100} />
    </div>
  ),
};
export const Carousel: Story = {
  render: () => (
    <div className="min-h-screen flex items-center justify-center">
      <WidgetContainer />
    </div>
  ),
};
export const GaugeStory: Story = {
  name: "Gauge",
  render: () => (
    <div className="hawa-flex hawa-items-center hawa-justify-center hawa-min-h-screen">
      <Gauge value={23} />
    </div>
  ),
};
export const NavBar: Story = {
  render: () => (
    <div className="hawa-flex hawa-items-center hawa-justify-center hawa-min-h-screen">
      <ShopNavBar />
    </div>
  ),
};
export const WifiIcon: Story = {
  name: "Wifi Icon (non-AI)",
  render: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      // class="lucide lucide-wifi"
    >
      <path
        className=" hawa-delay-500 hawa-duration-1000 hawa-animate-pulse"
        d="M5 13a10 10 0 0 1 14 0"
      />
      <path
        className="hawa-delay-300 hawa-duration-1000 hawa-animate-pulse"
        d="M8.5 16.5a5 5 0 0 1 7 0"
      />
      <path
        className="hawa-delay-100 hawa-duration-1000 hawa-animate-pulse"
        d="M2 8.82a15 15 0 0 1 20 0"
      />
      <line
        className="hawa-delay-75 hawa-duration-1000 hawa-animate-pulse"
        x1="12"
        x2="12.01"
        y1="20"
        y2="20"
      />
    </svg>
  ),
};
export const SelectAndInput: Story = {
  name: "Select & Input",
  render: () => (
    <div>
      <div className="hawa-flex hawa-flex-row hawa-gap-0 hawa-bg-red-100 hawa-mb-4">
        <Input type={"password"} label={t("password")} />
        <Select label={t("role")}>
          <option></option>
        </Select>
      </div>
      {/* <div className="hawa-grid hawa-grid-cols-1 hawa-items-start hawa-gap-4 md:hawa-grid-cols-2 lg:hawa-grid-cols-4">
        <Input type={"text"} label={t("username") + " *"} />
        <Input type={"text"} label={t("email") + " *"} />
        <Input type={"password"} label={t("password") + " *"} />
        <Select label={t("role") + " *"}>
          <option></option>
        </Select>
        <Input type={"text"} label={t("first-name") + " - " + t("english")} />
        <Input type={"text"} label={t("first-name") + " - " + t("arabic")} />
        <Input type={"text"} label={t("last-name") + " - " + t("english")} />
        <Input type={"text"} label={t("last-name") + " - " + t("arabic")} />
      </div> */}
    </div>
  ),
};

const WidgetCard = (props: any) => (
  <div className="hawa-relative  hawa-bg-white hawa-rounded-xl hawa-shadow-md hawa-mx-4 hawa-p-6 hawa-flex hawa-flex-col hawa-space-y-4 hawa-w-64">
    {props.isNew && (
      <span className="hawa-absolute hawa-top-4 hawa-right-4 hawa-bg-green-500 hawa-text-white hawa-text-xs hawa-px-2 hawa-py-1 hawa-rounded-full">
        New
      </span>
    )}
    <img
      src={props.imageSrc}
      alt={props.title}
      className="hawa-w-full hawa-h-40 hawa-object-cover hawa-rounded-md"
    />
    <h3 className="hawa-text-xl hawa-font-bold">{props.title}</h3>
    <p className="hawa-text-gray-600 hawa-flex-grow">{props.description}</p>
  </div>
);
const WidgetContainer = () => (
  <div className="hawa-relative hawa-p-10 hawa-bg-gray-100">
    <button className="hawa-absolute hawa-top-1/2 hawa-left-4 hawa-transform hawa--translate-y-1/2 hawa-text-3xl hawa-text-gray-400">
      &lt;
    </button>

    <div className="hawa-flex hawa-justify-center hawa-items-center hawa-space-x-4 hawa-overflow-x-auto">
      <WidgetCard
        imageSrc="https://source.unsplash.com/tVqQSfXQ_SI"
        title="Quiz"
        description="Engage your audience, test their knowledge, and provide an interactive learning experience."
        isNew={false}
      />

      <WidgetCard
        imageSrc="https://source.unsplash.com/tVqQSfXQ_SI"
        title="Wheel Of Fortune"
        description="Unleash the entertainment and engagement potential of our Wheel of Fortune widget."
        isNew={false}
      />

      <WidgetCard
        imageSrc="https://source.unsplash.com/tVqQSfXQ_SI"
        title="Social share"
        description="Encourage social sharing and boost your online presence with our social share widget."
        isNew={true}
      />
    </div>

    <button className="hawa-absolute hawa-top-1/2 hawa-right-4 hawa-transform hawa--translate-y-1/2 hawa-text-3xl hawa-text-gray-400">
      &gt;
    </button>
  </div>
);
const Gauge = (props: any) => {
  const angle = (props.value / 100) * 180; // Assuming the gauge spans 180 degrees

  return (
    <div className="hawa-relative hawa-w-32 hawa-h-16">
      <div className="hawa-absolute hawa-w-32 hawa-h-32 hawa-rounded-full hawa-border hawa-border-gray-300 hawa-bottom-0"></div>
      <div className="hawa-absolute hawa-w-32 hawa-h-16 hawa-bg-white hawa-bottom-0"></div>
      <div className="hawa-absolute hawa-w-32 hawa-h-16 hawa-overflow-hidden hawa-bottom-0">
        <div
          className="hawa-w-32 hawa-h-32 hawa-bg-green-400 hawa-rounded-full hawa-transform hawa-origin-bottom"
          style={{ transform: `rotate(${angle}deg)` }}
        ></div>
      </div>
      <div className="hawa-absolute hawa-w-full hawa-h-16 hawa-flex hawa-items-center hawa-justify-center hawa-bottom-0">
        <span className="hawa-text-2xl hawa-font-bold">{props.value}/100</span>
      </div>
    </div>
  );
};
const ShopNavBar = () => {
  return (
    <div className="hawa-bg-white hawa-shadow-md hawa-rounded-lg hawa-flex hawa-justify-between hawa-items-center hawa-p-2">
      <button className="hawa-px-3 hawa-py-2 hawa-bg-transparent hawa-text-blue-600 hawa-border hawa-border-blue-600 hawa-rounded hawa-flex hawa-items-center">
        <i className="icon-home"></i>{" "}
        {/* Replace 'icon-home' with your home icon's class */}
        <span className="hawa-ml-2">Shop</span>
      </button>

      <button className="hawa-px-3 hawa-py-2 hawa-bg-transparent hawa-text-blue-600 hawa-border hawa-border-transparent hawa-rounded hawa-flex hawa-items-center">
        <i className="icon-cart"></i>{" "}
        {/* Replace 'icon-cart' with your cart icon's class */}
        <span className="hawa-ml-2">Cart</span>
      </button>

      <button className="hawa-px-4 hawa-py-2 hawa-bg-blue-600 hawa-text-white hawa-border hawa-border-blue-600 hawa-rounded hawa-flex hawa-items-center">
        <i className="icon-checkout"></i>{" "}
        {/* Replace 'icon-checkout' with your checkout icon's class */}
        <span className="hawa-ml-2">Checkout</span>
      </button>
    </div>
  );
};
