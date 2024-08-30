import HeaderNav from '@/components/Header'
import './globals.css'
import "react-toastify/dist/ReactToastify.css";
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Legendre - Portfolio',
  description: 'Portfolio de David Fernando Legendre Albites, proyectos realizados o practicados',
  icons: {
    icon: [
      { url: 'https://img.icons8.com/?size=100&id=UjcGNVXknmz3&format=png&color=000000', rel: 'icon'}
    ],
  }
}

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
