import { makeAutoObservable } from 'mobx'
import { assign } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export default class AuthAccount {
  public id: string | unknown
  public userId = ''
  public type = ''
  public provider = ''
  public providerAccountId = ''

  constructor(initialState?: Partial<AuthAccount>) {
    makeAutoObservable(this)
    if (initialState) {
      assign(this, initialState)
    }
  }

  public static CreateNew(initialValues?: Partial<AuthAccount>): AuthAccount {
    const account = new AuthAccount()
    account.id = uuidv4().toString()
    account.type = 'oauth'
    if (initialValues) {
      assign(account, initialValues)
    }
    return account
  }
}
