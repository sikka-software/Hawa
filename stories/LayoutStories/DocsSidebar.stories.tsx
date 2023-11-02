import type { Meta, StoryObj } from "@storybook/react";
import { DocsSidebar } from "../../components";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { setLocale, t } from "../translations/i18n";

const meta = {
  title: "Layout/Docs Sidebar",
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

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  const direction = locale === "ar" ? "rtl" : "ltr";
  setLocale(locale);

  return (
    <div dir={direction} className="hawa-flex hawa-flex-row">
      {/* Sidebar */}
      <div className="hawa-w-1/6 hawa-top-0 hawa-h-[calc(100dvh)] hawa-pt-10 hawa-bg-gray-100 hawa-fixed hawa-left-0">
        <DocsSidebar pages={["Introduction", "Installation", "Usage"]} />
      </div>

      {/* Main Content */}
      <div className="hawa-w-3/4 hawa-ml-auto hawa-p-4">
        <div id="Introduction">
          <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10">
            Introduction
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
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
            libero officiis! Officia.
          </p>
          {/* ...other content... */}
        </div>
        <div id="Installation">
          <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10">
            Installation
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
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
            libero officiis! Officia.
          </p>{" "}
        </div>
        <div id="Usage">
          <h1 className="hawa-text-2xl hawa-font-bold hawa-my-10"> Usage</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
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
            libero officiis! Officia.
          </p>{" "}
        </div>
        {/* ...other sections... */}
      </div>
    </div>
  );
};
export const Default: Story = {
  render: Template.bind({}),
};
