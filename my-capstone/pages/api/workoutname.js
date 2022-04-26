import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if(req.method !== 'POST'){
    res.status(405).send({message: 'FAILED. Only POST allowed'});
    return;
  }

  if (req.method === 'POST') {
    const { name, authorId} = req.body;
    const result = await prisma.workouts.create({
      data: {
        Name: name,
        authorId: Number(authorId),
      },
    });
      res.json(result);
  }
}