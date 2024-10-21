
export type ProductManageTypeProps = {
  id: number
  title: string
  description?: string
  createdAt?: string
  updatedAt?: string
}

export type QueryType = {
  id?: number
  name?: string
  code?: string
  catId?: number
  isActive?: boolean
  page?: number
  limit?: number
}

