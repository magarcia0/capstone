import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  const workoutData = JSON.parse(req.body);
  const savedWorkout = await prisma.post.create({
    data: workoutData,
  });

  res.json(savedWorkout);

  await prisma.$disconnect();
}
