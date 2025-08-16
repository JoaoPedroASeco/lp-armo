import type { Metadata } from "next";
import "./globals.css";
import helvetica_now_display from "@/fonts/helvetica-now-display";

export const metadata: Metadata = {
  title: "Armo | Marketing Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${helvetica_now_display.style} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
