import Layout, { siteTitle } from "../../components/layout";
import { useRouter } from "next/router";

export default function Workouts() {

  const router = useRouter();
  const newClick= (e) => {
    e.preventDefault();
    router.push("/workouts/new");
  }; //newClick

  return (
    <Layout>
      <title>Workouts++</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="rounded-md bg-red-800 dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Workout Entries
            </h2>
          </div>
        </div>
      <br />
      <br />
        <button
        onClick={newClick}
            className="w-5/6 mx-auto flex justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-700 hover:bg-blue-600 md:py-4 md:text-lg xl:text-2xl lg:text-xl md:px-10"
          >
            New Entry
          </button>
      </div>

    </Layout>
  );
}
