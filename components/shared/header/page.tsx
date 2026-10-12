"use client";
import svgPaths from "../../svg-hir4f0sap1";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Talk to Sales",
    href: "/contact",
  },
] as const;

function LogoIcon() {
  return (
    <svg className="w-16 sm:w-20 h-auto" fill="none" viewBox="0 0 78 30">
      <g clipPath="url(#clip0)">
        <path d={svgPaths.p3fcd3d00} fill="white" />
        <path d={svgPaths.p39b8a00} fill="white" />
      </g>

      <defs>
        <clipPath id="clip0">
          <rect width="78" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoIcon />

      <span className="text-white font-black uppercase text-xl sm:text-2xl">
        Presynce
      </span>
    </Link>
  );
}

function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center gap-10">
     <nav className="flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.title}
      href={link.href}
      className="
        text-white
        font-medium
        hover:text-[#D4ED6E]
        transition-colors
      "
    >
      {link.title}
    </Link>
  ))}
</nav>

      <div className="flex items-center gap-4">
        <Link
          href="/signin"
          className="
            border-2
            border-white
            rounded-xl
            px-6
            py-3
            text-white
            hover:bg-white
            hover:text-[#4C71FE]
            transition-all
          "
        >
          Sign In
        </Link>

        <Link
          href="/signup"
          className="
            rounded-xl
            bg-white
            px-6
            py-3
            font-semibold
            text-[#A38AEA]
            hover:bg-gray-100
            transition-all
          "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", close);

    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className=" relative z-[60] text-white"
      >
        <svg
          width="30"
          height="30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 7h22" />
          <path d="M4 15h22" />
          <path d="M4 23h22" />
        </svg>
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          bg-black/40
          transition-opacity
          duration-300
          z-40

          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          right-0
          h-screen
          w-[300px]
          bg-white
          z-50
          shadow-xl
          transition-transform
          duration-300

          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setOpen(false)} className="text-3xl">
            ×
          </button>
        </div>

        <nav className="px-8 flex flex-col gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                text-lg
                font-medium
                text-[#4C71FE]
              "
            >
              {link.title}
            </Link>
          ))}

          <div className="pt-6 flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="
                border-2
                border-[#4C71FE]
                rounded-xl
                py-3
                text-center
                text-[#4C71FE]
              "
            >
              Sign In
            </Link>

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                bg-[#4C71FE]
                py-3
                text-center
                text-white
              "
            >
              Get Started
            </Link>
          </div>
        </nav>
      </aside>
    </div>
  );
}

 export default function Header() {
  return (
    <header className="relative flex z-50 items-center justify-between py-6">
      <Logo />

      <DesktopMenu />

      <MobileMenu />
    </header>
  );
}