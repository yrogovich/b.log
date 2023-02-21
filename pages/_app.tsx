import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {AnimatePresence, motion} from 'framer-motion'
import 'styles/index.scss'
import {useRouter} from 'next/router'

config.autoAddCss = false

export default function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter()

  return (
    <ThemeProvider>
      <AnimatePresence>
        <motion.div
          key={router.asPath}
          exit={{
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
