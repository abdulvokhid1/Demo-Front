"use client";
import dynamic from "next/dynamic";
import { useRecoilValue } from "recoil";
import { userState } from "@/services/recoil/user";
import { useEffect } from "react";
import PAGE_ROUTES from "@/utils/constants/routes";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

const View = dynamic(
  () => import("@/components/pages/organization_tree/sponsor"),
  { ssr: false }
);
const Page = () => {
  return <View />;
};

export default Page;
