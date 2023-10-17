import React, { useState, useEffect } from "react";
// import { SketchPicker } from "react-color";
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CodeBlock,
  ColorPicker,
  Label,
} from "../components";
import { useTheme } from "next-themes";
import Image from "next/image";

function hslToHex(h: any, s: any, l: any) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: any) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const ThemeCustomizer = () => {
  const [theme, setTheme] = useState({
    background: "0 0% 100%",
    foreground: "240 10% 3.9%",
    // ... other theme variables
  });

  //   const handleColorChange = (variable) => (color) => {
  // setTheme((prevTheme) => ({
  //   ...prevTheme,
  //   [variable]: color.rgb,
  // }));
  //   };

  //   --background: 0 0% 100%;
  //     --foreground: 240 10% 3.9%;
  //     --card: 210 50% 98%;
  //     --card-foreground: 240 10% 3.9%;
  //     --popover: 0 0% 100%;
  //     --popover-foreground: 240 10% 3.9%;
  //     --primary: 240 5.9% 10%;
  //     --primary-foreground: 0 0% 98%;
  //     --secondary: 240 4.8% 95.9%;
  //     --secondary-foreground: 240 5.9% 10%;
  //     --muted: 240 4.8% 95.9%;
  //     --muted-foreground: 240 3.8% 46.1%;
  //     --accent: 240 4.8% 95.9%;
  //     --accent-foreground: 240 5.9% 10%;
  //     --destructive: 0 84.2% 60.2%;
  //     --destructive-foreground: 0 0% 98%;
  //     --info: 209 62% 50%;
  //     --info-foreground: 0 0% 98%;
  //     --success: 148 48% 43%;
  //     --success-foreground: 0 0% 98%;
  //     --warning: 24 75% 50%;
  //     --warning-foreground: 0 0% 98%;
  //     --error: 0 84.2% 60.2%;
  //     --error-foreground: 0 0% 98%;
  //     --border: 240 5.9% 90%;
  //     --input: 240 5.9% 90%;
  //     --ring: 240 5% 64.9%;
  //     --radius: 0.5rem;
  //     --radius-inner: calc(var(--radius) - calc(var(--radius) / 3));

  return (
    <div className="hawa-w-full hawa-p-10">
      <Card className="hawa-w-fit">
        <CardHeader>
          <CardTitle>Theme Customizer</CardTitle>
          <CardContent
            noPadding
            className="hawa-grid hawa-grid-cols-2  hawa-gap-4 hawa-gap-x-10"
          >
            <div>
              <Label htmlFor="background-color" className="hawa-mb-2">
                Background Color
              </Label>
              <ColorPicker
                containerProps={{ id: "background-color" }}
                color={hslToHex(0, 0, 100)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
            <div>
              <Label htmlFor="foreground-color" className="hawa-mb-2">
                Foreground Color
              </Label>
              <ColorPicker
                containerProps={{ id: "foreground-color" }}
                color={hslToHex(240, 10, 3.9)}
              />
            </div>
          </CardContent>
        </CardHeader>
        <CardFooter>
          <Button
            onClick={() => {
              // Generate the CSS variables
              const cssVariables = Object.entries(theme)
                .map(([key, value]) => `--${key}: ${value};`)
                .join("\n");
              console.log(cssVariables);
            }}
            className="hawa-w-full"
          >
            Generate Variables
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  let sikkaLogoURL =
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/white-symbol.png";
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const changeHandler = () => {
      const currentTheme = mediaQuery.matches ? "dark" : "light";
      setTheme(currentTheme);
      localStorage.setItem("theme", currentTheme);
    };

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      changeHandler();
    }

    mediaQuery.addEventListener("change", changeHandler);

    return () => mediaQuery.removeEventListener("change", changeHandler);
  }, [setTheme]);

  if (
    theme === "light" ||
    (theme !== "dark" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: light)").matches)
  ) {
    sikkaLogoURL =
      "https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/black-symbol.png";
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <main className="hawa-m-0 hawa-flex hawa-min-h-screen hawa-flex-col hawa-gap-2 hawa-p-0">
      <ThemeCustomizer />
    </main>
  );
}
