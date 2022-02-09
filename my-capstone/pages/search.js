import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Journal() {
  return (
    <Layout>
      <Head>
        <title> Search - {siteTitle}</title>
        <br />
      </Head>
      <div> This will be for searching for workouts </div>
         </Layout>
  );
}