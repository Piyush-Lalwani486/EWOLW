"use client";

import {
  FileText,
  Users,
  CreditCard,
  AlertCircle,
  Scale,
  RefreshCw,
  Shield,
  CheckCircle,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Agreement to Terms",
    content: [
      {
        text: "By accessing and using our digital marketing services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.",
      },
      {
        text: "These terms apply to all visitors, users, and clients who access or use our services.",
      },
    ],
  },
  {
    icon: Users,
    title: "Services and Deliverables",
    content: [
      {
        subtitle: "Scope of Services",
        text: "We provide comprehensive digital marketing solutions tailored to your business needs.",
      },
      {
        subtitle: "Timeline and Delivery",
        text: "Project timelines are agreed upon at the start of each engagement.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: [
      {
        subtitle: "Pricing and Invoicing",
        text: "All pricing is clearly outlined in your service agreement.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: [
      {
        subtitle: "Ownership",
        text: "Upon full payment, you own the final deliverables.",
      },
    ],
  },
  {
    icon: CheckCircle,
    title: "Liability",
    content: [
      {
        subtitle: "Limitations",
        text: "Our liability is limited to the amount you paid for the service.",
      },
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/50">
      {/* Header */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/10 mb-6">
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section) => (
              <div
                key={section.title}
                className="group p-8 rounded-xl bg-background border-2 border-purple-600
                           hover:border-purple-500 transition-all duration-300
                           hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
                    <section.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                </div>

                <div className="space-y-4 ml-16">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold mb-2 text-purple-600">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-muted-foreground leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
