import type { Meta } from "@storybook/react";

import { Breadcrumb } from "@sikka/hawa/breadcrumb";

const meta = {
  title: "Elements/Breadcrumb",
  component: Breadcrumb
} satisfies Meta<typeof Breadcrumb>;

export default meta;

export const Default = () => (
  <div>
    <Breadcrumb
      breadcrumbLinks={[
        { label: "Home", href: "/test" },
        { label: "User", href: "/test1" },
        { label: "New User", href: "/test2" }
      ]}
      separator={">"}
    />
  </div>
);
