import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

//
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
  TabsTrigger, // SplitButton,
  Slider,
  Textarea,
} from "../../../components/elements";
import { SplitButton } from "../../../components/elements/splitButton";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Elements/Playground",
  component: Alert,
} satisfies Meta<typeof Alert>;

const ProgressBar = (props: any) => {
  const percentage = (props.currentMetric / props.maxMetric) * 100;

  return (
    <div className="hawa-rounded-md hawa-bg-gray-100 hawa-p-4">
      {/* Numeric display of the current metric value */}
      <div className="hawa-mb-4 hawa-text-center hawa-text-xl hawa-font-bold">
        {props.currentMetric}/{props.maxMetric}
      </div>

      {/* Horizontal progress bar */}
      <div className="hawa-relative hawa-h-6 hawa-overflow-hidden hawa-rounded-md hawa-bg-gray-300">
        <div
          style={{ width: `${percentage}%` }}
          className="hawa-absolute hawa-h-full hawa-bg-gradient-to-r hawa-from-green-400 hawa-to-red-500"
        ></div>
      </div>

      {/* Timeline of past usage with small circular indicators (sample) */}
      <div className="hawa-mt-4 hawa-flex hawa-justify-between">
        <span className="hawa-h-2 hawa-w-2 hawa-rounded-full hawa-bg-green-400"></span>
        <span className="hawa-h-2 hawa-w-2 hawa-rounded-full hawa-bg-yellow-400"></span>
        <span className="hawa-h-2 hawa-w-2 hawa-rounded-full hawa-bg-red-500"></span>
        <span className="hawa-h-2 hawa-w-2 hawa-rounded-full hawa-bg-green-400"></span>
        <span className="hawa-h-2 hawa-w-2 hawa-rounded-full hawa-bg-yellow-400"></span>
      </div>
    </div>
  );
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  name: "ProgressBar (AI)",
  render: () => (
    <div className="flex min-h-screen items-center justify-center">
      <ProgressBar currentMetric={70} maxMetric={100} />
    </div>
  ),
};
export const Carousel: Story = {
  name: "Carousel (AI)",

  render: () => (
    <div className="flex min-h-screen items-center justify-center">
      <WidgetContainer />
    </div>
  ),
};
export const GaugeStory: Story = {
  name: "Gauge (AI)",
  render: () => (
    <div className="hawa-flex hawa-min-h-screen hawa-items-center hawa-justify-center">
      <Gauge value={23} />
    </div>
  ),
};
export const NavBar: Story = {
  name: "Navbar (AI)",

  render: () => (
    <div className="hawa-flex hawa-min-h-screen hawa-items-center hawa-justify-center">
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
        className="hawa-animate-pulse hawa-delay-500 hawa-duration-1000"
        d="M5 13a10 10 0 0 1 14 0"
      />
      <path
        className="hawa-animate-pulse hawa-delay-300 hawa-duration-1000"
        d="M8.5 16.5a5 5 0 0 1 7 0"
      />
      <path
        className="hawa-animate-pulse hawa-delay-100 hawa-duration-1000"
        d="M2 8.82a15 15 0 0 1 20 0"
      />
      <line
        className="hawa-animate-pulse hawa-delay-75 hawa-duration-1000"
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
          <div className="hawa-mb-4 hawa-flex hawa-flex-col hawa-items-start hawa-gap-2 hawa-py-2">
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

            <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-w-full">
              <Textarea
                showCount
                label={"This is textarea"}
                // preview={preview}
                isLoading={loading}
                countPosition="top"
                textareaProps={{
                  maxLength: 100,
                  placeholder: "Placeholder text here",
                }}
              />

              <Textarea
                showCount
                label={"This is textarea"}
                isLoading={loading}
                // preview={preview}
                textareaProps={{
                  maxLength: 100,
                  placeholder: "Placeholder text here",
                }}
              />
            </div>
            <div className="hawa-flex hawa-flex-row hawa-gap-2 hawa-w-full">
              <Input
                // preview={preview}
                isLoading={loading}
                type={"text"}
                defaultValue={"Random text"}
                label={t("Input")}
                // helperText={"Testing helperText"}
              />
              {/* <Select isLoading={loading} label={t("role")}>
              <option></option>
            </Select> */}

              <Select
                label={"Select Input"}
                placeholder={"Choose something"}
                isCreatable={false}
                isClearable={false}
                isSearchable={true}
                defaultValue={{ label: "Chocolate" }}
                helperText="Helper text here"
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },

                  { value: "banana", label: "Banana" },
                  { value: "mango", label: "Mango" },
                  { value: "apple", label: "Apple" },

                  { value: "kiwi", label: "Kiwi" },
                  { value: "grape", label: "Grape" },
                  { value: "orange", label: "Orange" },

                  { value: "pear", label: "Pear" },
                  { value: "peach", label: "Peach" },
                  { value: "plum", label: "Plum" },
                ]}
                onChange={(e: any) => console.log("onchange triggered", e)}
                // {...args}
              />
              <Select
                label={"Select Input"}
                placeholder={"Choose something"}
                isCreatable={false}
                isMulti={true}
                isClearable={false}
                isSearchable={true}
                defaultValue={{ label: "Chocolate" }}
                helperText="Helper text here"
                options={[
                  { value: "chocolate", label: "Chocolate" },
                  { value: "strawberry", label: "Strawberry" },
                  { value: "vanilla", label: "Vanilla" },

                  { value: "banana", label: "Banana" },
                  { value: "mango", label: "Mango" },
                  { value: "apple", label: "Apple" },

                  { value: "kiwi", label: "Kiwi" },
                  { value: "grape", label: "Grape" },
                  { value: "orange", label: "Orange" },

                  { value: "pear", label: "Pear" },
                  { value: "peach", label: "Peach" },
                  { value: "plum", label: "Plum" },
                ]}
                onChange={(e: any) => console.log("onchange triggered", e)}
                // {...args}
              />
            </div>
          </div>
          <div className="hawa-mb-4 hawa-flex hawa-flex-row hawa-gap-2 hawa-py-2">
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
  <div className="hawa-relative hawa-mx-4 hawa-flex hawa-w-64 hawa-flex-col hawa-space-y-4 hawa-rounded-xl hawa-bg-white hawa-p-6 hawa-shadow-md">
    {props.isNew && (
      <span className="hawa-absolute hawa-right-4 hawa-top-4 hawa-rounded-full hawa-bg-green-500 hawa-px-2 hawa-py-1 hawa-text-xs hawa-text-white">
        New
      </span>
    )}
    <img
      src={props.imageSrc}
      alt={props.title}
      className="hawa-h-40 hawa-w-full hawa-rounded-md hawa-object-cover"
    />
    <h3 className="hawa-text-xl hawa-font-bold">{props.title}</h3>
    <p className="hawa-flex-grow hawa-text-gray-600">{props.description}</p>
  </div>
);
const WidgetContainer = () => (
  <div className="hawa-relative hawa-bg-gray-100 hawa-p-10">
    <button className="hawa-absolute hawa-left-4 hawa-top-1/2 hawa--translate-y-1/2 hawa-transform hawa-text-3xl hawa-text-gray-400">
      &lt;
    </button>

    <div className="hawa-flex hawa-items-center hawa-justify-center hawa-space-x-4 hawa-overflow-x-auto">
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

    <button className="hawa-absolute hawa-right-4 hawa-top-1/2 hawa--translate-y-1/2 hawa-transform hawa-text-3xl hawa-text-gray-400">
      &gt;
    </button>
  </div>
);
const Gauge = (props: any) => {
  const angle = (props.value / 100) * 180; // Assuming the gauge spans 180 degrees

  return (
    <div className="hawa-relative hawa-h-16 hawa-w-32">
      <div className="hawa-absolute hawa-bottom-0 hawa-h-32 hawa-w-32 hawa-rounded-full hawa-border hawa-border-gray-300"></div>
      <div className="hawa-absolute hawa-bottom-0 hawa-h-16 hawa-w-32 hawa-bg-white"></div>
      <div className="hawa-absolute hawa-bottom-0 hawa-h-16 hawa-w-32 hawa-overflow-hidden">
        <div
          className="hawa-h-32 hawa-w-32 hawa-origin-bottom hawa-transform hawa-rounded-full hawa-bg-green-400"
          style={{ transform: `rotate(${angle}deg)` }}
        ></div>
      </div>
      <div className="hawa-absolute hawa-bottom-0 hawa-flex hawa-h-16 hawa-w-full hawa-items-center hawa-justify-center">
        <span className="hawa-text-2xl hawa-font-bold">{props.value}/100</span>
      </div>
    </div>
  );
};
const ShopNavBar = () => {
  return (
    <div className="hawa-flex hawa-items-center hawa-justify-between hawa-rounded-lg hawa-bg-white hawa-p-2 hawa-shadow-md">
      <button className="hawa-flex hawa-items-center hawa-rounded hawa-border hawa-border-blue-600 hawa-bg-transparent hawa-px-3 hawa-py-2 hawa-text-blue-600">
        <i className="icon-home"></i>{" "}
        {/* Replace 'icon-home' with your home icon's class */}
        <span className="hawa-ml-2">Shop</span>
      </button>

      <button className="hawa-flex hawa-items-center hawa-rounded hawa-border hawa-border-transparent hawa-bg-transparent hawa-px-3 hawa-py-2 hawa-text-blue-600">
        <i className="icon-cart"></i>{" "}
        {/* Replace 'icon-cart' with your cart icon's class */}
        <span className="hawa-ml-2">Cart</span>
      </button>

      <button className="hawa-flex hawa-items-center hawa-rounded hawa-border hawa-border-blue-600 hawa-bg-blue-600 hawa-px-4 hawa-py-2 hawa-text-white">
        <i className="icon-checkout"></i>{" "}
        {/* Replace 'icon-checkout' with your checkout icon's class */}
        <span className="hawa-ml-2">Checkout</span>
      </button>
    </div>
  );
};
// style={{ paddingLeft: props.preview ? 0 : 16, paddingRight: 0 }}

