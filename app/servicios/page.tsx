"use client"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Documentación</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Resumen ejecutivo</h2>
          <p className="text-gray-700 leading-relaxed space-y-4">
            En Guadalajara, muchos lotes de autos seminuevos enfrentan barreras importantes para cerrar ventas debido a la falta de acceso a esquemas de financiamiento. La mayoría de estos negocios operan sin estructura financiera formal, lo que les impide ofrecer crédito a sus clientes y, en consecuencia, limita su crecimiento.
            <br /><br />
            Este proyecto propone el desarrollo e implementación de un modelo de crédito basado en Machine Learning que permite evaluar la probabilidad de incumplimiento de pago por parte de los clientes, con base en variables financieras y demográficas relevantes. Para su desarrollo se utilizó el dataset “Give Me Some Credit” de Kaggle, que fue preprocesado y modelado mediante algoritmos de clasificación, destacando el uso de Random Forest por su buen desempeño.
            <br /><br />
            El modelo alcanzó un AUC de 0.8358, con una precisión general del 94%. Se complementó con una política de crédito adaptativa, que ajusta el enganche y la tasa de interés según el riesgo estimado, simulando un plan de financiamiento realista. Mediante una comparación financiera entre operar con y sin modelo, se demostró que el lote puede pasar de una ganancia mensual neta estimada de $25,000 MXN a $132,000 MXN, reduciendo la morosidad esperada de 25% a 10%.
            <br /><br />
            Adicionalmente, se evaluó el triple impacto del modelo:
            <ul className="list-disc list-inside mt-2">
              <li><strong>Financiero:</strong> Mejora la rentabilidad del negocio.</li>
              <li><strong>Social:</strong> Promueve la inclusión financiera de personas sin acceso a crédito tradicional.</li>
              <li><strong>Ambiental:</strong> Impulsa la reutilización responsable de vehículos seminuevos.</li>
            </ul>
            <br />
            Este proyecto no solo valida técnicamente el modelo, sino que plantea una solución escalable, accesible y con impacto tangible para pequeños lotes de autos, posicionándose como una herramienta de formalización e innovación en el financiamiento automotriz.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">Informe completo</h2>
          <p className="text-gray-700 mb-4">
            Puedes descargar el informe completo del proyecto y también una copia en PDF del código fuente.
          </p>
        </section>

        <div className="text-center mt-8 space-y-4">
          <a
            href="/proyecto-final-pablo-lemus.pdf"
            download
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded"
          >
            Descargar PDF del proyecto
          </a>
          <br />
          <a
            href="/codigo-pablo-lemus.pdf"
            download
            className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded"
          >
            Descargar PDF del código
          </a>
        </div>
      </div>
    </main>
  )
}
