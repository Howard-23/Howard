export const metadata = {
  title: "John Howard P. Garcia | Front-End Developer",
  description:
    "Front-End Developer specializing in Next.js, React, HTML, CSS, Java, and Python.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
