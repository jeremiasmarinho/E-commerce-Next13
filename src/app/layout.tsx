import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/NavBar";
import { ClerkProvider } from "@clerk/nextjs";
import Hydrate from "./components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next E-commerce",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Hydrate>
            <NavBar />
            <main className="bg-slate-700 p-16 h-full">{children}</main>
          </Hydrate>
        </body>
      </html>
    </ClerkProvider>
  );
}
