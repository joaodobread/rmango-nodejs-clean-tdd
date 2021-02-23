import { AccountModel } from '../models/account'

export interface AddAccountModel {
  email: string
  password: string
  name: string
}

export interface AddAccount {
  add: (account: AddAccountModel) => AccountModel
}
