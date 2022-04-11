import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";
import { title } from "process";
import { getSession } from "next-auth/react";

export default function Newpost() {
const router = useRouter();

const routeJournal= e => {
    e.preventDefault()
    router.push('/journal')
  }

const postToDatabase = async (e) => {
  const session = getSession();
  const authorId = 18;
  //const authorId = session.user.id;
  e.preventDefault();

  try{
  const body = {title, workout, timeSpent, workoutDate, authorId};
  console.error(body);
  await fetch('api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  } catch(error) {
    //console.error(error);
  }//catch
}

  return (
    <Layout>
      <title> New Post-{siteTitle}</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="">
            <div className="w-full h-screen rounded-lg shadow-2xl bg-slate-600 ">
              <h2 className="mb-28 text-white text-2xl md:text-4xl lg:text-6xl font-bold pt-14">
                New post!
              </h2>
            <form onSubmit={postToDatabase}>
              <label htmlFor="title" className="pr-2 text-white text-3xl">Name</label>
              <input
                className="bg-white mb-5 mt-24"
                id="title"
                name="title"
                type="text"
                required
              />
              <br/>
              <br/>
              <label htmlFor="workout" className="pr-2 text-white text-3xl">Workout</label>
              <input
                className="bg-white mb-5"
                id="workout"
                name="workout"
                type="text"
                required
              />
              <br/>
              <br/>
              <label htmlFor="timeSpent" className="pr-2 text-white text-3xl">Time (hr)</label>
              <input
                className="bg-white mb-5"
                id="timeSpent"
                name="timeSpent"
                type="text"
              />
              <br/>
              <br/>
              <label htmlFor="workoutDate" className="pr-2 text-white text-3xl">Date</label>
              <input
                className="bg-white mb-6"
                id="workoutDate"
                name="workoutDate"
                type="text"
              />
              <br/>
              <div className="grid pt-16 grid-cols-2">
               <button onClick={ routeJournal } className="m-auto mt-4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10">Cancel</button>
               <button type="submit" className="m-auto mt-4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-800 hover:bg-blue-400 md:py-4 md:text-lg md:px-10">Save</button>
              </div>
            </form>
          </div>
        </div>
            </div>
      </div>
    </Layout>
  );
}
