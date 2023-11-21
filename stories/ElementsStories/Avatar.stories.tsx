import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Avatar, BadgedComponent } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { Upload } from "lucide-react";

const meta = {
  title: "Elements/Avatar",
  component: Avatar,
  parameters: {
    // layout: "centered",
    docs: {
      page: () => (
        <>
          <h1>{"<Avatar/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-6">
        <div className="hawa-flex hawa-flex-row hawa-gap-6">
          <div>
            <div className="hawa-font-bold hawa-text-lg">Regular</div>
            <Avatar
              src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
            />
          </div>
          <div>
            <div className="hawa-font-bold hawa-text-lg">Without Image</div>
            <Avatar
              // src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
            />
          </div>
          <div>
            <div className="hawa-font-bold hawa-text-lg">Custom Icon</div>
            <Avatar
              icon={<Upload className="hawa-w-4 hawa-h-4" />}
              alt="User Avatar"
            />
          </div>
          <div>
            <div className="hawa-font-bold hawa-text-lg">With Badge</div>
            <BadgedComponent>
              <Avatar
                src="https://source.unsplash.com/featured/?nature,1"
                alt="User Avatar"
              />
            </BadgedComponent>
          </div>
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">
            Uploadable (click to upload)
          </div>
          <Avatar
            isUploadable={true}
            // src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
          />
        </div>
      </div>
    );
  },
};
export const Sizes: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    let sizesArray: Array<
      | "2xs"
      | "xs"
      | "sm"
      | "default"
      | "lg"
      | "xl"
      | "2xl"
      | "3xl"
      | "4xl"
      | "5xl"
      | "6xl"
    > = [
      "2xs",
      "xs",
      "sm",
      "default",
      "lg",
      "xl",
      "2xl",
      "3xl",
      "4xl",
      "5xl",
      "6xl",
    ];
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        {sizesArray.map((avatarSize) => (
          <div>
            <div className="hawa-font-bold hawa-text-lg">{avatarSize}</div>
            <Avatar
              // isUploadable={true}
              src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
              size={avatarSize}
            />
          </div>
        ))}
      </div>
    );
  },
};
export const Radius: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div>
          <div className="hawa-font-bold hawa-text-lg">Full Radius</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            radius="full"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">
            Inherit Global Radius
          </div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            radius="inherit"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">No Radius</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            radius="none"
          />
        </div>
      </div>
    );
  },
};
