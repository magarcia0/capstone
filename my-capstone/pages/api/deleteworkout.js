import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  const { id } = req.body;
  try {
    const deletePost= await prisma.workouts.delete({
      where: {
        id,
      },
    });
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(403).json({ err: "Error occured while deleting a Workout." });
}
};