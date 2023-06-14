import AuthAccount from '../model/AuthAccount'
import User from '../model/User'
import BaseCosmosClient from './BaseCosmosClient'
import { v4 as uuidv4 } from 'uuid'
import { isGuid } from '../utils/Functions'

export default class UserCosmosClient extends BaseCosmosClient<User> {
  constructor() {
    super(User)
    this.containerName = process.env.COSMOSDB_USERS_CONTAINER as string
  }

  public async getById(id: string): Promise<User | undefined> {
    return this.updateSchemaVersionToCurrent((await super.getById(id)) as User)
  }

  public async getByIdOrEmail(idOrEmail: string): Promise<User | undefined> {
    const isEmail = !isGuid(idOrEmail)

    return isEmail
      ? this.getByPropertyValue('email', idOrEmail)
      : this.getById(idOrEmail)
  }
  public async userByType(search: string, userId: string): Promise<string[]> {
    const parameters = [
      { name: `@type`, value: search },
      { name: `@userId`, value: userId },
    ]

    const querySpec = {
      query: `Select a.id from c join a in  c.patients where c.id =@userId and a.type=@type`,
      parameters: parameters,
    }
    const { resources: results } = await this.client
      .database(this.databaseId)
      .container(this.containerName)
      .items.query(querySpec)
      .fetchAll()
    const ids: any[] | PromiseLike<string[]> = []
    results.map((o) => ids.push(o.id))
    return ids
  }

  public async getByPropertyValue(
    propertyName: string,
    value: string
  ): Promise<User | undefined> {
    return this.updateSchemaVersionToCurrent(
      (await super.getByPropertyValue(propertyName, value)) as User
    )
  }

  public async getAllByPropertyValue(
    propertyName: string,
    value: string
  ): Promise<User[]> {
    return (await Promise.all(
      ((await super.getAllByPropertyValue(propertyName, value)) as any).map(
        (o: User) => this.updateSchemaVersionToCurrent(o)
      )
    )) as Array<User>
  }

  public async getAll(): Promise<User[] | undefined> {
    return await Promise.all(
      ((await super.getAll()) as any).map((o: User) =>
        this.updateSchemaVersionToCurrent(o)
      )
    )
  }

  public async getMultipleById(ids: string[]): Promise<User | undefined> {
    if (ids.length === 0) return undefined
    const parameters = ids.map((id, i) => {
      return { name: `@id${i}`, value: id }
    })
    const paramsList = parameters.map((p) => p.name).join(',')
    const querySpec = {
      query: `SELECT * FROM c WHERE c.id IN (${paramsList})`,
      parameters: parameters,
    }
    const { resources: results } = await this.client
      .database(this.databaseId)
      .container(this.containerName)
      .items.query(querySpec)
      .fetchAll()

    return (await Promise.all(
      results.map((o) => this.updateSchemaVersionToCurrent(o))
    )) as any
  }

  public async getByAuthAccount({
    providerAccountId,
    provider,
  }: {
    providerAccountId: string
    provider: string
  }): Promise<User | undefined> {
    const parameters = [
      { name: `@providerAccountId`, value: providerAccountId },
      { name: `@provider`, value: provider },
    ]
    const querySpec = {
      query: `SELECT c.id from c join x in c.accounts where x.provider=@provider and x.providerAccountId=@providerAccountId`,
      parameters: parameters,
    }
    const { resources: results } = await this.client
      .database(this.databaseId)
      .container(this.containerName)
      .items.query(querySpec)
      .fetchAll()

    return results.length > 0 ? this.getById(results[0].id) : undefined
  }

  private async updateSchemaVersionToCurrent(
    user: User
  ): Promise<User | undefined> {
    if (!user) return
    const currentSchemaVersion = 1
    const schemaVersion: number = (user.schemaVersion as number) ?? 0
    for (let i = schemaVersion; i < currentSchemaVersion; i += 1) {
      switch (i) {
        case 0:
          user.accounts = [
            new AuthAccount({
              id: uuidv4() as string,
              userId: user.id as string,
              type: 'oauth',
              provider: 'azure-ad',
              providerAccountId: user.id as string,
            }),
          ]
          break
      }
    }

    if (schemaVersion < currentSchemaVersion) {
      user.schemaVersion = currentSchemaVersion
      await this.createOrUpdate(user)
    }
    return new User(user)
  }
}
