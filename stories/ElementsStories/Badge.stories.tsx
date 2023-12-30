import { useState } from "react";

import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";
import { Bell } from "lucide-react";

import { Badge, BadgedComponent } from "@/packages/components/elements/badge";
import { Button } from "@/packages/components/elements/button";
import { Card, CardContent } from "@/packages/components/elements/card";

const meta = {
  title: "Elements/Badge",
  component: Badge
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => {
    const [hideBadge, setHideBadge] = useState(false);
    return (
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <BadgedComponent className="hawa-max-w-md">
          <Card>
            <CardContent headless>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas et
              a praesentium aliquid dolorem beatae ad est provident consectetur,
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
          <BadgedComponent
            text="20"
            size="large"
            position="right"
            hideBadge={hideBadge}
          >
            <Button
              onClick={() => setHideBadge(!hideBadge)}
              variant={"outline"}
            >
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
  },
  args: {}
};

// export const WithText: Story = {
//   render: () => {
//     const [hideBadge, setHideBadge] = useState(false);
//     return (
//       <div className="hawa-flex hawa-flex-col hawa-gap-4">
//         <div className="hawa-flex hawa-flex-row hawa-gap-2">
//           <BadgedComponent>
//             <Button variant={"outline"} size={"icon"}>
//               <Bell className="hawa-icon" />
//             </Button>
//           </BadgedComponent>
//           <BadgedComponent
//             text="99+"
//             position="right"
//             hideBadge={hideBadge}
//           >
//             <Button
//               onClick={() => setHideBadge(!hideBadge)}
//               variant={"outline"}
//             >
//               Hide Badge{" "}
//             </Button>
//           </BadgedComponent>
//         </div>

//         <BadgedComponent
//           className="hawa-w-fit"
//           position="left"
//           hideBadge={hideBadge}
//         >
//           <Button variant={"outline"}>Left Badge </Button>
//         </BadgedComponent>
//       </div>
//     );
//   },
//   args: {},
// };
// export const WithIcon: Story = {
//   render: () => {
//     const [hideBadge, setHideBadge] = useState(false);
//     return (
//       <div className="hawa-flex hawa-flex-col hawa-gap-4">
//         <BadgedComponent className="hawa-max-w-md">
//           <Card>
//             <CardContent headless>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas et
//               a praesentium aliquid dolorem beatae ad est provident consectetur,
//               maxime repudiandae quod facilis quasi deserunt reprehenderit
//               perferendis ipsam, earum veritatis.
//             </CardContent>
//           </Card>
//         </BadgedComponent>
//         <div className="hawa-flex hawa-flex-row hawa-gap-2">
//           <BadgedComponent>
//             <Button variant={"outline"} size={"icon"}>
//               <Bell className="hawa-icon" />
//             </Button>
//           </BadgedComponent>
//           <BadgedComponent position="right" hideBadge={hideBadge}>
//             <Button
//               onClick={() => setHideBadge(!hideBadge)}
//               variant={"outline"}
//             >
//               Hide Badge{" "}
//             </Button>
//           </BadgedComponent>
//         </div>

//         <BadgedComponent
//           className="hawa-w-fit"
//           position="left"
//           hideBadge={hideBadge}
//         >
//           <Button variant={"outline"}>Left Badge </Button>
//         </BadgedComponent>
//       </div>
//     );
//   },
//   args: {},
// };
