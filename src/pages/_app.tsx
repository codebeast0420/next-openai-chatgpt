import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/custom.css'
import '@/styles/fontawesome.min.css'
import '@/styles/templatemo.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
