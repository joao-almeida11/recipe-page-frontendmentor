import type { Metadata } from "next";
import { Outfit, Young_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"], // Young Serif only comes in one weight
  variable: "--font-young-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "recipe",
  description: "Recipe Page challenge",
  icons: {
    icon: "/assets/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${outfit.variable} ${youngSerif.variable} antialiased  --stone-100 bg-stone-100 min-h-screen min-w-screen`}
      >
        {children}
      </body>
    </html>
  );
}
