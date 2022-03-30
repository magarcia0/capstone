import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Newpost() {
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
    
        //const result = await res.json()
        // result.user => 'Ada Lovelace'
      }

  return (
    <Layout>
      <title> New Post - {siteTitle}</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="">
            <div className="w-full h-screen rounded-lg shadow-2xl bg-gray-300 dark:bg-slate-500 ">
              <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                New post!
              </h2>
            <form onSubmit={addNewPost}>
              <label htmlFor="title">Name</label>
              <input
                id="title"
                name="title"
                type="text"
                autoComplete="title"
                required
              />
              <br/>
              <br/>
              <label htmlFor="workout">Workout</label>
              <input
                id="workout"
                name="workout"
                type="text"
                autoComplete="workout"
                required
              />
              <br/>
              <button type="submit">Register</button>
            </form>
          </div>
        </div>
            </div>
      </div>
    </Layout>
  );
}
