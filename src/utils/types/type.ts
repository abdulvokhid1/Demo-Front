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

export type CalculationType1 = {
    id?: number;
    name?: string;
    levelTitle?: string;
    levelId?: number;
    sub1Name?: string;
    sub1Id?:number;
    sub2Name?: string;
    sub2Id?:number;
    saleAmount?: number;
    saleDate?: Date;
}

export type CalculationType = {
    id?: number;
    name?: string;
    levelTitle?: string;
    levelId?: number;
    sub1?: UserInfo;
    sub2?: UserInfo;
    saleAmount?: number;
    selfAmount?: number;
    saleDate?: Date;
}

export type CategoryType = {
    id?: number;
    name?: string;
    imgId?: number;
    isActive?: boolean;
    order?: number;
    parentId?: number;
    depth?: number;
}

export type CategoryListType = {
    depth?: number;
    parent?: number;
    asc?: boolean;
}


export type ProductType = {
    id?: number;
    name?: string;
    isActive?: boolean;
    sellType?: number;
    startSellDate?: Date;
    endSellDate?: Date;
    code?: string;
    customercode?: string;
    isDeliveriable?: boolean;
    price_origin?: number;
    price_sell?: number;
    price_provider?: number;
    cardFee?: number;
    vat?: number;
    amountPV?: number;
    pricePV?: number;
    isDuplicatable?: boolean;
    mileage?: number;
    quantity?: number;
    maxPerSell?: number;
    soldQuantity?: number;
    producer?: string;
    origin?: string;
    branch?: string;
    shortDescription?: string;
    useGuideInfo?: string;
    prodGuideInfo?: string;
    description?: string;
    description_m?: string;
    mainImg?: number;
    listImg?: number;
    thumbnailImg?: number;
    extraImg1?: number;
    extraImg2?: number;
    extraImg3?: number;
    extraImg4?: number;
    extraImg5?: number;
    catIds?: number[];
}