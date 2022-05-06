import Head from "next/head";
import { siteTitle } from "../components/layout";
import icon from "../public/favicon.ico";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href={icon} />
        <meta name="description" content="Fitness Workout Builder" />
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
}
