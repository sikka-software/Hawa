import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@sikka/hawa/elements/button";
import { Logos } from "@sikka/hawa/elements/logos";
import { Tooltip } from "@sikka/hawa/elements/tooltip";

import { setLocale } from "../../translations/i18n";

const meta = {
  title: "Elements/Button",
  component: Button,
  parameters: { layout: "centered" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Variations: Story = {
  render: () => {
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <h1>Variations</h1>
        <div className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-gap-2">
          <Button variant="default">Default</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="light">Light</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="link">Link</Button>
          <Button variant="neoBrutalism">NeoBrutalism</Button>
        </div>
        <h1>Loading</h1>
        <div className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-gap-2">
          <Button isLoading variant="default">
            Default
          </Button>
          <Button isLoading variant="outline">
            Outline
          </Button>
          <Button isLoading variant="destructive">
            Destructive
          </Button>
          <Button isLoading variant="ghost">
            Ghost
          </Button>
          <Button isLoading variant="light">
            Light
          </Button>
          <Button isLoading variant="secondary">
            Secondary
          </Button>
          <Button isLoading variant="link">
            Link
          </Button>
          <Button isLoading variant="neoBrutalism">
            NeoBrutalism
          </Button>
        </div>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <h1>Sizes</h1>
        <div className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-gap-2">
          <Tooltip content="Small Icon" triggerProps={{ asChild: true }}>
            <Button size="smallIcon">
              <Logos.sikka className="hawa-icon" />
            </Button>
          </Tooltip>
          <Tooltip content="Icon" triggerProps={{ asChild: true }}>
            <Button size="icon">
              <Logos.sikka className="hawa-icon" />
            </Button>
          </Tooltip>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default" variant="default">
            Default
          </Button>
          <Button size="lg">Large</Button>
          <Button size="heightless">Auto Height</Button>
          <Button size="xl">Extra Large</Button>
        </div>
        <h1>Loading</h1>
        <div className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-gap-2">
          <Tooltip content="Small Icon" triggerProps={{ asChild: true }}>
            <Button variant="outline" isLoading size="smallIcon">
              <Logos.sikka className="hawa-icon" />
            </Button>
          </Tooltip>
          <Tooltip content="Icon" triggerProps={{ asChild: true }}>
            <Button isLoading size="icon">
              <Logos.sikka className="hawa-icon" />
            </Button>
          </Tooltip>
          <Button isLoading size="xs">
            Extra Small
          </Button>
          <Button isLoading size="sm">
            Small
          </Button>
          <Button isLoading size="default" variant="default">
            Default
          </Button>
          <Button isLoading size="lg">
            Large
          </Button>
          <Button isLoading size="heightless">
            Auto Height
          </Button>
          <Button isLoading size="xl">
            Extra Large
          </Button>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const mockSubmit = async (data: any) => {
      return new Promise((resolve, reject) => {
        setIsLoading(true);
        setTimeout(() => {
          resolve("Submission successful");
          setIsLoading(false);
          setSent(true);
        }, 2000);
      });
    };
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-2">
        <h1>Variations</h1>
        <div className="hawa-flex hawa-flex-row hawa-flex-wrap hawa-gap-2">
          <Button variant="default">Default</Button>
          <Button variant="outline" isLoading={isLoading}>
            Outline
          </Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <form
            className="hawa-flex hawa-flex-col hawa-gap-4"
            id="test"
            onSubmit={(e) => {
              e.preventDefault();
              mockSubmit("test");
            }}
          >
            <Button
              variant="light"
              type="submit"
              form="test"
              isLoading={isLoading}
            >
              Inside Form
            </Button>
          </form>{" "}
          <Button variant="secondary">Secondary</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>
    );
  },
};
