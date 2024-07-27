import './globals.css';
import Nav from './component/Nav/nav.component';
import RTKStoreProvider from './component/RTKStoreProvider/rtk-store-provider.component';


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
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
        {children}
        </>
        </RTKStoreProvider>
        </body>
    </html>
  )
}
