import Link from "next/link";
import Nav from "../components/navbar";
import Header from "../components/header";
import Footer from "../components/footer";
import { useSession } from "next-auth/react";
import Image from "next/image";
import myPic from "./mypic.png";
import { motion } from "framer-motion";

export const siteTitle = "WildCat+";

export default function Layout({ children, home }) {
  const { data: session, status } = useSession();

  return (
    <div className="dark:bg-slate-900">
      <Header />
      <Nav />
      {(() => {
        if (status === "authenticated") {
          return (
            <motion.div initial="hidden" animate="visible" variants={ {
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay:.3,
                }
              },
            }}>
            <div className="p-10 pb-8 w-9/12 mx-auto border border-transparent">
              <div className="md:space-y-0 md:grid">
                <div className="dark:text-white md:flex md:flex-col md:justify-center xl:justify-center lg:justify-center"></div>
                <div className="rounded-md bg-gradient-to-r dark:from-red-800 dark:via-slate-700 dark:to-red-800 from-slate-700 via-red-800 to-slate-700">
                  <div className="text-center text-white px-3 pt-2 dark:text-white text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                    Signed in as:
                    <p>
                      {" "}
                      {session.user.name
                        ? session.user.name
                        : session.user.email}{" "}
                    </p>
                    <div className="">
                      {" "}
                      <Image
                        className="ml-auto mr-auto rounded-[30px]"
                        src={session.user.image ? session.user.image : myPic}
                        alt=" "
                        height="60"
                        width="60"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </motion.div>
          );
        }
      })()}

      <div className="container bg-white mx-auto p-4 text-center dark:bg-slate-900">
        {home ? (
          <>{/* This layout is for the home page */}</>
        ) : (
          <>{/* This is a top layout for pages other than home */}</>
        )}
        {/* This is a bottom layout for pages other than home */}
        <main className="dark:bg-slate-900">{children}</main>
        {!home && (
          <div className="pt-8 text-left">
            <Link href="/">
              <a>
                <span className="text-3xl"> ← </span>Back to Home
              </a>
            </Link>
          </div>
        )}
      </div>
      {/* Everything after here will be at the bottom ALL pages */}
      <Footer />
    </div>
  );
}
