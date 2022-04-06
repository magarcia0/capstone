import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { useSession, getSession } from "next-auth/react";
import { useRouter } from "next/router";


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
};

export default function Journal({ posts }) {
  const router = useRouter()
  const { data: status} = useSession();

  const handleClick = e => {
    e.preventDefault()
    router.push('/newpost')
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }
    return (
      <>
        <div className="container flex h-screen dark:bg-slate-900">
        <Layout>
          <title> Journal - {siteTitle}</title>
          <button onClick={handleClick} className="w-5/6 mx-auto flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-blue-600 md:py-4 md:text-lg xl:text-2xl lg:text-xl md:px-10">New Entry</button>
         <br />
               <h3 class="text-lg text-center font-bold m-5">Workout Journal</h3>
              <table class="rounded-t-lg m-5 w-5/6 dark:bg-gray-800 dark:text-white mx-auto">
                <tr class="border-b-2 bg-slate-700 text-white border-gray-300">
                  <th class="px-2 py-3">Title</th>
                  <th class="px-4 py-3">Workout</th>
                  <th class="px-4 py-3">Hours Spent</th>
                  <th class="px-4 py-3">Date</th>
                </tr>

          {posts?.map((p) => (
            <>
                <tr class="text-white bg-gray-700 border-gray-600 border-b ">
                  <td class="px-4 py-3">{p.title}</td>
                  <td class="px-4 py-3">{p.workout} </td>
                  <td class="px-4 py-3">{p.timeSpent} <span className="font-bold">hr</span> </td>
                  <td class="px-4 py-3">{p.workoutDate}</td>
                </tr>

            </>
          ))}
              </table>
        </Layout>
</div>
      </>
    );
}
