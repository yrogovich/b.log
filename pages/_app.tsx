import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {config} from '@fortawesome/fontawesome-svg-core'
import {AnimatePresence, motion} from 'framer-motion'
import {useRouter} from 'next/router'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/index.scss'

import {Raleway} from 'next/font/google'

config.autoAddCss = false

const inter = Raleway({
  weight: ['400', '700'],
  subsets: ['latin'],
})


export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider>
      <AnimatePresence mode={'wait'}>
        <motion.div
          key={router.asPath}
          exit={{
            position: 'absolute',
            transition: {
              duration: 1,
            },
          }}
        >
          <main className={inter.className}>
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
