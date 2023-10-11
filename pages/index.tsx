import { Button, CodeBlock } from "../components";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ArgsTable, Story } from "@storybook/blocks";

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
      <div className="hawa-relative hawa-items-center hawa-w-full hawa-flex hawa-flex-col hawa-justify-center hawa-border-b hawa-h-fit hawa-bg-primary-foreground">
        <nav className=" hawa-flex  hawa-items-center hawa-justify-between  hawa-p-4  hawa-h-fit hawa-w-full hawa-max-w-4xl">
          {/*  */}
          <div className="hawa-flex hawa-items-center  hawa-h-fit">
            <Image
              width={144}
              height={50}
              src={
                theme === "dark" ||
                (theme !== "light" &&
                  typeof window !== "undefined" &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches)
                  ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-full-wordmark-white.png"
                  : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/hawa/hawa-full-wordmark-black.png"
              }
              alt="Hawa Logo"
            />

            <span className="hawa-sr-only">Hawa Logo</span>
          </div>
          <div className="hawa-flex hawa-flex-row hawa-items-center hawa-gap-2">
            <Button
              variant="outline"
              size="smallIcon"
              onClick={() =>
                window.open("https://github.com/sikka-software/hawa", "_blank")
              }
            >
              <svg viewBox="0 0 438.549 438.549" className="hawa-h-4 hawa-w-4">
                <path
                  fill="currentColor"
                  d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                ></path>
              </svg>
            </Button>
            <Button
              variant="outline"
              size="smallIcon"
              onClick={(e) => {
                if (
                  theme === "dark" ||
                  (theme !== "light" &&
                    typeof window !== "undefined" &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
                ) {
                  setTheme("light");
                } else {
                  console.log("it dark, switching to light");
                  setTheme("dark");
                }
              }}
            >
              {theme === "dark" ||
              (theme !== "light" &&
                typeof window !== "undefined" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                <svg
                  className="hawa-h-4"
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
                </svg>
              ) : (
                <svg
                  fill="currentColor"
                  focusable="false"
                  aria-hidden="true"
                  className="hawa-h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"></path>
                </svg>
              )}
            </Button>
          </div>
        </nav>
      </div>
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
            </div>
            <CodeBlock
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
