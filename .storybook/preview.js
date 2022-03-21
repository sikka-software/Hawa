import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeProvider as Emotion10ThemeProvider } from "emotion-theming";

let allBorderRadius = 10;
const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: "2rem"
        },
        contained: {
          backgroundColor: "blue"
        }
      },
      variants: [
        {
          props: { variant: "withLogo" },
          style: {
            textTransform: "none",
            border: `2px solid blue`,
            // backgroundColor: "red",
            fontSize: "2rem",
            // color: "blue",
            padding: 0,
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: allBorderRadius
          }
        },
        {
          props: { variant: "dashed", color: "secondary" },
          style: {
            border: `4px dashed red`
          }
        }
      ]
    }
  }
}); // or your custom theme

const withThemeProvider = (Story, context) => {
  return (
    <Emotion10ThemeProvider theme={defaultTheme}>
      <ThemeProvider theme={defaultTheme}>
        <Story {...context} />
      </ThemeProvider>
    </Emotion10ThemeProvider>
  );
};

export const decorators = [withThemeProvider];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }
