import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Accordion from "../components/accordion"
import Link from 'next/link';
//import prisma from '/lib/prisma';
//import { useSession, signIn, signOut, getSession } from "next-auth/react";


export default function Journal() {
  return (
    <>
    <Layout>
        <title> Search - {siteTitle}</title>
        <br />

      <div>
        <Accordion title="Biceps" content="content for 1" />
        <Accordion title="Trapezius" content="this is content 2" />
        <Accordion title="Triceps" content="this is content 3" />
        <Accordion title="Shoulders" content="this is content 4" />
      </div>
    </Layout>
    </>
  );
}