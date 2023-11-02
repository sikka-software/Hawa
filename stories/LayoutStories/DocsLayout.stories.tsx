import type { Meta, StoryObj } from "@storybook/react";
import { DocsLayout, DocsSidebar, Button, AppTopbar } from "../../components";
import { ArgsTable, Story } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";
import { useState } from "react";
import { useDarkMode } from "storybook-dark-mode";

const meta = {
  title: "Layout/Docs Layout",
  component: DocsSidebar,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<DocsSidebar/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DocsSidebar>;

export default meta;
type Story = StoryObj<typeof DocsSidebar>;

export const Default: Story = {
  render: (args: any, globals: any) => {
    const locale = globals.globals?.locale === "ar" ? "ar" : "en";
    const direction = locale === "ar" ? "rtl" : "ltr";
    setLocale(locale);
    const [selectedPage, setSelectedPage] = useState("/home");
    const dark = useDarkMode();

    const [keepOpen, setKeepOpen] = useState(() => {
      const savedState = localStorage.getItem("keepOpen");
      return savedState ? JSON.parse(savedState) : true;
    });

    const handleDrawerExpand = (newKeepOpenState: any) => {
      setKeepOpen(newKeepOpenState);
      localStorage.setItem("keepOpen", JSON.stringify(newKeepOpenState));
      // Additional logic if needed when drawer expansion state changes
    };
    const logoLink =
      direction === "rtl"
        ? dark
          ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl-white.png"
          : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-rtl.png"
        : dark
        ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr-white.png"
        : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-bilingual-wordmark-ltr.png";

    let dummyText = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        eligendi obcaecati voluptatibus deleniti ex exercitationem dolor
        accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ratione eligendi obcaecati voluptatibus deleniti
        ex exercitationem dolor accusantium voluptate repudiandae, deserunt
        quo reprehenderit corporis accusamus, tempora culpa! Fugiat
        assumenda iste praesentium. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis non quas quod, minima excepturi neque fugit
        dolorem eum exercitationem vel, modi temporibus dicta nobis ipsum
        beatae tempora libero officiis! Officia. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Ratione eligendi obcaecati
        voluptatibus deleniti ex exercitationem dolor accusantium voluptate
        repudiandae, deserunt quo reprehenderit corporis accusamus, tempora
        culpa! Fugiat assumenda iste praesentium. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quis non quas quod, minima excepturi
        neque fugit dolorem eum exercitationem vel, modi temporibus dicta
        nobis ipsum beatae tempora libero officiis! Officia. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Ratione eligendi
        obcaecati voluptatibus deleniti ex exercitationem dolor accusantium
        voluptate repudiandae, deserunt quo reprehenderit corporis
        accusamus, tempora culpa! Fugiat assumenda iste praesentium. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quis non quas
        quod, minima excepturi neque fugit dolorem eum exercitationem vel,
        modi temporibus dicta nobis ipsum beatae tempora libero officiis!
        Officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ratione eligendi obcaecati voluptatibus deleniti ex exercitationem
        dolor accusantium voluptate repudiandae, deserunt quo reprehenderit
        corporis accusamus, tempora culpa! Fugiat assumenda iste
        praesentium. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quis non quas quod, minima excepturi neque fugit dolorem eum
        exercitationem vel, modi temporibus dicta nobis ipsum beatae tempora
        libero officiis! Officia.`;
    return (
      <div dir={direction} className="hawa-flex">
        <AppTopbar />

        {/* Sidebar */}
        <div className="hawa-w-1/6 hawa-top-14 hawa-h-[calc(100dvh)] hawa-pt-10 hawa-bg-gray-100 hawa-fixed hawa-left-0">
          <DocsSidebar
            direction={direction}
            pages={["Introduction", "Installation", "Usage"]}
          />
        </div>
        <div className="hawa-w-3/4 hawa-ml-auto hawa-p-4">
          <div id="Introduction">
            <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10">
              Introduction
            </h1>
            <p>{dummyText}</p>
          </div>
          <div id="Installation">
            <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10">
              Installation
            </h1>
            <p>{dummyText}</p>{" "}
          </div>
          <div id="Usage">
            <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10"> Usage</h1>
            <p>{dummyText}</p>{" "}
          </div>
        </div>
      </div>
    );
  },
  args: {},
  argTypes: {},
};
