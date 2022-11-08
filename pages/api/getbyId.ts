// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import { data } from '../../src/components/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const {id} = req.query;
  const currentData = data.find((data: any) => data.id == id);
  res.status(200).json(currentData)
}
