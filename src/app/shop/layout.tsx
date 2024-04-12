
import {Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
// import "./client.css";
import '../page.module.css'
import Navbar from "@/components/layouts/Navbar";
import {useEffect, useState} from "react";
import {RecoilRoot} from 'recoil'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
// import ClientHeader from "@/components/layouts/ClientHeader";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "고객 페이지",
    description: "고객 페이지",
  };
  

export default function ShopLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>

    );
}