"use client";

import { Shield, Lock, Eye, Database, Mail, FileText } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "We collect information that you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when you contact us or use our services.",
      },
      {
        subtitle: "Automatically Collected Information",
        text: "When you visit our website, we automatically collect certain information about your device, including browser type, IP address, time zone, and cookies.",
      },
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      {
        text: "We use the information we collect to provide, maintain, and improve our services.",
      },
      {
        text: "We may also use your information to communicate with you about offers and updates.",
      },
      {
        text: "Additionally, we analyze trends, usage, and activities to improve our services.",
      },
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      {
        text: "We take reasonable measures to help protect your information.",
      },
      {
        text: "However, no security system is completely secure.",
      },
    ],
  },
  {
    icon: Eye,
    title: "Information Sharing",
    content: [
      {
        subtitle: "Service Providers",
        text: "We may share your information with third-party service providers.",
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information if required by law.",
      },
      {
        subtitle: "Business Transfers",
        text: "Your information may be transferred during business transactions.",
      },
    ],
  },
  {
    icon: FileText,
    title: "Your Rights",
    content: [
      {
        text: "You may have rights to access, correct, or delete your personal data.",
      },
      {
        text: "To exercise your rights, contact us using the details below.",
      },
    ],
  },
  {
    icon: Mail,
    title: "Cookies and Tracking",
    content: [
      {
        text: "We use cookies and tracking technologies.",
      },
      {
        text: "You may disable cookies in your browser settings.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/50">
      <section className="py-20 bg-card/50 text-center">
        <Shield className="mx-auto mb-6 h-8 w-8 text-purple-600" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect
          and use your data.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Last Updated: January 13, 2026
        </p>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          {sections.map((section) => (
            <div
              key={section.title}
              className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {section.title}
              </h2>

              {section.content.map((item, i) => (
                <div key={i} className="mb-4">
                  {item.subtitle && (
                    <h3 className="text-purple-600 font-semibold">
                      {item.subtitle}
                    </h3>
                  )}
                  <p className="text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          ))}

          <div className="p-8 rounded-xl bg-background border-2 border-purple-600">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              Email: privacy@yourcompany.com
            </p>
            <p className="text-muted-foreground">
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
