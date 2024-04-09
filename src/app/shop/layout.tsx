'use client'
import {Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css'
import '../page.module.css'
import Navbar from "@/components/layouts/Navbar";
import {useEffect, useState} from "react";
import {RecoilRoot} from 'recoil'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({subsets: ["latin"]});

export default function ShopLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const [queryClient] = useState(new QueryClient())
    return (

        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                {children}
            </RecoilRoot>
        </QueryClientProvider>

    );
}