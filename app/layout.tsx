import Script from 'next/script'
import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DropShip Pro - Effortless Dropshipping Solutions World Wide',
  description: 'Professional dropshipping services for WorldWide. Fast shipping, expert support, and seamless store setup.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
    
    {/* Google Translate */}
    <Script
     src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    ></Script>

    {/* Google Translate CSS */}
    <link
     rel="stylesheet"
     type="text/css"
     href="https://www.gstatic.com/_/translate_http/_/ss/k=translate_http.tr.26tY-h6gH9w.L.W.O/am=CAM/d=0/rs=AN8SPfpIXxhebB2A47D9J-MACsXmFF6Vew/m=el_main_css"
    />

   </head>
      <body className={inter.className}>{children}</body>
      <Analytics />
    </html>
  )
}

