// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


// 6yCjktzU8M4OKhHUO3kVRaDQbN29tu3MU-tMKBGYxvzmujOZbMvkiCTrz3Y-D8AZO8N8fbx2rQwy3Y1UkLBS8g