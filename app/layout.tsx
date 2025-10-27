import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>AI SaaS Landing Page</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
