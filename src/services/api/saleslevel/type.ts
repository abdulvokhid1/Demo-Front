export type authLoginTypeProps = {
  email: string
  password: string
}

export type signUpUsernameTypeProps = {
  username: string
  password: string
  firstName: string
  lastName: string
  phoneNumber: string
}

export type saleslevelRegistrationProps = {
  id: number
  level: number;

  position_name: string;
 
  purchase_amount: number;
 
  amount_limit: number;
 
  purchase_pv: number;
 
  discount_rate: number;

  guanli_fee: number;

  minimum_purchase: number;
 
  upgrade:number;
   
  payment_limit: number;

  memo: string;
}
