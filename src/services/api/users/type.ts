export type AssignRoleTypeProps = {
  userId: string;
  role: string;
};

export type CreateUserTypeProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  phoneNumber: string;
};

export type QueryType = {
  memberId?: string;
  name?: string;
  level?: number;
  page?: number;
  limit?: number;
};

export type updateUserTypeProps = {
  id: number;
  name: string;
  email: string;
  levelId?: string;
  password?: string;
  role?: string;
  income_option: number;
  income_option_select: number;
  mobilephone_number: string;
  phone_number: string;
  zip1: string;
  zip2: string;
  address: string;
  address1: string;
  addressdoro: string;
  zonecode: string;
  centerId?: number;
  recomid?: string;
  sponid?: string;
  return_bank?: string;
  return_account?: string;
  return_name?: string;
};

export type UserQueryType = {
  memberId?: string;
  id?: string;
};
export type SponsorTypeProps = {
  memberId?: string;
};

export type SponsorResponseType = {
  id?: number;
  name?: string;
  member_id?: string;
  recomid?: number;
  createdAt?: string;
  level?: string;
  children?: SponsorResponseType[];
};
