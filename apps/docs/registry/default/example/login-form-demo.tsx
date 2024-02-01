import React from "react";

import { LoginForm } from "@sikka/hawa/blocks";

export default function LoginFormDemo() {
  return <LoginForm onLogin={(data) => console.log("data is ", data)} />;
}
