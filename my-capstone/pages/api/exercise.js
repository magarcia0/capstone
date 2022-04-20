import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {

  if(req.method !== 'POST'){
    res.status(405).send({message: 'FAILED. Only POST allowed'});
    return;
  }

  if (req.method === 'POST') {
    const { bodyPart, equipment, gifUrl, name, target, workoutId} = req.body;
    const result = await prisma.exercises.create({
      data: {
        bodypart: bodyPart,
        equipment: equipment,
        gifurl: gifUrl,
        name: name,
        target: target,
        workoutId: Number(workoutId),
      },
    });
      res.json(result);
  }
}