import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
        <title> About - {siteTitle}</title>j
        <br />
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center">
          </div>

          <div className="">
            <div className="w-full h-screen rounded-lg shadow-2xl bg-gray-300 dark:bg-gray-400 ">
             <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              About Us!
            </h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
