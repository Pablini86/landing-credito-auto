import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing Crédito Auto - ITESO',
  description: 'Simulador interactivo desarrollado por Pablo Lemus',
  generator: 'Next.js',
  icons: {
      icon: 'iteso.png',
      },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        {children}
        <footer className="text-center text-sm text-gray-600 mt-10 mb-4">
          <img src="/iteso.png" alt="Logo ITESO" className="h-10 mx-auto mb-2" />
          Esta página web fue desarrollada por <strong>Pablo Lemus</strong> como parte de su proyecto final de modelos de crédito.
        </footer>
      </body>
    </html>
  )
}
