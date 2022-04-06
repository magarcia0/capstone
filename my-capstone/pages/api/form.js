import { PrismaClient } from "@prisma/client";
import { send } from "process";


export default async function handler(req, res) {

  if(req.method !== 'POST'){
    res.status(405).send({message: 'FAILED. Only POST allowed'});
    return;
  }

  const prisma = new PrismaClient();
  const workoutData = JSON.parse(req.body);

  const savedWorkout = await prisma.post.create({
    data: workoutData
  });

  return res.status(200).json(savedWorkout);
  //await prisma.$disconnect();
};