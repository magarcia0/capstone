import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { useTheme } from 'next-themes';


export default function Home() {
    const { theme, setTheme } = useTheme()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    if(session)
      <div className='bg-white dark:bg-black'>
      <button
          className="mt-12 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
        Dark Mode
        </button>
      </div>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline"> This is my Capstone </span>
                  <span className="block text-red-900 xl:inline">
                    Something inspirational!
                  </span>
                </h1>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="flex justify-center lg:justify-start mt-6 ">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-100 bg-red-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                     Sign in 
                    </a>
                    <a
                      href="/"
                      className="pt-4 ml-7 w-full items-center justify-center px-8 py-3 border border-transparent text-base font-medium bg-red-300 text-white rounded-md hover:bg-gray-400 md:text-lg md:px-16">
                    Register 
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <section className="space-y-14">
        <br />
        <div className="flex items-center justify-center">
        <div className="bg-gray-100 rounded-lg border shadow-lg p-10">
         <h2 className="mb-8 text-center uppercase text-black underline text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
          Some stuff about the web app:
        </h2>
        <ol className="space-y-3 list-decimal list-inside text-center text-lg text-gray-600 md:text-xl">
          <li className=" leading-loose font-bold">
            It will be awesome
          </li>
          <li className="leading-loose font-bold">
            It will be the best
          </li>
          <li className="leading-loose font-bold">
            I will make millions
          </li>
        </ol>
        </div>
        </div>
      </section>
    </Layout>
  );
}