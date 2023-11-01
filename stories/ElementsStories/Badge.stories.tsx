import type { Meta, StoryObj } from "@storybook/react";
import {
  Badge,
  BadgedComponent,
  Button,
  Card,
  CardContent,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useRef, useState } from "react";
import { Bell } from "lucide-react";

const meta = {
  title: "Elements/Badge",
  component: Badge,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Badge/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

const Template = () => {
  const [hideBadge, setHideBadge] = useState(false);
  return (
    <div className="hawa-flex hawa-flex-col hawa-gap-4">
      <BadgedComponent className="hawa-max-w-md">
        <Card>
          <CardContent headless>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas et a
            praesentium aliquid dolorem beatae ad est provident consectetur,
            maxime repudiandae quod facilis quasi deserunt reprehenderit
            perferendis ipsam, earum veritatis.
          </CardContent>
        </Card>
      </BadgedComponent>
      <div className="hawa-flex hawa-flex-row hawa-gap-2">
        <BadgedComponent>
          <Button variant={"outline"} size={"icon"}>
            <Bell className="hawa-icon" />
          </Button>
        </BadgedComponent>
        <BadgedComponent position="right" hideBadge={hideBadge}>
          <Button onClick={() => setHideBadge(!hideBadge)} variant={"outline"}>
            Hide Badge{" "}
          </Button>
        </BadgedComponent>
      </div>

      <BadgedComponent
        className="hawa-w-fit"
        position="left"
        hideBadge={hideBadge}
      >
        <Button variant={"outline"}>Left Badge </Button>
      </BadgedComponent>
    </div>
  );
  //   return (
  //     <IndicatorProvider>
  //       <div className="hawa-relative hawa-flex hawa-flex-col hawa-gap-4">
  //         <Indicator anchor={ref} id="indicator-1" />
  //         <Indicator anchor={ref3} id="indicator-2" />

  //         <div
  //           className="hawa-w-64 hawa-bg-card hawa-rounded hawa-p-4 hawa-border"
  //           ref={ref}
  //         >
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque!
  //           Assumenda, quo fugit? Repudiandae aliquam illo ipsam placeat minima
  //           magni rerum natus, explicabo inventore quaerat? Explicabo esse
  //           laudantium eius consectetur?
  //         </div>
  //         <div
  //           className="hawa-w-64 hawa-bg-card hawa-rounded hawa-p-4 hawa-border"
  //           ref={ref3}
  //         >
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, neque!
  //           Assumenda, quo fugit? Repudiandae aliquam illo ipsam placeat minima
  //           magni rerum natus, explicabo inventore quaerat? Explicabo esse
  //           laudantium eius consectetur?
  //         </div>
  //       </div>
  //     </IndicatorProvider>
  //   );
};

export const Default: Story = {
  render: Template.bind({}),
  args: {},
};
