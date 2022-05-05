import Layout from "../components/layout";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useState } from "react";

export const getServerSideProps = async (context) => {
  
  const session = await getSession(context);
  const id = session.user.id;
  return {
    props: {
      id: id,
    },
  };
};

export default function Newpost({ id }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [workout, setWorkout] = useState("");
  const [timeSpent, setTimespent] = useState("");
  const [workoutDate, setWorkoutDate] = useState("");

  const routeJournal = (e) => {
    e.preventDefault();
    router.push("/journal");
  };

  const postToDatabase = async (e) => {
    e.preventDefault();

    const authorId = id;
    try {
      const body = { title, workout, timeSpent, workoutDate, authorId };
      console.error(body);
      await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      router.push("/journal");
    } catch (error) {
      console.error(error);
    } //catch
  };

  return (
    <Layout>
      <title>New Post++</title>
      <br />
      <div className="min-h-screen p-10 mx-auto md:w-3/6 lg:w-3/6">
        <div className="space-y-10 sm:space-y-0 md:space-y-0 md:grid">
            <div className="w-full rounded-lg shadow-2xl bg-slate-600">
              <h2 className="mb-14 text-white text-2xl md:text-4xl lg:text-5xl font-bold pt-14">
                New post!
              </h2>
              <form onSubmit={postToDatabase}>
                <label htmlFor="title" className="pl-2 pr-2 text-white text-lg md:text-2xl lg:text-3xl">
                  Name
                </label>
                <input
                  className="bg-white lg:mb-5 lg:mt-24 dark:bg-slate-800"
                  id="title"
                  name="title"
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <br />
                <label htmlFor="workout" className="pl-2 pr-2 text-white text-lg md:text-2xl lg:text-3xl">
                  Workout
                </label>
                <input
                  className="bg-white lg:mb-5 dark:bg-slate-800"
                  id="workout"
                  name="workout"
                  type="text"
                  onChange={(e) => setWorkout(e.target.value)}
                  required
                />
                <br />
                <label htmlFor="timeSpent" className="pl-2 pr-2 text-white text-lg md:text-2xl lg:text-3xl">
                  Time (hr)
                </label>
                <input
                  className="bg-white lg:mb-5 dark:bg-slate-800"
                  id="timeSpent"
                  name="timeSpent"
                  type="text"
                  onChange={(e) => setTimespent(e.target.value)}
                />
                <br />
                <label htmlFor="workoutDate" className="pl-2 pr-2 mt-12 text-white text-lg md:text-2xl lg:text-3xl">
                  Date
                </label>
                <input
                  className="bg-white lg:mb-6 dark:bg-slate-800"
                  id="workoutDate"
                  name="workoutDate"
                  type="text"
                  onChange={(e) => setWorkoutDate(e.target.value)}
                />
                <div className="grid pt-12 pb-10 grid-cols-2">
                  <button
                    onClick={routeJournal}
                    className="m-auto flex mb-4 items-center justify-center border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="m-auto mb-4 flex items-center justify-center border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
        </div>
      </div>
    </Layout>
  );
}
