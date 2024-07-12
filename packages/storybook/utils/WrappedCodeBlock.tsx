import React from "react";

import { CodeBlock } from "../../components/elements";

export const WrappedCodeBlock = (props: any) => {
  return (
    <CodeBlock
      language={props.lang}
      tabs={props.tabs}
      fileName={props.fileName}
      code={props.code}
    />
  );
};
