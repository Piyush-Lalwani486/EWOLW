import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyEwolwSection } from "@/components/why-ewolw-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ClientLogoCarousel from "@/components/Our-client"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyEwolwSection />
      <ClientLogoCarousel/>
      <ContactSection />
      <Footer />
    </main>
  )
}
