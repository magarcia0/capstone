import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState } from "react";
import Layout from "../../components/layout"

export const getServerSideProps = async (ctx) => {
  
  const session = await getSession(ctx);
  const id = session.user.id;
  return {
    props: {
      id: id,
    },
  };
};

export default function WorkoutName({ id }) {
  const router = useRouter();
  const [name, setWorkoutName] = useState("");

  const routeWorkouts= (e) => {
    e.preventDefault();
    router.push("/workouts");
  };

  const SaveWorkoutName = async (e) => {
    e.preventDefault();

    const authorId = id;
    try {
      const body = { name, authorId };
      console.error(body);
      await fetch("/api/workoutname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      router.push("/workouts/new");
    } catch (error) {
      console.error(error);
    } //catch
  };

  return (
    <Layout>
      <title>New Post++</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 sm:space-y-0 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="">
            <div className="w-full rounded-lg shadow-2xl bg-slate-600 ">
              <h2 className="mb-14 text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-14">
                Builder
              </h2>
              <form onSubmit={SaveWorkoutName}>
                <label htmlFor="name" className="pr-2 text-white text-3xl">
                  Enter Workout Name
                </label>
                <input
                  className="bg-white lg:mb-5 lg:mt-24 dark:bg-slate-800"
                  id="name"
                  name="name"
                  type="name"
                  onChange={(e) => setWorkoutName(e.target.value)}
                  required
                />
                <br />

                <div className="grid pt-16 grid-cols-2">
                  <button
                    onClick={routeWorkouts}
                    className="m-auto flex mb-4 items-center justify-center border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="m-auto mb-4 flex items-center justify-center border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}