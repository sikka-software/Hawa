import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Upload } from "lucide-react";

import { Avatar } from "@/packages/components/elements/avatar";
import { BadgedComponent } from "@/packages/components/elements/badge";

import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Elements/Avatar",
  component: Avatar
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
            <div className="hawa-text-lg hawa-font-bold">Regular</div>
            <Avatar
              src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
              {...args}
            />
          </div>
          <div>
            <div className="hawa-text-lg hawa-font-bold">Without Image</div>
            <Avatar
              // src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
              {...args}
            />
          </div>
          <div>
            <div className="hawa-text-lg hawa-font-bold">Custom Icon</div>
            <Avatar
              icon={<Upload className="hawa-h-4 hawa-w-4" />}
              alt="User Avatar"
              {...args}
            />
          </div>
          <div>
            <div className="hawa-text-lg hawa-font-bold">With Badge</div>
            <BadgedComponent>
              <Avatar
                src="https://source.unsplash.com/featured/?nature,1"
                alt="User Avatar"
                {...args}
              />
            </BadgedComponent>
          </div>
        </div>
        <div>
          <div className="hawa-text-lg hawa-font-bold">
            Uploadable (click to upload)
          </div>
          <Avatar
            isUploadable={true}
            // src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            {...args}
          />
        </div>
      </div>
    );
  }
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
      "6xl"
    ];
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        {sizesArray.map((avatarSize, i) => (
          <div key={i}>
            <div className="hawa-text-lg hawa-font-bold">{avatarSize}</div>
            <Avatar
              // isUploadable={true}
              src="https://source.unsplash.com/featured/?nature,1"
              alt="User Avatar"
              size={avatarSize}
              {...args}
            />
          </div>
        ))}
      </div>
    );
  }
};
export const Radius: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <div>
          <div className="hawa-text-lg hawa-font-bold">Full Radius</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            radius="full"
          />
        </div>
        <div>
          <div className="hawa-text-lg hawa-font-bold">
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
          <div className="hawa-text-lg hawa-font-bold">No Radius</div>
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
  parameters: {
    controls: {
      exclude: ["radius"]
    }
  }
};
