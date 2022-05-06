import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <title> About+</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="rounded-md bg-slate-700 dark:bg-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              About Us!
            </h2>
          </div>
          <div className="pt-10">
            <div className="w-full bg-slate-700 dark:bg-gradient-to-t dark:from-red-800 dark:to-slate-800 min-h-screen rounded-lg shadow-2xl dark:bg-slate-500">
            <div className="space-y-8 lg:space-y-24 text-2xl md:space-y-20 lg:pt-22 px-8 lg:px-16 pt-12 md:pt-20 text-center text-white">
                <p className="lg:text-5xl md:text-4xl leading-loose font-extralight">
                  Although Wildcat.plus was designed with Chico State students in mind, anyone is welcome to use it.
                  Wildcat.plus was developed by a Chico State student using Next.js and is currently still under development.
                </p>
                <p className="leading-loose lg:text-5xl md:text-4xl font-extralight">
                  More features will be rolled out in the future!
                </p>
                <p className="leading-loose lg:text-5xl md:text-4xl font-light">
                  *Disclaimer: This site is currently only for demonstration purposes. We are in no way affiliated with 
                  Chico State.
                </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
}
