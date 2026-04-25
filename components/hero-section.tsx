import { Button } from "@/components/ui/button"
import { ArrowRight, Users, BookOpen, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Unisos Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-foreground">Unisos</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#sobre" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Sobre Unisos
            </a>
            <a href="#funcionalidades" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Beneficios
            </a>
          </nav>

          {/* Botón Únete gratis */}
          <a
            href="https://form.typeform.com/to/RjAoMU8b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Únete gratis
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-32 lg:pb-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Beta disponible ahora
              </span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Aprende mejor,{" "}
              <span className="text-primary">juntos</span>
            </h1>
            
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              La plataforma donde estudiantes universitarios se ayudan mutuamente. 
              Conecta con compañeros de tu universidad, resuelve dudas y mejora tu rendimiento académico.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="https://form.typeform.com/to/RjAoMU8b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  Apúntate a la beta
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>

              <Button href="#comofunciona" size="lg" variant="outline" className="border-border text-foreground hover:bg-accent">
                Ver cómo funciona
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">+2,500 estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">50+ asignaturas</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">2 formas de participar</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative mx-auto lg:mx-0">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10 blur-2xl" />
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-2xl">
              <div className="rounded-2xl bg-muted p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/20" />
                    <div>
                      <div className="h-3 w-24 rounded bg-foreground/20" />
                      <div className="mt-1 h-2 w-16 rounded bg-muted-foreground/20" />
                    </div>
                  </div>
                  <div className="h-8 w-20 rounded-lg bg-primary/20" />
                </div>
                <div className="space-y-3">
                  <div className="rounded-xl bg-card p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/20" />
                      <div className="flex-1">
                        <div className="h-2 w-32 rounded bg-foreground/20" />
                        <div className="mt-2 h-2 w-full rounded bg-muted-foreground/10" />
                        <div className="mt-1 h-2 w-3/4 rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-card p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-full bg-secondary/20" />
                      <div className="flex-1">
                        <div className="h-2 w-28 rounded bg-foreground/20" />
                        <div className="mt-2 h-2 w-full rounded bg-muted-foreground/10" />
                        <div className="mt-1 h-2 w-1/2 rounded bg-muted-foreground/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
