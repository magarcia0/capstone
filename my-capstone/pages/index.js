import { useSession } from 'next-auth/react';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  const {status} = useSession();
  return (
    <Layout home>
        <title>{siteTitle}</title>
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
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                  <span className="block xl:inline"> This is my Capstone </span>
                  <span className="block text-red-700 xl:inline">
                    Something inspirational!
                  </span>
                </h1>

                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="flex justify-center lg:justify-start mt-6 ">
        { `${status}`=="unauthenticated" &&
                    <a
                      href="/api/auth/signin"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-700 dark:bg-red-800 dark:hover:bg-blue-700 hover:bg-blue-500 md:py-4 md:text-lg md:px-10">
                      Sign In
                    </a>

}
                    <a
                      href="/search"
                      className="pt-4 ml-7 w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium bg-red-400 dark:bg-red-500 dark:hover:bg-blue-700 text-white rounded-md hover:bg-blue-500 md:text-lg md:px-16">
                    Search 
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="min-h-screen p-10">
        <div className="space-y-10 md:space-y-0 md:grid ">
          <div className=" dark:text-white md:flex md:flex-col md:justify-center">
          </div>
          <div className="">
            <div className="w-full dark:bg-gradient-to-t dark:from-red-800 dark:to-slate-800 h-screen rounded-lg shadow-2xl bg-slate-700">
             <h2 className="text-white pt-16 text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
              Some stuff about the web app:
            </h2>
        <ol className="space-y-3 list-decimal list-inside text-center text-lg text-white md:text-xl">
          <li className=" leading-loose font-bold">
            It will be awesome
          </li>
          <li className="leading-loose font-bold">
            It will be the best
          </li>
          <li className="leading-loose font-bold">
            It will be numero uno
          </li>
        </ol>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}