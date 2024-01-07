import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Platform for Event Management.',
  icons: {
    icon : '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
