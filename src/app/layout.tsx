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
    "Record a 5-second clip once a week. Watch your baby grow into a beautiful timelapse. lil leaps makes it effortless.",
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
