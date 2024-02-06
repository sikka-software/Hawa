import { Registry } from "@/registry/schema";

const example: Registry = [
  {
    name: "accordion-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["example/accordion-demo.tsx"]
  },
  {
    name: "login-form-demo",
    type: "components:example",
    registryDependencies: [],
    files: ["example/login-form-demo.tsx"]
  },
  {
    name: "alert-demo",
    type: "components:example",
    registryDependencies: ["alert"],
    files: ["example/alert-demo.tsx"]
  }
];

export const registry: Registry = [...example];
