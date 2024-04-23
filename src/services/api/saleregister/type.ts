export type QueryType = {
  id?: number
  startDate?: Date
  endDate?: Date
  orderId?: string
  memo?: string
  userName?: string
  page?: number
  limit?: number
}

export type ConfirmType = {
  type: number
  list: number[]
  query?: QueryType;
}

export type CalculationType = {
  startDate?: Date;
  endDate?: Date;
  page?: number;
  limit?: number;
}
