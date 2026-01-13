// "use client";

// import { Shield, Lock, Eye, Database, Mail, FileText } from 'lucide-react';

// const sections = [
//   {
//     icon: Shield,
//     title: "Information We Collect",
//     content: [
//       {
//         subtitle: "Personal Information",
//         text: "We collect information that you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when you contact us or use our services."
//       },
//       {
//         subtitle: "Automatically Collected Information",
//         text: "When you visit our website, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, we collect information about the individual web pages you view, what websites or search terms referred you to our site, and information about how you interact with our website."
//       }
//     ]
//   },
//   {
//     icon: Database,
//     title: "How We Use Your Information",
//     content: [
//       {
//         text: "We use the information we collect to provide, maintain, and improve our services, including to process and complete transactions, send you technical notices and support messages, respond to your comments and questions, and provide customer service."
//       },
//       {
//         text: "We may also use your information to communicate with you about products, services, offers, promotions, and events, and provide news and information we think will be of interest to you, subject to your marketing preferences."
//       },
//       {
//         text: "Additionally, we use the information to monitor and analyze trends, usage, and activities in connection with our services, detect, investigate and prevent fraudulent transactions and other illegal activities, and personalize and improve our services."
//       }
//     ]
//   },
//   {
//     icon: Lock,
//     title: "Data Security",
//     content: [
//       {
//         text: "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk."
//       },
//       {
//         text: "However, no security system is impenetrable and we cannot guarantee the security of our systems 100%. In the event of a data breach, we will notify affected users in accordance with applicable laws."
//       }
//     ]
//   },
//   {
//     icon: Eye,
//     title: "Information Sharing",
//     content: [
//       {
//         subtitle: "Service Providers",
//         text: "We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service."
//       },
//       {
//         subtitle: "Legal Requirements",
//         text: "We may disclose your information if required to do so by law or in response to valid requests by public authorities, or to protect and defend our rights or property."
//       },
//       {
//         subtitle: "Business Transfers",
//         text: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction."
//       }
//     ]
//   },
//   {
//     icon: FileText,
//     title: "Your Rights",
//     content: [
//       {
//         text: "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your personal data, the right to restrict or object to certain processing of your data, and the right to data portability."
//       },
//       {
//         text: "You may also have the right to withdraw consent where we rely on consent as our legal basis for processing. To exercise any of these rights, please contact us using the information provided below."
//       }
//     ]
//   },
//   {
//     icon: Mail,
//     title: "Cookies and Tracking",
//     content: [
//       {
//         text: "We use cookies and similar tracking technologies to track activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier."
//       },
//       {
//         text: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service."
//       }
//     ]
//   }
// ];

// export default function PrivacyPolicyPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-background to-card/50">
//       {/* Header */}
//       <section className="py-20 bg-card/50">
//         <div className="container mx-auto px-4">
//           <div className="text-center max-w-3xl mx-auto">
//             <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-600/10 mb-6">
//               <Shield className="w-8 h-8 text-purple-600" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
//             <p className="text-muted-foreground text-lg">
//               Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
//             </p>
//             <p className="text-sm text-muted-foreground mt-4">
//               Last Updated: January 13, 2026
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

//             {/* Contact Section */}
//             <div className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
//               <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
//               </p>
//               <div className="space-y-2 text-muted-foreground">
//                 <p>
//                   <span className="font-semibold text-foreground">Email:</span> privacy@yourcompany.com
//                 </p>
//                 <p>
//                   <span className="font-semibold text-foreground">Phone:</span> +1 (555) 123-4567
//                 </p>
//                 <p>
//                   <span className="font-semibold text-foreground">Address:</span> 123 Business Street, Suite 100, City, State 12345
//                 </p>
//               </div>
//             </div>

//             {/* Changes to Policy */}
//             <div className="p-8 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
//               <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
//               <p className="text-muted-foreground leading-relaxed">
//                 We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }