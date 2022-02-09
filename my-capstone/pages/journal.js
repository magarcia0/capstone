import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function Journal() {
  return (
    <Layout>
      <Head>
        <title> Journal - {siteTitle}</title>
        <br />
      </Head>
      <div> This will be for the journal entries</div>
         </Layout>
  );
}