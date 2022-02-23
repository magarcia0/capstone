import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
//import prisma from '/lib/prisma';
//import { useSession, signIn, signOut, getSession } from "next-auth/react";


export default function Journal() {
  return (
    <Layout>
      <Head>
        <title> Journal - {siteTitle}</title>
        <br />
      </Head>
      <h1> Congrats! You are now logged in!</h1>
      <div> This will be for the journal entries</div>
         </Layout>
  );

}