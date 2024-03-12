'use client'
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {RecoilRoot} from 'recoil'

import 'bootstrap/dist/css/bootstrap.css'
import "../globals.css";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});

// export const metadata: Metadata = {
//     title: "관리자 페이지",
//     description: "관리자 페이지",
// };

export default function RootLayout({
                                       children,
                                   }: Readonly<{
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
