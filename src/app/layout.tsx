import type { Metadata } from "next";
import { Nunito, Quicksand } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "lil leaps — One clip a week. A lifetime of memories.",
  description:
    "Record a 5-second video of your baby once a week. lil leaps stitches them into a beautiful growth timelapse you'll treasure forever. Free to try on iOS.",
  metadataBase: new URL("https://lilleaps.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "lil leaps — One clip a week. A lifetime of memories.",
    description:
      "Record a 5-second video of your baby once a week. lil leaps stitches them into a beautiful growth timelapse you'll treasure forever.",
    url: "https://lilleaps.com",
    siteName: "lil leaps",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "lil leaps — One clip a week. A lifetime of memories.",
    description:
      "Record a 5-second video of your baby once a week. Watch them grow into a beautiful timelapse.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  other: {
    "apple-itunes-app": "app-id=6746146083",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${quicksand.variable}`}>
      <body className="font-nunito bg-white text-navy overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
