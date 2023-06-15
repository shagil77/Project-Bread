import User from '../model/User'
import BaseCosmosClient from './BaseCosmosClient'

export default class UserCosmosClient extends BaseCosmosClient<User>{
  constructor() {
    super(User)
    this.containerName = process.env.COSMOSDB_USERS_CONTAINER as string
    console.log(this.containerName)
  }

  createOrUpdateUser = async (user: User): Promise<User> => {
    console.log("inside create")
    return (await super.createOrUpdate(user)) as User
  }

  getUsers = async (): Promise<User[]> => {
    return (await super.getAll()) as User[]
  }
  // private readonly dataBaseName = process.env.DATABASE_NAME as string

  // private readonly containerName = process.env
  //   .COSMOSDB_USERS_CONTAINER as string

  // private get container() {
  //   return appCosmosClient.client
  //     .database(this.dataBaseName)
  //     .container(this.containerName)
  // }

  // createOrUpdateUser = async (user: User): Promise<User> => {
  //   console.log("inside create")
  //   await this.container.items.upsert(user)
  //   return user
  // }

  // getUsers = async (): Promise<Array<User>> => {
  //   const { resources } = await this.container.items
  //     .query({
  //       query: 'SELECT * FROM c',
  //       parameters: [
  //         { name: '@offset', value: '0' },
  //         { name: '@limit', value: '50' },
  //       ],
  //     })
  //     .fetchAll()

  //   if (resources.length > 0) {
  //     return resources
  //   }
  //   return []
  // }
}
