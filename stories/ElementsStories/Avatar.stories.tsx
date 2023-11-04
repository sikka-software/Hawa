import type { Meta, StoryObj } from "@storybook/react";
import { Alert, Avatar, BadgedComponent } from "../../components/elements";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

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
    return (
      <div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">x-Small Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="xs"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">Small Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="sm"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">Default Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">Large Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="lg"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">x-Large Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="xl"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">2x-Large Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="2xl"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">3x-Large Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="3xl"
          />
        </div>
        <div>
          <div className="hawa-font-bold hawa-text-lg">4x-Large Size</div>
          <Avatar
            isUploadable={true}
            src="https://source.unsplash.com/featured/?nature,1"
            alt="User Avatar"
            size="4xl"
          />
        </div>
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
