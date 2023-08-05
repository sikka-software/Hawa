import React, { useState } from "react";

import { HawaBanner } from "../../layout";
import { HawaButton } from "../../elements";

export default {
  title: "Layout/Banner",
  component: HawaBanner,
  argTypes: {
    title: {
      control: "text",
      description: "The title of the alert in bold"
    },
    text: {
      control: "text",
      description: "The content text of the alert"
    }
  }
};

const Template = (args) => {
  const [banners, setBanners] = useState([0]);
  return (
    <div>
      {banners.map((b) => (
        <HawaBanner {...args} />
      ))}
      <div
        className={
          args.position === "top"
            ? "fixed top-6 left-10"
            : "fixed bottom-6 left-10"
        }
      >
        <HawaButton onClick={() => setBanners([...banners, 0])}>
          Show Banner
        </HawaButton>
      </div>
    </div>
  );
};

export const Banner = Template.bind({});
Banner.args = {
  position: "top",
  title: "Update",
  text: "there's a new update coming soon to this application. Make sure to sign up for the waitlist",
  actionText: "Signup"
};
