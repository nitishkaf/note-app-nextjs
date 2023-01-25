import Navigation from '@/components/Navigation'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode}) => {
  return (
    <div>
      <Navigation />

      {children}
      {/* Footer */}
    </div>
  )
}

// Context Provider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>

  );
}
