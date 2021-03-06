import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if(req.method !== 'POST'){
    res.status(405).send({message: 'FAILED. Only POST allowed'});
    return;
  }

  if (req.method === 'POST') {
    const { title, workout, timeSpent, workoutDate, authorId} = req.body;
    const result = await prisma.post.create({
      data: {
        title: title,
        workout: workout,
        timeSpent: Number(timeSpent),
        workoutDate: workoutDate,
        authorId: Number(authorId),
      },
    });
      res.json(result);
  }
}