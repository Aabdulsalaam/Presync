export interface Testimonial {
  quote: string;
  result: string;
  resultClassName: string;
  initials: string;
  avatarClassName: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Presynce transformed our attendance tracking completely. What used to take hours now takes minutes. The mobile check-in feature has been a game-changer for our field teams.",
    result: "90% reduction in time tracking errors",
    resultClassName: "bg-gradient-to-r from-[#168BFF] to-[#00B7D8]",
    initials: "JM",
    avatarClassName: "bg-[#1597E5]",
    name: "Jennifer Martinez",
    role: "HR Director",
    company: "TechCorp Industries",
  },
  {
    quote:
      "Managing 200+ workers across multiple sites was a nightmare before Presynce. Now we have real-time visibility into everyone's attendance and location. Absolutely revolutionary.",
    result: "50% faster payroll processing",
    resultClassName: "bg-gradient-to-r from-[#B946F2] to-[#F5329D]",
    initials: "RC",
    avatarClassName: "bg-gradient-to-br from-[#B946F2] to-[#F5329D]",
    name: "Robert Chen",
    role: "Operations Manager",
    company: "BuildRight Construction",
  },
  {
    quote:
      "The insights we get from Presynce's analytics have helped us optimize staffing and reduce overtime costs significantly. The ROI was evident within the first month.",
    result: "35% reduction in overtime costs",
    resultClassName: "bg-gradient-to-r from-[#FF6500] to-[#FF334F]",
    initials: "AO",
    avatarClassName: "bg-[#FF5A0A]",
    name: "Aisha Okonkwo",
    role: "CEO",
    company: "RetailMax Solutions",
  },
  {
    quote:
      "In healthcare, accurate attendance tracking is critical. Presynce gives us the reliability and compliance features we need, with an interface that's actually easy to use.",
    result: "100% compliance with shift requirements",
    resultClassName: "bg-gradient-to-r from-[#00B85B] to-[#00CF7A]",
    initials: "MT",
    avatarClassName: "bg-[#00BF68]",
    name: "Michael Thompson",
    role: "Facility Manager",
    company: "HealthFirst Hospitals",
  },
];