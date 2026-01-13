import { Zap, Target, Lightbulb, TrendingUp } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay ahead of the curve, integrating cutting-edge AI and emerging technologies into every solution.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every strategy is backed by data and designed to deliver measurable business outcomes.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description: "We blend creativity with technology to create experiences that captivate and convert.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our systems are built to grow with you, from startup to enterprise scale.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">About Ewolw</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">Your Partner in Digital Evolution</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ewolw is a forward-thinking digital agency that combines creativity, technology, data, and artificial
              intelligence to transform businesses. We help brands navigate the digital landscape and unlock their full
              potential.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower businesses with innovative solutions that drive growth, enhance efficiency, and
              create lasting impact. From startups to enterprises, we deliver tailored strategies that evolve with your
              business.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-card border border-border transition-all duration-300 group hover:bg-[#660f7a] hover:border-[#660f7a]"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
