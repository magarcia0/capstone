import Layout, { siteTitle } from "../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { data } from "autoprefixer";
import { title } from "process";

export default function Newpost() {

const router = useRouter();

const routeJournal= e => {
    e.preventDefault()
    router.push('/journal')
  }

    const addNewPost = async event => {
        event.preventDefault()
    
        /*const res = await fetch(
          'https://hooks.zapier.com/hooks/catch/123456/abcde',
          {
            body: JSON.stringify({
              name: event.target.name.value
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
        )*/
    
      }
const postToDatabase = async () => {
  const response = await fetch('api/form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      title: title, 
      workout: workout,
      timeSPent: timeSpent,
      workoutDate: workoutDate,
    },
    ),
  });
  if(!response.ok){
  console.log("error")
  }

  const data = await response.json();
   //return await response.json();
   return data;
}
  return (
    <Layout>
      <title> New Post-{siteTitle}</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="">
            <div className="w-full h-screen rounded-lg shadow-2xl bg-gray-300 dark:bg-slate-500 ">
              <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-10 pt-8">
                New post!
              </h2>
            <form onSubmit={ ()=>postToDatabase() }>
              <label htmlFor="title" className="pr-1">Name</label>
              <input
                id="title"
                name="title"
                type="text"
                required
              />
              <br/>
              <br/>
              <label htmlFor="workout" className="pr-1">Workout</label>
              <input
                id="workout"
                name="workout"
                type="text"
                required
              />
              <br/>
              <br/>
              <label htmlFor="timeSpent" className="pr-1">Time spent</label>
              <input
                id="timeSpent"
                name="timeSpent"
                type="text"
              />
              <br/>
              <br/>
              <label htmlFor="workoutDate" className="pr-1">Date</label>
              <input
                id="workoutDate"
                name="workoutDate"
                type="text"
              />
              <br/>
              <div className="flex">
               <button type="cancel" onClick={ routeJournal } className="m-auto mt-4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-700 dark:bg-blue-700 dark:hover:bg-blue-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Cancel</button>
               <button type="submit" className="m-auto mt-4 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-700 dark:bg-blue-700 dark:hover:bg-blue-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">Save</button>
              </div>
            </form>
          </div>
        </div>
            </div>
      </div>
    </Layout>
  );
}
