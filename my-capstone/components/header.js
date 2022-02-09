import Head from 'next/head';
import { siteTitle } from '../components/layout';

export default function Header() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Fitness journal website" />
        <meta property="og:title" content={siteTitle} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </div>
  );
}