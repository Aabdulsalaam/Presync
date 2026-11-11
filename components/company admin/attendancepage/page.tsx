
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import DashboardSidebar from "../components/sidebar";

interface AttendanceCardProps {
  /** Displayed in the top-right badge */
  time?: string;

  /** Called once all 6 digits are entered */
  onOtpComplete?: (code: string) => void;

  /** Attendance deadline */
  deadline?: string;
}

// Warning period before deadline (minutes)
const WARNING_MINUTES = 15;

export default function AttendancePage({
  time = "7:00 am",
  onOtpComplete,
  deadline = "2026-11-05T21:47:00",
}: AttendanceCardProps) {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // Update countdown every second
  useEffect(() => {
    const updateDeadline = () => {
      const deadlineTime = new Date(deadline).getTime();
      setRemainingTime(deadlineTime - Date.now());
    };

    updateDeadline();

    const interval = setInterval(updateDeadline, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  // Determine attendance status
  const attendanceStatus =
    remainingTime === null
      ? "loading"
      : remainingTime <= 0
      ? "expired"
      : remainingTime <= WARNING_MINUTES * 60 * 1000
      ? "warning"
      : "normal";

  // QR card: background and border change
  const qrCardStyle =
    attendanceStatus === "expired"
      ? "border-red-500 bg-red-100"
      : attendanceStatus === "warning"
      ? "border-[#c5df36] bg-[#eff8c5]"
      : "border-indigo-200 bg-white";

  // OTP card: only border changes, background stays white
  const otpCardStyle =
    attendanceStatus === "expired"
      ? "border-red-500"
      : attendanceStatus === "warning"
      ? "border-[#c5df36]"
      : "border-indigo-200";

  // Handle OTP input
  const handleChange = (index: number, value: string) => {
    if (attendanceStatus === "expired") return;

    const digit = value.replace(/[^0-9]/g, "").slice(-1);

    const next = [...otp];
    next[index] = digit;

    setOtp(next);

    // Move to next input
    if (digit && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }

    // Run when all six digits are entered
    if (next.every((item) => item !== "")) {
      onOtpComplete?.(next.join(""));
    }
  };

  // Handle backspace
  const handleKeyDown = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  // Handle OTP paste
  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>
  ) => {
    event.preventDefault();

    if (attendanceStatus === "expired") return;

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

  // Format countdown
  const formatRemainingTime = () => {
    if (remainingTime === null) {
      return "Checking deadline...";
    }

    if (remainingTime <= 0) {
      return "Attendance deadline passed";
    }

    const totalSeconds = Math.floor(remainingTime / 1000);

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s remaining`;
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* Existing Sidebar */}
      <DashboardSidebar />

      {/* Attendance Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:pl-[125px] pl-[100px]">

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

            {/* Countdown */}
            <div
              className={`mt-5 rounded-xl px-4 py-3 text-sm font-medium ${
                attendanceStatus === "expired"
                  ? "bg-red-100 text-red-700"
                  : attendanceStatus === "warning"
                  ? "bg-lime-100 text-lime-800"
                  : "bg-white text-slate-600"
              }`}
            >
              {attendanceStatus === "expired"
                ? "⚠️ "
                : attendanceStatus === "warning"
                ? "⏳ Deadline approaching! "
                : ""}

              {formatRemainingTime()}
            </div>

            {/* Main Attendance Panel */}
            <div className="mt-6 rounded-2xl border border-indigo-100 bg-white p-4 sm:p-8">

              <div className="flex flex-col gap-6 md:flex-row">

                {/* QR Code Panel */}
                <div
                  className={`flex flex-1 flex-col items-center rounded-xl border-2 px-6 py-8 text-center transition-colors duration-500 ${qrCardStyle}`}
                >

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

                {/* OTP Panel */}
                <div
                  className={`flex flex-1 flex-col items-center rounded-xl border-2 bg-white px-6 py-8 text-center transition-colors duration-500 ${otpCardStyle}`}
                >

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
                        disabled={attendanceStatus === "expired"}
                        onChange={(event) =>
                          handleChange(index, event.target.value)
                        }
                        onKeyDown={(event) =>
                          handleKeyDown(index, event)
                        }
                        onPaste={handlePaste}
                        className="h-11 w-11 rounded-lg border border-indigo-200 text-center text-lg font-medium text-slate-900 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 disabled:cursor-not-allowed disabled:bg-slate-100 sm:h-12 sm:w-12"
                      />
                    ))}

                  </div>

                  {attendanceStatus === "expired" && (
                    <p className="mt-4 text-xs font-medium text-red-600">
                      Attendance submission is closed.
                    </p>
                  )}

                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
