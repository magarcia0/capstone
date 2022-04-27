import Layout from "../../components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

const defaultEndpoint = "https://wildcat.plus/api/workoutid";
const prisma = new PrismaClient();

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const id = session.user.id;

  const allWorkouts = await prisma.workouts.findMany({
    where: {
      authorId: id,
    },
  });

  return {
    props: {
      id: id,
      workouts: allWorkouts,
    },
  };
};

export default function Workouts({ id, workouts }) {
  //const [workouts, setWorkouts] = useState();
  const router = useRouter();

  const newClick = (e) => {
    e.preventDefault();
    router.push("/workouts/name");
  }; //newClick

  const deleteWorkout = async (id) => {
    try {
      const body = { id };
      await fetch("/../api/deleteworkout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      router.reload();
    } catch (error) {
      console.error(error);
    }
  }; //

  /*useEffect(() => {
    (async () => {
      const response = await fetch(defaultEndpoint);
      const content = await response.json();
      setWorkouts(content);
    })();
  }, []);*/

  return (
    <Layout>
      <title>Workouts+</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="rounded-md  bg-gradient-to-b from-slate-700 to-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Workout Entries
            </h2>
          </div>
        </div>
        <br />
        <button
          onClick={newClick}
          className="w-5/6 mx-auto flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-blue-600 md:py-4 md:text-lg xl:text-2xl lg:text-xl md:px-10"
        >
          New Entry
        </button>
        <br />
        <br />
        <table className="rounded-t-lg m-5 w-5/6 dark:bg-gray-800 dark:text-white mx-auto">
          <tr className="border-b-2 bg-slate-700 text-white border-gray-300">
            <th className="px-2 py-3">Title</th>
            <th className="px-4 py-3"> </th>
            <th className="px-4 py-3"> </th>
            <th className="px-4 py-3"> </th>
            <th className="px-4 py-3"> </th>
          </tr>
          {workouts?.map((data) => {
            return (
              <tr key={ data.id } className="text-white bg-gray-700 border-gray-600 border-b">
                <td className="px-4 py-3">
                  <a
                    href={"/workouts/" + data.id}
                    className="text-color- text-blue-300 "
                  >
                    {data.Name}
                  </a>
                </td>
                <td className="px-4 py-3">{workouts.created} </td>
                <td className="px-4 py-3"> </td>
                <td className="px-4 py-3"> </td>
                <button
                  onClick={() => deleteWorkout(data.id) }
                  className="w-5/6 mx-auto mt-2 flex justify-center border border-transparent text-xs md:text-md lg:text-lg font-medium rounded-sm md:rounded-md lg:rounded-lg text-white bg-red-700 hover:bg-blue-600"
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </table>
      </div>
    </Layout>
  );
}
