import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";

const meta = {
  title: "Elements/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    docs: {
      page: () => (
        <>
          {/* <Title /> */}
          <Story of={Docs} />
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
// type Story = StoryObj<typeof Breadcrumb>;

// const Template = () => (
//   <Breadcrumb
//     breadcrumbLinks={[
//       { label: "test", href: "/test" },
//       { label: "test1", href: "/test1" },
//       { label: "test2", href: "/test2" },
//     ]}
//     separator={"-"}
//   />
// );

// export const Default: Story = {
//   render: () => <Template />,
// };

export const Docs = () => (
  <div>
    {" "}
    <Breadcrumb
      breadcrumbLinks={[
        { label: "Home", href: "/test" },
        { label: "User", href: "/test1" },
        { label: "New User", href: "/test2" },
      ]}
      separator={">"}
    />
  </div>
);
