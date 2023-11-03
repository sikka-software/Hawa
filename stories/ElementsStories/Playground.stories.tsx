import type { Meta, StoryObj } from "@storybook/react";
import {
  Alert,
  Button,
  Combobox,
  Input,
  Logos,
  PhoneInput,
  Select,
  Switch,
  Card,
  CardContent,
  Radio,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  SplitButton,
  Slider,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";

const meta = {
  title: "Elements/Playground",
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
  name: "ProgressBar (AI)",
  render: () => (
    <div className="min-h-screen flex items-center justify-center">
      <ProgressBar currentMetric={70} maxMetric={100} />
    </div>
  ),
};
export const Carousel: Story = {
  name: "Carousel (AI)",

  render: () => (
    <div className="min-h-screen flex items-center justify-center">
      <WidgetContainer />
    </div>
  ),
};
export const GaugeStory: Story = {
  name: "Gauge (AI)",
  render: () => (
    <div className="hawa-flex hawa-items-center hawa-justify-center hawa-min-h-screen">
      <Gauge value={23} />
    </div>
  ),
};
export const NavBar: Story = {
  name: "Navbar (AI)",

  render: () => (
    <div className="hawa-flex hawa-items-center hawa-justify-center hawa-min-h-screen">
      <ShopNavBar />
    </div>
  ),
};
export const WifiIcon: Story = {
  name: "Wifi Icon",
  render: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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

let roles = [
  {
    _id: "09849846540345",
    label: "Superadmin",
  },
  {
    _id: "013216506546584098",
    label: "Admin",
  },
  {
    _id: "84940984065496",
    label: "Viewer",
  },
  {
    _id: "6401651321",
    label: "User",
  },
  {
    _id: "84040984098",
    label: "Editor",
  },
];
export const SelectAndInput: Story = {
  name: "Select & Input",
  render: () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(true);
    return (
      <div>
        <div className="hawa-flex hawa-flex-row hawa-gap-2">
          <Button onClick={() => setPreview(!preview)}>Preview</Button>
          <Button onClick={() => setLoading(!loading)}>Loading</Button>
        </div>{" "}
        <div className="hawa-flex hawa-flex-col hawa-gap-2">
          <div className="hawa-flex hawa-gap-2 hawa-flex-col hawa-items-start  hawa-mb-4 hawa-py-2">
            <Input
              isLoading={loading}
              preview={preview}
              type={"text"}
              label={t("Input")}
              defaultValue={"Random text"}
              // helperText={"Testing helperText"}
            />
            <Combobox
              label="Role"
              preview={preview}
              isLoading={loading}
              data={roles}
              labelKey={"label"}
              valueKey={"_id"}
              texts={{
                placeholder: "Select something",
                searchPlaceholder: "Search ...",
              }}
              // helperText={"Testing helperText"}
              popoverClassName="hawa-w-full"
              defaultValue="84040984098"
            />

            <Input
              preview={preview}
              isLoading={loading}
              type={"text"}
              defaultValue={"Random text"}
              label={t("Input")}
              // helperText={"Testing helperText"}
            />
            <Select isLoading={loading} label={t("role")}>
              <option></option>
            </Select>
          </div>
          <div className="hawa-flex hawa-flex-row hawa-gap-2  hawa-mb-4 hawa-py-2">
            <Input
              isLoading={loading}
              type={"password"}
              label={t("password")}
            />
            <PhoneInput
              label="Phone number"
              // helperText={"helper text test"}
              preferredCountry={{ label: "+966" }}
              // handleChange={field.onChange}
            />
          </div>
        </div>
      </div>
    );
  },
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
// style={{ paddingLeft: props.preview ? 0 : 16, paddingRight: 0 }}

export const ToScreenshot: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(true);
    return (
      <div className="hawa-h-[calc(60vh)] hawa-flex hawa-flex-col hawa-justify-center ">
        <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-drop-shadow-xl hawa-justify-center">
          <div
            className="hawa-flex hawa-flex-col hawa-flex-wrap hawa-gap-2"
            dir="rtl"
          >
            <Input
              isLoading={loading}
              type={"password"}
              label={"إسم الخانة"}
              dir="rtl"
            />
            <Tabs defaultValue="account" dir={"rtl"}>
              <TabsList className="hawa-w-full">
                <TabsTrigger value="account">{t("account")}</TabsTrigger>
                <TabsTrigger value="password">{t("password")}</TabsTrigger>
                <TabsTrigger value="settings">{t("settings")}</TabsTrigger>
                <TabsTrigger value="display">{t("display")}</TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="hawa-flex hawa-flex-row hawa-gap-2">
              <Button variant={"outline"} className="hawa-bg-white ">
                إلغاء
              </Button>
              <Button>حفظ</Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="hawa-bg-white"
              >
                <Logos.github className="hawa-icon hawa-text-gray-500" />
              </Button>
              <Button
                variant={"outline"}
                size={"icon"}
                className="hawa-bg-white"
              >
                <Logos.sikka className="hawa-icon hawa-text-gray-500" />
              </Button>
              <SplitButton
                className="hawa-bg-white"
                variant={"outline"}
                menuItems={[
                  {
                    label: `Discard changes`,
                    value: 10,
                    action: () => console.log("discarding changes"),
                  },
                  { label: `Save as draft`, value: 10 },
                  { label: `Send for review`, value: 10 },
                ]}
              >
                نشر
              </SplitButton>
            </div>
            <div className="hawa-flex hawa-flex-row hawa-gap-2">
              <Switch />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
