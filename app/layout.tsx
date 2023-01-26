import "../styles/globals.css";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto max-w-2xl px-6 mt-12 mb-24">
          {children}
        </div>
      </body>
    </html>
  );
}
