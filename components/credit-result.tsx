import { CheckCircle, XCircle } from "lucide-react"
import type { CreditResultType } from "./landing-page"

type CreditResultProps = {
  result: CreditResultType
}

export const CreditResult = ({ result }: CreditResultProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className={`p-4 rounded-lg ${result.approved ? "bg-green-50" : "bg-red-50"}`}>
        <div className="flex items-start">
          {result.approved ? (
            <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
          ) : (
            <XCircle className="h-6 w-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
          )}
          <div>
            <h4 className={`font-semibold ${result.approved ? "text-green-800" : "text-red-800"}`}>
              {result.approved ? "Pre-aprobado" : "No aprobado"}
            </h4>
            <p className={`mt-1 text-sm ${result.approved ? "text-green-700" : "text-red-700"}`}>{result.message}</p>
          </div>
        </div>
      </div>

      {result.approved && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-gray-500 mb-1">Monto a financiar</h5>
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(result.financingAmount)}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-gray-500 mb-1">Enganche mínimo</h5>
            <p className="text-2xl font-semibold text-gray-900">{formatCurrency(result.minimumDownPayment)}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="text-sm font-medium text-gray-500 mb-1">Tasa de interés anual</h5>
            <p className="text-2xl font-semibold text-gray-900">{result.interestRate.toFixed(2)}%</p>
          </div>
        </div>
      )}

      {!result.approved && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h5 className="font-medium text-gray-900 mb-2">Recomendaciones para mejorar tu calificación:</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Aumenta el monto del enganche disponible</li>
            <li>Mejora tu historial crediticio pagando tus deudas a tiempo</li>
            <li>Considera un vehículo de menor valor</li>
            <li>Incrementa tu antigüedad laboral</li>
          </ul>
        </div>
      )}
    </div>
  )
}
