import { MessageCircle, Star, User, BookMarked, Clock, FileText } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "Mensajería entre estudiantes",
    description: "Chat en tiempo real para resolver dudas rápidamente y coordinar sesiones de estudio.",
    color: "primary" as const,
  },
  {
    icon: Star,
    title: "Sistema de valoraciones",
    description: "Califica y recibe valoraciones que construyen tu reputación como tutor o estudiante.",
    color: "secondary" as const,
  },
  {
    icon: User,
    title: "Perfiles académicos",
    description: "Muestra tus competencias, asignaturas dominadas y experiencia para que te encuentren.",
    color: "primary" as const,
  },
  {
    icon: BookMarked,
    title: "Búsqueda por asignaturas",
    description: "Encuentra ayuda específica filtrando por carrera, asignatura o tema concreto.",
    color: "secondary" as const,
  },
  {
    icon: Clock,
    title: "Disponibilidad horaria",
    description: "Indica cuándo estás disponible para ayudar o recibir ayuda de otros estudiantes.",
    color: "primary" as const,
  },
  {
    icon: FileText,
    title: "Compartir apuntes",
    description: "Intercambia material de estudio, resúmenes y recursos con tu comunidad universitaria.",
    color: "secondary" as const,
  },
]

export function FeaturesSection() {
  return (
    <section id="funcionalidades" className="bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Funcionalidades
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Todo lo que necesitas para colaborar
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Herramientas diseñadas para facilitar el aprendizaje entre compañeros
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-10 transition-transform group-hover:scale-150 ${
                  feature.color === "primary" ? "bg-primary" : "bg-secondary"
                }`}
              />
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${
                  feature.color === "primary"
                    ? "bg-primary/10"
                    : "bg-secondary/10"
                }`}
              >
                <feature.icon
                  className={`h-7 w-7 ${
                    feature.color === "primary"
                      ? "text-primary"
                      : "text-secondary"
                  }`}
                />
              </div>
              <h3 className="relative mt-6 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="relative mt-3 text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
