import Link from "next/link"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Digital Marketing", href: "#services" },
    { label: "Branding & Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "AI Solutions", href: "#services" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tight mb-4 inline-block">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-17 w-22"
              />
            </Link>
            <p className="text-muted-foreground max-w-md mt-4">
              Your Imagination, Accelerated by Intelligence. Seamlessly integrating 360° Digital & AI tools into your achivement story. Let’s grow, evolve, and redefine what’s possible—together.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ewolw. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/Privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/Tearns-and-conditions" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>

          </div>
        </div>
      </div>
    </footer>
  )
}
