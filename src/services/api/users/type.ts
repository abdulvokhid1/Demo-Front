export type AssignRoleTypeProps = {
  userId: string
  role: string
}

export type CreateUserTypeProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  role: string
  phoneNumber: string
}

export type QueryType = {
  page?: number
  limit?: number
}
