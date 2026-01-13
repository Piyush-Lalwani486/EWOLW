import { CircleDot, Brain, Database, Layers } from "lucide-react"

const reasons = [
  {
    icon: CircleDot,
    title: "360° Approach",
    description:
      "We cover every aspect of your digital journey—from strategy and design to development and marketing—ensuring a cohesive, unified approach to transformation.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "We integrate artificial intelligence into everything we do, from intelligent automation to predictive analytics, giving you a competitive edge in the market.",
  },
  {
    icon: Database,
    title: "Data-Driven Decisions",
    description:
      "Every strategy is backed by deep analytics and insights. We let the data guide our decisions to maximize your ROI and business outcomes.",
  },
  {
    icon: Layers,
    title: "Scalable & Future-Ready",
    description:
      "Our solutions are built for tomorrow. We create flexible, scalable systems that evolve with your business and adapt to emerging technologies.",
  },
]

export function WhyEwolwSection() {
  return (
    <section id="why-ewolw" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Why Ewolw?</h2>
          <p className="text-muted-foreground text-lg">
            We don&apos;t just deliver services—we become your strategic partner in digital evolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              // Added 'group', changed hover background, and ensured text turns white
              className="group flex gap-6 p-6 rounded-xl bg-card border border-border hover:bg-[#660f7a] hover:border-[#660f7a] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                {/* Circle index: turns white on hover */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-primary font-bold group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {/* Icon: turns white on hover */}
                  <reason.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                    {reason.title}
                  </h3>
                </div>
                {/* Description: turns white/muted on hover */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-white/90 transition-colors">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
