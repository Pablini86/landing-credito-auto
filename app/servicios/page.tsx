"use client"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Servicios</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Resumen ejecutivo</h2>
          <p className="text-gray-700 leading-relaxed">
            En Guadalajara, muchos lotes de autos seminuevos enfrentan barreras importantes para cerrar ventas debido a la falta de acceso a esquemas de financiamiento...
            {/* puedes pegar aquí el resumen completo si lo deseas */}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Informe completo</h2>
          <p className="text-gray-700 mb-4">
            Puedes leer el informe completo del proyecto aquí mismo o descargarlo como archivo PDF.
          </p>

          <div className="bg-gray-100 p-4 rounded-md max-h-[400px] overflow-y-auto text-sm text-gray-800 whitespace-pre-wrap">
            {/* Aquí puedes pegar el contenido del informe (formato texto plano) */}
            [Pega el contenido de tu informe aquí si quieres que se vea en pantalla]
          </div>
        </section>

        <div className="text-center mt-8">
          <a
            href="/proyecto-final-pablo-lemus.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Descargar PDF del proyecto
          </a>
        </div>
      </div>
    </main>
  )
}
