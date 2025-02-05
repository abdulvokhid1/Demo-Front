import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "포켓소프트 ",
  description: "관리자 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
