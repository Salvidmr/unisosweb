"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

export function CtaSection() {
  const handleClick = () => {
    window.open("https://form.typeform.com/to/RjAoMU8b", "_blank")
  }

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Empieza a aprender mejor hoy
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Únete a la comunidad de estudiantes que ya están mejorando su rendimiento 
            académico con Unisos. Solo te llevará un minuto.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              onClick={handleClick}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2 sm:w-auto"
            >
              Únete a Unisos
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full border-border text-foreground hover:bg-accent sm:w-auto"
            >
              Contactar
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Acceso rápido</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
