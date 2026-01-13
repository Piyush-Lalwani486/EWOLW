import { Search, Palette, Code, Bot, BarChart3, Rocket, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Digital Marketing",
    description:
      "SEO, paid advertising, social media management, and content strategies that drive traffic and conversions.",
    features: ["SEO Optimization", "PPC Campaigns", "Social Media", "Content Strategy"],
    
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description: "Create compelling brand identities and visual experiences that resonate with your audience.",
    features: ["Brand Identity", "UI/UX Design", "Visual Design", "Brand Guidelines"],
  },
  {
    icon: Code,
    title: "Web & App Development",
    description: "Build fast, scalable, and beautiful digital products that deliver exceptional user experiences.",
    features: ["Web Applications", "Mobile Apps", "E-commerce", "Custom Solutions"],
  },
  {
    icon: Bot,
    title: "AI Solutions & Automation",
    description:
      "Leverage artificial intelligence to automate processes, enhance decisions, and create intelligent experiences.",
    features: ["AI Integration", "Chatbots", "Process Automation", "ML Solutions"],
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Transform data into actionable insights that drive informed business decisions and growth.",
    features: ["Data Analysis", "Dashboards", "Reporting", "Predictive Analytics"],
  },
  {
    icon: Rocket,
    title: "Growth Strategy & Consulting",
    description: "Strategic guidance and execution plans to accelerate your business growth and market presence.",
    features: ["Growth Hacking", "Market Research", "Strategy Planning", "Consulting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">360° Digital Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive services designed to transform every aspect of your digital presence and business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service,index) => (
            <div
              key={service.title}
              style={{
                border: '2px solid',
                // If index % 2 is 0 (0, 2, 4), use Purple. Otherwise White.
                borderColor: index % 2 === 0 ? 'purple' : 'white'
              }}
              className="group p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span key={feature} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
