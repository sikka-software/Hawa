import React from "react";

import { RegisterForm } from "@sikka/hawa/blocks";

export default function LoginFormDemo() {
  return (
    <RegisterForm
      registerFields={["username"]}
      usernameOptions={{
        label: {
          hint: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui eget nunc aliquam tincidunt nec nec libero. Nulla facilisi. Nulla nec dui eget nunc aliquam tincidunt nec nec libero.",
          hintSide: "right",
          required: true
        }
      }}
      onRegister={(data) => console.log("data is ", data)}
    />
  );
}
