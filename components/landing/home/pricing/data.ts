import { Plan } from "./type";

export const plans: Plan[] = [
  {
    title: "Starter",
    description: "Perfect for small teams getting started",
    price: "$29",
    period: "/mo",
    buttonText: "Get Started",
    primary: false,
    features: [
      {
        text: "Up to 50 employees",
        available: true,
      },
      {
        text: "Basic attendance tracking",
        available: true,
      },
      {
        text: "Mobile app access",
        available: true,
      },
      {
        text: "Email support",
        available: true,
      },
      {
        text: "Monthly reports",
        available: true,
      },
    ],
  },

  {
    title: "Professional",
    description: "For growing teams that need more",
    price: "$79",
    period: "/mo",
    buttonText: "Get Started",
    primary: true,
    features: [
      {
        text: "Up to 200 employees",
        available: true,
      },
      {
        text: "Advanced analytics",
        available: true,
      },
      {
        text: "Role management",
        available: true,
      },
      {
        text: "Priority support",
        available: true,
      },
      {
        text: "Custom integrations",
        available: true,
      },
      {
        text: "Payroll export",
        available: true,
      },
      {
        text: "Real-time notifications",
        available: true,
      },
    ],
  },

  {
    title: "Enterprise",
    description: "Tailored solutions for large organizations",
    price: "Custom",
    buttonText: "Get Started",
    primary: false,
    features: [
      {
        text: "Unlimited employees",
        available: true,
      },
      {
        text: "Dedicated account manager",
        available: true,
      },
      {
        text: "Custom features",
        available: true,
      },
      {
        text: "24/7 premium support",
        available: true,
      },
      {
        text: "Advanced security",
        available: true,
      },
      {
        text: "SLA guarantee",
        available: true,
      },
      {
        text: "On-premise deployment",
        available: true,
      },
    ],
  },
];