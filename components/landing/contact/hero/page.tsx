"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../../../shared/header/page";

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Link
        href="/"
        className="
          w-full
          sm:w-auto
          min-w-[200px]
          rounded-xl
          bg-white
          px-8
          py-4
          text-center
          font-semibold
          text-[#A38AEA]
          transition-all
          hover:bg-gray-100
        "
      >
        Get Started
      </Link>

      <Link
        href="/"
        className="
          w-full
          sm:w-auto
          min-w-[200px]
          rounded-xl
          border-2
          border-[#DBE3FF]
          px-8
          py-4
          text-center
          font-semibold
          text-[#DBE3FF]
          transition-all
          hover:bg-white
          hover:text-[#4C71FE]
        "
      >
        Learn how to navigate
      </Link>
    </div>
  );
}

function HeroContent() {
  return (
    <section
      className="
        flex-1
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-12
        lg:gap-20
        py-10
        lg:py-16
      "
    >
      {/* Left */}

      <div className="w-full max-w-3xl text-center lg:text-left">
  <div
    className="flex w-full flex-col items-center justify-center gap-5 lg:items-start lg:gap-[25px]"
    data-name="text and button"
  >
    <h1 className="font-['Lato:Black',sans-serif] text-[42px] font-black leading-[1.05] tracking-[-1px] sm:text-[56px] md:text-[68px] lg:text-[72px] xl:text-[81px] xl:leading-[97.2px]">
      <span className="text-[#e5f4a8]">LET&apos;S OPTIMIZE </span>

      
      <br />

      <span className="text-[#d4ed6e]">YOUR WORKFORCE</span>

      <br />

      <span className="text-[#ebebed]">For Every Sector</span>
    </h1>

    <p className="max-w-2xl font-['Lato:Regular',sans-serif] text-base font-normal leading-6 text-[#ede8fb] sm:text-lg sm:leading-7 md:text-xl lg:text-2xl lg:leading-8">
      We build reliable workforce systems that bring clarity to attendance,
      strengthen accountability, and help organizations operate with structure
      and confidence.
    </p>
  </div>

  <div className="mt-8 flex justify-center sm:mt-10 lg:justify-start">
    <HeroButtons />
  </div>
</div>

      {/* Right */}

      <div
        className="
          hidden
          lg:flex
          flex-1
          min-h-[550px]
          items-center
          justify-center
        "
      >
        {/* Hero Image Goes Here */}
      </div>
    </section>
  );
}

export default function ContactHero() {
  return (
    <section
      className="
        min-h-screen
        w-full
        overflow-hidden
      "
      style={{
        background: "#7F8E42",
      }}
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          px-5
          sm:px-8
          md:px-12
          lg:px-16
          xl:px-20
        "
      >
        <Header />

        <HeroContent />
      </div>
    </section>
  );
}
