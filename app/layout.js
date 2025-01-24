import "./globals.css";

export const metadata = {
  title: "CPRG306 Assignment",
  description: "Daniel Chu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
