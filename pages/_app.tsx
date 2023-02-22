import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {config} from '@fortawesome/fontawesome-svg-core'
import {AnimatePresence, motion} from 'framer-motion'
import {useRouter} from 'next/router'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'styles/index.scss'

config.autoAddCss = false

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          key={router.asPath}
          exit={{
            height: 0,
            transition: {
              duration: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
