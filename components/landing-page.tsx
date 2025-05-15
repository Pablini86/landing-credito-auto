"use client"

import { useState } from "react"
import { CreditForm } from "./credit-form"
import { CreditResult } from "./credit-result"
import { PaymentSimulator } from "./payment-simulator"

export const LandingPage = () => {
  const [creditResult, setCreditResult] = useState<CreditResultType | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleCreditResult = (result: CreditResultType) => {
    setCreditResult(result)
    setShowResult(true)
  }

  return (
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Califica para tu crédito automotriz
              </h3>
              <CreditForm onSubmit={handleCreditResult} />
            </div>
          ) : (
            <div className="p-6 md:p-8">
              <button
                onClick={() => {
                  const confirmReset = window.confirm("¿Deseas volver al formulario? Se borrarán los datos ingresados.")
                  if (confirmReset) {
                    setCreditResult(null)
                    setShowResult(false)
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                }}
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
  )
}

export type CreditResultType = {
  approved: boolean
  financingAmount: number
  minimumDownPayment: number
  interestRate: number
  message: string
}
