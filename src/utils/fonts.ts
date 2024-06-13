import { Roboto, Arima, Open_Sans, Oswald } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export const arima = Arima({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-arima",
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "600", "700"],
  variable: "--font-open-sans",
});

export const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-oswald",
});
//DIN Next,sans-serif
