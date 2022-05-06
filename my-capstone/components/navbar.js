import Link from "next/link";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import logo from "../public/logo.png";
import Image from "next/image";

export const LINKS = [{ href: "/", label: "Home" }];

export const menu = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
      fill="currentColor"
    />
    <path
      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
      fill="currentColor"
    />
    <path
      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-2 navbar-expand-lg bg-slate-700 text-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-white  no-underline md:text-2xl text-xl font-bold hover:text-blue-400 px-2">
                <Image
                  className=""
                  src={logo}
                  alt=" "
                  height="80"
                  width="280"
                />{" "}
              </a>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {menu}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-white flex-col lg:flex-row list-none lg:ml-auto font-bold text-lg px-52 md:px-96 lg:px-11">
              {LINKS.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400 0">
                    <Link href={href}>{label}</Link>
                  </div>
                </li>
              ))}
              {(() => {
                if (status == "authenticated") {
                  return (
                    <>
                      <li>
                        <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400">
                          <Link href="/journal">Journal</Link>
                        </div>
                      </li>

                      <li>
                        <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400">
                          <Link href="/workouts">Workouts</Link>
                        </div>
                      </li>
                    </>
                  );
                } else {
                  return (
                    <>
                      <li>
                        <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400">
                          <Link href="/search">Browse</Link>
                        </div>
                      </li>
                      <li>
                        <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400">
                          <Link href="/about">About</Link>
                        </div>
                      </li>
                    </>
                  );
                }
              })()}
              <li>
                {(() => {
                  if (session) {
                    return (
                      <button
                        className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        Sign out
                      </button>
                    );
                  } else {
                    return (
                      <button
                        className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400"
                        onClick={() => signIn()}
                      >
                        Sign-in
                      </button>
                    );
                  }
                })()}
              </li>
              <li>
                <button
                  className="ml-4 px-2 mt-2 text-white bg-slate-900  dark:text-yellow-500 dark:bg-yellow-100 border-black font-semibold rounded-md"
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                >
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
