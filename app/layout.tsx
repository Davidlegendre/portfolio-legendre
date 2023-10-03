import HeaderNav from '@/components/Header'
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className='body'>
        <HeaderNav></HeaderNav>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  )
}
