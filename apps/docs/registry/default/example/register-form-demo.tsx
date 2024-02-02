import React from "react";

import { RegisterForm } from "@sikka/hawa/blocks";

export default function LoginFormDemo() {
  return <RegisterForm onRegister={(data) => console.log("data is ", data)} />;
}
