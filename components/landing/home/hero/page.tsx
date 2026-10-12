"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import svgPaths from "../../../svg-hir4f0sap1";
import Header from "../../../shared/header/page";

function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <Link
        href="/signin"
        className=" w-full sm:w-auto min-w-[200px] rounded-xl bg-white px-8 py-4 text-center font-semibold  text-[#A38AEA] transition-all
          hover:bg-gray-100"
      >
        Get Started
      </Link>

      <Link
        href="/"
        className=" w-full sm:w-auto min-w-[200px] rounded-xl border-2 border-[#DBE3FF] px-8
          py-4 text-center  font-semibold text-[#DBE3FF]  transition-all hover:bg-white hover:text-[#4C71FE]"
      >
        Learn how to navigate
      </Link>
    </div>
  );
}

function HeroContent() {
  return (
    <section
      className="flex-1 flex flex-col lg:flex-row items-center  justify-between  gap-12 lg:gap-20  py-10
        lg:py-16"
    >
      {/* Left */}
      <div className="w-full max-w-3xl text-center lg:text-left">
        <h1 className=" font-black  leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="text-[#E5F4A8]">PRESENCE</span>

          <span>, </span>

          <span className="text-[#DDF18B]">TIME</span>

          <span>,</span>

          <span className="block text-[#D4ED6E]">ACCOUNTABILITY</span>

          <span className="block text-white">For Every Sector</span>
        </h1>

        <p
          className="
            mt-8
            max-w-2xl
            mx-auto
            lg:mx-0
            text-base
            sm:text-lg
            lg:text-xl
            leading-8
            text-[#EDE8FB]
          "
        >
          Streamline employee and workforce attendance, keep teams punctual, and
          manage presence effectively across industries.
        </p>

        <div className="mt-10 flex justify-center lg:justify-start">
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

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        w-full
        overflow-hidden
      "
      style={{
        background: "linear-gradient(118.335deg,#4C71FE 3.459%,#A38AEA 100%)",
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
