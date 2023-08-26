import React, { useState } from "react";
// import { HawaTabs } from "../../elements/HawaTabs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../elements/Tabs";
import { Card, CardContent } from "../../elements/Card";
// import { FiSettings, FiActivity, FiAirplay, FiSave } from "react-icons/fi";

export default {
  title: "Elements/Tabs",
  component: [Tabs]
};

export const Horizontal = () => {
  return (
    <Tabs defaultValue="account" orientation="horizontal">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="password1">Password</TabsTrigger>
        <TabsTrigger value="password2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent headless>Make changes to your account here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent headless>Change your password here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

Horizontal.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2
};

// export const Horizontal = (args) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   return (
//     <HawaTabs
//       {...args}
//       options={[
//         {
//           value: "option1",
//           label: "Billing",
//           icon: <FiSettings />,
//           content: <div className="bg-red-300 p-4"> option 1</div>
//         },
//         {
//           value: "option10",
//           label: "Billing",
//           icon: <FiSettings />,
//           content: <div className="bg-red-300 p-4"> option 1</div>
//         },
//         {
//           value: "option11",
//           label: "Billing",
//           icon: <FiSettings />,
//           content: <div className="bg-red-300 p-4"> option 1</div>
//         },
//         {
//           value: "option12",
//           label: "Billing",
//           icon: <FiSettings />,
//           content: <div className="bg-red-300 p-4"> option 1</div>
//         },
//         {
//           value: "option2",
//           label: "Settings",
//           icon: <FiSave />,
//           content: <div className="bg-red-300 p-4"> option 2</div>
//         },
//         {
//           value: "option3",
//           label: "Legal",
//           icon: <FiActivity />,
//           content: <div className="bg-red-300 p-4"> option 3</div>
//         },
//         {
//           value: "option4",
//           label: "Test",
//           icon: <FiAirplay />,
//           content: (
//             <div className="flex flex-col gap-9 bg-red-300">
//               {" "}
//               option 3<div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//             </div>
//           )
//         }
//       ]}
//     />
//   );
// };

// Horizontal.args = {
//   orientation: "horizontal",
//   direction: "rtl",
//   marginBetween: 2
// };
// export const Vertical = (args) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   return (
//     <>
//       <HawaTabs
//         // onChangeTab={(e) => setSelectedOption(e)}
//         {...args}
//         options={[
//           {
//             value: "option1",
//             label: "Billing",
//             content: <div className="bg-red-300"> option 1</div>
//           },
//           {
//             value: "option2",
//             label: "Settings",
//             content: <div className="bg-red-300"> option 2</div>
//           },
//           {
//             value: "option3",
//             label: "Legal",
//             content: <div className="bg-red-300"> option 3</div>
//           },
//           {
//             value: "option4",
//             label: "Test",
//             content: (
//               <div className="flex flex-col gap-9 bg-red-300">
//                 {" "}
//                 option 3<div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//                 <div> lorem</div>
//               </div>
//             )
//           }
//         ]}
//         // defaultValue={2}
//       />
//       <div>dsdsd</div>
//     </>
//   );
// };

// Vertical.args = {
//   orientation: "vertical",
//   direction: "rtl",
//   marginBetween: 2
// };

// export const FullWidth = (args) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   return (
//     <HawaTabs
//       // onChangeTab={(e) => setSelectedOption(e)}
//       {...args}
//       options={[
//         {
//           value: "option1",
//           label: "Billing",
//           content: <div> option 1</div>
//         },
//         {
//           value: "option2",
//           label: "Settings",
//           content: <div> option 2</div>
//         },
//         {
//           value: "option3",
//           label: "Legal",
//           content: <div> option 3</div>
//         },
//         {
//           value: "option4",
//           label: "Test",
//           content: (
//             <div className="flex flex-col gap-9 ">
//               {" "}
//               option 3<div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//               <div> lorem</div>
//             </div>
//           )
//         }
//       ]}
//     />
//   );
// };

// FullWidth.args = {
//   orientation: "horizontal",
//   direction: "rtl",
//   marginBetween: 2,
//   width: "full"
// };

export const TabsStory = (args) => {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="password1">Password</TabsTrigger>
        <TabsTrigger value="password2">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardContent headless>Make changes to your account here.</CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardContent headless>Change your password here.</CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

TabsStory.args = {
  orientation: "horizontal",
  direction: "rtl",
  marginBetween: 2,
  width: "full"
};

// TabsStory.storyName = "Tabs (v0.1)";
TabsStory.storyName = "Vertical";
