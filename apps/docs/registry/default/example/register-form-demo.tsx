import React from "react";

import { RegisterForm } from "@sikka/hawa/blocks";

export default function LoginFormDemo() {
  return (
    <RegisterForm
      registerFields={["username"]}
      usernameOptions={{
        label: {
          hint: "Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint Testing a hint ",
          hintSide: "right",
          required: true
        }
      }}
      onRegister={(data) => console.log("data is ", data)}
    />
  );
}
