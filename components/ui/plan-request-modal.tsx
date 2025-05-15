"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

type Props = {
  visible: boolean
  onClose: () => void
  plan: {
    term: number
    monthlyPayment: number
    totalCost: number
    totalInterest: number
  }
}

export const PlanRequestModal = ({ visible, onClose, plan }: Props) => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const router = useRouter()

  if (!visible) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/gracias")
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-center">Solicita este plan</h2>

        <div className="text-sm bg-gray-100 p-4 rounded mb-4">
          <p><strong>Plazo:</strong> {plan.term} meses</p>
          <p><strong>Pago mensual:</strong> ${plan.monthlyPayment.toFixed(2)}</p>
          <p><strong>Costo total:</strong> ${plan.totalCost.toFixed(2)}</p>
          <p><strong>Intereses:</strong> ${plan.totalInterest.toFixed(2)}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} className="w-full border p-2 rounded" required />
          <input type="tel" placeholder="Teléfono" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border p-2 rounded" required />
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border p-2 rounded" required />

          <div className="flex justify-between items-center mt-6">
            <Button type="button" variant="outline" onClick={handlePrint}>
              Imprimir resumen
            </Button>
            <Button type="submit">Enviar solicitud</Button>
          </div>
        </form>

        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl">
          &times;
        </button>
      </div>
    </div>
  )
}
