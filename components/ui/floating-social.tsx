import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react"

export function FloatingSocial() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">

      {/* Instagram */}
      <a
        href="https://www.instagram.com/unisosloyola?igsh=MTM0eG94bGd1eWlrZw=="
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <Instagram className="h-5 w-5" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61575479624080&sk=about"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        <Facebook className="h-5 w-5" />
      </a>

      {/* Botón ÚNETE con animación */}
      <div className="group relative">
        <a
          href="https://www.survio.com/survey/d/K8R3Y0I3W2B2E7S9T"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-xl 
          animate-pulse hover:animate-none hover:scale-110 transition"
        >
          <ArrowUpRight className="h-6 w-6" />
        </a>

        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-3 py-1 text-sm text-white opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          ¡Únete!
        </span>
      </div>

    </div>
  )
}
