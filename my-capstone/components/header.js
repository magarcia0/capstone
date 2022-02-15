import Head from "next/head";
import { siteTitle } from "../components/layout";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default  function Header() {
  const { data: session, status } = useSession();

  if(status == "loading") {
    return (
     <p>Loading...</p>
    );
  }

  if(status == "unauthenticated")
  return (
    <>
        <button  className="rounded-md bg-blue-300" onClick={() => signIn("github")}>Sign in with GitHub</button>
      <div>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="Fitness journal website" />
          <meta property="og:title" content={siteTitle} />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
      </div>
    </>
  );

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <div>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Fitness journal website" />
            <meta property="og:title" content={siteTitle} />
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
        </div>
      </>
    );
  }

}
