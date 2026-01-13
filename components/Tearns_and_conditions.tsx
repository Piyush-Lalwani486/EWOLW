// "use client";

// import { FileText, Users, CreditCard, AlertCircle, Scale, RefreshCw, Shield, CheckCircle } from 'lucide-react';

// const sections = [
//   {
//     icon: FileText,
//     title: "Agreement to Terms",
//     content: [
//       {
//         text: "By accessing and using our digital marketing services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services. We're here to help your business grow, and these terms ensure we can do that effectively and professionally."
//       },
//       {
//         text: "These terms apply to all visitors, users, and clients who access or use our services, including but not limited to digital marketing campaigns, SEO services, social media management, content creation, web development, and consulting services."
//       }
//     ]
//   },
//   {
//     icon: Users,
//     title: "Services and Deliverables",
//     content: [
//       {
//         subtitle: "Scope of Services",
//         text: "We provide comprehensive digital marketing solutions tailored to your business needs. Each project begins with a consultation to understand your goals, target audience, and budget. Our services include strategy development, campaign execution, performance monitoring, and regular reporting."
//       },
//       {
//         subtitle: "Timeline and Delivery",
//         text: "Project timelines are agreed upon at the start of each engagement and outlined in your service agreement. While we strive to meet all deadlines, certain factors like client feedback timing, third-party approvals, or platform limitations may affect delivery schedules. We'll always communicate any delays promptly and work with you to adjust timelines as needed."
//       },
//       {
//         subtitle: "Revisions and Changes",
//         text: "We believe in collaboration and want you to love the final result. Most service packages include a specified number of revision rounds. Additional revisions beyond the agreed scope may incur extra charges. Major scope changes will require a new agreement to ensure we can deliver quality work within reasonable timelines."
//       }
//     ]
//   },
//   {
//     icon: CreditCard,
//     title: "Payment Terms",
//     content: [
//       {
//         subtitle: "Pricing and Invoicing",
//         text: "All pricing is clearly outlined in your service agreement or proposal. We typically require a deposit before beginning work, with the balance due according to agreed milestones or upon project completion. For ongoing services like monthly retainers, invoices are sent at the beginning of each billing cycle."
//       },
//       {
//         subtitle: "Payment Methods",
//         text: "We accept various payment methods including credit cards, bank transfers, and digital payment platforms. Payment is due within the timeframe specified on your invoice, typically within 15-30 days of receipt."
//       },
//       {
//         subtitle: "Late Payments",
//         text: "We understand that sometimes things come up. If payment becomes overdue, we'll reach out to discuss the situation. However, continued late payments may result in project delays or suspension of services until accounts are current. Late fees may apply as specified in your agreement."
//       }
//     ]
//   },
//   {
//     icon: Scale,
//     title: "Client Responsibilities",
//     content: [
//       {
//         subtitle: "Information and Access",
//         text: "To deliver the best results, we need your cooperation. This includes providing timely access to necessary accounts, platforms, and materials, sharing relevant business information and brand guidelines, and responding to our communications and requests for feedback within reasonable timeframes."
//       },
//       {
//         subtitle: "Content and Materials",
//         text: "You're responsible for ensuring that any content, images, or materials you provide to us are yours to use or that you have proper permissions and licenses. You also guarantee that the content doesn't violate any laws or infringe on anyone else's rights."
//       },
//       {
//         subtitle: "Approval and Sign-Off",
//         text: "Your timely review and approval of deliverables is crucial for project success. Once you've approved work, any changes requested afterward may be treated as new work and subject to additional fees."
//       }
//     ]
//   },
//   {
//     icon: Shield,
//     title: "Intellectual Property",
//     content: [
//       {
//         subtitle: "Ownership of Deliverables",
//         text: "Upon full payment, you own the final deliverables we create specifically for you, including designs, content, and creative materials. However, we retain ownership of our methodologies, processes, templates, and any pre-existing materials or tools used in delivering your project."
//       },
//       {
//         subtitle: "Portfolio Rights",
//         text: "We're proud of our work and would love to showcase it. Unless you specifically request confidentiality, we reserve the right to display completed projects in our portfolio, case studies, and marketing materials. We'll always present your work professionally and won't share sensitive business information."
//       },
//       {
//         subtitle: "Third-Party Tools and Platforms",
//         text: "Some services may require the use of third-party platforms or tools (like advertising platforms, analytics tools, or design software). These are subject to their own terms and licenses, which you'll need to accept when using those services."
//       }
//     ]
//   },
//   {
//     icon: AlertCircle,
//     title: "Performance and Results",
//     content: [
//       {
//         subtitle: "No Guaranteed Results",
//         text: "While we work hard to achieve the best possible outcomes, digital marketing results can vary based on many factors including market conditions, competition, budget, and timing. We cannot guarantee specific results like rankings, traffic numbers, or conversion rates. However, we're committed to using industry best practices and continuously optimizing your campaigns."
//       },
//       {
//         subtitle: "Reporting and Transparency",
//         text: "We provide regular reports showing campaign performance, key metrics, and our recommendations for improvement. These reports help you understand what's working and where we can optimize further."
//       },
//       {
//         subtitle: "Algorithm Changes",
//         text: "Search engines and social media platforms frequently update their algorithms. While we stay on top of these changes and adapt our strategies accordingly, some fluctuations in performance are normal and expected in digital marketing."
//       }
//     ]
//   },
//   {
//     icon: RefreshCw,
//     title: "Cancellation and Refunds",
//     content: [
//       {
//         subtitle: "Project Cancellation",
//         text: "We hope you'll love working with us, but if you need to cancel a project, please let us know in writing as soon as possible. For ongoing work, you'll be responsible for payment for all work completed up to the cancellation date. Deposits are generally non-refundable as we reserve resources and time for your project."
//       },
//       {
//         subtitle: "Service Termination by Us",
//         text: "We reserve the right to terminate services if payment terms are not met, if you violate these terms, or if continued collaboration becomes impractical. In such cases, you'll receive notice and we'll work to ensure a smooth transition."
//       },
//       {
//         subtitle: "Refund Policy",
//         text: "Refunds are evaluated on a case-by-case basis and are typically only provided if we fail to deliver agreed-upon services. Once work has begun and deliverables have been provided, refunds are generally not available. We're committed to resolving any dissatisfaction through open communication and additional revisions when possible."
//       }
//     ]
//   },
//   {
//     icon: CheckCircle,
//     title: "Liability and Warranties",
//     content: [
//       {
//         subtitle: "Service Warranty",
//         text: "We stand behind our work and warrant that our services will be performed with professional care and skill. If you're not satisfied with any deliverable, we'll work with you to make it right within the agreed revision parameters."
//       },
//       {
//         subtitle: "Limitation of Liability",
//         text: "While we take every precaution to ensure quality work, our liability is limited to the amount you paid for the specific service in question. We're not liable for indirect damages, lost profits, or consequential damages arising from our services."
//       },
//       {
//         subtitle: "Third-Party Services",
//         text: "When we use third-party platforms or services on your behalf (like ad platforms or hosting services), we're not responsible for their performance, downtime, or policy changes. However, we'll always do our best to mitigate any issues that arise."
//       }
//     ]
//   }
// ];

