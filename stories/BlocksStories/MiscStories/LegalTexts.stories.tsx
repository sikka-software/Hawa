import type { Meta, StoryObj } from "@storybook/react";
import { ArgsTable, Story, Title } from "@storybook/blocks";
import { LegalTexts } from "../../../components/blocks";
import { setLocale, t } from "../../translations/i18n";

const meta = {
  title: "Blocks/Misc/Legal Texts",
  component: LegalTexts,
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>{"<LegalTexts/>"}</h1>
          <ArgsTable />
        </>
      ),
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LegalTexts>;

export default meta;
type Story = StoryObj<typeof LegalTexts>;

const Template = (args: any, globals: any) => {
  const locale = globals.globals?.locale === "ar" ? "ar" : "en";
  setLocale(locale);
  const tabsData = [
    {
      title: "Privacy Policy",
      // content: "This is the content for the Privacy Policy.",
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet tortor aliquam orci ultrices, eget ornare elit aliquet. Quisque suscipit finibus cursus. Donec consequat pellentesque augue id molestie. Aliquam nisi purus, consectetur ut sagittis vitae, feugiat vel orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ex non nibh ultricies sodales. Curabitur et velit scelerisque, dictum mi at, tempor nibh. Vivamus auctor diam a sem vestibulum, eu lacinia ipsum laoreet. Proin cursus nisi bibendum, lobortis ipsum ac, auctor eros. Donec euismod mi nec mi elementum, a rutrum nibh venenatis. Integer felis nulla, rhoncus sed lectus eu, eleifend imperdiet tellus. Nulla quam tortor, bibendum in nulla a, convallis consequat neque. Praesent scelerisque, lorem sed semper commodo, nisi nulla faucibus dolor, eu ultricies neque dui a sem. Pellentesque orci velit, pharetra quis tempus id, facilisis ut orci. Nunc quis mauris fringilla, finibus eros vestibulum, finibus libero. Ut nec auctor risus.

Vivamus malesuada, felis vel facilisis vulputate, erat nunc volutpat leo, in pulvinar mi magna sit amet urna. Sed congue nulla elit, a semper nunc suscipit dictum. Nullam tempor semper lorem et interdum. Nullam efficitur gravida metus, imperdiet ultricies felis condimentum eu. Nulla egestas laoreet est. Cras nec metus eu ipsum aliquam vestibulum. Curabitur non elit quis dolor dapibus condimentum. Donec condimentum mi velit, in sollicitudin urna scelerisque id. Ut dolor est, ornare quis cursus ac, cursus eget eros. In imperdiet quis ante hendrerit sodales.

Pellentesque vel nisl nisi. Donec at imperdiet urna, auctor fringilla velit. Nunc enim nunc, placerat vitae aliquam in, commodo a lorem. Curabitur viverra lacus posuere nulla eleifend bibendum. Integer bibendum quam ac tortor interdum, id commodo augue pulvinar. Ut a mi non dui efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent at condimentum mi. Cras vehicula, diam et rhoncus faucibus, orci nisi vestibulum elit, consequat rutrum massa leo quis ex.

Mauris iaculis tincidunt felis, ut convallis nisl. In in orci ac est congue vestibulum sed in ex. Nunc in purus id erat sollicitudin gravida sit amet eu dolor. Etiam fringilla est eget eleifend vestibulum. Nullam hendrerit pretium libero ac laoreet. Maecenas vitae velit libero. Donec pulvinar rutrum ipsum, vel blandit magna faucibus at. Etiam dapibus urna eu nisi volutpat maximus. Praesent mi orci, suscipit sit amet ultricies eget, efficitur lobortis lacus. Duis diam tellus, fringilla non eleifend vulputate, lacinia sed velit. In vitae tellus id orci vehicula pretium.

Suspendisse ullamcorper ligula a dictum lobortis. Pellentesque ac dui feugiat, imperdiet nunc at, euismod ipsum. Ut ullamcorper erat bibendum pellentesque molestie. Nullam augue nunc, condimentum a nibh at, interdum tempus felis. Integer ut maximus sapien. Nullam turpis nibh, accumsan quis ex nec, vehicula dignissim lacus. Aliquam eu quam id metus suscipit laoreet sed quis purus. Curabitur vitae libero ligula. Integer maximus placerat elit eget lobortis. Quisque faucibus mauris sed elit fermentum porttitor. Sed euismod augue diam, vel pretium purus ultricies eu. Donec molestie lacus vitae pellentesque fringilla.

Sed non turpis felis. Etiam hendrerit, enim id consequat vestibulum, magna lorem cursus dui, vel faucibus elit ipsum a magna. Mauris pulvinar fermentum nunc ac mollis. Vivamus ligula neque, scelerisque et turpis ut, eleifend auctor mauris. Aenean bibendum lorem vel purus tempor, vitae tempor ipsum suscipit. Maecenas neque libero, blandit non lectus iaculis, porttitor laoreet diam. Etiam quis leo vitae turpis interdum pretium sed vel nisi. Morbi et molestie velit, sit amet consequat orci. Etiam eu neque eget nibh bibendum tristique ut sit amet dolor.

Curabitur aliquet rhoncus turpis. Maecenas tempor orci id quam lobortis, et condimentum nisl blandit. Maecenas sodales sodales dolor vitae interdum. Sed blandit non augue vitae interdum. Nullam interdum vitae massa id porta. Integer nec ornare odio, ut fringilla turpis. Praesent a dui feugiat, placerat velit ut, commodo urna. Sed feugiat nulla quis metus convallis, in aliquet quam mollis. Sed commodo tortor sagittis lectus iaculis hendrerit. Nam ac tortor eget orci faucibus vehicula. Proin in dictum sem. In hac habitasse platea dictumst. Phasellus bibendum metus vel orci rhoncus consectetur. Praesent pellentesque est in suscipit accumsan. Maecenas pellentesque convallis nisi in imperdiet.

Pellentesque eu porttitor nisi. Phasellus et fermentum mi. Integer consectetur lectus a lectus vehicula, et egestas nisl ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ultricies felis sed dictum varius. Suspendisse fringilla cursus vestibulum. Suspendisse in enim nunc. Duis vestibulum rhoncus laoreet. Vivamus commodo eget ante et varius. Donec non quam eget lorem tristique porta. Integer dictum purus et metus rutrum scelerisque. Curabitur nec mauris varius, lacinia enim eget, porttitor lectus. Etiam tellus enim, consequat non vulputate vitae, lacinia in ex. Nullam urna erat, cursus a velit sit amet, eleifend bibendum leo. Sed commodo nunc a egestas porta. Cras id eleifend tellus, at faucibus massa.
     
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet tortor aliquam orci ultrices, eget ornare elit aliquet. Quisque suscipit finibus cursus. Donec consequat pellentesque augue id molestie. Aliquam nisi purus, consectetur ut sagittis vitae, feugiat vel orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis ex non nibh ultricies sodales. Curabitur et velit scelerisque, dictum mi at, tempor nibh. Vivamus auctor diam a sem vestibulum, eu lacinia ipsum laoreet. Proin cursus nisi bibendum, lobortis ipsum ac, auctor eros. Donec euismod mi nec mi elementum, a rutrum nibh venenatis. Integer felis nulla, rhoncus sed lectus eu, eleifend imperdiet tellus. Nulla quam tortor, bibendum in nulla a, convallis consequat neque. Praesent scelerisque, lorem sed semper commodo, nisi nulla faucibus dolor, eu ultricies neque dui a sem. Pellentesque orci velit, pharetra quis tempus id, facilisis ut orci. Nunc quis mauris fringilla, finibus eros vestibulum, finibus libero. Ut nec auctor risus.

Vivamus malesuada, felis vel facilisis vulputate, erat nunc volutpat leo, in pulvinar mi magna sit amet urna. Sed congue nulla elit, a semper nunc suscipit dictum. Nullam tempor semper lorem et interdum. Nullam efficitur gravida metus, imperdiet ultricies felis condimentum eu. Nulla egestas laoreet est. Cras nec metus eu ipsum aliquam vestibulum. Curabitur non elit quis dolor dapibus condimentum. Donec condimentum mi velit, in sollicitudin urna scelerisque id. Ut dolor est, ornare quis cursus ac, cursus eget eros. In imperdiet quis ante hendrerit sodales.

Pellentesque vel nisl nisi. Donec at imperdiet urna, auctor fringilla velit. Nunc enim nunc, placerat vitae aliquam in, commodo a lorem. Curabitur viverra lacus posuere nulla eleifend bibendum. Integer bibendum quam ac tortor interdum, id commodo augue pulvinar. Ut a mi non dui efficitur aliquet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent at condimentum mi. Cras vehicula, diam et rhoncus faucibus, orci nisi vestibulum elit, consequat rutrum massa leo quis ex.

Mauris iaculis tincidunt felis, ut convallis nisl. In in orci ac est congue vestibulum sed in ex. Nunc in purus id erat sollicitudin gravida sit amet eu dolor. Etiam fringilla est eget eleifend vestibulum. Nullam hendrerit pretium libero ac laoreet. Maecenas vitae velit libero. Donec pulvinar rutrum ipsum, vel blandit magna faucibus at. Etiam dapibus urna eu nisi volutpat maximus. Praesent mi orci, suscipit sit amet ultricies eget, efficitur lobortis lacus. Duis diam tellus, fringilla non eleifend vulputate, lacinia sed velit. In vitae tellus id orci vehicula pretium.

Suspendisse ullamcorper ligula a dictum lobortis. Pellentesque ac dui feugiat, imperdiet nunc at, euismod ipsum. Ut ullamcorper erat bibendum pellentesque molestie. Nullam augue nunc, condimentum a nibh at, interdum tempus felis. Integer ut maximus sapien. Nullam turpis nibh, accumsan quis ex nec, vehicula dignissim lacus. Aliquam eu quam id metus suscipit laoreet sed quis purus. Curabitur vitae libero ligula. Integer maximus placerat elit eget lobortis. Quisque faucibus mauris sed elit fermentum porttitor. Sed euismod augue diam, vel pretium purus ultricies eu. Donec molestie lacus vitae pellentesque fringilla.

Sed non turpis felis. Etiam hendrerit, enim id consequat vestibulum, magna lorem cursus dui, vel faucibus elit ipsum a magna. Mauris pulvinar fermentum nunc ac mollis. Vivamus ligula neque, scelerisque et turpis ut, eleifend auctor mauris. Aenean bibendum lorem vel purus tempor, vitae tempor ipsum suscipit. Maecenas neque libero, blandit non lectus iaculis, porttitor laoreet diam. Etiam quis leo vitae turpis interdum pretium sed vel nisi. Morbi et molestie velit, sit amet consequat orci. Etiam eu neque eget nibh bibendum tristique ut sit amet dolor.

Curabitur aliquet rhoncus turpis. Maecenas tempor orci id quam lobortis, et condimentum nisl blandit. Maecenas sodales sodales dolor vitae interdum. Sed blandit non augue vitae interdum. Nullam interdum vitae massa id porta. Integer nec ornare odio, ut fringilla turpis. Praesent a dui feugiat, placerat velit ut, commodo urna. Sed feugiat nulla quis metus convallis, in aliquet quam mollis. Sed commodo tortor sagittis lectus iaculis hendrerit. Nam ac tortor eget orci faucibus vehicula. Proin in dictum sem. In hac habitasse platea dictumst. Phasellus bibendum metus vel orci rhoncus consectetur. Praesent pellentesque est in suscipit accumsan. Maecenas pellentesque convallis nisi in imperdiet.

Pellentesque eu porttitor nisi. Phasellus et fermentum mi. Integer consectetur lectus a lectus vehicula, et egestas nisl ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam ultricies felis sed dictum varius. Suspendisse fringilla cursus vestibulum. Suspendisse in enim nunc. Duis vestibulum rhoncus laoreet. Vivamus commodo eget ante et varius. Donec non quam eget lorem tristique porta. Integer dictum purus et metus rutrum scelerisque. Curabitur nec mauris varius, lacinia enim eget, porttitor lectus. Etiam tellus enim, consequat non vulputate vitae, lacinia in ex. Nullam urna erat, cursus a velit sit amet, eleifend bibendum leo. Sed commodo nunc a egestas porta. Cras id eleifend tellus, at faucibus massa.
`,
      value: "privacy-policy",
    },
    {
      title: "Terms of Service",
      content: "This is the content for the Terms of Service.",
      value: "terms-of-service",
    },
    {
      title: "Cookie Policy",
      content: "This is the content for the Cookie Policy.",
      value: "cookie-policy",
    },
  ];

  return <LegalTexts tabs={tabsData} />;
};
export const Default: Story = {
  render: Template.bind({}),
};
