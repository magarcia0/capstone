import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function async (req, res) {

  if (req.method === "POST") {
    const { workoutId }  = req.body;
    //console.log(workoutId);

    try {
      const results = await prisma.exercises.findMany({
        where: {
          workoutId: Number(workoutId),
        },
      });
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
      res.status(403).json({ err: "An Error occured." });
    }
  }

};
