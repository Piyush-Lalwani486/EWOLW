"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Mail, Linkedin, Twitter, InstagramIcon, FacebookIcon } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">Let&apos;s Build Something Great Together</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to evolve your business? Book a free consultation and let&apos;s discuss how we can help you achieve
              your digital goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex flex-col gap-1">
                    <div className="text-sm text-muted-foreground">Email us at</div>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ewolwdigital@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
                    >
                      ewolwdigital@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="text-sm text-muted-foreground mb-4">Follow us</div>
              <div className="flex gap-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/company/ewolw-digital/", // Standard public link
                    label: "LinkedIn"
                  },
                  {
                    icon: InstagramIcon,
                    href: "https://www.instagram.com/ewolw.co",
                    label: "Instagram"
                  },
                  {
                    icon: FacebookIcon,
                    href: "https://www.facebook.com/ewolw.co/",
                    label: "Facebook"
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practice
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-1" >
                <div className="text-sm text-muted-foreground" style={{marginTop:30}}>Our Locations</div>
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    Udaipur, Rajasthan
                  </span>
                  <span className="font-medium text-foreground">
                    Sydney, Australia
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-background border border-border rounded-2xl p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">
                  We&apos;ve received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your project..." rows={4} required />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Book a Consultation"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
