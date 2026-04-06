import { Sparkles } from "lucide-react"

export function ValuePropositionSection() {
  return (
    <section className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-secondary p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Sparkles className="h-8 w-8 text-white" />
            </div>

            <h2 className="mt-8 text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Una red universitaria que complementa tu educación
            </h2>

            <p className="mt-6 text-lg text-white/90 leading-relaxed text-pretty">
              Unisos crea una comunidad activa de estudiantes que se apoyan mutuamente. 
              No reemplazamos a los profesores, sino que complementamos la educación tradicional 
              mediante la colaboración entre iguales. Porque a veces, quien mejor te explica 
              un concepto es alguien que acaba de aprenderlo.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span>Aprendizaje entre pares</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span>Comunidad verificada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span>Ayuda hecha a tu medida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Círculos debajo */}
        <div className="mt-12 flex items-center justify-center gap-10">
          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img src="/elias.png" alt="Elias" className="h-full w-full object-cover" />
          </div>

          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img src="/paula.png" alt="Paula" className="h-full w-full object-cover" />
          </div>

          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img src="/angela.png" alt="Angela" className="h-full w-full object-cover" />
          </div>

          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img src="/laura.png" alt="Laura" className="h-full w-full object-cover" />
          </div>

          <div className="h-32 w-32 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img src="/elena.png" alt="Elena" className="h-full w-full object-cover" />
          </div>
        </div>

      </div>
    </section>
  )
}