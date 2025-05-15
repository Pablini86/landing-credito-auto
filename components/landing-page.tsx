"use client"

import { useState } from "react"
import { CreditForm } from "./credit-form"
import { CreditResult } from "./credit-result"
import { PaymentSimulator } from "./payment-simulator"
import { Car } from "lucide-react"

export const LandingPage = () => {
  const [creditResult, setCreditResult] = useState<CreditResultType | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleCreditResult = (result: CreditResultType) => {
    setCreditResult(result)
    setShowResult(true)
  }

  const resetToInicio = () => {
    const confirmReset = window.confirm("¿Estás seguro de que quieres volver al inicio? Se perderán los datos ingresados.")
    if (confirmReset) {
      setCreditResult(null)
      setShowResult(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
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
                  <button
                    onClick={resetToInicio}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <a href="/nosotros" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financia tu auto de forma rápida y sencilla
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Completa el formulario y descubre al instante si calificas para un crédito automotriz con las mejores tasas
            del mercado.
          </p>
        </section>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {!showResult ? (
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Califica para tu crédito automotriz</h3>
                <CreditForm onSubmit={handleCreditResult} />
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <button
                  onClick={resetToInicio}
                  className="mb-4 text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Volver al formulario
                </button>
                {creditResult && (
                  <>
                    <CreditResult result={creditResult} />
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h3 className="text-xl font-semibold text-gray-900 mb-6">Simulador de pagos</h3>
                      <PaymentSimulator
                        amount={creditResult.financingAmount}
                        interestRate={creditResult.interestRate}
                      />
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </main>

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
                  <button
                    onClick={resetToInicio}
                    className="text-gray-400 hover:text-white transition-colors text-left"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <a href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="text-gray-400 hover:text-white transition-colors">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </a>
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
            <p>© {new Date().getFullYear()} AutoCrédito. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export type CreditResultType = {
  approved: boolean
  financingAmount: number
  minimumDownPayment: number
  interestRate: number
  message: string
}
