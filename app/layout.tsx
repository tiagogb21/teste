import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buzzvel",
  description: "This is an app for buzzvel development test",
};

const roboto = Roboto({  weight: "400", subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased text-project-title`}
      >
        <div className="flex flex-col">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
