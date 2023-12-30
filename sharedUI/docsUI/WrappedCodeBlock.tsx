import { CodeBlock } from "../../packages/components/elements";
import { useDarkMode } from "storybook-dark-mode";

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
