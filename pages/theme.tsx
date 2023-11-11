import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CodeBlock,
  ColorPicker,
  Label,
} from "../components";
import { useTheme } from "next-themes";

// TODO: use the actual variable name as an ID
type ColorSetting = {
  id: string;
  label: string;
  hsl: [number, number, number];
};
const colorSettingsArray: ColorSetting[] = [
  { id: "background-color", label: "Background Color", hsl: [0, 0, 100] },
  { id: "foreground-color", label: "Foreground Color", hsl: [240, 10, 3.9] },
  { id: "card-color", label: "Card Color", hsl: [210, 50, 98] },
  {
    id: "card-foreground-color",
    label: "Card Foreground Color",
    hsl: [240, 10, 3.9],
  },
  { id: "popover-color", label: "Popover Color", hsl: [0, 0, 100] },
  {
    id: "popover-foreground-color",
    label: "Popover Foreground Color",
    hsl: [240, 10, 3.9],
  },
  { id: "helper-text", label: "Helper Text Color", hsl: [0, 72, 51] },
  { id: "primary-color", label: "Primary Color", hsl: [240, 5.9, 10] },
  {
    id: "primary-foreground-color",
    label: "Primary Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "secondary-color", label: "Secondary Color", hsl: [240, 4.8, 95.9] },
  {
    id: "secondary-foreground-color",
    label: "Secondary Foreground Color",
    hsl: [240, 5.9, 10],
  },
  { id: "muted-color", label: "Muted Color", hsl: [240, 4.8, 95.9] },
  {
    id: "muted-foreground-color",
    label: "Muted Foreground Color",
    hsl: [240, 3.8, 46.1],
  },
  { id: "accent-color", label: "Accent Color", hsl: [240, 4.8, 95.9] },
  {
    id: "accent-foreground-color",
    label: "Accent Foreground Color",
    hsl: [240, 5.9, 10],
  },
  {
    id: "destructive-color",
    label: "Destructive Color",
    hsl: [0, 72.22, 50.59],
    // hsl: [0, 84.2, 60.2] OLD
  },
  {
    id: "destructive-foreground-color",
    label: "Destructive Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "info-color", label: "Info Color", hsl: [209, 62, 50] },
  {
    id: "info-foreground-color",
    label: "Info Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "success-color", label: "Success Color", hsl: [148, 48, 43] },
  {
    id: "success-foreground-color",
    label: "Success Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "warning-color", label: "Warning Color", hsl: [24, 75, 50] },
  {
    id: "warning-foreground-color",
    label: "Warning Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "error-color", label: "Error Color", hsl: [0, 84.2, 60.2] },
  {
    id: "error-foreground-color",
    label: "Error Foreground Color",
    hsl: [0, 0, 98],
  },
  { id: "border-color", label: "Border Color", hsl: [240, 5.9, 90] },
  { id: "input-color", label: "Input Color", hsl: [240, 5.9, 90] },
  { id: "ring-color", label: "Ring Color", hsl: [240, 5, 64.9] },
];

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

const hexToHSL = (hex: string): [number, number, number] => {
  let r: number = parseInt(hex.substring(1, 3), 16);
  let g: number = parseInt(hex.substring(3, 5), 16);
  let b: number = parseInt(hex.substring(5, 7), 16);

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h: number = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

const ThemeCustomizer = () => {
  const [generatedCSS, setGeneratedCSS] = useState("");

  const [colorSettings, setColorSettings] = useState(colorSettingsArray);

  const handleColorChange = (id: string, newColor: string) => {
    const newHSL = hexToHSL(newColor) as [number, number, number]; // Assert type here

    setColorSettings((prevSettings) =>
      prevSettings.map((setting) =>
        setting.id === id ? { ...setting, hsl: newHSL } : setting
      )
    );
    setGeneratedCSS(generateCSS());
  };

  const generateCSS = () => {
    let cssVariables = "";
    colorSettings.forEach((setting: any) => {
      const [h, s, l] = setting.hsl;
      const hslValue = `${h} ${s}% ${l}%`;
      cssVariables += `    --${setting.id.replace(
        "-color",
        ""
      )}: ${hslValue};\n`;
    });

    const css = `@layer base {
  :root {
${cssVariables}    --radius: 0.5rem;
    --radius-inner: calc(var(--radius) - calc(var(--radius) / 3));
  }
}`;

    return css;
  };

  useEffect(() => {
    setGeneratedCSS(generateCSS());
  }, [generateCSS]);
  return (
    <div className="hawa-w-full hawa-flex hawa-flex-col lg:hawa-flex-row hawa-gap-10 ">
      <Card className="hawa-w-full">
        <CardContent
          headless
          className="hawa-grid hawa-grid-cols-2  hawa-gap-4 hawa-gap-x-10 hawa-items-end"
        >
          {/* <Accordion
            className="hawa-w-full"
            items={[
              {
                trigger: "Card",
                content: <div>fdfd</div>,
              },
            ]}
            type="single"

            // {...args}
          /> */}
          {colorSettingsArray.map((colorSetting) => (
            <div key={colorSetting.id}>
              <ColorPicker
                id={colorSetting.id}
                label={colorSetting.label}
                colorTextClassNames="hawa-w-full"
                containerProps={{ id: colorSetting.id }}
                color={hslToHex(...colorSetting.hsl)}
                handleChange={(e) =>
                  handleColorChange(colorSetting.id, e.target.value)
                }
              />
            </div>
          ))}
        </CardContent>
      </Card>

      <CodeBlock className="hawa-z-0" language="css" code={generatedCSS} />
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
    <main className="hawa-m-0 hawa-flex hawa-flex-col hawa-gap-2 hawa-p-10 ">
      <div className="hawa-flex hawa-flex-col hawa-gap-1 hawa-mb-4">
        <div className="hawa-font-bold hawa-text-4xl hawa-leading-none">
          Customize Hawa
        </div>
        <div className="hawa-text-lg hawa-max-w-lg hawa-leading-6">
          Adjust the colors to generate the global CSS variables that you can
          copy and paste into your primary CSS file
        </div>
      </div>

      <ThemeCustomizer />
    </main>
  );
}
