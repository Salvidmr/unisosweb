import { Search, MessageSquare, HelpCircle, Calendar } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Encuentra estudiantes",
    description: "Busca compañeros de tu universidad que dominen las asignaturas donde necesitas ayuda.",
    color: "primary" as const,
  },
  {
    icon: MessageSquare,
    title: "Conecta y chatea",
    description: "Inicia una conversación, comparte tus dudas y recibe respuestas de forma rápida.",
    color: "secondary" as const,
  },
  {
    icon: Calendar,
    title: "Organiza sesiones",
    description: "Programa sesiones de estudio para preparar exámenes y trabajos juntos.",
    color: "primary" as const,
  },
  {
    icon: HelpCircle,
    title: "Resuelve o ayuda",
    description: "Obtén la ayuda que necesitas o comparte tus conocimientos con otros estudiantes.",
    color: "secondary" as const,
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-secondary">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Empieza a colaborar en 4 simples pasos
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-full translate-x-1/2 bg-gradient-to-r from-border to-transparent lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-2xl ${
                      step.color === "primary"
                        ? "bg-primary/10"
                        : "bg-secondary/10"
                    }`}
                  >
                    <step.icon
                      className={`h-10 w-10 ${
                        step.color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    />
                  </div>
                  <span
                    className={`absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${
                      step.color === "primary"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
