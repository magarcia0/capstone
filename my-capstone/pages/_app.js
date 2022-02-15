import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

export default function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return(
    <SessionProvider session={pageProps.session}>
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}