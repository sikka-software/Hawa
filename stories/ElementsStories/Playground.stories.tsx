import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Playground",
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

const ProgressBar = ({ currentMetric, maxMetric }) => {
  const percentage = (currentMetric / maxMetric) * 100;

  return (
    <div className="hawa-p-4 hawa-bg-gray-100 hawa-rounded-md">
      {/* Numeric display of the current metric value */}
      <div className="hawa-text-center hawa-mb-4 hawa-text-xl hawa-font-bold">
        {currentMetric}/{maxMetric}
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

const WidgetCard = ({ imageSrc, title, description, isNew }) => (
  <div className="hawa-relative  hawa-bg-white hawa-rounded-xl hawa-shadow-md hawa-mx-4 hawa-p-6 hawa-flex hawa-flex-col hawa-space-y-4 hawa-w-64">
    {isNew && (
      <span className="hawa-absolute hawa-top-4 hawa-right-4 hawa-bg-green-500 hawa-text-white hawa-text-xs hawa-px-2 hawa-py-1 hawa-rounded-full">
        New
      </span>
    )}
    <img
      src={imageSrc}
      alt={title}
      className="hawa-w-full hawa-h-40 hawa-object-cover hawa-rounded-md"
    />
    <h3 className="hawa-text-xl hawa-font-bold">{title}</h3>
    <p className="hawa-text-gray-600 hawa-flex-grow">{description}</p>
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
