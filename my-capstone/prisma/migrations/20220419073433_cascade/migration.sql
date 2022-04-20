-- DropForeignKey
ALTER TABLE "Exercises" DROP CONSTRAINT "Exercises_workoutId_fkey";

-- DropForeignKey
ALTER TABLE "Workouts" DROP CONSTRAINT "Workouts_authorId_fkey";

-- AddForeignKey
ALTER TABLE "Workouts" ADD CONSTRAINT "Workouts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercises" ADD CONSTRAINT "Exercises_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workouts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
