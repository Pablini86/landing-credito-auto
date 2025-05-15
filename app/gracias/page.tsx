"use client"

import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-4 py-20">
      <CheckCircle className="h-16 w-16 text-green-600 mb-6" />
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu solicitud!</h1>
      <p className="text-gray-700 max-w-md mb-6">
        Hemos recibido tu información correctamente. Un asesor se pondrá en contacto contigo muy pronto para
        continuar con el proceso de financiamiento.
      </p>
      <Link
        href="/"
        className="text-blue-600 font-semibold hover:underline transition"
      >
        Volver al inicio
      </Link>
    </main>
  )
}
