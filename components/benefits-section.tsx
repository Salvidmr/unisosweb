import { TrendingUp, Brain, Users2, Zap, School } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Mejora el rendimiento académico",
    description: "Accede a explicaciones personalizadas de compañeros que ya dominan la materia.",
  },
  {
    icon: Brain,
    title: "Aprende explicando a otros",
    description: "Consolidar conocimientos enseñando es una de las técnicas de estudio más efectivas.",
  },
  {
    icon: Users2,
    title: "Impulsa tu perfil profesional",
    description: "Convierte tus conocimientos en experiencia real valorada en el mercado laboral",
  },
  {
    icon: Zap,
    title: "Acceso rápido a ayuda real",
    description: "Obtén respuestas de personas que han pasado por lo mismo recientemente.",
  },
  {
    icon: School,
    title: "Comunidad universitaria",
    description: "Forma parte de una red de apoyo dentro de tu propia universidad.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
              Beneficios
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Por qué miles de estudiantes eligen Unisos
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Descubre cómo el aprendizaje colaborativo puede transformar tu experiencia universitaria.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats / Visual */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-secondary/20 via-primary/10 to-secondary/20 blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
                <span className="text-5xl font-bold text-primary">94%</span>
                <p className="mt-2 text-muted-foreground">de usuarios mejoran sus notas</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg sm:mt-8">
                <span className="text-5xl font-bold text-secondary">4.8</span>
                <p className="mt-2 text-muted-foreground">valoración media de tutores</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg">
                <span className="text-5xl font-bold text-secondary">15min</span>
                <p className="mt-2 text-muted-foreground">tiempo medio de respuesta</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg sm:mt-8">
                <span className="text-5xl font-bold text-primary">+50</span>
                <p className="mt-2 text-muted-foreground">asignaturas apoyadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
