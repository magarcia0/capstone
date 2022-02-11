import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
