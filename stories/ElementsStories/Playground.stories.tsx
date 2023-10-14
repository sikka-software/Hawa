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
