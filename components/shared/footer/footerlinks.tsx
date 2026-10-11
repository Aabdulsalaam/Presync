import Link from "next/link";
import Logo from "./logo";

const productLinks = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "API", href: "#" },
  { label: "Integration", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Partners", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Status", href: "#" },
];

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
  <div className="flex flex-col gap-5">
    <h3 className="text-xs font-bold uppercase tracking-[1.4px] text-black">
      {title}
    </h3>

    <div className="flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.label}
          href="/"
          className="text-[13px] text-black transition-colors hover:text-[#4C71FE]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const FooterLinks = () => {
  return (
    <div className="flex w-full flex-col gap-12 lg:flex-row lg:justify-between lg:gap-20">
      {/* Logo Section */}
      <div className="max-w-sm space-y-6">
        <Logo />

        <p className="text-sm leading-7 text-gray-700">
          Making workforce management simple, smart, and secure.
        </p>
      </div>

      {/* Links */}
      <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:gap-16">
        <FooterColumn title="Product" links={productLinks} />
        <FooterColumn title="Company" links={companyLinks} />
        <FooterColumn title="Support" links={supportLinks} />
      </div>
    </div>
  );
};

export default FooterLinks;