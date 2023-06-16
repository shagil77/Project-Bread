// pages/api/users/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import UserCosmosClient from '../../../../../common/dist/server/UserCosmosClient'

export default async function handler(req: NextApiRequest, res: NextApiResponse):Promise<void> {
  const { readerId } = req.query;
  const { method } = req
  const cosmosClient = new UserCosmosClient()


  if(method === 'GET') {
    const user = await cosmosClient.getUserByReaderId(readerId as string)

    if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
  }
  
}