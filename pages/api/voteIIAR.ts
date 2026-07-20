import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import getClientPromise from '../../experiences/internet-is-always-right/lib/mongodb'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { id, answer } = req.body as { id?: string; answer?: 1 | 2 }

  if (typeof id !== 'string' || !ObjectId.isValid(id) || (answer !== 1 && answer !== 2)) {
    return res.status(400).json({ message: 'Invalid request body' })
  }

  try {
    const client = await getClientPromise()
    const db = client.db('internetIsAlwaysRight')
    const voteField = answer === 1 ? 'answer1.numberOfVotes' : 'answer2.numberOfVotes'

    const result = await db.collection('questions').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $inc: { [voteField]: 1, totalNumberOfVotes: 1 } },
      { returnDocument: 'after' },
    )

    if (!result) {
      return res.status(404).json({ message: 'Question not found' })
    }

    res.status(200).json(result)
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
