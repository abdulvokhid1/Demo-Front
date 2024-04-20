import exp from "node:constants";
import centers from "@/services/api/centers";

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

export type OrderType = {
    id?: number;
    type: string;
    date: number;
    provider: string;
    name: string;
    info: string;
    phone: number;
    amount:number;
    payment: string;
    manage:string;
    approval:string;
}