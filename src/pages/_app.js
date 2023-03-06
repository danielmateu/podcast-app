import ErrorBoundary from '@/components/ErrorBoundary'
import { Layout } from '@/components/Layout'
import { LoadingIndicator } from '@/components/LoadingIndicator'
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])



  return (
    <ErrorBoundary>
      {isLoading && <LoadingIndicator />}
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}
