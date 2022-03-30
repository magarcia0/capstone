import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const { post: postData } = req.body;
    const post = await prisma.post.create({
      data: {
        title: postData.title,
        workout: postData.workout,
        timeSpent: postData.timeSpent,
        workoutDate: postData.workoutDate,
      },
    });

    res.status(201);
    res.json({ post });
  } catch (e) {
    console.error(e);
    res.status(500);
    res.json({ error: "Sorry unable to save entry to database" });
  } finally {
    await prisma.$disconnect();
  }
}