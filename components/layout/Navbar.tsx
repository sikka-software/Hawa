import React from "react";
import { cn } from "../util";
import { Button, Logos, NavigationMenu } from "../elements";

type NavbarType = {
  test?: any;
};

export const Navbar: React.FC<NavbarType> = ({ test, ...props }) => {
  return (
    <div className="hawa-flex hawa-flex-row hawa-justify-between hawa-items-center hawa-bg-card hawa-p-4 hawa-rounded hawa-border">
      <div>
        <Logos.sikka className="hawa-h-8 hawa-w-8" />
      </div>
      <div>
        <NavigationMenu
          direction="ltr"
          rootClassNames="hawa-w-fit"
          viewportClassNames="hawa-max-w-md"
          items={[
            {
              trigger: "item 2",
              action: () => console.log("clicked on item"),
            },
            {
              trigger: "item 3",
              content: <div className="hawa-p-4">something here</div>,
            },
          ]}
        />
      </div>
      <div>
        <Button>Login</Button>
      </div>
    </div>
  );
};
