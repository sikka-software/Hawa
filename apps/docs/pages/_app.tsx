import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { IBM_Plex_Sans_Arabic } from "next/font/google";

import "@sikka/hawa/dist/style.css";

const IBMfont = IBM_Plex_Sans_Arabic({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "auto",
  variable: "--font-ibm-plex-sans-arabic"
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <main className={IBMfont.className}>
      <Component {...pageProps} />
    </main>
  );
}
