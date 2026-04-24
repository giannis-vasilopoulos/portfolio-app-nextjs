import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.status(200).json({ message: 'MCP server running' });
  } catch (error) {
    console.error('MCP server error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
