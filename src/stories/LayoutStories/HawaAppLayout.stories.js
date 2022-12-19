import { useState } from "react";
import { HawaAppLayout } from "../../layout";
import { FaFolderOpen, FaPoll, FaHome } from "react-icons/fa";

export default {
  title: "Layout/AppLayout",
  component: [HawaAppLayout]
};

const Template = (args) => {
  const [selectedPage, setSelectedPage] = useState("home");
  const handleItemClick = (e) => {
    console.log("switching page to");
    console.log("switching to", e);
    // setSelectedPage(e); //this is the line that breaks chrome for some reason
  };
  return (
    <HawaAppLayout
      currentPage={selectedPage}
      drawerItems={[
        {
          label: "Home",
          slug: "home",
          icon: <FaHome />,
          action: handleItemClick
        },
        {
          label: "Files",
          slug: "files",
          icon: <FaFolderOpen />,
          action: handleItemClick
        },

        {
          label: "Analytics",
          slug: "analytics",
          icon: <FaPoll />,
          action: handleItemClick
        }
      ]}
      {...args}
    >
      <div>Requires a refresh sometimes</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
        turpis eleifend, vestibulum sapien id, porttitor nisi. Vivamus et augue
        sit amet ex venenatis viverra id sed massa. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Aenean leo libero, scelerisque sed erat sit amet, placerat tempus
        libero. Phasellus non sapien commodo, volutpat leo ac, scelerisque diam.
        Maecenas at libero nec leo egestas tempus. Sed lacus lectus, ullamcorper
        at mattis et, ultricies non nisl. In hac habitasse platea dictumst. Cras
        dignissim malesuada bibendum. Nulla facilisi. Phasellus sed erat sit
        amet nulla imperdiet porta id nec risus. Ut pulvinar, elit et fringilla
        pulvinar, augue quam fringilla ligula, non elementum felis purus vel
        lacus. Vivamus eu sodales massa. Nunc eleifend non mauris eget
        scelerisque. Sed ut ligula rutrum, tempor libero eu, euismod enim.
        Pellentesque feugiat congue arcu, non sollicitudin massa faucibus eget.
        Duis venenatis eleifend imperdiet. Integer rutrum sit amet ex vitae
        lobortis. Etiam in odio nulla. Nunc feugiat, augue id scelerisque
        finibus, libero purus ornare nunc, a rutrum neque elit sed elit. In id
        convallis ante. Sed vestibulum arcu pharetra sapien eleifend ullamcorper
        malesuada ac nibh. Morbi id libero vitae nisi blandit sodales at aliquet
        sapien. Aenean tempor leo nisi, ac pulvinar tellus tincidunt non. Mauris
        egestas elit eu sodales ornare. Suspendisse felis ipsum, hendrerit quis
        efficitur sed, aliquet a massa. Duis pretium ligula sit amet diam
        rhoncus auctor. Nullam eu sapien dolor. Ut in quam lacinia, vulputate
        dui non, dapibus sem. Sed volutpat tincidunt pretium. Phasellus a metus
        lorem. Donec lacinia ipsum eu mollis accumsan. Vestibulum non magna et
        ipsum semper aliquam eget quis velit. Duis facilisis, augue sit amet
        malesuada rutrum, sem mi finibus odio, quis pellentesque tortor ligula
        sed eros. Nam consectetur neque risus, elementum accumsan dolor egestas
        vel. Pellentesque massa sapien, laoreet id sem quis, venenatis dignissim
        ex. Phasellus aliquam volutpat turpis, quis accumsan libero mollis
        tempor. Suspendisse quis pulvinar massa. Maecenas sed nisi felis.
        Praesent nec vestibulum risus, vel pretium diam. Curabitur eget
        fermentum nulla. Sed pretium arcu in nibh euismod hendrerit. Suspendisse
        scelerisque lorem at risus lobortis imperdiet. Suspendisse at ante et
        erat feugiat congue ac eget velit. Nullam dignissim interdum ante,
        semper porta tortor varius eget. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Donec a neque
        cursus risus gravida aliquam. Aenean eget aliquet est. Curabitur augue
        libero, ultrices non blandit varius, gravida sed mauris. Sed fringilla,
        purus et malesuada vulputate, nunc urna accumsan enim, in suscipit dui
        orci sed metus. Mauris mauris lectus, volutpat maximus dignissim nec,
        malesuada ac lorem. Nullam consequat elit eget ultricies consectetur.
        Sed eget mattis ligula, quis vulputate risus. Cras bibendum tincidunt
        lectus, in laoreet sem. Ut porttitor sagittis tellus, at sodales nulla
        tempor pharetra. Vivamus fermentum odio sit amet rhoncus convallis. Nunc
        ac vulputate dui. Ut facilisis volutpat mi, auctor maximus sapien
        vehicula in. Suspendisse at bibendum orci, et suscipit massa. Phasellus
        finibus ante at nibh tempus, a maximus eros imperdiet. Duis gravida
        pulvinar lacus, sed pellentesque nibh porta ac. In quis molestie arcu,
        quis sollicitudin erat. Proin at augue mi. Etiam elementum sem aliquet
        aliquet semper. Pellentesque ultricies bibendum nulla ut dapibus. Sed
        mollis ipsum metus, id scelerisque augue lobortis vitae. Maecenas
        venenatis pellentesque risus, sit amet accumsan mi feugiat id. Nunc
        turpis elit, ullamcorper sed scelerisque et, aliquam sed ante. Nullam
        facilisis lobortis risus vel hendrerit. Phasellus ultrices nisl quis
        enim aliquet pharetra. Cras enim ante, ultrices a erat quis, iaculis
        pellentesque mauris. Suspendisse nec aliquam tortor. Ut ut massa non mi
        elementum facilisis id non tellus. Sed a vestibulum erat, id hendrerit
        nibh. Sed tempor mauris leo, eget faucibus dui porta id. Fusce in augue
        at diam fringilla sollicitudin eget a ex. Sed tempor sit amet ipsum vel
        consectetur. Etiam condimentum lorem sed volutpat varius. Sed leo sem,
        pulvinar sed tincidunt id, molestie porta erat. Nulla vel euismod elit.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Vestibulum pulvinar est ut felis tempor aliquet.
        Maecenas a facilisis sem, vel tempus est. Praesent quis scelerisque sem.
        In pellentesque, nibh sit amet tincidunt convallis, magna enim vulputate
        nibh, ut finibus est enim convallis augue. Quisque auctor tempor tellus
        a imperdiet. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Duis pharetra sem purus, in mollis leo
        molestie in. Vivamus a posuere nibh. Proin malesuada tellus nulla, at
        feugiat lectus euismod vitae. Fusce non nisi ullamcorper, euismod mi
        vel, tincidunt leo. Nulla fringilla finibus iaculis. In sodales turpis
        odio, tristique sollicitudin urna semper id. Etiam a est vehicula,
        dapibus lorem convallis, euismod turpis. Quisque quis quam arcu.
        Pellentesque ut ligula nisi. Curabitur commodo eleifend urna, quis
        accumsan justo pharetra et. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Cras vehicula nec urna sed hendrerit. Proin nec blandit
        sapien. Vestibulum euismod rutrum aliquet. Mauris a pretium nibh.
        Vivamus in consectetur magna. Suspendisse potenti. Phasellus
        pellentesque sapien ante. Nulla eleifend mauris vel lorem scelerisque
        tincidunt. Aenean id metus turpis. Aenean ac mi est. Suspendisse in
        sapien condimentum, aliquam massa in, pulvinar massa. Proin bibendum et
        elit sed pellentesque. Cras pellentesque nisi et nisi aliquet, ut
        facilisis erat dignissim. Phasellus justo est, laoreet eu varius
        fringilla, ultricies in diam. Integer porttitor ultrices dui efficitur
        faucibus. Proin laoreet lectus non nulla porttitor molestie vitae sed
        elit. Aliquam dapibus egestas massa, sit amet fermentum turpis tristique
        vel. Donec interdum at est vel consequat. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        nec libero faucibus, auctor velit ac, accumsan nibh. Vestibulum ac purus
        turpis. Fusce vitae dignissim dui. Sed pulvinar fringilla eleifend.
        Donec at tincidunt magna. Etiam congue massa a quam dapibus sodales.
        Maecenas suscipit quam a mattis convallis. Sed convallis sem justo,
        finibus eleifend nisl placerat iaculis. Aenean mollis dolor euismod ex
        tempus commodo. Phasellus nec est a dolor posuere dictum nec accumsan
        dui. Sed imperdiet urna erat, at ultrices nunc aliquam a. Proin nec odio
        ultricies, convallis quam vel, aliquet orci. Vestibulum at justo mi.
        Proin in velit ut sem suscipit varius. Aliquam fringilla bibendum ante,
        id semper quam euismod nec. Duis vulputate, nisi ut faucibus mattis,
        neque nibh venenatis velit, quis tristique orci sapien ac ex.
        Suspendisse potenti. Donec mi eros, tincidunt sit amet maximus a,
        maximus eu velit. Suspendisse potenti. Sed ultrices, erat in facilisis
        efficitur, neque neque egestas velit, non mattis quam leo sit amet diam.
        Pellentesque dui neque, sodales a ullamcorper ac, ultricies in ligula.
        Nulla quis enim laoreet, varius nibh ac, ultrices nisl. Etiam dolor
        lectus, euismod et dictum nec, maximus sed nibh. Praesent lacinia, sem
        sit amet vulputate vestibulum, lectus augue laoreet libero, pellentesque
        convallis sem elit ac nulla. Sed laoreet vel felis et tempus. Nunc eget
        rutrum dui. Donec vel purus eget arcu vestibulum blandit. Proin euismod
        dolor a massa imperdiet varius. Curabitur nunc lacus, egestas non odio
        vitae, efficitur mattis ante. Vivamus in scelerisque sem, tincidunt
        gravida mi. Pellentesque nibh nibh, molestie vel turpis eleifend,
        lobortis dapibus est. Nullam a diam non risus fermentum tempus sit amet
        eget tellus. Nam efficitur volutpat magna, eu aliquam orci suscipit
        mollis. Suspendisse maximus, nunc ut feugiat posuere, elit nibh laoreet
        elit, vitae commodo ipsum ipsum non nisl. Integer lectus turpis,
        vestibulum cursus dolor et, hendrerit placerat mi. Proin vel leo nec
        quam egestas vulputate a at nisl. Phasellus vel turpis vitae orci
        aliquam euismod. Curabitur sit amet urna tristique nibh sodales dapibus.
        Aenean augue ipsum, aliquam nec sagittis vel, sagittis eu felis.
        Maecenas eu tortor varius, tincidunt nisi ut, iaculis nisl. Fusce
        volutpat velit at nulla aliquam, fringilla volutpat justo consectetur.
        Curabitur maximus laoreet sem at ultricies. Duis metus velit, tempor eu
        sagittis sed, ultricies vel dui. Etiam vel lectus vel justo sagittis
        vehicula in blandit eros. Nam fermentum velit justo, ac cursus nulla
        viverra eget. Nunc dui lectus, blandit sed malesuada sit amet, rhoncus
        in lacus. Pellentesque auctor, felis quis maximus scelerisque, justo
        diam finibus dolor, eu fermentum ex lacus eu tellus. Aliquam dictum
        accumsan diam et elementum. Proin vehicula vel nisi non venenatis.
        Praesent auctor consectetur felis, nec ullamcorper velit tristique ut.
        Phasellus iaculis id diam quis ornare. Pellentesque eget ipsum eget dui
        rutrum congue nec id purus. Donec quam magna, finibus eu dignissim
        fermentum, finibus ut leo. Sed nisi nisl, laoreet et nisi ut, dapibus
        efficitur mi. Ut sodales ex urna, et tempus velit suscipit at. Aliquam
        sed nisi hendrerit, porta purus at, ultrices diam. Cras et libero magna.
        Aenean dui lorem, auctor sit amet sapien ut, elementum sagittis augue.
        Vivamus in consectetur sapien. In hac habitasse platea dictumst. Proin
        eleifend, magna vel sagittis consectetur, nisl enim tristique nisi, nec
        pretium justo leo ac risus. Quisque sed fringilla tellus. In ut lorem
        faucibus, luctus ipsum et, ullamcorper turpis. Suspendisse gravida
        turpis vitae sem accumsan bibendum. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Duis mattis nisi
        a tellus euismod, at placerat felis scelerisque. Maecenas fringilla
        semper arcu, eget aliquet mauris placerat id. Vestibulum porta finibus
        efficitur. Proin sit amet dapibus nisl, at sagittis enim. Phasellus
        ullamcorper eget nulla ac ultrices. Cras maximus egestas blandit. Ut
        pretium imperdiet lectus, nec tempus ex lacinia sit amet. Vivamus
        sagittis lacus quis enim tincidunt, sed dapibus quam mollis. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed volutpat a sapien sit amet cursus. Fusce at tortor vitae dui
        viverra semper. Duis mattis sodales enim ac lacinia. Cras non aliquet
        arcu. Nam sit amet mauris elementum, pharetra magna nec, lacinia magna.
        Mauris placerat a velit vitae finibus. Pellentesque eu arcu bibendum,
        vehicula purus et, molestie massa. Vestibulum vulputate scelerisque
        purus, ac mattis massa rutrum et. Nulla elementum mi sed auctor
        molestie. Nam a lacinia erat. Ut bibendum consectetur porttitor.
        Phasellus porta non mi vel pretium. Quisque pharetra metus dui, nec
        tempus lorem malesuada in. Aenean pretium, turpis vel tempus bibendum,
        nibh dolor viverra nisi, consectetur laoreet massa urna in metus.
        Praesent imperdiet iaculis eros, vitae ullamcorper justo facilisis sed.
        Ut non nulla finibus, fringilla odio id, feugiat enim. Mauris eu urna
        eget erat volutpat molestie sit amet ornare augue. Aliquam libero nibh,
        consectetur vitae tempor sit amet, iaculis sit amet sapien. Curabitur
        dapibus, nisi a congue auctor, elit ante porttitor elit, quis vulputate
        risus enim vel ante. Fusce orci leo, aliquet congue nibh in, varius
        lobortis justo. Duis feugiat, augue id sodales dictum, ante nisl
        ullamcorper dolor, pulvinar iaculis lacus elit vestibulum tellus.
        Aliquam dapibus pulvinar felis. Fusce ut sapien nec erat posuere
        molestie at vitae erat. Donec sollicitudin erat non sapien sagittis
        sagittis. Mauris risus turpis, iaculis quis mollis ut, ornare at metus.
        Curabitur aliquam convallis lobortis. Aenean ullamcorper id nulla non
        pellentesque. Fusce malesuada ut erat non tristique. Sed nec tortor eget
        odio semper suscipit sit amet ac nisi. Fusce at bibendum dolor. Ut sed
        bibendum augue, vitae interdum est. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Curabitur in iaculis tortor, consequat
        volutpat purus. Phasellus dictum ligula non leo porttitor commodo. Nunc
        ullamcorper malesuada lorem. Phasellus viverra ante non mauris malesuada
        porta. Praesent id hendrerit nisi. Quisque et sapien tempor, convallis
        erat vel, eleifend est. Ut ac massa ex. Vivamus sed velit felis. Fusce
        sit amet sem vitae lacus facilisis pretium eget vitae nisi. Mauris
        maximus neque at lacus imperdiet rhoncus. Mauris et imperdiet velit, eu
        tincidunt justo. Cras at pharetra felis, eu pulvinar tortor. Etiam
        pellentesque ornare felis, eu tempor diam imperdiet vel. Cras libero
        sapien, pulvinar at est vel, imperdiet maximus tellus. Vestibulum ut
        risus accumsan, ultrices magna ac, tincidunt augue. Duis eu nisl ac
        lacus iaculis faucibus sit amet sit amet felis. Vivamus consequat diam
        egestas lorem interdum mollis. Praesent facilisis, justo at pharetra
        molestie, libero dolor maximus ante, vel interdum ante nisi eget orci.
        Praesent ac nunc at mauris varius tincidunt. Suspendisse venenatis elit
        vel eros posuere molestie. Nullam a fringilla mi. Nulla dignissim odio
        metus, vitae ultrices magna posuere suscipit. Donec eleifend scelerisque
        neque, a ullamcorper ex euismod vel. Pellentesque at euismod quam, id
        vestibulum sem. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Vestibulum semper dolor felis,
        in gravida tellus viverra sit amet. Nullam congue, quam non tincidunt
        lobortis, sem ex tempor ex, id cursus velit mauris vestibulum ex.
        Aliquam iaculis eget enim dictum mattis. Nullam condimentum elit nunc,
        at porttitor purus posuere sed. Praesent non mauris massa. Etiam at
        semper enim. Nunc dapibus, magna aliquam dignissim dapibus, tortor massa
        cursus libero, et mollis eros sem vitae risus. Fusce et augue ut neque
        sollicitudin pulvinar sit amet id ligula. Phasellus cursus mi sed cursus
        viverra. Aenean ultricies, enim vel aliquam interdum, metus tellus
        mollis ex, sed tincidunt nulla ex eget est. Aliquam sagittis id arcu
        eget interdum. Donec sodales mauris non lorem tempor, vitae scelerisque
        nulla tincidunt. Sed auctor augue consequat, rutrum nisi in, facilisis
        odio. Nunc est felis, vestibulum quis porta vitae, convallis a sapien.
        Quisque vitae mauris tortor. Morbi erat ante, ultricies sit amet
        vulputate vel, dictum eu erat. Curabitur luctus tristique orci.
        Curabitur sed massa finibus, iaculis mi vel, gravida ex. Proin sagittis
        justo bibendum justo euismod dignissim. Sed non luctus lacus. Nullam eu
        tristique felis. Sed id commodo elit. Praesent lobortis ligula at massa
        rhoncus, quis blandit dui fermentum. Ut a cursus nunc, at bibendum
        augue. Donec in venenatis erat. Phasellus sit amet ligula arcu. Sed
        consectetur, ligula at lobortis tincidunt, neque nunc laoreet ex, non
        pellentesque lorem ex tincidunt diam. Etiam sit amet elementum ligula.
        Mauris fringilla elit eget leo eleifend commodo. Suspendisse tempor diam
        et cursus feugiat. Aliquam erat volutpat. Vivamus dignissim congue
        tristique. Sed vitae magna sed eros auctor aliquam cursus ac sapien. Sed
        luctus pharetra eleifend. Aenean eu lorem ornare, tristique leo
        vehicula, faucibus diam. Etiam porta placerat massa. Integer lacinia
        iaculis malesuada. Donec ultrices, ligula ac cursus hendrerit, turpis
        est pellentesque erat, ut finibus enim magna id purus. Nunc iaculis urna
        sed nisl accumsan, at scelerisque lacus vulputate. Duis neque nibh,
        eleifend ac tincidunt quis, luctus vitae tortor. Vivamus imperdiet
        malesuada faucibus. Vivamus egestas id augue eu volutpat. Nunc at nisi
        vitae urna venenatis efficitur et in quam. Phasellus ut ex ac eros
        sodales hendrerit quis condimentum nunc. Donec ultrices, lacus vulputate
        aliquet consectetur, dui turpis placerat velit, ut efficitur lacus neque
        vel est. Pellentesque sit amet orci in tellus euismod semper. Quisque
        sapien ex, dapibus in urna ut, lacinia scelerisque sem. Sed ultrices
        bibendum diam, vitae convallis est elementum non. Fusce viverra ante et
        velit consequat rutrum. Ut vel nisi consequat, sollicitudin tellus vel,
        feugiat lorem. Etiam luctus eget nibh a imperdiet. Vestibulum laoreet id
        magna eget mollis. Duis iaculis tempor aliquam. Donec eu nibh vel diam
        pretium aliquam. Maecenas in tincidunt tortor, a pulvinar metus. Mauris
        fermentum accumsan orci non vehicula. Sed dui libero, accumsan nec ipsum
        nec, elementum vestibulum justo. Nulla vitae risus auctor, consequat
        elit quis, iaculis ante. Donec lobortis ligula vitae erat facilisis, eu
        elementum lorem feugiat. Suspendisse neque leo, sagittis sed tincidunt
        nec, dictum vel sem. Vestibulum augue odio, imperdiet ut posuere et,
        bibendum eget magna. Donec quis mi bibendum, vulputate est eu, ornare
        nunc. Aliquam ut sem eget lorem placerat commodo. Vestibulum tempus,
        lacus in luctus lobortis, lectus mi lobortis erat, quis tristique lectus
        orci a est. Aliquam vitae vulputate felis, a iaculis risus. Phasellus
        sit amet elementum quam, nec vestibulum metus. Ut facilisis egestas odio
        placerat efficitur. Cras rhoncus mattis metus ut blandit. Nulla
        venenatis aliquet efficitur. Mauris fermentum at est in blandit. Etiam
        pellentesque vestibulum orci, at vestibulum urna iaculis sed. Sed
        facilisis lorem magna, sed tincidunt diam auctor sollicitudin. Nullam
        ullamcorper lectus quis tellus luctus tristique. Aenean in sem at enim
        hendrerit rutrum sit amet eget elit. Proin dapibus dui nec mi fermentum,
        ut cursus mi luctus. Nunc pulvinar ullamcorper ipsum, et venenatis
        ligula ullamcorper imperdiet. Mauris mollis vel elit sit amet finibus.
        Curabitur gravida orci orci, sed blandit risus tincidunt nec. Donec
        consectetur congue lectus quis consequat. Proin eu est condimentum,
        dignissim diam in, sagittis nulla. Duis congue faucibus risus in
        iaculis. Pellentesque fermentum ac elit feugiat dapibus. Praesent
        molestie commodo nulla, in porta turpis ultricies at. Nullam imperdiet
        enim eget porta maximus. Nam porttitor elementum sapien, vel dignissim
        sem consectetur a. Vestibulum sodales, erat pellentesque tincidunt
        semper, ipsum arcu accumsan diam, ut vestibulum erat metus nec ex. Ut
        mauris odio, tempus quis quam ut, luctus vehicula augue. Suspendisse vel
        vehicula velit. Morbi id elit cursus, elementum metus ut, tristique mi.
        Phasellus lobortis ligula vitae accumsan cursus. Maecenas at egestas
        massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Morbi dictum augue ut tellus consequat, pretium
        aliquam mauris accumsan. In tincidunt magna quis consequat facilisis.
        Nullam et feugiat dui. Aliquam sit amet ultrices nunc, aliquam tincidunt
        urna. Integer iaculis vel urna quis egestas. Phasellus blandit
        pellentesque odio bibendum dapibus. Cras vel sodales nisl, sit amet
        consectetur ipsum. Aenean hendrerit sagittis nibh, in rhoncus neque
        tempor nec. Aliquam elementum arcu eu urna dapibus, commodo consectetur
        libero aliquam. Aenean varius vitae felis in condimentum. Vestibulum
        mattis ex vitae ligula consectetur viverra. Morbi porttitor enim in
        magna ultrices, vel tempor justo volutpat. Ut molestie interdum ante,
        non feugiat sapien pharetra at. Sed congue velit sit amet metus lacinia
        posuere. Fusce non dui eu nunc rhoncus convallis. Praesent posuere erat
        eu nisi fringilla, eu aliquet eros fermentum. Nullam luctus efficitur
        nisi quis imperdiet. Sed consequat volutpat libero, quis pellentesque
        felis pharetra at. Donec accumsan quam erat, pharetra gravida elit
        elementum nec. Donec in vestibulum sapien, at placerat erat. Praesent
        congue, augue non suscipit rutrum, nisi erat dapibus odio, ac egestas
        sapien lorem at magna. Mauris mi libero, dignissim posuere venenatis
        eget, tristique eleifend arcu. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Suspendisse eu ex id purus viverra gravida. Vivamus
        sagittis leo eu odio ornare, id ornare massa faucibus. Nullam congue
        ante eu accumsan convallis. Quisque varius faucibus laoreet. Ut eu
        sodales quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus venenatis, felis nec consectetur lobortis, lectus urna
        sollicitudin diam, quis condimentum orci est et orci. Maecenas mollis
        laoreet tempor. Sed posuere libero sem, id commodo quam lobortis a.
        Maecenas est erat, cursus quis sapien quis, molestie rhoncus risus.
        Etiam nec accumsan risus, ut molestie justo. Vivamus augue erat,
        porttitor vitae finibus eu, facilisis viverra velit. Sed lacus felis,
        viverra et aliquam vel, congue eu elit. Integer nec maximus magna.
        Suspendisse in pellentesque urna. Sed blandit accumsan sapien, dapibus
        pulvinar arcu consequat convallis. Quisque facilisis ut urna sit amet
        aliquam. Morbi id justo sit amet nisi gravida dignissim aliquam vitae
        risus. Nullam a erat in lorem fermentum blandit. Sed sagittis tempus
        mauris ut posuere. Donec nisl dui, lobortis eget purus vitae, sodales
        varius ipsum. Mauris varius hendrerit orci, sollicitudin ultrices ante
        cursus at. Nulla facilisi. Phasellus euismod felis ut placerat
        sollicitudin. Donec consequat egestas posuere. In fringilla nunc nec
        mauris interdum tincidunt. Quisque sollicitudin rutrum dictum. Phasellus
        sed faucibus velit. Morbi ut lectus vel lorem ornare pharetra quis et
        lacus. Nulla non dui ut sapien consequat sollicitudin ut et velit. Sed
        vitae hendrerit risus. Mauris cursus ligula quis auctor condimentum.
        Proin eu sapien vehicula, sagittis orci ut, consequat ligula. Donec
        egestas tortor quis libero ornare, in tincidunt felis aliquam. Mauris id
        nulla lacus. Quisque convallis sapien nec ligula dapibus, in hendrerit
        lacus facilisis. Quisque ac turpis et sapien auctor vehicula nec vitae
        turpis. Vivamus eget fermentum velit, a posuere lectus. Phasellus
        efficitur sem nunc, vel viverra ipsum euismod in. Integer auctor varius
        euismod. Praesent lacinia, nibh ut porttitor molestie, risus ligula
        tempor erat, sit amet scelerisque dolor ligula et elit. Donec interdum
        augue ac consequat porta. Nam et neque sollicitudin, lacinia arcu sit
        amet, tempus metus. Suspendisse convallis massa quis quam dapibus, vel
        posuere turpis ullamcorper. Nunc placerat elit at nulla laoreet, at
        molestie purus finibus. Integer sodales scelerisque ligula, tristique
        rhoncus risus aliquet vel. Nulla sed auctor ex. Maecenas sollicitudin
        est ut ante cursus facilisis. Nam luctus turpis nec lacus ornare, eget
        pellentesque diam viverra. Etiam lacinia purus sit amet odio aliquam, et
        consequat nunc consequat. Curabitur consequat ligula a dui pulvinar
        tempor. Praesent vel libero sollicitudin sem sodales imperdiet. Etiam
        dignissim iaculis est sed ultricies. Sed lacinia convallis enim, a
        scelerisque augue consectetur at. Quisque porta risus porttitor laoreet
        condimentum. Donec venenatis facilisis pulvinar. Quisque vehicula sem
        magna, in lacinia turpis posuere nec. Suspendisse iaculis odio risus,
        quis rhoncus nisi iaculis ac. Aliquam ornare turpis mi, pellentesque
        varius ex convallis eu. Suspendisse id blandit nunc. Etiam eu tortor
        enim. Nam commodo leo ac lectus egestas tristique. Curabitur dapibus
        quam quis est imperdiet, quis malesuada nisl condimentum. Morbi luctus,
        ante eget facilisis consequat, nulla turpis facilisis ex, at tempus leo
        lacus ut ante. Etiam sed facilisis justo. Suspendisse ut eros at lectus
        mattis laoreet in ut velit. Suspendisse potenti. Nullam eu eleifend
        nisl. Maecenas nec fermentum enim. Morbi finibus erat vel est vehicula
        ultrices. Phasellus mattis euismod ullamcorper. Integer eget facilisis
        sapien. Quisque luctus sagittis leo, eget euismod nibh pretium eget.
        Pellentesque vel magna vitae lacus tempor posuere. Curabitur quam orci,
        interdum at suscipit a, suscipit et ligula. Sed ac turpis maximus,
        vestibulum tortor id, malesuada mi. Nam tincidunt elit ac ante faucibus,
        ac dapibus eros efficitur. Phasellus non massa at justo venenatis
        aliquet. Sed suscipit posuere venenatis. In vitae orci tincidunt,
        vehicula elit sit amet, euismod orci. Nam est lorem, auctor vel ultrices
        nec, ultricies maximus nisl. Nam sodales malesuada tortor, eget feugiat
        odio convallis eu. Nunc aliquam libero sed turpis vestibulum aliquam.
        Duis massa mi, condimentum eu rutrum a, fringilla at sem. Proin sagittis
        ultricies venenatis. Nam eu ante at nulla gravida laoreet sed nec lacus.
        Aliquam ac mattis nibh, eget interdum ligula. Pellentesque nunc ex,
        facilisis id est at, laoreet tincidunt odio. Mauris vitae ultrices odio.
        Sed ac egestas urna. Aenean a quam sit amet justo consectetur suscipit.
        Aenean fermentum posuere sem non condimentum. Aliquam dui neque,
        eleifend vitae metus eget, euismod venenatis nunc. Vivamus id risus ut
        ex dignissim interdum quis et nulla. Cras varius eget ante pretium
        viverra. Cras feugiat dolor eu varius luctus. Proin eget lectus eget
        felis luctus pretium. Nulla eget enim at purus mollis cursus. Cras sed
        nunc augue. Maecenas rutrum felis sem, nec rhoncus erat pellentesque
        sed. Mauris molestie gravida lobortis. Ut ipsum dolor, finibus lobortis
        justo at, tincidunt consequat velit. Praesent in vehicula nulla, eget
        dictum nibh. Nulla nunc orci, tempor a pretium id, tincidunt non nibh.
        Cras pharetra ultricies leo. Donec imperdiet mattis mi, eu finibus ex
        dignissim at. Nam molestie ligula nec lorem congue tempor. Fusce non
        elit fringilla, dignissim nisi eu, tincidunt tellus. Cras ac lorem
        cursus, commodo lacus a, consectetur tortor. Integer egestas est nisl, a
        interdum lectus finibus eget. Cras consequat, libero sit amet ultricies
        pharetra, nibh augue mollis nibh, at auctor metus odio id sem.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Fusce efficitur sem libero, at vestibulum diam
        faucibus et. Donec tincidunt, augue nec scelerisque dictum, leo justo
        molestie eros, dignissim convallis lacus velit quis sapien. Sed vehicula
        odio tellus, et bibendum felis auctor sodales. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae; In
        dignissim et tortor sit amet elementum. Curabitur eleifend, neque eget
        laoreet varius, quam metus tincidunt nisl, et pharetra sem sem non odio.
        Sed sed eros erat. Nulla eu sagittis purus. Integer finibus augue a urna
        ullamcorper placerat. Proin sodales leo id ante lacinia, vel mollis
        lorem venenatis. Aenean sagittis vehicula metus. Proin vel velit
        molestie, eleifend neque a, ultrices nulla. Pellentesque commodo
        ultricies tortor nec venenatis. Fusce orci felis, ultricies sed sagittis
        sed, condimentum ac odio. In dictum mauris nec lectus fringilla
        eleifend. Vestibulum vitae lobortis sapien. Quisque ac erat magna. Donec
        condimentum feugiat lectus a ultrices. Vestibulum lacinia a dui vitae
        gravida. Aenean ullamcorper diam neque, a dictum tortor lacinia eget.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Etiam fringilla lectus elit, vitae cursus dui
        vehicula a. Donec nec nunc et quam lacinia vestibulum ut sed est.
        Pellentesque vitae mi ac nisl egestas auctor nec sit amet massa. Ut
        bibendum mollis metus a lacinia. Donec mattis velit turpis, sit amet
        porttitor risus fermentum in. Mauris ornare, enim vitae fermentum
        imperdiet, dolor dui pretium libero, a dictum orci sapien eu lacus.
        Suspendisse dapibus purus sit amet mi maximus consequat. Praesent purus
        lorem, egestas nec feugiat a, tincidunt vitae augue. Nulla molestie
        tincidunt libero. Cras pharetra nec orci nec faucibus. Sed dignissim
        nunc iaculis feugiat rhoncus. Suspendisse potenti. Donec ultricies,
        tellus a fringilla viverra, nunc tellus bibendum turpis, a fermentum
        metus quam nec enim. Etiam vehicula interdum dolor, nec aliquam felis
        semper a. Donec varius arcu sed vulputate maximus. Vestibulum ipsum est,
        ullamcorper a nulla et, imperdiet pretium enim. Mauris eleifend cursus
        vestibulum. Proin sed iaculis ligula. Nunc euismod, metus eu egestas
        vulputate, leo felis mollis mi, nec pretium leo erat nec ipsum.
        Pellentesque in aliquam ante. Nunc ornare posuere interdum. Pellentesque
        blandit nunc ac fringilla hendrerit. Nam iaculis ut libero quis
        consectetur. Aenean ac tellus turpis. Pellentesque a sapien vestibulum
        nisl condimentum laoreet. Vivamus pretium convallis erat at molestie.
        Maecenas id elit sit amet dui hendrerit malesuada. Aenean posuere et est
        in accumsan. Nullam molestie tincidunt dolor, blandit malesuada nunc
        porttitor id. Vivamus tincidunt orci vitae rhoncus blandit. Maecenas
        quam nunc, ultricies non libero sed, varius euismod massa. Quisque metus
        enim, gravida eget pellentesque in, sagittis vel tellus. Sed aliquet
        placerat nulla, at interdum metus commodo in. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Phasellus orci arcu, laoreet non
        libero sit amet, mattis semper ligula. Cras tempor tellus ac convallis
        pellentesque. Vivamus vitae laoreet nisi. Nullam hendrerit, orci eget
        ornare varius, mauris arcu faucibus dolor, ac ultrices nisi mauris et
        nulla. Cras vehicula magna faucibus lorem finibus accumsan. Suspendisse
        lectus orci, posuere eu felis ut, suscipit luctus leo. Vestibulum enim
        purus, finibus vitae felis vitae, cursus consequat ipsum. Ut tristique
        magna mattis, condimentum nisi a, feugiat eros. In molestie mauris at ex
        porttitor, at convallis lectus dapibus. Vivamus eget rhoncus dui.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce
        efficitur hendrerit lorem, sed lacinia lacus sollicitudin ac. Fusce
        sodales velit vitae semper iaculis. Nullam non feugiat nisi. Quisque id
        consequat libero. Phasellus efficitur, purus sed placerat convallis,
        urna erat ultrices quam, eget auctor dolor elit at libero. Suspendisse a
        ex nec erat consequat ultrices. Praesent vel enim fermentum, convallis
        diam eget, faucibus nulla. Morbi et bibendum ipsum, eu facilisis diam.
        Curabitur ultrices pretium justo at tempus. Praesent sed porttitor
        augue, vitae malesuada odio. Aenean condimentum mattis libero eu
        pulvinar. Nulla ullamcorper non urna nec aliquam. Ut nisl purus,
        hendrerit non suscipit ac, tincidunt vel ex. Morbi tempus ac elit at
        ornare. Curabitur venenatis accumsan pharetra. Pellentesque venenatis
        mollis diam. Aliquam luctus quis risus sed pulvinar. Sed eget ex eu ante
        faucibus rutrum sit amet eget lectus. Etiam varius faucibus tempor.
        Praesent nec gravida neque. Cras maximus turpis ut dolor pellentesque
        malesuada. Integer eu tincidunt nisi, vel ultricies magna. Quisque
        euismod pellentesque aliquam. Aenean sed feugiat nisl. Vivamus id lectus
        fermentum, semper lacus sed, congue sapien. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Mauris
        fermentum viverra tortor vel blandit. Mauris eget ex dictum, tincidunt
        tellus quis, porttitor magna. In lobortis neque nec augue pharetra
        fermentum. Mauris varius et massa sit amet venenatis. Donec non nisi
        congue, pellentesque urna eu, bibendum libero. Vestibulum ultricies
        pulvinar est quis ultricies. Curabitur imperdiet magna tincidunt
        tincidunt aliquam. Pellentesque maximus diam at erat dictum mattis.
        Proin non eros urna. In dignissim pellentesque nunc viverra blandit.
        Duis accumsan varius dignissim. Aliquam gravida tortor in neque
        fringilla euismod. Donec rutrum risus nibh, nec facilisis velit pulvinar
        at. Donec quam odio, facilisis eu quam eget, tristique imperdiet risus.
        Maecenas pulvinar justo a tempus tincidunt. Duis porta odio lectus, ut
        pellentesque nunc porttitor at. Phasellus luctus consectetur mi, eget
        commodo justo sodales id. Morbi venenatis sapien eget eleifend
        convallis. Donec nec nisi lorem. Sed feugiat, sapien eget pulvinar
        maximus, urna turpis luctus nunc, sed egestas enim lacus sed dolor. Cras
        pulvinar, lectus ac gravida ultricies, mauris velit auctor eros, eget
        finibus diam erat et odio. Nam tempor varius elit, at mollis arcu
        feugiat sed. Etiam finibus volutpat felis vel mattis. Phasellus
        elementum lobortis ante, eu tempor lacus semper non. Donec tempus, dui
        suscipit pulvinar luctus, odio dui rhoncus quam, consequat luctus ipsum
        urna in orci. Nunc ultricies metus in nunc porttitor vestibulum in non
        sapien. Phasellus porttitor felis ligula, in ornare ex suscipit in.
        Nulla euismod convallis odio sit amet laoreet. Duis sodales enim augue,
        quis tempor neque luctus non. Etiam efficitur metus ac sem efficitur
        viverra. Maecenas vulputate rutrum scelerisque. Quisque at vehicula mi.
        Fusce maximus orci vitae lacinia aliquam. Vestibulum sed sem lorem. Cras
        nec sodales nunc. Donec felis ligula, condimentum id elit in, volutpat
        sollicitudin eros. Phasellus nec gravida nulla. Sed eleifend semper
        porta. Donec id rutrum elit. Morbi eget condimentum tellus. Sed
        venenatis tincidunt sem ultrices bibendum. In ex purus, venenatis non
        feugiat et, consectetur vitae ex. Vivamus consequat est in est
        fermentum, ultricies ultrices sapien consectetur. Duis vehicula velit ut
        ornare mattis. Mauris luctus libero vitae mi tincidunt faucibus.
        Maecenas varius consequat neque, semper faucibus nulla hendrerit at.
        Donec massa risus, rutrum sed orci sit amet, scelerisque tempus urna.
        Integer lacinia dolor ac erat ullamcorper mollis. Morbi eu volutpat
        nunc, non convallis arcu. Proin ut leo a nulla suscipit congue.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nam id maximus tortor. Nam tincidunt sapien sit
        amet turpis mattis efficitur. Donec quis lacinia libero, tincidunt
        ultricies purus. Integer commodo pretium turpis, ut tempus mauris
        suscipit ut. Morbi sollicitudin sem felis, eget pellentesque turpis
        fermentum et. Etiam dui tellus, semper id risus in, volutpat eleifend
        arcu. Curabitur fermentum, eros et pulvinar maximus, odio dolor laoreet
        ante, vitae auctor lectus lorem eget nisl. Aenean volutpat iaculis
        placerat. Cras at erat sapien. Quisque iaculis risus elit, eget pharetra
        turpis accumsan finibus. Integer egestas justo dictum vehicula cursus.
        Maecenas a magna sollicitudin nunc iaculis eleifend vel non lacus.
        Suspendisse fermentum massa non odio tincidunt, et feugiat nisl mollis.
        In luctus tincidunt purus, vel ultrices ipsum faucibus eu. Etiam porta
        fringilla magna non auctor. Fusce nisi dolor, fermentum at efficitur
        sagittis, lobortis non ex. Sed sed augue libero. Aliquam placerat libero
        arcu, vel ornare eros aliquet non. Nulla commodo mauris ut libero
        varius, non porta purus sollicitudin. Praesent pharetra cursus libero,
        faucibus facilisis ligula pellentesque vel. Sed tincidunt diam sem, ac
        aliquet eros sollicitudin at. Sed mattis eleifend massa id malesuada. In
        facilisis sapien ut suscipit hendrerit. Nam ultricies ultrices purus
        quis vestibulum. Aenean egestas dignissim nunc suscipit cursus. Etiam
        sed facilisis felis. Maecenas eros nulla, pharetra quis gravida quis,
        pharetra eget lectus. Sed est quam, vulputate eget felis eu, varius
        molestie elit. Nullam ac justo massa. In mollis dolor vitae placerat
        lobortis. Mauris varius lacus nulla, sed viverra mi fringilla eget.
        Maecenas venenatis elementum varius. Phasellus convallis tellus at
        posuere molestie. Cras at finibus nulla, id sollicitudin nibh. Duis
        dignissim, erat non dignissim molestie, odio libero ultrices nibh, porta
        luctus risus arcu at mauris. Pellentesque elit nunc, ultrices congue
        orci ac, vehicula pharetra erat. Aliquam ornare leo ante, et fermentum
        lacus aliquet et. Morbi viverra pellentesque mauris gravida venenatis.
        Vivamus pellentesque mollis euismod. Suspendisse potenti. Donec neque
        tortor, porta in porttitor in, pellentesque at leo. In hac habitasse
        platea dictumst. Nullam in ullamcorper augue. Ut id accumsan enim. In
        hac habitasse platea dictumst. Suspendisse lobortis sit amet augue a
        suscipit. Nunc pharetra dui diam, ac molestie tortor luctus tincidunt.
        Sed nibh turpis, varius non eros sit amet, scelerisque mattis dolor.
        Nullam condimentum dignissim nunc. Sed tincidunt urna nec metus aliquam,
        quis dapibus nisi vulputate. Integer sit amet dignissim nunc. Etiam
        rutrum mi non odio hendrerit, eget mollis lorem ultrices. Vestibulum
        libero mi, pretium quis risus imperdiet, facilisis vestibulum nibh. Ut
        pellentesque ultrices lacinia. Integer ut libero eu risus commodo ornare
        id non ipsum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Mauris euismod tortor eu ante
        faucibus, vel imperdiet magna scelerisque. Fusce aliquet aliquam nisi
        sed placerat. Etiam sit amet tortor dictum, pharetra ipsum non, interdum
        libero. Sed dignissim nunc non euismod consectetur. Fusce cursus
        scelerisque metus, in sollicitudin dolor tempor tristique. Quisque nec
        purus mattis, consequat arcu ac, mollis erat. Nulla facilisi. Ut
        interdum elementum ipsum. Donec nec malesuada nisi. Proin sed purus sit
        amet elit tincidunt suscipit eget a ligula. Donec non dui in mauris
        tempor imperdiet. Donec ullamcorper lectus ut aliquet suscipit. Nullam
        nec tincidunt est. Etiam vel tempor libero, vel rutrum ipsum. Duis
        porttitor varius tortor nec mollis. Phasellus metus leo, rutrum id
        pellentesque eu, tempus id libero. Nam suscipit leo ac sapien euismod
        ornare. Aliquam at pulvinar arcu. Nulla commodo augue ut nunc viverra,
        non commodo enim condimentum. Phasellus quis sem volutpat, commodo
        tellus in, euismod turpis. Quisque suscipit congue ultricies. Curabitur
        lectus ligula, scelerisque eget venenatis vitae, blandit in ex. Aliquam
        ut neque faucibus, porta ex et, congue nisi. Sed bibendum quam ac
        pretium pharetra. In hac habitasse platea dictumst. Sed fringilla
        tincidunt libero commodo tincidunt. Fusce vitae aliquet lorem. Nulla sem
        metus, aliquam id tincidunt non, mattis in urna. Praesent pretium at
        ipsum eu vestibulum. Suspendisse feugiat consequat nisi in sagittis.
        Morbi enim mauris, viverra ut arcu eget, congue gravida nisi.
        Suspendisse at metus urna. In nec nibh lorem. Maecenas efficitur
        suscipit tortor, et mollis lectus facilisis ut. Quisque luctus, erat
        semper ornare ultrices, nunc elit interdum magna, in volutpat sapien
        augue a nunc. Ut fringilla mi cursus, egestas purus ut, porta arcu.
        Suspendisse molestie auctor quam, a dignissim eros dictum at. In hac
        habitasse platea dictumst. Suspendisse finibus, justo eu interdum
        sollicitudin, neque erat vulputate massa, a sodales dolor sem quis
        turpis. Mauris venenatis, eros vel accumsan gravida, lectus nunc
        tristique tortor, ac convallis lectus nulla vel risus. Etiam non
        vehicula metus. Praesent aliquam rhoncus porta. Sed varius sem elit, non
        consequat nulla tempus non. Quisque tincidunt elit nec tincidunt
        convallis. Duis sit amet lobortis nisi. Nullam id dictum eros.
        Pellentesque tempor finibus neque, sit amet semper nisi hendrerit
        condimentum. Cras nec nunc ultrices, efficitur nisl vulputate, tempus
        odio. Nullam tincidunt tincidunt sapien sit amet euismod. Aenean tempor
        id lacus ac facilisis. Sed nec magna augue. Nulla pretium interdum nibh
        at blandit. Proin pharetra metus a purus finibus finibus. Nulla dapibus
        enim nec tellus ornare faucibus. Integer commodo lacinia erat, sit amet
        tempor ex hendrerit sit amet. Cras ut diam pharetra, dictum tortor id,
        vestibulum nisl. Phasellus interdum, arcu id facilisis fermentum, elit
        turpis aliquet lacus, quis sagittis mi velit ac urna. Quisque eu erat eu
        tortor dapibus bibendum nec quis ex. Maecenas faucibus porta quam. Etiam
        et nunc elit. Donec ac ultricies risus. Fusce lacus lacus, porta et
        justo posuere, fermentum viverra tellus. Curabitur ut ex pellentesque,
        faucibus elit ut, pharetra augue. Vivamus sagittis auctor nulla. Donec
        vehicula lectus magna, id convallis nisi feugiat iaculis. Morbi semper
        tempor nisi quis dictum. Nulla ullamcorper odio est, vel posuere sapien
        rutrum quis. Aliquam consectetur dignissim elementum. Suspendisse
        potenti. Aenean lacinia imperdiet nulla vel varius. Nulla placerat
        rutrum mauris vel bibendum. Suspendisse blandit metus vitae porttitor
        convallis. Sed a urna dignissim, ullamcorper urna ut, scelerisque quam.
        Donec tristique, quam sit amet dignissim volutpat, ipsum dui tristique
        dui, ac rhoncus urna purus suscipit metus. Nunc euismod rhoncus ipsum,
        vel maximus urna laoreet ullamcorper. Nullam pharetra tortor est, eget
        sollicitudin neque eleifend ut. Ut et fermentum eros. Aenean interdum,
        dui ac fringilla placerat, nunc eros vulputate elit, quis maximus sapien
        turpis tincidunt orci. Curabitur in purus hendrerit, interdum tellus
        nec, laoreet lectus. Nullam facilisis dapibus lorem imperdiet ornare.
        Phasellus quis fermentum velit. Vivamus ultricies metus felis, sit amet
        auctor diam finibus ut. Aenean ligula nulla, lobortis at purus eu,
        laoreet ullamcorper nulla. Ut metus purus, luctus vel metus ac, placerat
        porta nisi. Mauris blandit ut est et efficitur. Aenean pharetra volutpat
        tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nullam nec dictum metus, imperdiet lacinia dolor. Cras condimentum
        maximus sem, id ultrices tortor sodales aliquet. Ut justo mauris,
        rhoncus eget egestas eu, consequat vel eros. Aenean tincidunt efficitur
        turpis et pretium. Nulla ut metus lectus. Fusce dapibus felis massa, id
        iaculis augue blandit et. In hac habitasse platea dictumst. Maecenas sem
        ante, mollis finibus nunc sed, luctus lobortis massa. Vestibulum
        consectetur leo odio, ac tempor velit tincidunt ut. Mauris vitae
        elementum enim, a lacinia purus. Vivamus feugiat euismod tincidunt.
        Curabitur hendrerit nulla ac elit scelerisque condimentum. Nunc id
        semper nulla. Nunc vel est sem. Quisque efficitur orci sed molestie
        pulvinar. Fusce et ligula porttitor, condimentum ligula non, tempor
        eros. Pellentesque auctor convallis diam nec tincidunt. Donec in lacus
        tellus. Nam a orci ac eros rhoncus dapibus. Curabitur a rhoncus turpis.
        In vehicula nisi eget justo lacinia, eu porta quam interdum. Integer
        lobortis cursus efficitur. Mauris ac dignissim turpis. Nunc sed nibh
        scelerisque, tristique nisl nec, auctor diam. Nam leo est, suscipit at
        tristique ut, mollis nec turpis. Nam quis ligula eleifend, rhoncus enim
        non, fringilla erat. Nunc laoreet neque nec ante cursus cursus. Sed
        neque elit, gravida vitae suscipit at, bibendum ut felis. Suspendisse
        massa nisi, tristique facilisis fermentum nec, sagittis eget justo.
        Quisque eu congue nunc. Nulla facilisi. Donec ac nunc finibus nulla
        blandit rhoncus. Quisque quis nisl non lorem gravida congue. Mauris non
        sem sed nisi tincidunt pharetra. Suspendisse gravida quis ex non
        consequat. Cras dictum ligula nec nisl commodo suscipit. Maecenas ac
        libero et tellus pellentesque pellentesque eget id dui. Donec aliquet
        sapien vitae orci sodales luctus. Aliquam erat volutpat. Sed molestie
        ultricies nibh id vehicula. Curabitur quis eleifend nunc. Nam eu ante
        mi. In eu ipsum mi. Sed cursus pharetra pharetra. Duis elementum nulla
        sed massa fermentum, auctor sollicitudin est volutpat. Nunc facilisis
        vel justo vitae varius. Morbi ut lectus ante. Etiam ac risus interdum,
        mollis libero pellentesque, pharetra lorem. Ut molestie semper ante.
        Nulla quis ex nibh. Pellentesque rutrum mauris sed venenatis aliquam.
        Integer mattis efficitur pulvinar. Curabitur sed sem dignissim, posuere
        sapien in, imperdiet augue. Aliquam erat volutpat. Cras non molestie
        diam. Nullam dictum aliquet magna ac congue. Fusce pretium mauris
        turpis, vitae euismod turpis vulputate et. Fusce maximus urna vel sem
        ornare, placerat sagittis lacus molestie. Praesent efficitur eleifend
        dictum. Maecenas auctor quam eget mi cursus consequat. Integer elementum
        arcu ut magna gravida, nec congue est pulvinar. Donec tempor faucibus
        dui id auctor. Fusce rhoncus laoreet bibendum. Suspendisse potenti.
        Aliquam erat volutpat. Donec facilisis ex a felis molestie finibus.
        Phasellus sit amet orci ornare, suscipit felis mollis, venenatis dolor.
        Pellentesque ac viverra odio, a iaculis lorem. Quisque consequat
        faucibus libero, vel suscipit lectus fermentum rutrum. Aliquam viverra
        porttitor tellus, quis lacinia diam tempus quis. Donec sit amet commodo
        mauris. Cras non aliquet quam, hendrerit consequat erat. Fusce id ligula
        ac felis aliquet varius. Fusce quis diam erat. Proin aliquam id justo
        vel volutpat. Pellentesque eu libero eu felis bibendum molestie iaculis
        at mauris. Mauris non nunc vitae magna viverra aliquet non a lacus.
        Quisque pretium ullamcorper magna, quis laoreet libero semper a. Proin
        molestie finibus ante, eget cursus ipsum vulputate non. Sed cursus erat
        at ipsum ultricies congue. Aliquam ac turpis tempus, vulputate nibh ut,
        interdum felis. Curabitur placerat, urna vel pellentesque feugiat,
        ligula ligula finibus leo, sit amet placerat diam purus nec libero. Cras
        a fermentum felis, a fringilla nisl. Vivamus gravida maximus est, at
        ultrices orci ultrices ut. Proin id erat libero. Curabitur mattis ligula
        sit amet lectus posuere finibus. Vestibulum odio massa, pretium eu
        pretium nec, faucibus non erat. Sed rhoncus tempus commodo. Fusce et
        felis accumsan, vehicula lacus non, ullamcorper nulla. Sed semper urna
        vel tempus ultricies. Integer at bibendum magna. Suspendisse lobortis
        malesuada arcu eu consectetur. Sed quis euismod tortor. Aliquam molestie
        leo ut lacinia euismod. Aenean ligula dui, sodales nec nisi non, pretium
        fermentum leo. Nulla in lacus nec ante lobortis pharetra. Etiam et
        dictum neque. Cras auctor ex in fermentum maximus. Pellentesque at
        turpis nulla. Phasellus sem nisi, ultrices in fermentum et, pharetra non
        leo. Sed interdum, massa quis porttitor fermentum, mi purus laoreet
        enim, eu tempus enim mi placerat felis. Fusce pretium, odio et hendrerit
        semper, tellus lectus semper dolor, in consectetur nulla nisi ac lectus.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec congue ante eget elit vehicula egestas.
        Pellentesque quis lobortis erat. Praesent commodo est ut ultricies
        dictum. Etiam sit amet aliquet velit. Quisque cursus sagittis eros nec
        egestas. Vestibulum at orci gravida, dictum elit nec, mollis mi. Sed
        sodales lacinia ex, et sagittis sem. Donec ut malesuada nisl. Sed a
        lacinia nunc. Morbi aliquet purus non ipsum rutrum imperdiet. Nulla
        convallis erat nec sem fermentum vestibulum. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Nulla sit amet faucibus eros. Phasellus non elementum leo, vel mollis
        massa. Integer id dui eget libero bibendum feugiat. In nec ultricies
        ipsum, commodo molestie enim. Curabitur quam ex, semper sit amet finibus
        ut, gravida at sem. Nullam nec dui a neque maximus faucibus vel vel
        ante. Vivamus sollicitudin, diam vel consequat sollicitudin, nisi sem
        fringilla ipsum, fringilla viverra neque ante vitae lacus. Etiam id
        ipsum eu nisl pellentesque mattis sit amet eget erat. Maecenas eget ante
        non lacus placerat efficitur. Donec posuere, felis eu feugiat varius,
        felis purus interdum erat, et vulputate ligula justo ac urna.
        Suspendisse eget feugiat orci, eget pulvinar lectus. Nunc pharetra,
        magna et posuere luctus, tellus ligula faucibus nisl, eget porta nunc
        sem semper libero. Maecenas ut risus quis dui lobortis placerat eu a
        libero. Duis tortor ex, auctor vitae odio nec, dapibus accumsan risus.
        Donec ipsum diam, iaculis nec magna sit amet, interdum vulputate mauris.
        Sed porttitor ultricies erat. Integer consequat elit risus, eget
        fermentum augue tempus eu. Donec cursus nisl risus, vel tincidunt nisi
        finibus at. Pellentesque ultricies, sapien eu pharetra volutpat, leo
        erat convallis sem, nec fermentum dolor libero quis neque. Aliquam sed
        efficitur neque, et molestie leo. Curabitur facilisis enim eget lorem
        placerat condimentum. Morbi vehicula elementum sagittis. Cras consequat
        convallis erat, et volutpat elit egestas et. Quisque id rhoncus tellus.
        Donec fermentum aliquet quam vel posuere. Cras eu tellus in sem rutrum
        finibus non et dui. Cras a turpis in lectus vehicula eleifend non sed
        ante. Pellentesque tempor eget nibh ut pharetra. Sed quam nisi, finibus
        sed erat et, finibus mattis ante. Fusce quis lorem eu diam sodales
        maximus eu quis lectus. Vivamus placerat tempor purus varius sodales.
        Phasellus feugiat efficitur mauris nec sagittis. Nam fringilla lacinia
        lacinia. Maecenas non luctus velit. Vestibulum rhoncus erat ac velit
        faucibus malesuada. Curabitur efficitur nisl quis lacinia facilisis.
        Vestibulum lectus lectus, ultricies eget sollicitudin quis, varius ut
        nibh. Mauris non leo sed augue tempor egestas. Suspendisse sed
        pellentesque nunc, eget rutrum turpis. Ut neque turpis, porttitor a dui
        ac, tempus posuere orci. Ut faucibus in felis sed auctor. Duis vel
        ultricies tortor. Donec efficitur sem ex, sit amet lacinia arcu luctus
        sed. Morbi nec lectus eget felis hendrerit sollicitudin ac ut mi. Nam
        pharetra felis eget imperdiet suscipit. Mauris tempor et magna sit amet
        porttitor. Morbi a venenatis ex. Nunc lacinia lectus id arcu imperdiet
        rhoncus. Integer in tincidunt nisi. Quisque luctus auctor felis. Proin
        id iaculis elit, sit amet ornare libero. Duis turpis odio, lobortis in
        egestas quis, hendrerit tempor est. Fusce a rhoncus tellus. Integer ut
        libero erat. Nullam elementum augue eget turpis auctor, iaculis faucibus
        nisl sollicitudin. Praesent vitae consequat neque. Fusce dapibus ipsum
        et euismod blandit. Pellentesque mollis, odio at suscipit bibendum,
        felis dui iaculis turpis, non sagittis orci dolor a quam. Nunc fermentum
        turpis eu leo euismod convallis. Donec efficitur mauris ut risus
        ultrices, eget gravida felis commodo. Maecenas consectetur, lectus quis
        interdum interdum, velit est mollis velit, id varius ipsum lacus et
        eros. Suspendisse potenti. Cras viverra, lacus a gravida ullamcorper,
        massa nunc blandit elit, at pretium metus turpis consequat lectus. Nunc
        vulputate quam eu dolor faucibus consectetur. Donec non iaculis dolor.
        In id nulla id magna consequat dapibus. Quisque sed dolor eu tellus
        fringilla condimentum. Praesent viverra hendrerit imperdiet. Vivamus
        accumsan orci ut purus interdum volutpat. Donec feugiat lectus nec nibh
        dapibus, vel faucibus risus dictum. Praesent at ullamcorper nisl. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Sed consectetur interdum purus in pretium. Curabitur sit
        amet ultrices mi. Nulla neque enim, porttitor ac malesuada ut, auctor
        quis arcu. Maecenas eu pulvinar tortor. Pellentesque malesuada accumsan
        tortor ultrices sagittis. Quisque nibh tortor, tempus posuere rhoncus
        vel, interdum sed purus. Morbi dictum dolor eu odio ultricies, sed
        posuere augue convallis. Vivamus consectetur volutpat ultricies.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum
        tempus neque vel lectus efficitur, vitae fermentum ipsum tincidunt.
        Vivamus et purus congue, vehicula est ac, convallis risus. Quisque ac
        fringilla nibh. Proin tristique blandit justo, at aliquam ante
        condimentum id. Etiam non lobortis ex. Donec gravida lectus nunc, vel
        volutpat justo rhoncus sit amet. Suspendisse potenti. Integer iaculis
        velit facilisis, volutpat felis vitae, dapibus sapien. Vestibulum
        rhoncus sodales urna, in fermentum ex facilisis ullamcorper. Nulla
        facilisi. Nulla facilisi. Sed et blandit sapien, vitae tempus purus.
        Morbi et lectus at augue tincidunt sodales. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. In sagittis id nisi vitae fringilla.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Nullam elit nisl, facilisis ac lorem et,
        consectetur volutpat ante. Proin scelerisque sem non massa molestie
        ultricies. Pellentesque non nunc ac metus eleifend dictum. Suspendisse
        efficitur, odio laoreet dapibus viverra, ante orci consectetur ipsum,
        non accumsan turpis quam eget elit. In hac habitasse platea dictumst.
        Nullam ullamcorper erat diam, ultrices ornare enim elementum et. Nam et
        lorem vestibulum, faucibus quam sit amet, varius quam. Donec laoreet
        congue viverra. Sed a sapien et massa lobortis facilisis. Praesent
        tellus neque, tempor et dapibus eget, euismod sit amet turpis. In
        tristique rhoncus lectus in convallis. Donec porta sed odio et
        consectetur. Aenean quis dolor in odio blandit dignissim. Fusce tempus
        nisi nec tincidunt tristique. Nunc convallis, tellus vitae faucibus
        molestie, nulla ipsum bibendum quam, sed faucibus augue quam vel odio.
        Nulla nec scelerisque enim. Etiam blandit, risus non molestie egestas,
        orci neque sodales justo, quis maximus lorem mi non nulla. Aliquam sem
        lacus, consequat sit amet ante rutrum, malesuada ullamcorper eros.
        Aliquam metus tellus, consequat vel iaculis et, mollis sit amet velit.
        Fusce in odio sapien. Proin in ullamcorper elit, tincidunt eleifend sem.
        Vivamus finibus lacus lorem, at lacinia urna dignissim at. Aenean eu mi
        libero. Nullam pharetra blandit ligula. Curabitur pretium nisi
        fringilla, feugiat velit a, consequat tortor. In mollis rhoncus nisi id
        sollicitudin. Phasellus semper auctor varius. Sed ultrices neque quis
        velit condimentum volutpat. Sed scelerisque, orci tristique venenatis
        semper, nulla tortor blandit diam, nec accumsan lorem nisi consequat ex.
        Vivamus eget arcu eget augue feugiat aliquet. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Phasellus sit amet finibus nulla. Phasellus porta ligula orci, sit amet
        consequat nibh commodo et. Nulla euismod ipsum malesuada feugiat
        pretium. Praesent maximus lacus libero, at ultrices elit facilisis eu.
        Nam aliquam molestie pretium. Mauris condimentum iaculis nunc. Morbi
        egestas auctor justo vel ultricies. Sed vitae feugiat ex, in pharetra
        purus. Maecenas vel tincidunt leo, sed dapibus justo. Vestibulum
        suscipit sem a nunc ultrices posuere. Phasellus molestie mauris eget
        lacus sodales fermentum. Nunc fermentum consequat ante, sit amet
        efficitur magna. Phasellus quis mi sit amet nisl maximus elementum id
        eget nisi. Fusce in orci lacus. Integer enim ligula, varius eu mauris
        non, aliquet bibendum mauris. Donec aliquam elementum lacus, quis
        maximus leo fringilla nec. In a hendrerit leo, id lobortis nulla.
        Pellentesque eget nunc magna. In sit amet sem mauris. Mauris dui neque,
        malesuada eu dui vitae, ullamcorper consequat purus. Cras lacus mauris,
        viverra vitae sem efficitur, interdum porttitor nisi. In et purus id
        dolor tempor lobortis. Nullam ut libero augue. Aliquam imperdiet sed
        odio in porta. Aenean laoreet cursus ipsum, ultricies tempor mauris
        pretium sit amet. Etiam hendrerit lobortis ullamcorper. In a venenatis
        ex. Ut nec massa massa. Nulla ipsum dui, consequat sed ultrices non,
        ultrices eu mi. Donec ullamcorper ac urna in tempus. Proin velit diam,
        facilisis quis aliquet nec, vehicula a turpis. Praesent ullamcorper
        nulla id ligula scelerisque efficitur. Sed iaculis nibh non tellus
        rhoncus dapibus. Cras convallis, ipsum quis auctor aliquet, purus risus
        rhoncus metus, eu malesuada nisi elit non ante. Integer lorem nisi,
        rhoncus eu posuere tempus, viverra vitae sapien. Fusce eget ipsum vitae
        ipsum elementum facilisis. Sed placerat dui ultricies posuere maximus.
        Fusce vel nulla sollicitudin est finibus ullamcorper vitae non felis.
        Quisque libero nibh, fermentum ut cursus sagittis, finibus ac augue.
        Phasellus volutpat, purus at porttitor aliquam, massa nulla egestas
        lectus, et eleifend arcu orci nec nulla. Suspendisse quis lorem
        ullamcorper, interdum odio non, placerat lectus. Aliquam pharetra
        commodo porta. Phasellus tristique fringilla viverra. Nunc ut congue
        ipsum. Quisque nec mattis odio, sed semper augue. Maecenas congue,
        tellus ut dictum imperdiet, dui lacus rutrum lorem, condimentum commodo
        mauris magna vitae nulla. Mauris at metus a libero volutpat hendrerit.
        Nulla vehicula dapibus sapien, id porttitor felis tincidunt quis. Donec
        semper erat sit amet leo rutrum, mollis fringilla urna accumsan. Quisque
        non interdum mauris. Cras hendrerit ligula non odio cursus auctor a ac
        libero. Cras eget porttitor nunc. Praesent a lorem id ex tristique
        gravida. Proin a sagittis enim, quis gravida justo. Integer at euismod
        justo. Duis sed dui euismod, feugiat leo vitae, tempor dui. Fusce nec
        rutrum lorem, at venenatis erat. Donec sodales nisi vitae sem mattis,
        eleifend pulvinar elit accumsan. Donec non nisi condimentum, convallis
        purus sed, gravida metus. Donec nec metus non diam dictum egestas nec id
        augue. Praesent vel enim malesuada, scelerisque lorem sit amet, aliquet
        ipsum. Suspendisse potenti. Vestibulum enim quam, varius vitae quam id,
        dapibus sagittis dui. Nunc rhoncus feugiat ante, et mollis felis. In
        congue feugiat imperdiet. Sed vitae elit fermentum, sollicitudin lectus
        vitae, bibendum libero. Sed in ex in lectus volutpat facilisis. Ut
        dignissim luctus augue ac venenatis. Proin enim nisl, vehicula quis
        iaculis ac, congue at lorem. Nulla finibus, urna non rutrum tempus,
        velit justo pretium nulla, et ultrices erat ligula et ex. Curabitur a
        nunc porta, viverra est vel, luctus purus. Vestibulum sed orci posuere,
        bibendum nunc non, hendrerit metus. Nullam pellentesque tempus urna at
        laoreet. Maecenas sagittis diam in efficitur varius. Suspendisse
        dignissim sem ligula, sed blandit felis iaculis at. Maecenas ex neque,
        bibendum eu posuere a, pretium eget quam. Fusce vel sagittis massa, et
        fringilla nibh. Aliquam sit amet libero vitae erat scelerisque tempus.
        Aliquam nec ante sit amet lectus dignissim tempus vitae sed eros.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum elementum varius congue. Maecenas
        sagittis vitae ex id porta. Praesent non metus feugiat, ullamcorper
        tellus nec, efficitur ex. Cras quis dapibus lorem, nec hendrerit enim.
        Ut congue viverra ornare. Fusce convallis purus eu urna rhoncus viverra.
        Donec semper luctus consectetur. Sed efficitur ipsum nec massa ultrices
        laoreet. Aliquam mattis purus viverra mauris porta maximus. Mauris ac
        nunc fringilla, malesuada turpis nec, elementum eros. Duis semper
        commodo dolor, ac feugiat massa imperdiet sed. Mauris eu venenatis
        mauris. Suspendisse potenti. Suspendisse potenti. Donec luctus, est nec
        suscipit euismod, diam diam venenatis dolor, eu tristique tellus metus
        vel felis. In bibendum egestas nunc non tristique. Phasellus et augue
        eros. Aliquam posuere laoreet arcu ut condimentum. Nullam ut velit quam.
        Vestibulum iaculis nunc in ultricies mollis. Nullam sed lacus sed purus
        blandit pharetra. Pellentesque dolor magna, vulputate quis scelerisque
        vel, commodo in nunc. Fusce fringilla erat lacus, quis iaculis nisi
        accumsan ut. Sed sit amet augue varius, dignissim mauris non, imperdiet
        purus. Mauris in vestibulum nibh, vel pellentesque enim. Duis luctus
        libero ut faucibus congue. Nam urna risus, volutpat et auctor a,
        fringilla vitae nisi. In lacinia sit amet orci in tincidunt. Donec
        consequat luctus ipsum, ut luctus augue dictum eu. Curabitur est ex,
        vestibulum at lacus eget, fermentum tincidunt lacus. Vestibulum faucibus
        orci ac libero tempor, sed congue sapien iaculis. Duis ut urna consequat
        nisi semper dictum at eu sapien. Nunc pellentesque enim semper purus
        rhoncus vulputate. Vivamus erat tortor, cursus ut sagittis sit amet,
        ornare eu velit. Maecenas commodo nibh urna, a lacinia erat convallis
        ac. Nam tempor non risus ut scelerisque. Curabitur pretium est dui, sed
        porttitor nunc rhoncus in. Sed tempus leo ut mollis mollis. Proin
        fermentum placerat lorem, eu faucibus neque scelerisque et. Maecenas
        pretium mauris nec risus tempor, a faucibus eros faucibus. Proin
        vehicula nisi ut sodales sollicitudin. Praesent consectetur fermentum
        tristique. Curabitur vulputate tortor a ligula sagittis, et laoreet enim
        interdum. Vestibulum sollicitudin id tortor sed ultrices. Mauris
        ullamcorper quam tempus pellentesque ultricies. Praesent sodales
        ultricies facilisis. Pellentesque porttitor nibh ullamcorper, pulvinar
        odio consequat, tincidunt est. Integer eget elit lorem. Aliquam feugiat,
        ante sed consectetur lobortis, mi nulla tincidunt urna, sit amet
        scelerisque risus erat at dolor. Sed quis metus sed velit faucibus
        dictum efficitur ut lacus. Vivamus ultricies eget neque ut pellentesque.
        Nam condimentum arcu vitae dolor facilisis, et porta leo aliquam. Cras
        pellentesque pulvinar fermentum. Ut lacus quam, gravida sit amet eros
        eget, laoreet vestibulum justo. Nullam auctor metus vitae turpis
        pretium, non sodales leo mattis. Duis maximus sollicitudin neque, non
        porta velit. Aliquam sit amet mi non diam condimentum finibus. Aliquam
        eget augue ultricies, tempus purus nec, sodales risus. Morbi auctor
        lectus at magna malesuada porta. Proin ac nisi nec risus venenatis
        consectetur in ac libero. Donec est metus, molestie quis lectus vitae,
        congue congue augue. Nam euismod urna ac nisl cursus vestibulum.
        Suspendisse potenti. Nunc volutpat euismod mi in lacinia. Nunc
        efficitur, orci at porttitor pellentesque, mi sem tincidunt dui, nec
        euismod odio sapien in ante. Vestibulum fermentum risus pretium felis
        pellentesque placerat. Nullam sed consectetur augue, in aliquam ligula.
        Nullam porttitor lacus eu ligula hendrerit lacinia. In vitae pharetra
        neque, eu ultricies nisi. In gravida massa non tellus pellentesque
        sollicitudin. Mauris tortor dui, vulputate in pharetra a, tempor eget
        augue. Praesent vulputate, lectus vitae imperdiet iaculis, purus nibh
        elementum dui, nec venenatis turpis sem ut massa. Praesent nec
        vestibulum tellus. Nulla posuere, est non iaculis viverra, odio tortor
        accumsan dolor, sed bibendum odio dui eu nisl. Donec sollicitudin at
        metus vel sagittis. Nullam id mattis arcu. Donec cursus mi eget metus
        sagittis gravida. Mauris sit amet arcu non ipsum consequat ultricies.
        Suspendisse id elit eu velit consequat semper in vitae dui. Donec
        hendrerit luctus magna eget imperdiet. Phasellus luctus augue in neque
        ultricies feugiat. Vivamus rutrum felis nisl, imperdiet placerat velit
        dignissim quis. In pharetra gravida efficitur. In commodo, quam id
        varius efficitur, libero erat lacinia est, quis consectetur eros est
        sodales sapien. Sed tincidunt nisl sollicitudin sem sagittis, quis
        pulvinar nisl semper. Nulla tempor lacus arcu, sit amet commodo lorem
        sollicitudin non. Integer eu sapien magna. Mauris dictum posuere
        accumsan. Mauris vehicula sit amet eros quis mattis. Mauris commodo,
        felis elementum bibendum eleifend, diam sapien imperdiet ante, ac luctus
        nibh eros quis metus. Sed ullamcorper purus eu eros rhoncus ornare. Nam
        nec finibus ligula, id ullamcorper mauris. Suspendisse potenti. Maecenas
        eget risus ac mi venenatis hendrerit. Cras porta vitae urna ut placerat.
        Phasellus in lacus a purus aliquam facilisis non ut ligula. Mauris
        auctor, leo in dignissim imperdiet, massa urna tincidunt mi, eu
        fringilla neque mi id tellus. Pellentesque vel luctus tellus.
        Suspendisse id porta odio. Cras semper, diam id pellentesque tristique,
        ipsum metus cursus justo, a pharetra justo arcu in lacus.
      </div>
    </HawaAppLayout>
  );
};

export const AppLayout = Template.bind({});
AppLayout.args = {
  appTitle: "قوائم",
  username: "Zakher Masri",
  userEmail: "zakhermasri@gmail.com",
  logoLink: "https://something.com/docs/images/logo.svg",
  profileItems: [
    {
      text: "Dashboard",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "Billing",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },

    {
      text: "Analytics",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    },
    {
      text: "عربي",
      slug: "home",
      // icon: Person,
      action: () => {
        setCurrentPage("home");
        setPageTitle("Home");
      }
    }
  ]
};
