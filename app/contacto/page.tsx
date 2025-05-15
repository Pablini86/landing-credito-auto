"use client"

import { Phone, Mail, User } from "lucide-react"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>

        <div className="space-y-6 text-left text-gray-700">
          <p className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />
            <strong>Nombre:</strong> Pablo Lemus Castellanos
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600" />
            <strong>WhatsApp:</strong> <a href="https://wa.me/523339524608" className="text-blue-600 hover:underline">+52 33 3952 4608</a>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-blue-600" />
            <strong>Email:</strong> <a href="mailto:if731210@iteso.mx" className="text-blue-600 hover:underline">if731210@iteso.mx</a>
          </p>
          <p className="flex items-center gap-2">
            <strong>Carrera:</strong> Ingeniero Financiero
          </p>
        </div>
      </div>
    </main>
  )
}
