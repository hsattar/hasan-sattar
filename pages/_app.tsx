import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  ) 
}

export default MyApp
