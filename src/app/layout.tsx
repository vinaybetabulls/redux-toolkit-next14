import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@next-redux-sample/components/Header/Header'
import { Providers } from '@next-redux-sample/store/Provider'

// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <ApiProvider api={}> */}

        <Providers>
          <Header />
          {children}
        </Providers>
        {/* </ApiProvider> */}
      </body>
    </html>
  )
}
