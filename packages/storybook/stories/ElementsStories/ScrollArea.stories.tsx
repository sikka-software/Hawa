import { Story } from "@storybook/blocks";
import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@sikka/hawa/label";
import { ScrollArea } from "@sikka/hawa/scrollArea";

const meta = {
  title: "Elements/ScrollArea",
  component: ScrollArea,
  parameters: { layout: "centered" }
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <div>
      <Label>Vertical Scroll Area</Label>
      <ScrollArea className="bg-red-500 hawa-h-[200px] hawa-w-[350px] hawa-rounded-md hawa-border hawa-p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut
        justo et rhoncus. Ut vehicula sem a pretium feugiat. Praesent at nisi ac
        lacus sodales rhoncus. Aenean lectus ex, hendrerit ac felis vel,
        scelerisque mollis ex. Pellentesque consectetur mauris vel velit
        egestas, vel ultricies nibh vulputate. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. In eu mollis
        ante. Maecenas eu felis dui. Duis ornare blandit ligula vel rutrum.
      </ScrollArea>
    </div>
  )
};
export const Horizontal: Story = {
  render: () => (
    <div>
      <Label>Horizontal Scroll Area</Label>
      <ScrollArea
        orientation="horizontal"
        className="bg-red-500 hawa-h-fit hawa-w-[350px] hawa-max-w-xs hawa-whitespace-nowrap hawa-rounded-md hawa-border hawa-p-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut
        justo et rhoncus. Ut vehicula sem a pretium feugiat. Praesent at nisi ac
        lacus sodales rhoncus. Aenean lectus ex, hendrerit ac felis vel,
        scelerisque mollis ex. Pellentesque consectetur mauris vel velit
        egestas, vel ultricies nibh vulputate. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. In eu mollis
        ante. Maecenas eu felis dui. Duis ornare blandit ligula vel rutrum.
      </ScrollArea>
    </div>
  )
};
export const FullPage: Story = {
  parameters: { layout: "fullscreen" },
  render: () => (
    <ScrollArea className="bg-red-500 hawa-h-screen hawa-w-full hawa-rounded-md hawa-border hawa-p-4">
      <div className="hawa-flex hawa-flex-col hawa-gap-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor ut
          justo et rhoncus. Ut vehicula sem a pretium feugiat. Praesent at nisi
          ac lacus sodales rhoncus. Aenean lectus ex, hendrerit ac felis vel,
          scelerisque mollis ex. Pellentesque consectetur mauris vel velit
          egestas, vel ultricies nibh vulputate. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. In eu
          mollis ante. Maecenas eu felis dui. Duis ornare blandit ligula vel
          rutrum.
        </p>
        <p>
          Maecenas tempus lectus sed dui dapibus, non posuere enim varius.
          Nullam blandit arcu sed metus facilisis, sed bibendum elit aliquet.
          Nullam laoreet lacinia sapien, vitae commodo dolor porttitor ac. Morbi
          dictum libero quis nisl semper, quis congue nunc viverra. Nunc
          fermentum tempus dolor, at finibus nisl viverra vel. Aliquam commodo
          massa neque, at ornare nunc mattis quis. Sed mollis tristique
          lobortis. Sed et odio at ex suscipit ultrices. Vestibulum condimentum
          congue velit non convallis. Nunc imperdiet quis purus ut maximus.
          Nulla sit amet metus non ipsum interdum fringilla. Nulla varius
          hendrerit tincidunt. Nam aliquet mattis viverra. Nullam enim urna,
          eleifend non nisi nec, tempus aliquet enim. Fusce et tempor risus.
        </p>
        <p>
          Suspendisse aliquam ex congue tristique commodo. Donec laoreet tellus
          nunc, vitae ultricies nunc varius et. Sed diam felis, convallis non
          eros nec, convallis vestibulum sem. Aliquam sollicitudin, libero sit
          amet gravida dapibus, ipsum urna hendrerit turpis, sed molestie lectus
          nisl suscipit lectus. Sed cursus felis felis, ut vestibulum odio
          vehicula eu. Nunc tincidunt est in magna finibus lacinia. Integer
          rhoncus eu felis et elementum. Nunc imperdiet purus nec consequat
          convallis. Cras fringilla sapien et ex sagittis, cursus malesuada sem
          lacinia. Praesent a ullamcorper quam. Morbi id luctus risus. Nam
          molestie mattis pretium. Aenean finibus tincidunt ligula.
        </p>
        <p>
          Nulla quis rhoncus lacus. Morbi volutpat hendrerit ultrices. Donec
          quis est sodales, lacinia augue eget, facilisis arcu. Donec tempus
          porta metus ut aliquet. Curabitur rutrum, mauris porta dictum
          volutpat, quam lorem porta magna, id malesuada nibh mi et nisl. Donec
          nibh ex, faucibus vitae neque id, dignissim sagittis felis. Praesent
          sodales quam ac ipsum fringilla egestas. Nullam magna urna, rutrum sit
          amet odio tempus, vulputate blandit nunc. Sed pretium urna lorem, eu
          finibus tellus feugiat sed.
        </p>
        <p>
          Proin vel finibus orci. Sed pharetra mi a tortor finibus, ac malesuada
          augue pellentesque. Maecenas molestie ultrices posuere. Aliquam
          molestie libero sed diam bibendum, sit amet sagittis odio auctor.
          Nullam eu mi arcu. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Integer risus tortor,
          vulputate et tortor eget, molestie elementum arcu. Aenean accumsan
          neque nibh, nec tempus turpis congue et. Praesent venenatis felis ut
          neque ultrices, nec rhoncus lacus accumsan. Donec mauris lectus,
          dignissim vel aliquet non, consectetur et enim. Sed volutpat finibus
          leo in interdum. Vivamus varius sem eu odio lacinia euismod. Fusce
          fermentum purus augue, et mollis sem molestie vitae. Morbi nec
          ultricies mauris. Quisque vulputate odio ac mattis dignissim.
        </p>
        <p>
          In quis tristique erat. Quisque semper, turpis non consectetur
          suscipit, orci arcu pellentesque urna, vel laoreet tellus risus non
          sem. Curabitur dui risus, sodales non posuere vitae, euismod eu orci.
          Praesent feugiat quis sapien a vestibulum. Vestibulum dapibus elit nec
          augue sodales interdum. Proin eu risus ex. Praesent consectetur
          fringilla lorem, at ullamcorper tellus aliquam quis. Nam vehicula
          tellus turpis, at imperdiet orci tempor et. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut dui eros, accumsan ac diam nec,
          efficitur finibus erat. Etiam fringilla, erat in euismod commodo,
          purus enim vulputate nunc, quis viverra eros risus vitae lectus. Fusce
          bibendum porttitor ante, ut malesuada dui tincidunt vel. Vestibulum at
          ullamcorper est. Aenean a lacus elementum, mollis quam ut, hendrerit
          ante.
        </p>
        <p>
          Cras in dolor vitae velit commodo efficitur a at elit. Curabitur non
          maximus ex, vel elementum nisi. Etiam tempor lobortis tellus, sit amet
          faucibus risus fermentum at. Nulla sit amet blandit diam. Mauris
          laoreet, erat a fermentum viverra, augue ipsum facilisis ipsum, ut
          finibus lorem leo quis enim. Donec mattis rutrum convallis. Etiam nec
          orci non arcu ullamcorper malesuada ac a dolor. Maecenas tempor felis
          vulputate porta aliquam. Pellentesque auctor elit lectus. Vivamus eget
          leo lectus.
        </p>
        <p>
          Nunc tincidunt sodales ligula at luctus. Nullam sed finibus lacus,
          fringilla cursus neque. Fusce pharetra lorem sed sem scelerisque, ut
          imperdiet mauris varius. Mauris sit amet blandit mauris, non
          sollicitudin urna. Curabitur quis vehicula nisi. Vivamus risus ipsum,
          porttitor sit amet laoreet eget, accumsan in magna. Donec nunc turpis,
          iaculis non accumsan nec, tempor pharetra massa.
        </p>
        <p>
          Donec commodo quam eu lectus elementum egestas. Cras iaculis tortor
          dolor, ac mollis tortor viverra ac. Vestibulum at est eget arcu tempor
          interdum vitae ac erat. Aliquam erat volutpat. Praesent at varius
          turpis. Vivamus fermentum ante mattis augue feugiat luctus. Sed
          ultricies aliquet egestas.
        </p>
        <p>
          Donec elementum libero et vulputate vulputate. Praesent blandit massa
          sed rutrum consectetur. Pellentesque magna libero, porta a venenatis
          maximus, consectetur a elit. Maecenas quis diam hendrerit, convallis
          lectus rhoncus, mollis neque. Ut quis est sapien. In egestas magna at
          arcu iaculis, sed eleifend mauris dictum. Aenean ac aliquet eros. Cras
          libero justo, tristique nec bibendum ac, congue vel diam. Pellentesque
          accumsan ipsum vel tempus varius.
        </p>
        <p>
          Integer ut dapibus turpis. In consequat libero vel augue ullamcorper
          imperdiet. Aenean luctus urna eget lorem luctus, non porttitor lectus
          pharetra. Integer nec elit elementum ex placerat sodales. Curabitur
          sapien augue, pharetra vitae congue in, placerat in risus. Aenean a
          sapien sit amet est pharetra laoreet nec sit amet dui. Praesent nec
          vestibulum arcu. Nunc vel sagittis ante. Fusce sit amet faucibus nisi.
          Aliquam vehicula pharetra nisl ut fermentum. Sed mollis ante ut
          maximus maximus. Integer varius hendrerit sem et iaculis. Integer
          vitae ligula lacinia lacus elementum interdum eu sit amet nisi. Etiam
          ac sollicitudin quam, ut congue ante. Duis sed porta magna.
        </p>
        <p>
          Mauris mattis non magna sit amet ultricies. Ut metus quam, auctor in
          felis in, rhoncus molestie magna. Curabitur in sem eros. In hac
          habitasse platea dictumst. Suspendisse potenti. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Nullam porttitor finibus aliquet. Nam aliquam sit amet felis in
          placerat. Suspendisse porttitor magna et malesuada tristique. Sed
          metus massa, tincidunt in nunc a, suscipit porttitor nulla. Sed sed
          tortor magna. Nullam ac mi nec dolor interdum elementum. Donec
          volutpat cursus odio, vel aliquet nisl. Vestibulum vestibulum nec odio
          ut dapibus. Nam libero risus, eleifend a magna sit amet, interdum
          sollicitudin velit. Duis cursus dapibus nibh non faucibus.
        </p>
        <p>
          Donec nec augue ipsum. Curabitur aliquam nulla in magna pretium auctor
          non eget ligula. Fusce eu risus non erat convallis pulvinar. Nunc
          maximus imperdiet ex. Cras tristique dui id blandit tincidunt. Integer
          rutrum ligula sed urna blandit, in venenatis est sagittis. Proin
          mattis semper dictum. Aliquam tellus ipsum, volutpat ut justo eu,
          laoreet vulputate dolor. Fusce faucibus fermentum congue. Aliquam
          vitae sodales risus. Aenean dapibus sollicitudin mi et imperdiet.
          Vivamus blandit erat ut rhoncus molestie. Vestibulum consequat sapien
          nec tempus ornare. In faucibus varius ante. Vivamus est metus, ornare
          sagittis molestie eu, ultricies a augue. Aliquam erat volutpat.
        </p>
        <p>
          Sed hendrerit, orci non commodo aliquet, nibh ante aliquet augue, ut
          volutpat risus felis et enim. Vivamus porta ante sed turpis luctus
          malesuada. Nunc viverra felis commodo condimentum gravida. Donec
          efficitur arcu ac placerat convallis. Cras vitae purus euismod,
          viverra ante vel, ullamcorper lorem. Phasellus rhoncus mattis dui, in
          viverra enim vehicula et. Vestibulum nulla arcu, congue vitae justo
          ut, feugiat aliquet magna. Etiam eu posuere justo. Proin eleifend
          rutrum eleifend. Praesent sapien massa, finibus non ultricies eget,
          elementum at elit. Praesent id sodales sapien. Duis vel leo metus.
          Nullam non consequat elit, a porttitor augue. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Sed mollis dictum nulla. Sed finibus lectus non urna
          feugiat, at congue nunc commodo.
        </p>
        <p>
          Integer tincidunt ligula sit amet mauris ullamcorper accumsan
          scelerisque non enim. Morbi id urna erat. Aliquam pharetra imperdiet
          dolor, quis rutrum nulla vehicula vitae. In quis facilisis libero. In
          ultrices ex sed mauris porta, vel fringilla sapien porta. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Pellentesque tellus sapien, venenatis quis ex quis, blandit
          dapibus sem. Vivamus a orci interdum, faucibus purus elementum,
          pharetra tellus. Praesent vel pretium tellus. Nulla interdum lorem eu
          hendrerit rutrum.
        </p>
        <p>
          Nam varius eget neque ac consequat. Donec quis ipsum dui. Curabitur
          nec vulputate justo. Curabitur ut semper enim, eu laoreet nibh.
          Vestibulum ultrices elementum dolor, et dignissim dui luctus a. Nullam
          augue orci, imperdiet non viverra in, scelerisque id nulla. Ut ut
          pulvinar elit, quis convallis nisl. Praesent commodo, sem ac maximus
          tincidunt, mi diam aliquet massa, non tincidunt metus orci et nibh.
        </p>
        <p>
          Aenean at dolor id ante iaculis eleifend. Aliquam vulputate vestibulum
          vestibulum. Etiam sodales convallis tellus, finibus sodales tortor
          porttitor id. Maecenas bibendum condimentum mauris, sed tempor metus
          tempus vel. Suspendisse ut eros ut lorem ultricies dictum sit amet
          aliquam odio. Donec lacus augue, lacinia in est id, rutrum tincidunt
          nibh. In eu dapibus ipsum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam eu bibendum nulla. Fusce ac nisl nec diam
          varius elementum et blandit ipsum.
        </p>
        <p>
          Praesent sodales tempor orci vitae pretium. Duis faucibus elementum
          justo sit amet scelerisque. Proin est nunc, dictum in viverra id,
          tincidunt sit amet nulla. Aliquam id ante massa. Nam pretium posuere
          condimentum. Morbi tempus augue sit amet lacus placerat porta. Sed
          eleifend leo non nunc mollis dictum. Sed dapibus tempor elit sed
          laoreet. Duis pellentesque sit amet augue non sagittis. Vestibulum vel
          sapien tempus, volutpat eros id, tincidunt nibh. Nam rutrum, massa at
          ullamcorper elementum, nisl velit bibendum lacus, sed sodales est
          tellus a orci. Aenean fringilla, ante ac dapibus fermentum, ex nulla
          condimentum leo, sed tempus lorem metus ut risus. Cras dignissim
          tellus ut tellus efficitur, at tincidunt turpis sollicitudin. Aenean
          porta sem mauris, eu luctus lorem consequat non. Phasellus ut feugiat
          massa, nec eleifend ipsum. Phasellus pretium pharetra lectus.
        </p>
        <p>
          Curabitur ullamcorper mi ligula, sodales eleifend orci tincidunt
          pulvinar. Phasellus posuere dignissim eros eget accumsan. Nam sed
          ligula consectetur, dapibus est et, ornare velit. Pellentesque quis
          libero et sem egestas auctor vel nec augue. Curabitur at viverra arcu.
          Curabitur sollicitudin orci at sapien viverra, vitae sagittis tellus
          facilisis. Aenean egestas convallis fermentum. Donec rhoncus faucibus
          dictum. Nam varius scelerisque enim non vehicula. Etiam non vehicula
          ipsum, non commodo est. Maecenas tristique hendrerit commodo. Cras
          volutpat turpis varius tellus tincidunt, suscipit rhoncus tellus
          tincidunt. Nam porta lectus sed rutrum venenatis. Phasellus eget
          ornare nunc. Maecenas in turpis hendrerit, elementum risus ac,
          lobortis dolor. Integer sapien ipsum, accumsan vitae quam vitae,
          suscipit placerat est.
        </p>
        <p>
          Sed pulvinar eleifend neque nec lacinia. Sed luctus dolor in luctus
          venenatis. Quisque at convallis velit, ac euismod tellus. Etiam
          sollicitudin felis sit amet ornare congue. Aenean finibus orci est, at
          ultrices urna placerat ac. Fusce justo nunc, dapibus sit amet eros
          nec, pretium tempus enim. Cras malesuada lectus in arcu placerat
          vulputate. Curabitur fringilla nunc quis lorem mollis, vel scelerisque
          dui rutrum.
        </p>
      </div>
    </ScrollArea>
  )
};
