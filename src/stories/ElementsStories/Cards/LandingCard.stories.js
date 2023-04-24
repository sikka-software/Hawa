import React from "react";
import { HawaLandingCard } from "../../../elements";

export default {
  title: "Elements/Cards/Landing",
  component: [HawaLandingCard],
  argTypes: {},
  args: {
    lang: "en"
  }
};

export const Landing = (args) => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <HawaLandingCard
          orientation={"horizontal"}
          {...args}
          imageURL="https://sikka-images.s3.ap-southeast-1.amazonaws.com/Untitled-Current+View.png"
        />
        <HawaLandingCard
          orientation={"horizontal"}
          texts={{
            titleTip: "Digital Resumes",
            title: "Seera App",
            description:
              "Turn your professional resume into an interactive digital CV that's hosted on the cloud and can be downloaded as PDF anytime you want. Also, you can easily share it with a link.",
            linkText: "Try Seera"
          }}
          imageURL="https://sikka-images.s3.ap-southeast-1.amazonaws.com/Untitled-Current+View.png"
        />
      </div>
    </>
  );
};

Landing.args = {
  texts: {
    titleTip: "For developers",
    title: "Ship more than just a website",
    description:
      "Use your favorite tech stack to give your marketing team a powerful and flexible custom page builder of their own",
    linkText: "Prismic for developers"
  },
  imageURL: "https://pngimg.com/uploads/honda/honda_PNG102940.png"
};
