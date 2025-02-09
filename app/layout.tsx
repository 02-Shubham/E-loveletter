import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'E-LoveLetter',
  description: 'Created with Love by Shubham',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
