import { makeAutoObservable } from 'mobx'
import { assign } from 'lodash'
import { v4 as uuidv4 } from 'uuid'

export default class User {
  // public id: string | unknown
  // public name: string | unknown
  // public email: string | unknown
  public id: string | unknown
  public readerId: string | unknown
  public firstName: string | unknown
  public middleName: string | unknown
  public lastName: string | unknown
  public gender: string | unknown
  public dateOfBirth: Date | unknown
  public school: string | unknown
  public readerType: string | unknown
  public profilePicture: string | unknown

  constructor(initialState?: Partial<User>) {
    makeAutoObservable(this)
    if (initialState) {
      assign(this, initialState)
    }
  }

  public static CreateNew(initialValues?: Partial<User>): User {

    const user = new User()
    user.id = uuidv4().toString()
    user.readerId = initialValues?.readerId
    user.firstName = initialValues?.firstName
    user.middleName = initialValues?.middleName
    user.lastName = initialValues?.lastName
    user.gender = initialValues?.gender
    user.dateOfBirth = initialValues?.dateOfBirth
    user.school = initialValues?.school
    user.readerType = initialValues?.readerType

    if (initialValues) {
      assign(user, initialValues)
    }
    return user
  }

}
