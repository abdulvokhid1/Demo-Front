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
    recomid?: string;
    sponid?: string;
    center: Center;
    level: Level;
}

export type Center = {
    id?: number;
    name?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    url?: string;
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

