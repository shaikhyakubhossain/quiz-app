import './globals.css';
import { Metadata } from 'next';
import Nav from './component/Nav/nav.component';
import RTKStoreProvider from './component/RTKStoreProvider/rtk-store-provider.component';


export const metadata: Metadata = {
  title: 'Quiz Game',
  description: 'Created by Shaikh Yakub Hossain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-orange-100'>
        <RTKStoreProvider>
        <>
        <Nav />
        <div className='mt-24'>
        {children}
        </div>
        </>
        </RTKStoreProvider>
        </body>
    </html>
  )
}
