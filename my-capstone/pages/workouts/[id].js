import Layout from "../../components/layout";

const Details = () => {
    return(
        <Layout>
      <title>Workout</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="rounded-md bg-red-800 dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              This will be an exercise page!!
            </h2>
          </div>
        </div>
      </div>
        </Layout>
    );
}

export default Details