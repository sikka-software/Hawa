import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Carousel,
  Count,
  ItemCard,
  LandingCard,
  Tooltip,
} from "../../components/elements";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import {
  ArrowRightCircle,
  CopyIcon,
  Edit2,
  Heart,
  AppWindow,
  ScreenShare,
  ScreenShareOff,
  Trash2,
  Apple,
  HardDrive,
} from "lucide-react";

const meta = {
  title: "Elements/Carousel",
  component: Carousel,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<Carousel/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-flex-col hawa-gap-10">
      <div className="hawa-h-52">
        <Carousel loop={false} {...args} items={images} />
      </div>
    </div>
  ),
  args: {},
};
export const Cards: Story = {
  render: () => (
    <div className="hawa-flex hawa-flex-col hawa-gap-10">
      <div className="hawa-h-52  hawa-max-w-md">
        <Carousel items={cards} loop={false} />
      </div>
      <div className="hawa-h-52  hawa-max-w-md">
        <Carousel items={itemCardsArray} loop={false} />
      </div>
    </div>
  ),
  args: {
    autoplay: false,
  },
};
export const Autoplay: Story = {
  render: (args) => (
    <div className="hawa-flex hawa-flex-col hawa-gap-10">
      <div className="hawa-h-52  hawa-max-w-md">
        <Carousel {...args} items={autoplayCards} loop={false} />
      </div>
    </div>
  ),
  args: {
    autoplay: true,
    // autoplayInterval: 100,
  },
};

const images = [
  <img src="https://source.unsplash.com/featured/?nature,1" />,
  <img src="https://source.unsplash.com/featured/?nature,2" />,
  <img src="https://source.unsplash.com/featured/?nature,3" />,
  <img src="https://source.unsplash.com/featured/?nature,4" />,
  <img src="https://source.unsplash.com/featured/?nature,5" />,
  <img src="https://source.unsplash.com/featured/?nature,6" />,
  <img src="https://source.unsplash.com/featured/?nature,7" />,
  <img src="https://source.unsplash.com/featured/?nature,8" />,
  <img src="https://source.unsplash.com/featured/?nature,9" />,
];
const autoplayCards = [
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="These cards will autoplay"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShare />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="This is the second card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShareOff />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="This is the 3rd card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<AppWindow />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="This is the 4th card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<Apple />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="This is the 5th card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<HardDrive />}
  />,
];
const cards = [
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="Title of landing card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShare />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="Title of landing card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShare />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="Title of landing card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShare />}
  />,
  <LandingCard
    className={"hawa-h-full hawa-max-w-sm"}
    title="Title of landing card"
    subtitle="This is a longer description of the landing card, you can use this directly in a landing page"
    icon={<ScreenShare />}
  />,
];

const createItemCard = (numCards: number) => {
  const cards = [];

  for (let i = 0; i < numCards; i++) {
    cards.push(
      <ItemCard
        headerActions={[
          { label: "QR Code", action: () => console.log("clicking on QR") },
          {
            label: "Menu Settings",
            value: "Menu Settings",
            action: () => console.log("clicking on Settings"),
          },
          {
            label: "Menu Styles",
            value: "Menu Styles",
            action: () => console.log("clicking on Styles"),
          },
          {
            label: "Analytics",
            value: "Analytics",
            action: () => console.log("clicking on Analytics"),
          },
        ]}
        header={
          <div>
            <h1>Menu</h1>
          </div>
        }
        content={
          <div>
            <p>
              All the icons and buttons of this card are customizable, yet all
              the props are optional.
            </p>
          </div>
        }
        actions={
          <div className="hawa-flex hawa-flex-row hawa-gap-2 ">
            <Tooltip
              triggerProps={{ asChild: true }}
              delayDuration={200}
              content={"Duplicate"}
            >
              <Button size="icon" variant="ghost">
                <CopyIcon className="hawa-icon" />
              </Button>
            </Tooltip>

            <Tooltip
              triggerProps={{ asChild: true }}
              delayDuration={200}
              content={"Delete"}
            >
              <Button size="icon" variant="ghost">
                <Trash2 className="hawa-icon" />
              </Button>
            </Tooltip>

            <Tooltip
              triggerProps={{ asChild: true }}
              delayDuration={200}
              content={"Edit"}
            >
              <Button size="icon" variant="ghost">
                <Edit2 className="hawa-icon" />
              </Button>
            </Tooltip>
          </div>
        }
        counts={
          <div className="hawa-flex hawa-flex-row ">
            <Tooltip
              triggerProps={{ asChild: true }}
              delayDuration={200}
              content={"Counts"}
            >
              <div>
                <Count
                  icon={<ArrowRightCircle className="hawa-icon" />}
                  count="30"
                />
              </div>
            </Tooltip>
            <Tooltip
              triggerProps={{ asChild: true }}
              delayDuration={200}
              content={"Likes"}
            >
              <div>
                <Count icon={<Heart className="hawa-icon" />} count="20" />
              </div>
            </Tooltip>
          </div>
        }
      />
    );
  }

  return cards;
};

const itemCardsArray = createItemCard(4); // Replace 4 with the desired number of cards
