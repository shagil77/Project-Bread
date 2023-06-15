import User from '../model/User'
import BaseCosmosClient from './BaseCosmosClient'

export default class UserCosmosClient extends BaseCosmosClient<User> {
  constructor() {
    super(User)
    this.containerName = process.env.COSMOSDB_USERS_CONTAINER as string
  }

  public async getById(id: string): Promise<User | undefined> {
    return (await super.getById(id)) as User
  }

  public async getByPropertyValue(
    propertyName: string,
    value: string
  ): Promise<User | undefined> {
    return (await super.getByPropertyValue(propertyName, value)) as User
  }
}
