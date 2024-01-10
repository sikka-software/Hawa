// import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"
// import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans";
import {
  JetBrains_Mono as FontMono,
  IBM_Plex_Sans_Arabic as IBMPlex
} from "next/font/google";

// export const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })
export const fontSans = GeistSans;

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono"
});
export const IBMFont = IBMPlex({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"]
});
