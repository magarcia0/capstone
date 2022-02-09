import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <Head>
        <title> About - {siteTitle}</title>
        <br />
      </Head>
      <div> About us section here</div>
         </Layout>
  );
}