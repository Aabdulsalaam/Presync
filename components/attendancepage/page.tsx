"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import DashboardSidebar from "../company admin/components/sidebar";

interface AttendanceCardProps {
  /** Displayed in the top-right badge, e.g. "7:00 am" */
  time?: string;

  /** Called once all 6 digits are entered */
  onOtpComplete?: (code: string) => void;
}

export default function AttendancePage({
  time = "7:00 am",
  onOtpComplete,
}: AttendanceCardProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    // Only allow one digit
    const digit = value.replace(/[^0-9]/g, "").slice(-1);

    const next = [...otp];
    next[index] = digit;

    setOtp(next);

    // Move to the next input
    if (digit && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Run when all six digits have been entered
    if (next.every((item) => item !== "")) {
      onOtpComplete?.(next.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    const pastedCode = event.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);

    if (!pastedCode) return;

    const next = Array(6).fill("");

    pastedCode.split("").forEach((digit, index) => {
      next[index] = digit;
    });

    setOtp(next);

    const lastFilledIndex = pastedCode.length - 1;

    inputsRef.current[lastFilledIndex]?.focus();

    if (next.every((item) => item !== "")) {
      onOtpComplete?.(next.join(""));
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Imported side panel */}
      <DashboardSidebar />

      {/* Attendance content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:pl-[125px]
          pl-[100px]">
        <div className="rounded-3xl border-2 border-dotted border-sky-400 p-4 sm:p-5">
          <div className="rounded-2xl bg-slate-50/60 p-5 sm:p-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">
                  Attendance
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                  Mark your attendance by scanning the QR code or entering the
                  one-time password provided
                </p>
              </div>

              <span className="shrink-0 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
                Time: {time}
              </span>
            </div>

            {/* Main attendance panel */}
            <div className="mt-6 rounded-2xl border border-indigo-100 bg-white p-4 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row">
                {/* QR-code panel */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-indigo-200 px-6 py-8 text-center">
                  <h2 className="text-base font-semibold text-slate-900">
                    Scan QR Code
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Use your mobile device to scan
                  </p>

                  <div className="relative mt-6">
                    <Image
                      src="/qrcode.png"
                      alt="Attendance QR code"
                      width={220}
                      height={220}
                      className="h-[220px] w-[220px] object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* OTP panel */}
                <div className="flex flex-1 flex-col items-center rounded-xl border border-indigo-200 px-6 py-8 text-center">
                  <h2 className="text-base font-semibold text-slate-900">
                    Enter 6-Digit Access Code
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Enter the one-time password provided
                  </p>

                  <div className="mt-8 flex gap-2 sm:gap-3">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(element) => {
                          inputsRef.current[index] = element;
                        }}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        aria-label={`OTP digit ${index + 1}`}
                        onChange={(event) =>
                          handleChange(index, event.target.value)
                        }
                        onKeyDown={(event) =>
                          handleKeyDown(index, event)
                        }
                        onPaste={handlePaste}
                        className="h-11 w-11 rounded-lg border border-indigo-200 text-center text-lg font-medium text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 sm:h-12 sm:w-12"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}