"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";
import Image from "next/image";

export function SiteFooter() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState(
    "https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/white-symbol.png"
  );
  useEffect(() => {
    setLogoSrc(
      resolvedTheme === "light"
        ? "https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/black-symbol.png"
        : "https://sikka-images.s3.ap-southeast-1.amazonaws.com/sikka/brand/white-symbol.png"
    );
  }, [resolvedTheme]);

  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="mt-10 flex w-full flex-col items-center opacity-50">
        <a href="https://sikka.io">
          <Image width={20} height={50} alt="Sikka" src={logoSrc} />
        </a>
        <p className="m-0 mb-4">
          <sub>
            <a href="https://sikka.io">
              An open source project by Sikka Software
            </a>
          </sub>
        </p>
      </div>
    </footer>
  );
}
