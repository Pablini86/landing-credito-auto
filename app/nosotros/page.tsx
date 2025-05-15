"use client"

import Image from "next/image"

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <Image
          src="/pablo-lemus.jpg"
          alt="Pablo Lemus Castellanos"
          width={180}
          height={180}
          className="mx-auto rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">Pablo Lemus Castellanos</h1>
        <p className="text-gray-700 text-lg">
          Este proyecto fue desarrollado como parte del curso de Modelos de Crédito en el ITESO. El objetivo fue crear una herramienta que permita a pequeños lotes de autos ofrecer financiamiento de forma responsable y automatizada, mejorando la inclusión financiera y reduciendo riesgos operativos.
        </p>
        <p className="text-gray-600 mt-4">
          Me interesa contribuir al desarrollo económico desde la innovación financiera y la tecnología. Esta landing es el resultado de aplicar conocimientos técnicos a un caso de uso real y cercano.
        </p>
      </div>
    </main>
  )
}
