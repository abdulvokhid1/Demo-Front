import exp from "node:constants";
import centers from "@/services/api/centers";
import { format } from "date-fns";

export type UserInfo = {
    id?: number;
    member_id?: string;
    name?: string;
    email?: string;
    mobilephone_number?: string;
    phone_number?: string;
    option_center?: string;
    createdAt?: string;
    address?: string;
    address1?: string;
    addressdoro?: string;
    recom?: UserInfo;
    subs?: UserInfo[];
    sponid?: string;
    center: Center;
    Level: Level;
}

export type Center = {
    id?: number;
    name?: string;
    owner?: UserInfo
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    url?: string;
    User?: UserInfo[]
}

export type Level ={
    id?: number;
    title?: string;
    description?: string;
    rank?: number;
    minBuy?: number;
    minSell?: number;
    minSub?: number;
    discountRate?: number;
    rewardRate?: number;
    bgColor?: string
    txtColor?: string;
    createdAt?:string;
    updatedAt: string;
}

export type CreatedAtType = {
    from?: string;
    to?: string;
}

export type ProductType = {
    from?: string;
    to?: string;
}

export type Order = {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    url?: string;
}

export type DepositRegistrationType = {

    id?: number;

    depositDate?: string;


    users: number[];

    amount: number;
    memo: string;

    fee?: number;
    isConfirmed: boolean;
    isRewarded?: boolean

    method?: number;
}

export type DepositType = {

    id?: number;

    depositDate?: string;


    user: UserInfo;

    amount: number;
    memo: string;

    fee?: number;
    status: number;
    isRewarded?: number

    method?: number;
}

