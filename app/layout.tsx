import "./globals.css";
import ThemeProviderClient from "../components/ThemeProviderClient";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { ReactNode } from "react";

export const metadata = {
  title: "John Howard P. Garcia | Front-End Developer",
  description:
    "Front-End Developer specializing in Next.js, React, HTML, CSS, Java, and Python.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent"
  }
};

export const viewport = "width=device-width, initial-scale=1.0, maximum-scale=5.0";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderClient>
          {children}
          <Analytics />
        </ThemeProviderClient>
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
              sameAs: [
                "https://github.com/Howard-23/Howard-23",
                "https://www.linkedin.com/in/john-howard-garcia-31a075390/" 
              ],
              knowsAbout: [
                "Next.js",
                "React",
                "HTML",
                "CSS",
                "Java",
                "Python"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

