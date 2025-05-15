"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type PaymentSimulatorProps = {
  amount: number
  interestRate: number
}

type PaymentPlan = {
  term: number
  monthlyPayment: number
  totalCost: number
  totalInterest: number
}

export const PaymentSimulator = ({ amount, interestRate }: PaymentSimulatorProps) => {
  const [selectedTerm, setSelectedTerm] = useState<number>(24)
  const [paymentPlans, setPaymentPlans] = useState<PaymentPlan[]>([])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  useEffect(() => {
    // Calcular planes de pago para diferentes plazos
    const terms = [6, 12, 18, 24]
    const plans = terms.map((term) => {
      // Convertir tasa anual a mensual
      const monthlyRate = interestRate / 100 / 12

      // Calcular pago mensual usando fórmula de amortización
      const monthlyPayment =
        (amount * (monthlyRate * Math.pow(1 + monthlyRate, term))) / (Math.pow(1 + monthlyRate, term) - 1)

      // Costo total del crédito
      const totalCost = monthlyPayment * term

      // Intereses totales
      const totalInterest = totalCost - amount

      return {
        term,
        monthlyPayment,
        totalCost,
        totalInterest,
      }
    })

    setPaymentPlans(plans)
  }, [amount, interestRate])

  const selectedPlan = paymentPlans.find((plan) => plan.term === selectedTerm)

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-base">Selecciona el plazo del crédito</Label>
        <RadioGroup
          value={selectedTerm.toString()}
          onValueChange={(value) => setSelectedTerm(Number.parseInt(value))}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3"
        >
          {paymentPlans.map((plan) => (
            <div key={plan.term} className="relative">
              <RadioGroupItem value={plan.term.toString()} id={`term-${plan.term}`} className="peer sr-only" />
              <Label
                htmlFor={`term-${plan.term}`}
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-white p-4 hover:bg-gray-50 hover:border-gray-300 peer-data-[state=checked]:border-blue-600 peer-data-[state=checked]:bg-blue-50 [&:has([data-state=checked])]:border-blue-600 [&:has([data-state=checked])]:bg-blue-50 cursor-pointer"
              >
                <span className="text-sm font-medium mb-1">{plan.term} meses</span>
                <span className="text-lg font-semibold text-blue-600">{formatCurrency(plan.monthlyPayment)}</span>
                <span className="text-xs text-gray-500">mensual</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {selectedPlan && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 mb-4">Detalles del plan seleccionado</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Pago mensual</h5>
              <p className="text-2xl font-semibold text-gray-900">{formatCurrency(selectedPlan.monthlyPayment)}</p>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Costo total del crédito</h5>
              <p className="text-2xl font-semibold text-gray-900">{formatCurrency(selectedPlan.totalCost)}</p>
            </div>

            <div>
              <h5 className="text-sm font-medium text-gray-500 mb-1">Intereses totales</h5>
              <p className="text-2xl font-semibold text-gray-900">{formatCurrency(selectedPlan.totalInterest)}</p>
            </div>
          </div>

          <div className="mt-6">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Solicitar este plan</Button>
          </div>
        </div>
      )}
    </div>
  )
}
