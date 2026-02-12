import "./globals.css";
import ThemeProviderClient from "../components/ThemeProviderClient";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export const metadata = {
  title: "John Howard P. Garcia | Front-End Developer",
  description:
    "Professional Front-End Developer specializing in Next.js, React, and TypeScript. Experienced in building modern web applications and providing virtual assistance services.",
  keywords: [
    "Front-End Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Virtual Assistant",
    "Shopify",
    "Philippines"
  ],
  authors: [{ name: "John Howard P. Garcia" }],
  creator: "John Howard P. Garcia",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "John Howard P. Garcia | Front-End Developer",
    description: "Professional Front-End Developer specializing in Next.js, React, and TypeScript.",
    siteName: "John Howard Garcia Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "John Howard P. Garcia | Front-End Developer",
    description: "Professional Front-End Developer specializing in Next.js, React, and TypeScript."
  },
  robots: {
    index: true,
    follow: true
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "John Howard Garcia"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body>
        <ThemeProviderClient>
          {children}
          <Analytics />
        </ThemeProviderClient>
        
        {/* JSON-LD Structured Data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "John Howard P. Garcia",
              jobTitle: "Front-End Developer",
              url: "https://yourdomain.com",
              email: "johnhowardgarcia23@gmail.com",
              sameAs: [
                "https://github.com/Howard-23/Howard-23",
                "https://www.linkedin.com/in/john-howard-garcia-31a075390/"
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Shopify",
                "Web Development",
                "Virtual Assistance"
              ],
              skills: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Shopify",
                "Virtual Assistance"
              ]
            })
          }}
        />
        
        {/* Website Structured Data */}
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "John Howard Garcia Portfolio",
              url: "https://yourdomain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://yourdomain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
