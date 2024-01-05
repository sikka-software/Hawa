import { useDarkMode } from "storybook-dark-mode";

import { CodeBlock } from "../../components/elements";

export const WrappedCodeBlock = (props: any) => {
  const isDark = useDarkMode();
  return (
    <CodeBlock
      language={props.lang}
      tabs={props.tabs}
      fileName={props.fileName}
      code={props.code}
    />
  );
};
