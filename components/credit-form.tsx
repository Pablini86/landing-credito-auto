"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { CreditResultType } from "./landing-page"

type FormData = {
  monthlyIncome: number
  age: number
  workExperience: number
  carValue: number
  downPayment: number
  creditHistory: string
}

const initialFormData: FormData = {
  monthlyIncome: 0,
  age: 0,
  workExperience: 0,
  carValue: 0,
  downPayment: 0,
  creditHistory: "",
}

type CreditFormProps = {
  onSubmit: (result: CreditResultType) => void
}

export const CreditForm = ({ onSubmit }: CreditFormProps) => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value === "" ? "" : Number(value),
    })

    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      creditHistory: value,
    })

    // Clear error when user selects
    if (errors.creditHistory) {
      setErrors({
        ...errors,
        creditHistory: "",
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.monthlyIncome || formData.monthlyIncome <= 0) {
      newErrors.monthlyIncome = "Ingrese un valor válido"
    }

    if (!formData.age || formData.age < 18) {
      newErrors.age = "Debe ser mayor de 18 años"
    }

    if (formData.workExperience < 0) {
      newErrors.workExperience = "Ingrese un valor válido"
    }

    if (!formData.carValue || formData.carValue <= 0) {
      newErrors.carValue = "Ingrese un valor válido"
    }

    if (formData.downPayment < 0) {
      newErrors.downPayment = "Ingrese un valor válido"
    }

    if (!formData.creditHistory) {
      newErrors.creditHistory = "Seleccione una opción"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const calculateCreditResult = (): CreditResultType => {
    // Lógica para determinar si el cliente califica para el crédito
    // Esta es una lógica simplificada para el ejemplo

    // Calcular puntaje basado en los datos del formulario
    let score = 0

    // Ingresos mensuales (mayor ingreso, mayor puntaje)
    if (formData.monthlyIncome > 30000) score += 30
    else if (formData.monthlyIncome > 20000) score += 25
    else if (formData.monthlyIncome > 10000) score += 20
    else if (formData.monthlyIncome > 5000) score += 15
    else score += 5

    // Edad (edades medias tienen mejor puntaje)
    if (formData.age >= 30 && formData.age <= 50) score += 20
    else if (formData.age > 50) score += 10
    else score += 15

    // Experiencia laboral
    if (formData.workExperience > 5) score += 20
    else if (formData.workExperience > 2) score += 15
    else if (formData.workExperience > 1) score += 10
    else score += 5

    // Historial crediticio
    if (formData.creditHistory === "bueno") score += 30
    else if (formData.creditHistory === "regular") score += 15
    else score += 5

    // Relación entre valor del auto y enganche
    const downPaymentPercentage = (formData.downPayment / formData.carValue) * 100
    if (downPaymentPercentage >= 30) score += 20
    else if (downPaymentPercentage >= 20) score += 15
    else if (downPaymentPercentage >= 10) score += 10
    else score += 5

    // Determinar aprobación y tasa de interés basado en el puntaje
    const approved = score >= 60

    // Calcular tasa de interés basada en el puntaje
    let interestRate = 0
    if (score >= 90) interestRate = 8.5
    else if (score >= 80) interestRate = 10.5
    else if (score >= 70) interestRate = 12.5
    else if (score >= 60) interestRate = 15.5
    else interestRate = 18.5

    // Calcular enganche mínimo (porcentaje del valor del auto)
    let minimumDownPaymentPercentage = 0
    if (score >= 90) minimumDownPaymentPercentage = 10
    else if (score >= 80) minimumDownPaymentPercentage = 15
    else if (score >= 70) minimumDownPaymentPercentage = 20
    else if (score >= 60) minimumDownPaymentPercentage = 25
    else minimumDownPaymentPercentage = 30

    const minimumDownPayment = formData.carValue * (minimumDownPaymentPercentage / 100)

    // Calcular monto a financiar (valor del auto menos el enganche)
    // Usamos el enganche proporcionado si es mayor al mínimo requerido
    const actualDownPayment = Math.max(formData.downPayment, minimumDownPayment)
    const financingAmount = formData.carValue - actualDownPayment

    // Mensaje personalizado
    let message = ""
    if (approved) {
      message = "¡Felicidades! Has sido pre-aprobado para un crédito automotriz."
    } else {
      message = "Lo sentimos, en este momento no podemos aprobar tu solicitud de crédito."
    }

    return {
      approved,
      financingAmount,
      minimumDownPayment,
      interestRate,
      message,
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const result = calculateCreditResult()
      onSubmit(result)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="monthlyIncome">Ingreso mensual (MXN)</Label>
          <Input
            id="monthlyIncome"
            name="monthlyIncome"
            type="number"
            placeholder="Ej. 15000"
            value={formData.monthlyIncome || ""}
            onChange={handleChange}
            className={errors.monthlyIncome ? "border-red-500" : ""}
          />
          {errors.monthlyIncome && <p className="text-red-500 text-sm">{errors.monthlyIncome}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="age">Edad</Label>
          <Input
            id="age"
            name="age"
            type="number"
            placeholder="Ej. 30"
            value={formData.age || ""}
            onChange={handleChange}
            className={errors.age ? "border-red-500" : ""}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="workExperience">Antigüedad laboral (años)</Label>
          <Input
            id="workExperience"
            name="workExperience"
            type="number"
            placeholder="Ej. 3"
            value={formData.workExperience || ""}
            onChange={handleChange}
            className={errors.workExperience ? "border-red-500" : ""}
          />
          {errors.workExperience && <p className="text-red-500 text-sm">{errors.workExperience}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="carValue">Valor del auto (MXN)</Label>
          <Input
            id="carValue"
            name="carValue"
            type="number"
            placeholder="Ej. 250000"
            value={formData.carValue || ""}
            onChange={handleChange}
            className={errors.carValue ? "border-red-500" : ""}
          />
          {errors.carValue && <p className="text-red-500 text-sm">{errors.carValue}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="downPayment">Enganche disponible (MXN)</Label>
          <Input
            id="downPayment"
            name="downPayment"
            type="number"
            placeholder="Ej. 50000"
            value={formData.downPayment || ""}
            onChange={handleChange}
            className={errors.downPayment ? "border-red-500" : ""}
          />
          {errors.downPayment && <p className="text-red-500 text-sm">{errors.downPayment}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="creditHistory">Historial crediticio</Label>
          <Select onValueChange={handleSelectChange} value={formData.creditHistory}>
            <SelectTrigger id="creditHistory" className={errors.creditHistory ? "border-red-500" : ""}>
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bueno">Bueno</SelectItem>
              <SelectItem value="regular">Regular</SelectItem>
              <SelectItem value="malo">Malo</SelectItem>
            </SelectContent>
          </Select>
          {errors.creditHistory && <p className="text-red-500 text-sm">{errors.creditHistory}</p>}
        </div>
      </div>

      <div className="pt-4">
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Califícame
        </Button>
      </div>
    </form>
  )
}
