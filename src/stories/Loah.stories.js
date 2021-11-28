import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Hawa } from "../components/Hawa/Hawa";
import { StyledCheckbox } from "../components/Hawa/Checkbox/Checkbox";
import { AutoCompleteField } from "../components/Hawa/AutoCompleteField/AutoCompleteField";
import { StyledInputLabel } from "../components/Hawa/InputLabel/StyledInputLabel";
import { StyledTextField } from "../components/Hawa/TextField/TextField";
import { FormProvider, useForm } from "react-hook-form";
import "../styles.css";

const stories = storiesOf("Hawa", module);

stories.add("Light", () => {
  const [currentPage, setCurrentPage] = useState("books");
  const buttons = [
    {
      name: "Users",
      // icon: <AddAlertIcon />,
      slug: "users",
      action: () => setCurrentPage("users")
    }
    // {
    //   name: "Menus",
    //   icon: <AllInbox />,
    //   slug: "menus",
    //   action: () => setCurrentPage("menus")
    // },
    // {
    //   name: "Books",
    //   icon: <Assignment />,
    //   slug: "books",
    //   action: () => setCurrentPage("books")
    // },
    // {
    //   name: "Items",
    //   icon: <Assessment />,
    //   slug: "items",
    //   action: () => setCurrentPage("items")
    // },
    // {
    //   name: "Add Alert",
    //   icon: <Ballot />,
    //   slug: "alert",
    //   action: () => setCurrentPage("alert")
    // },
    // {
    //   name: "Coins",
    //   icon: <Class />,
    //   slug: "coins",
    //   action: () => setCurrentPage("coins")
    // },

    // {
    //   name: "Tokens",
    //   slug: "tokens",
    //   icon: <Bolt />,
    //   action: () => setCurrentPage("tokens")
    // },
    // { name: "Repos" }
  ];

  return (
    <Hawa
      activeItem={currentPage}
      // expandIcon={"🔵"}
      // bgColor={"red"}
      // textColor={"yellow"}
      // showAvatar={true}
      // content={"test"}
      footer={"v2.12.11"}
      // direction={"right"}
      buttons={buttons}
    />
  );
});

stories.add("StyledCheckBox", () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledCheckbox
        name="test"
        defaultValue={"Sikka"}
        rules={{ required: true }}
        label="Soon ?"
        shouldUnregister={true}
      />
    </FormProvider>
  );
});

stories.add("AutoCompleteField", () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <AutoCompleteField
        name="autocomplete"
        rules={{ required: true }}
        shouldUnregister={true}
        label="autoComplete"
        options={[]}
        renderInput={() => (
          <div>
            <h2>Sikka</h2>
            <h2>Sikka</h2>
            <h2>Sikka</h2>
          </div>
        )}
      />
    </FormProvider>
  );
});

stories.add("StyledInputLabel", () => {
  return <StyledInputLabel label={"input label"} multiLang={true} />;
});

stories.add("StyledTextField", () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <StyledTextField
        name="textfield"
        shouldUnregister={true}
        inputLabel={"text field"}
        placeholder={"test"}
      />
    </FormProvider>
  );
});
// export default {
//   title: "Hawa",
//   component: Hawa,
//   argTypes: {
//     direction: {
//       options: ["top", "bottom", "right", "left"],
//       control: { type: "radio" },
//     },
//   },
// };
