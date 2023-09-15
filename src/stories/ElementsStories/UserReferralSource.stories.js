import React, { useState } from "react";
import { UserReferralSource } from "../../elements";

export default {
  title: "Elements/User Referral Source",
  component: UserReferralSource
};

const Template = (args) => {
  const [alerts, setAlerts] = useState([1]);

  return (
    <div>
      <UserReferralSource
        {...args}
        options={[
          { label: "Coworker/Friend", value: "friend" },
          { label: "Research", value: "research" },
          { label: "TikTok", value: "tiktok" },
          { label: "Advertisement", value: "ad" },
          { label: "Twitter", value: "twitter" }
        ]}
      />
    </div>
  );
};

export const UserReferralSourceStory = Template.bind({});
UserReferralSourceStory.args = {
  question: "How did you hear about us?",
  description:
    "Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.",
  tag: "Deploy faster"
};

UserReferralSourceStory.storyName = "User Referral Source";
