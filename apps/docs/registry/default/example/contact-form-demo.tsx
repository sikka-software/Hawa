import React from "react";

import { ContactForm } from "@sikka/hawa/blocks";

export default function LoginFormDemo() {
  return <ContactForm onSubmit={(data) => console.log("data is ", data)} />;
}
