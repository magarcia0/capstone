import { useSession } from "next-auth/react";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import React from 'react';
import { motion } from "framer-motion";

export default function Home() {
  const { status } = useSession();
  return (
    <Layout home>
      <title>{siteTitle}</title>
    <motion.div initial="hidden" animate="visible" variants={ {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          delay:.4,
        }
      },
    }}>
      <div className="relative bg-white dark:bg-slate-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white dark:bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-8 lg:mt-8 lg:px-8 xl:mt-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-5xl tracking-tight font-extrabold text-gray-900  lg:text-6xl dark:text-white">
                  <span className="block xl:inline"> Welcome Wildcats! </span>
                  <span className="block text-red-700 xl:inline">
                    &ldquo;Today Decides Tomorrow&rdquo;
                  </span>
                </h1>
              </div>
        { `${status}`==="unauthenticated" &&
                <div className="mt-6 justify-center lg:justify-start">
                  <div className="md:flex lg:flex xl:flex  sm:justify-center lg:justify-start">
                    <Link
                      href="/api/auth/signin">
                      <a className="pt-0.5 pb-1 sm:justify-center md:ml-2 ml-auto sm:w-5/6 px-8 border border-transparent text-base font-medium bg-red-600 dark:bg-red-700 dark:hover:bg-blue-700 text-white rounded-md hover:bg-blue-500 md:text-lg md:px-16">
                      Sign In
                      </a>
                    </Link>
              </div>
                </div>
        }
                <div className="mt-4 justify-center lg:justify-start">
                  <div className="md:flex lg:flex xl:flex sm:pb-4 sm:justify-center lg:justify-start">
                    <Link
                      href="/search"
                      >
                      <a className="pt-0.5 pb-1 sm:justify-center md:ml-2 ml-auto xs:w-5/6  sm:w-5/6 px-8 border border-transparent text-base font-medium bg-red-400 dark:bg-red-500 dark:hover:bg-blue-700 text-white rounded-md hover:bg-blue-500 md:text-lg md:px-16">
                        Browse 
                      </a>
                    </Link>
                  </div>
                  </div>
            </main>
          </div>
        </div>
      </div>
    </motion.div>
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
            <div className="w-full dark:bg-gradient-to-t dark:from-red-800 dark:to-slate-800 h-screen rounded-lg shadow-2xl bg-slate-700">
             <h2 className="text-white pt-16 text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Some stuff about the web app:
            </h2>
        <ol className="space-y-3 list-decimal list-inside text-center text-lg text-white md:text-xl">
          <li className=" leading-loose font-bold">
            Free to use!
          </li>
          <li className="leading-loose font-bold">
            Build customized workouts for your gym sessions!
          </li>
          <li className="leading-loose font-bold">
            Journal lets you track your fitness journey!
          </li>
        </ol>
            </div>
        </div>
      </div>
    </Layout>
  );
}
