import { Button, CodeBlock } from "../components";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Navigation from "@/sharedUI/landingUI/Navigation";
import Link from "next/link";

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
    <main className="hawa-m-0 hawa-flex  hawa-flex-col hawa-gap-2 hawa-p-0">
      <div className="hawa-flex hawa-flex-1 hawa-flex-row">
        <div className="hawa-mt-10 hawa-flex hawa-w-full hawa-flex-col  hawa-items-center hawa-p-10 ">
          <div className="hawa-flex hawa-max-w-2xl hawa-flex-col hawa-items-center hawa-justify-center hawa-gap-4">
            <span className="hawa-text-center hawa-text-2xl hawa-font-bold">
              Building Blocks <br /> For Your Web Application
            </span>
            <p className="hawa-max-w-xl hawa-text-center hawa-text-sm">
              Discover Hawa, the open-source library that revolutionizes web
              application development. Our modular blocks are ready to
              integrate, streamlining the creation process. Start crafting
              exceptional web experiences with Hawa, one block at a time.
            </p>
            <div className="hawa-flex hawa-flex-row hawa-gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  try {
                    window.open(
                      "https://hawa.style/docs",
                      "_blank",
                      "noopener,noreferrer"
                    );
                  } catch (e) {
                    console.error("Failed to open URL:", e);
                  }
                }}
                aria-label="Open Documentation"
              >
                Docs
              </Button>
              <Link href={"/theme"}>
                <Button  aria-label="Open Documentation">
                  Customize
                </Button>
              </Link>
            </div>
            <CodeBlock
              // forcedDarkMode
              tabs={[
                { title: "npm", code: "npm install @sikka/hawa" },
                { title: "yarn", code: "yarn add @sikka/hawa" },
              ]}
            />
            <a
              href="https://www.npmjs.com/package/@sikka/hawa"
              className="hawa-w-fit"
            >
              <img
                className="hawa-w-24 hawa-rounded"
                alt="Sikka"
                src="https://img.shields.io/npm/v/@sikka/hawa.svg?style=flat&colorA=000000&colorB=000000"
              />
            </a>

            {/* <a
              href="https://www.github.com/sikka-software/hawa"
              className="hawa-w-fit"
            >
              <img
                className="hawa-w-full hawa-rounded"
                alt="Repobeats analytics image"
                src="https://repobeats.axiom.co/api/embed/0aa365b7bd1591de135582699d523de7b262eecb.svg"
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className=" hawa-mt-10 hawa-flex hawa-w-full hawa-flex-col hawa-items-center hawa-opacity-50 ">
        <a href="https://sikka.io">
          <Image width={20} height={50} alt="Sikka" src={sikkaLogoURL} />
        </a>
        <p className="hawa-m-0 hawa-mb-4">
          <sub>
            <a href="https://sikka.io">An open source project by Sikka</a>
          </sub>
        </p>
      </div>
    </main>
  );
}
