import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function handler(req, res) {
  const { id } = req.body;
  try {
    const results = await prisma.workouts.findMany({
      where: {
        id,
      },
    });
    res.status(200).json(results);
  } catch (error) {
      console.log(error);
    res.status(403).json({ err: "An Error occured." });
}
};