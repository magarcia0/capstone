import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Journal() {
  const { data: session, status } = useSession();

  return (
    <Layout>
      <Head>
        <title> Search - {siteTitle}</title>
        <br />
      </Head>
      <h1> Congrats! You are now logged in!</h1>
      <div> This will be for searching for workouts </div>
         </Layout>
  );
}