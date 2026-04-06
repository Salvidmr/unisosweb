import { Instagram, Linkedin, Facebook} from "lucide-react"

const links = {
  producto: [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Precios", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  empresa: [
    { label: "Sobre nosotros", href: "#sobre" },
    { label: "Blog", href: "#" },
    { label: "Carreras", href: "#" },
    { label: "Contacto", href: "#" },
  ],
  legal: [
    { label: "Términos de uso", href: "#" },
    { label: "Privacidad", href: "#" },
    { label: "Cookies", href: "#" },
  ],
}

const social = [
  { icon: Instagram, href: "https://www.instagram.com/unisosloyola?igsh=MTM0eG94bGd1eWlrZw==", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575479624080&sk=about", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Unisos Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-foreground">Unisos</span>
            </div>
            <p className="mt-4 max-w-xs text-muted-foreground leading-relaxed">
              La plataforma de apoyo académico donde estudiantes universitarios 
              colaboran para mejorar juntos.
            </p>
            <div className="mt-6 flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={item.label}
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground">Producto</h3>
            <ul className="mt-4 space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Empresa</h3>
            <ul className="mt-4 space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Unisos. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con amor para estudiantes
          </p>
        </div>
      </div>
    </footer>
  )
}
