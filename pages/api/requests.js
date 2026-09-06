import prisma from '../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const requests = await prisma.request.findMany({ orderBy: { createdAt: 'desc' } })
    return res.json(requests)
  }

  if (req.method === 'POST') {
    const { title, description, amount, userId } = req.body
    if (!title || !description) return res.status(400).json({ error: 'Missing fields' })
    const r = await prisma.request.create({ data: { title, description, amount: amount || 0, userId } })
    return res.status(201).json(r)
  }

  res.setHeader('Allow', ['GET','POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
