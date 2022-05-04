import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import '../particles.css'
import { motion } from 'framer-motion'

export default function MyApp({ Component, router, pageProps: { session, ...pageProps} }) {
  return(
    <SessionProvider session={pageProps.session}>
      <ThemeProvider forcedTheme={Component.theme || undefined} attribute="class">
        <motion.div key={ router.route } initial="pageInitial" animate="pageAnimate" variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}>
          <Component {...pageProps} />
        </motion.div>
      </ThemeProvider>
    </SessionProvider>
  );
}