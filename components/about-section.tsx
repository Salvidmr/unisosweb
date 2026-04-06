import { GraduationCap, Handshake, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Sobre Unisos
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            El aprendizaje colaborativo que tú necesitas
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Unisos es una plataforma de apoyo académico donde estudiantes universitarios 
            colaboran entre sí para mejorar su rendimiento. Conectamos a quienes necesitan 
            ayuda con quienes pueden ofrecerla, creando una comunidad de aprendizaje activa.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Para estudiantes
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Diseñado específicamente para las necesidades académicas de universitarios de ADE
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-secondary/50 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
              <Handshake className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Colaborativo
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Aprende ayudando a otros y recibe ayuda cuando la necesites. 
              El conocimiento se comparte.
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-foreground">
              Mejora continua
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Sistema de valoraciones y perfiles que reconocen tu aporte 
              a la comunidad universitaria.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
