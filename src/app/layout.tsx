import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/home/header/Header";

import { roboto, concertOne } from "./ui/fonts";

export const metadata: Metadata = {
  title: {
    default: "RC WEB",
    template: "%s | RC WEB",
  },
  description: "Personal portfolio of Randy Caballero, Software Engineer",
  keywords: [
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Zustand, Zod, Shadcn/ui",
    "PostgreSQL",
    "Prisma",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`w-full ${concertOne.variable} ${roboto.variable} overflow-y-scroll antialiased absolute top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]`}
      >
        <Header />

        {children}
      </body>
    </html>
  );
}
