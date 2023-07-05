import './globals.css'
import { Roboto } from 'next/font/google'
import NavMenu from '@/components/NavMenu'

const roboto = Roboto({ subsets: ['latin'], weight: ['100','300','400','500','700','900'] })

export const metadata = {
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
      <body className={roboto.className}>
        <NavMenu />
        {children}
      </body>
    </html>
  )
}