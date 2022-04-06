import Link from 'next/link';
import { siteTitle } from '../components/layout';
import { useTheme } from 'next-themes';
import { useSession, signIn, signOut, getSession } from "next-auth/react";

const links = [
  { href: '/', label: 'Home' },
  { href: '/journal', label: 'Journal' },
  { href: '/search', label: 'Search' },
  { href: '/about', label: 'About' },
  { href: '/api/auth/signin', label: 'Signin' },
];

export default function Nav() {
    const { theme, setTheme } = useTheme()
    const { data: session, status } = useSession();

 if(status == "authenticated"){
  return (
    <>
        <nav className="bg-slate-700 text-black w-screen">
      <ul className="flex items-center justify-between p-1 list-none">
        <li>
          <Link href="/">
            <a className="pl-2 md:pl-3 text-white no-underline ml:8 md:text-2xl text-xl font-bold hover:text-blue-400 ">
              {siteTitle}
            </a>
          </Link>
        </li>


        <ul className="flex items-center justify-between list-none">
          <li>
            <div className="flex-1 no-underline px-4 py-2 font-bold text-white hover:text-blue-400 ">
              <Link href="/">Home</Link>
            </div>
          </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400 ">
              <Link href="/journal">Journal</Link>

            </div>
          </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400 0">
              <Link href="/search">Search</Link>

            </div>
          </li>

          <li>
            <button className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400 " onClick={() => signOut({callbackUrl:'/'})}>Sign out</button>
          </li>
          <li>
      <button
          className="ml-6 px-2 text-white bg-slate-800 dark:hover:bg-blue-300 dark:hover:text-white hover:bg-blue-300 dark:text-yellow-500 dark:bg-yellow-100 border-black font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
        { theme == 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
          </li>

        </ul>
      </ul>
    </nav>

    <div className="p-10">
        <div className="md:space-y-0 md:grid">
          <div className="dark:text-white md:flex md:flex-col md:justify-center xl:justify-center lg:justify-center"></div>
          <div className="rounded-md bg-gradient-to-r dark:from-red-800 dark:via-slate-700 dark:to-red-800 from-slate-700 via-red-800 to-slate-700">
            <div className="text-center text-white px-3 pt-2 dark:text-white text-xl md:text-3xl lg:text-xl font-bold mb-3">
 
        Signed in as:<p> {session.user.name?session.user.name:session.user.email} </p>
         <div className=''><img className='ml-auto mr-auto rounded-[30px]' src={ session.user.image } alt='' width="60"/> </div>
            </div>
          </div>
        </div>
      </div>

      </>
  );
}
else{
  return (
    <nav className="bg-gray-400 text-black  w-screen bg-gradient-to-t from-gray-400 via-slate-500 to-gray-400 ">
      <ul className="flex items-center justify-between p-1 list-none">
        <li>
          <Link href="/">
            <a className="pl-2 md:pl-8 text-red-900 no-underline md:text-3xl text-2xl font-bold hover:text-blue-400">
              {siteTitle}
            </a>
          </Link>
        </li>

        <ul className="flex items-center justify-between list-none">
            <li>
              <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400">
                <Link href="/">Home</Link>
              </div>
            </li>
            <li>
              <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 ">
                <Link href="/about">About</Link>
              </div>
            </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 0">
              <Link href="/search">Search</Link>

            </div>
          </li>

            <li>
              <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 ">
                <Link href="/api/auth/signin">Signin</Link>
              </div>
            </li>
          <li>
      <button
          className="ml-6 px-2 text-white bg-slate-800  dark:text-yellow-500 dark:bg-yellow-100 border-black font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
        { theme == 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
}