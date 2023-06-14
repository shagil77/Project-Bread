import { makeAutoObservable } from 'mobx'
import { assign } from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import AuthAccount from './AuthAccount'
import PatientType from './PatientType'

export default class User {
  public id: string | unknown
  public name: string | unknown
  public email: string | unknown
  public accounts: AuthAccount[] = []
  public schemaVersion: number | unknown
  public patients: PatientType[] = []

  constructor(initialState?: Partial<User>) {
    makeAutoObservable(this)
    if (initialState) {
      assign(this, initialState)
    }
  }

  public getProviderAccountId(provider: string) {
    return this.accounts?.find((a) => a.provider === provider)
      ?.providerAccountId
  }

  public static CreateNew(initialValues?: Partial<User>): User {
    const user = new User()
    user.id = uuidv4().toString()
    user.name = initialValues?.name
    user.email = initialValues?.email
    user.schemaVersion = 1
    if (initialValues) {
      assign(user, initialValues)
    }
    return user
  }

  public static CreateCachedUser(
    id: string,
    name: string,
    email: string
  ): User {
    const user = new User()
    user.id = id
    user.name = name
    user.email = email
    user.schemaVersion = 1
    return user
  }
}

export enum ApplicationUserRoles {
  Admin = 'Visiting Nurse Admin​',
  VisitingNurse = 'Visiting Nurse',
  Director = 'Director of Nursing',
}
