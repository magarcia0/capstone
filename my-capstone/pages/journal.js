import Layout, { siteTitle } from "../components/layout";
import { PrismaClient } from "@prisma/client";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";
//import { prisma } from './pclient'

const prisma = new PrismaClient();

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);
  const id = session.user.id;
  //console.log(id);
  const allPosts = await prisma.post.findMany({
    where: {
      authorId: id,
    },
  });
  const stringified = JSON.stringify(allPosts);
  const json_obj = JSON.parse(stringified);

  return {
    props: {
      posts: json_obj,
    },
  };
}; //getServerSideProps

export default function Journal({ posts }) {
  const router = useRouter();
  const { data: status } = useSession();

  const deletePost = async (id) => {
    try {
      const body = { id };
      await fetch("/api/deletePost", {
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
  }; //deletePost

  const exitClick = (e) => {
    e.preventDefault();
    router.push("/newpost");
  }; //exitClick

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
  return (
    <>
      <div className="h-screen dark:bg-slate-900">
        <Layout>
          <title>Journal+</title>
          <div className="flex justify-center">
          <div className="rounded-md w-5/6 bg-gradient-to-b from-slate-700 to-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Journal 
            </h2>
          </div>
        </div>
        <br />
          <button
            onClick={exitClick}
            className="w-5/6 mx-auto flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-blue-600 md:py-4 md:text-lg xl:text-2xl lg:text-xl md:px-10"
          >
            New Entry
          </button>
          <br />
          <h3 className="text-xlg text-center font-bold m-5">Journal</h3>
          <table className="rounded-t-lg m-5 w-5/6 dark:bg-gray-800 dark:text-white mx-auto">
            <tr className="border-b-2 bg-slate-700 text-white border-gray-300">
              <th className="px-2 py-3">Title</th>
              <th className="px-4 py-3">Workout</th>
              <th className="px-4 py-3">Hours Spent</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3"></th>
            </tr>

            {posts?.map((p) => (
              <>
                <tr
                  key={toString(p.id)}
                  className="text-white bg-gray-700 border-gray-600 border-b "
                >
                  <td className="px-4 py-3">{p.title}</td>
                  <td className="px-4 py-3">{p.workout} </td>
                  <td className="px-4 py-3">
                    {p.timeSpent} <span className="font-bold">hr</span>{" "}
                  </td>
                  <td className="px-4 py-3">{p.workoutDate}</td>
                  <button
                    onClick={() => deletePost(p.id)}
                    className="w-5/6 mx-auto mt-2 flex justify-center border border-transparent text-xs md:text-md lg:text-lg font-medium rounded-sm md:rounded-md lg:rounded-lg text-white bg-red-700 hover:bg-blue-600"
                  >
                    Delete
                  </button>
                </tr>
              </>
            ))}
          </table>
        </Layout>
      </div>
    </>
  );
}
