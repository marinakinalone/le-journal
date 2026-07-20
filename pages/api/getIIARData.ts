import { NextApiRequest, NextApiResponse } from 'next'
import getClientPromise from '../../experiences/internet-is-always-right/lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await getClientPromise()
    const db = client.db('internetIsAlwaysRight')
    const data = await db.collection('questions').find({}).toArray()

    res.status(200).json(data)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