// export default function TermsConditionsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-card/50">
//       {/* Header */}
//       <section className="py-20 bg-card/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/10 mb-6">
//               <FileText className="w-8 h-8 text-purple-600" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
//             <p className="text-muted-foreground text-lg">
//               These terms outline the partnership between us and our clients. We believe in transparency and want you to understand exactly how we work together to achieve your digital marketing goals.
//             </p>
//             <p className="text-sm text-muted-foreground mt-4">
//               Effective Date: January 13, 2026
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Content Sections */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto space-y-12">
//             {sections.map((section, index) => (
//               <div
//                 key={section.title}
//                 className="group p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
//               >
//                 <div className="flex items-start gap-4 mb-6">
//                   <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600/20 transition-colors">
//                     <section.icon className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-semibold">{section.title}</h2>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4 ml-16">
//                   {section.content.map((item, idx) => (
//                     <div key={idx}>
//                       {item.subtitle && (
//                         <h3 className="text-lg font-semibold mb-2 text-purple-600">
//                           {item.subtitle}
//                         </h3>
//                       )}
//                       <p className="text-muted-foreground leading-relaxed">
//                         {item.text}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}

//             {/* Dispute Resolution */}
//             <div className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
//               <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 We believe in resolving any disagreements through open, honest conversation. If any disputes arise, we encourage you to contact us first so we can work together to find a solution. Most issues can be resolved through good communication and mutual understanding.
//               </p>
//               <p className="text-muted-foreground leading-relaxed">
//                 If we're unable to resolve a dispute informally, both parties agree to first attempt mediation before pursuing legal action. Any legal proceedings will be governed by the laws of [Your State/Country] and held in [Your Jurisdiction].
//               </p>
//             </div>

//             {/* Contact Section */}
//             <div className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
//               <h2 className="text-2xl font-semibold mb-4">Questions About These Terms?</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 We know legal documents can be confusing. If you have any questions about these Terms and Conditions or want to discuss how they apply to your specific situation, we're here to help. Reach out anytime:
//               </p>
//               <div className="space-y-2 text-muted-foreground">
//                 <p>
//                   <span className="font-semibold text-foreground">Email:</span> legal@yourcompany.com
//                 </p>
//                 <p>
//                   <span className="font-semibold text-foreground">Phone:</span> +1 (555) 123-4567
//                 </p>
//                 <p>
//                   <span className="font-semibold text-foreground">Business Hours:</span> Monday - Friday, 9:00 AM - 6:00 PM
//                 </p>
//               </div>
//             </div>

//             {/* Changes to Terms */}
//             <div className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
//               <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 As our business grows and evolves, we may need to update these Terms and Conditions. When we make significant changes, we'll notify existing clients via email. The updated terms will be posted on this page with a new effective date. Your continued use of our services after changes are made constitutes your acceptance of the new terms. We encourage you to review these terms periodically to stay informed about how we're protecting your interests and ours.
//               </p>
//             </div>

//             {/* Thank You Message */}
//             <div className="text-center p-8 rounded-xl bg-gradient-to-r from-purple-600/10 to-purple-500/10 border-2 border-purple-600">
//               <h3 className="text-xl font-semibold mb-3">Thank You for Your Trust</h3>
//               <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
//                 We're excited to partner with you on your digital marketing journey. These terms are designed to protect both of us and ensure we have a successful, transparent working relationship. Let's create something amazing together!
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }