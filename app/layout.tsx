import type { Metadata } from "next"
import "./globals.css"
import Link from "next/link"
import { Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Landing Crédito Auto - ITESO",
  description: "Simulador interactivo desarrollado por Pablo Lemus",
  generator: "Next.js",
  icons: {
    icon: "iteso.png",
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
        {/* HEADER GLOBAL */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Car className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">AutoCrédito</h1>
              </div>
              <nav className="hidden md:block">
                <ul className="flex space-x-8">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/nosotros" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Documentación
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {/* CONTENIDO DE LA PÁGINA */}
        {children}

        {/* FOOTER GLOBAL COPIADO */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Car className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-bold">AutoCrédito</h3>
                </div>
                <p className="text-gray-400">
                  Soluciones financieras para la adquisición de vehículos nuevos y seminuevos.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                      Documentación
                    </Link>
                  </li>
                  <li>
                    <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <address className="not-italic text-gray-400">
                  <p>+52 33 3952 4608</p>
                  <p className="mt-2">if731210@iteso.mx</p>
                  <p>Ingeniero Financiero</p>
                </address>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>
                © {new Date().getFullYear()} AutoCrédito. Esta página web fue desarrollada por{" "}
                <strong>Pablo Lemus</strong> como parte de su proyecto final de Modelos de Crédito.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