export const FormPlayground: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(true);
    return (
      <div className="hawa-flex hawa-h-[calc(60vh)] hawa-flex-col hawa-justify-center">
        <div className="hawa-flex hawa-flex-row hawa-justify-center hawa-gap-2 hawa-drop-shadow-xl">
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
              <Button variant={"outline"} className="hawa-bg-white">
                إلغاء
              </Button>
              <Button className="hawa-w-full hawa-max-w-[90px]">حفظ</Button>
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
            <div className="hawa-flex hawa-flex-row hawa-gap-2">
              <Radio
                name="default"
                design="tabs"
                defaultValue="option2"
                labelProps={{ htmlFor: "horizontal" }}
                label="Horizontal orientation"
                helperText="Please pick an option"
                options={[
                  { label: `Option 1`, value: `option1` },
                  { label: `Option 2`, value: `option2`, disabled: true },
                  { label: `Option 3`, value: `option3` },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const ToScreenshot: Story = {
  render: () => {
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(true);
    return (
      <div className="hawa-flex hawa-h-[calc(60vh)] hawa-flex-col hawa-justify-center">
        <div className="hawa-flex hawa-flex-row hawa-justify-center hawa-gap-2 hawa-drop-shadow-xl">
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
              <Button variant={"outline"} className="hawa-bg-white">
                إلغاء
              </Button>
              <Button className="hawa-w-full hawa-max-w-[90px]">حفظ</Button>
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

// const UserDebugger = (props: any) => {
//   const [expand, setExpanded] = useState(false);
//   const [analyticsRadio, setAnalyticsRadio] = useState("allow");
//   return (
//     <div
//       className="absolute bottom-4 start-4 flex h-10 w-10 items-center justify-center overflow-y-auto rounded border bg-white text-black transition-all"
//       style={{
//         width: expand ? 200 : 40,
//         height: expand ? 200 : 40
//       }}
//       onClick={() => {
//         if (!expand) {
//           setExpanded(true);
//         }
//       }}
//     >
//       {expand ? (
//         <>
//           <div className=" absolute h-full w-full rounded">
//             <div className="absolute end-2 top-2">
//               <Button size={"smallIcon"} onClick={() => setExpanded(false)}>
//                 <X className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//           <div className=" h-full w-full p-2">
//             <div className="text-sm">Debugging</div>
//           </div>
//           <div className="absolute top-10 w-full p-2">
//             <Radio
//               label="Allow Analytics"
//               options={[
//                 { label: "Allow", value: "allow" },
//                 { label: "Disallow", value: "disallow" }
//               ]}
//               defaultValue={analyticsRadio}
//               onChange={(e: any) => setAnalyticsRadio(e)}
//             />
//           </div>
//         </>
//       ) : (
//         <ArrowUpRightSquare />
//       )}
//     </div>
//   );
// };
