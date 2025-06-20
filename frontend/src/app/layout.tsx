import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/providers";



export const metadata: Metadata = {
  title: "One",
  description: "the one and only application that has everything you need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={` antialiased font-sans`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
