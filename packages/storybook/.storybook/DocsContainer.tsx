import React, { PropsWithChildren } from "react";

import {
  DocsContainer as BaseContainer,
  DocsContainerProps as BaseContainerProps,
  DocsContextProps,
} from "@storybook/blocks";
import { themes, ThemeVars } from "@storybook/theming";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

export const DocsContainer = (props: {
  children: React.ReactNode;
  context: DocsContextProps;
  theme?: ThemeVars;
}) => {
  const [isDark, setDark] = React.useState(true);

  React.useEffect(() => {
    props.context.channel.on(DARK_MODE_EVENT_NAME, setDark);

    return () =>
      props.context.channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [props.context.channel]);

  return (
    <BaseContainer
      context={props.context}
      theme={isDark ? themes.dark : themes.light}
    >
      {props.children}
    </BaseContainer>
  );
};
