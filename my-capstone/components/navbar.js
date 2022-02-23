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
        <nav className="bg-gray-300 text-black w-screen">
      <ul className="flex items-center justify-between p-1 list-none">
        <li>
          <Link href="/">
            <a className="pl-2 md:pl-8 text-red-900 no-underline  md:text-3xl text-2xl font-bold hover:text-blue-400 ">
              {siteTitle}
            </a>
          </Link>
        </li>


        <ul className="flex items-center justify-between list-none">
          <li>
            <div className="flex-1 no-underline px-4 py-2 font-bold text-black hover:text-blue-400 ">
              <Link href="/">Home</Link>
            </div>
          </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-black  hover:text-blue-400 ">
              <Link href="/journal">Journal</Link>

            </div>
          </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 0">
              <Link href="/search">Search</Link>

            </div>
          </li>

          <li>
            <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 ">
              <Link href="/about">About</Link>

            </div>
          </li>
          <li>
            <button className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 " onClick={() => signOut()}>Sign out</button>
          </li>
          <li>
      <button
          className="ml-6 px-2 text-white bg-black dark:bg-blue-300 border-black font-semibold rounded-md"
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

        <div className='mt-10 text-center justify-center text-2xl font-semibold'>
        Signed in as {session.user.email} 
      </div></>
  );
}
else{
  return (
    <nav className="bg-gray-300 dark:bg-gray-400 text-black  w-screen">
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
              <div className="no-underline px-4 py-2 font-bold text-black hover:text-blue-400 ">
                <Link href="/api/auth/signin">Signin</Link>
              </div>
            </li>
          <li>
      <button
          className="ml-6 px-2 text-white bg-black dark:bg-blue-300 border-black font-semibold rounded-md"
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