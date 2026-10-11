"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "../../../shared/footer/logo";
const OTP_LENGTH = 6;
const RESEND_SECONDS = 50;

export default function VerifyEmail({
  email = "example@gmail.com",
}: {
  email?: string;
}) {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const formattedTime = `${String(Math.floor(secondsLeft / 60)).padStart(
    2,
    "0"
  )}:${String(secondsLeft % 60).padStart(2, "0")}`;

  function handleChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);

    if (digit && index < OTP_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "");
    if (!pasted) return;
    e.preventDefault();
    const next = Array(OTP_LENGTH).fill("");
    pasted
      .slice(0, OTP_LENGTH)
      .split("")
      .forEach((char, i) => {
        next[i] = char;
      });
    setOtp(next);
    const lastIndex = Math.min(pasted.length, OTP_LENGTH) - 1;
    inputsRef.current[lastIndex]?.focus();
  }

  function handleResend() {
    if (secondsLeft > 0) return;
    setSecondsLeft(RESEND_SECONDS);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputsRef.current[0]?.focus();
    // TODO: trigger resend-OTP request here
  }

  return (
    <div className="flex flex-col justify-center px-6 py-14 sm:px-16 sm:py-20">
      <Logo />
<p className="mt-3 text-sm text-slate-600">
    Streamline attendance with Bio-metric Accuracy, Anytime, Anywhere
</p>
      <h1 className="mt-8 text-3xl font-bold text-slate-900">Verification</h1>
      <p className="mt-3 text-sm text-slate-600">
        Please enter the code sent to{" "}
        <span className="font-medium text-slate-800">{email}</span>
      </p>

      <div className="mt-8 flex gap-3">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputsRef.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className="h-16 w-16 rounded-xl border border-slate-300 text-center text-lg font-semibold text-slate-900 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
          />
        ))}
      </div>

      <div className="mt-5 text-sm text-slate-600">
        {formattedTime}{" "}
        <button
          type="button"
          onClick={handleResend}
          disabled={secondsLeft > 0}
          className={
            secondsLeft > 0
              ? "cursor-not-allowed font-medium text-indigo-300"
              : "font-medium text-indigo-500 underline hover:text-indigo-600"
          }
        >
          Resend
        </button>
      </div>

      <button
        type="button"
        className="mt-8 w-full rounded-lg bg-[#4F63E8] py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
      >
        Confirm
      </button>
    </div>
  );
}
