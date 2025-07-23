import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import NavBar from "@/components/NavBar";
import TopButtons from "@/components/TopButtons";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek's Portfolio",
  description: "This website showcases my work and projects.",
};

const logo = "https://pub-7ddfd5cf9541446c8d9caa4c53b1cbb5.r2.dev/logo.png";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <link rel="icon" href={logo} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Providers>
            <NavBar/>
            <TopButtons/>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
