import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import MouseOrbs from "./MouseOrbs";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Kushal Sojitra - Web Developer",
  description: "Portfolio of Kushal Sojitra, showcasing web development projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased `}>
        <div className="mouse-interactive-orb mouse-interactive-orb-1" id="orb1"></div>
        <div className="mouse-interactive-orb mouse-interactive-orb-2" id="orb2"></div>
        {children}
        <MouseOrbs />
      </body>
    </html>
  );
}
