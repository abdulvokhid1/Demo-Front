import { Level } from '../../components/pages/SalesManagement/SalesRegistrationManager/types/type';
import exp from "node:constants";
import centers from "@/services/api/centers";
import PayManager from '../../components/pages/users/PayManager/index';
import PurchaseRequest from '../../components/pages/SalesManagement/PurchaseRequest/index';

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

export type PayManagerType = {
    di?:number;
    name: string;
    memo: string;
    cash: number;
    minus_cash: number;
    amount:number;
    date: string;
    type: string;
    manage:string;
}

export type ChangelogType = {
    di?:number;
    name: string;
    level: string;
    date: string;
    before: string;
    after: string;
    manage: string;
}

export type PurchaseType = {
    di?:number;
    name: string;
    center: string;
    method:string;
    request_amount:number;
    amount: number;
    date: string;
    memo: string;
    status: string;
    manage: string;
}

export type WithdrawalType = {
    di?:number;
    name: string;
    Level: string;
    center: string;
    method:string;
    amount: number;
    fee: number;
    pay_amount: number;
    bank: string;
    account: number;
    holder: string;
    balance: number;
    status: string;
    date: string;
    manage: string;
}

export type RecommendationType={
    di?:number;
    name: string;
    Level: string;
    amount: number;
    recommended: string;
    peoples: number;
    peoples_amount: number;
    tree_chart:"";
    manage: string;

}