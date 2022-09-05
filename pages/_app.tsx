import {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/index.scss'

config.autoAddCss = false

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
