'use client'
import HeaderNav from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'
import { useState } from 'react'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [Animate, SetAnimate] = useState(true)
  setTimeout(()=> {
    SetAnimate(false)
  }, 1000);
  return (
    <html lang="es">
      <body className={Animate ? 'body animate-in' : 'body'}>
        <HeaderNav></HeaderNav>
        <main>{children}</main>
      </body>
      <ToastContainer
      />
      <ToastContainer />
    </html>
  )
}
