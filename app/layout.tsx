import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import MouseOrbs from "./MouseOrbs";
import CircularText from "@/ui/CircularText";
import Loader from "./Loader";

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
  metadataBase: new URL("https://kushal-sojitra.vercel.app/"),
  title: {
    default: "Kushal Sojitra – Web Developer & UI/UX Designer",
    template: "%s | Kushal Sojitra",
  },
  description: "Portfolio of Kushal Sojitra, showcasing modern web development, UI/UX design, animations, and high-performance digital experiences.",
  keywords: [
    "Kushal Sojitra",
    "Kushal Sojitra Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "UI/UX Designer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Modern Web Development",
    "Portfolio Website",
    "Freelance Web Developer",
    "Freelance UI Designer",
    "Frontend Engineer",
    "Web Application Developer",
    "Next.js Portfolio",
    "React Portfolio",
    "Responsive Web Design",
    "Website Development",
    "Creative Developer",
    "UI Designer India",
    "Web Developer India",
    "Software Developer",
    "Interactive Websites",
    "Animation Developer",
    "Framer Motion Developer",
    "Tailwind CSS Developer",
    "CSS Expert",
    "React UI Components",
    "Landing Page Developer",
    "Custom Web Design",
    "Modern UI Design",
    "Clean UI Design",
    "High Performance Websites",
    "SEO Optimized Websites",
    "Portfolio UI Design",
    "Web Designer",
    "JavaScript Engineer",
    "Front End Specialist",
    "Next.js Expert",
    "React.js Engineer",
  ],
  authors: [{ name: "Kushal Sojitra" }],
  creator: "Kushal Sojitra",
  publisher: "Kushal Sojitra",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kushal Sojitra – Web Developer & UI/UX Designer",
    description:
      "Explore the portfolio of Kushal Sojitra: Modern websites, animations, and high-quality UI/UX experiences.",
    url: "https://kushal-sojitra.vercel.app/",
    siteName: "Kushal Sojitra Portfolio",
    type: "website",
    images: [
      {
        url: "/kushal_1.jpg",
        width: 1200,
        height: 630,
        alt: "Kushal Sojitra Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal Sojitra – Web Developer & UI/UX Designer",
    description:
      "Modern portfolio showcasing web development, UI/UX, animations, React & Next.js projects.",
    images: ["/kushal_1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#ffffff",
  alternates: {
    canonical: "https://kushal-sojitra.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <Loader />
        <CircularText
          text="WEB DEVELOPER*UI/UX DESIGNER*"
          onHover="goBonkers"
          spinDuration={10}
        />
        <div className="mouse-interactive-orb mouse-interactive-orb-1" id="orb1"></div>
        <div className="mouse-interactive-orb mouse-interactive-orb-2" id="orb2"></div>
        {children}
        <MouseOrbs />
      </body>
    </html>
  );
}
