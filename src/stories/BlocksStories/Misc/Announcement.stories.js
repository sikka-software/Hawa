import React from "react";
import { Announcement } from "../../../blocks/Misc";

export default {
  title: "Blocks/Misc/Announcement",
  component: [Announcement]
};

export const AnnouncementStory = (args) => {
  return (
    <Announcement
      title="Welcome to Tayar - Your Ultimate Task Management Solution"
      subtitle="Simplify Your Daily Workflow, Boost Productivity, and Reclaim Valuable Time in Your Busy Schedule Today with Tayar - The Innovative and User-Centric Task Management Software Tailored for Individuals, Teams, and Businesses!"
      actionText="Try it out"
    />
  );
};

AnnouncementStory.args = {
  variant: "contained"
};

AnnouncementStory.storyName = "Announcement";
