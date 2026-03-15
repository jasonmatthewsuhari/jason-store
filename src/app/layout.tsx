import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JASON MOUSE - The Only Mouse You'll Ever Need",
  description: "Buy the Jason Mouse. $88.88. You need this.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "'Comic Sans MS', 'Comic Sans', cursive", cursor: "crosshair" }}>
        {children}
      </body>
    </html>
  );
}
