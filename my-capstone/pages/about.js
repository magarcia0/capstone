import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <title> About-WildCat++</title>
      <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center"></div>
          <div className="rounded-md bg-red-800 dark:bg-gradient-to-b dark:from-slate-700 dark:to-slate-800">
            <h2 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              About Us!
            </h2>
          </div>
          <div className="pt-10">
            <div className="w-full bg-gradient-to-t from-slate-800 to-red-800 dark:bg-gradient-to-t dark:from-red-800 dark:to-slate-800 h-screen rounded-lg shadow-2xl dark:bg-slate-500"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
