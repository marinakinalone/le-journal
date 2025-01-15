import { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../experiences/internet-is-always-right/lib/mongodb'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise
    const db = client.db('internetIsAlwaysRight')
    console.log('db', db)
    const data = await db.collection('questions').find({}).toArray()

    res.status(200).json(data)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
