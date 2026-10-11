"use client";

import {
  Mail,
  UserPlus,
  Users,
  X,
} from "lucide-react";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUserModal({
  isOpen,
  onClose,
}: AddUserModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-slate-950/50
        p-4
        backdrop-blur-sm
      "
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-user-title"
        className="
          max-h-[calc(100dvh-2rem)]
          w-full
          max-w-xl
          overflow-y-auto
          rounded-2xl
          bg-white
          shadow-2xl
          sm:rounded-3xl
          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {/* Modal Header */}

        <div className="relative bg-gradient-to-r from-[#4b6ff8] to-[#6d8aff] px-5 py-6 text-white sm:px-8 sm:py-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Add User modal"
            className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 sm:right-6 sm:top-6"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-3 pr-10 sm:gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 sm:size-14">
              <UserPlus size={27} />
            </div>

            <div>
              <h2
                id="add-user-title"
                className="text-xl font-semibold sm:text-2xl"
              >
                Add New User
              </h2>

              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                Enter the employee information below
              </p>
            </div>
          </div>
        </div>

        {/* Add User Form */}

        <form
          className="p-5 sm:p-8"
          onSubmit={(event) => {
            event.preventDefault();

            onClose();
          }}
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6">
            {/* Full Name */}

            <div className="sm:col-span-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-slate-700"
              >
                Full name
              </label>

              <div className="relative mt-2">
                <Users
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter employee's full name"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-[#4b6ff8]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </div>

            {/* Email */}

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700"
              >
                Email address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="employee@company.com"
                  className="
                    h-12
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-slate-50
                    pl-11
                    pr-4
                    text-sm
                    outline-none
                    transition
                    placeholder:text-slate-400
                    focus:border-[#4b6ff8]
                    focus:bg-white
                    focus:ring-4
                    focus:ring-blue-100
                  "
                />
              </div>
            </div>

            {/* Phone Number */}

            <div>
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-slate-700"
              >
                Phone number
              </label>

              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                placeholder="+234 800 000 0000"
                className="
                  mt-2
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-[#4b6ff8]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

            {/* Department */}

            <div>
              <label
                htmlFor="department"
                className="text-sm font-medium text-slate-700"
              >
                Department
              </label>

              <select
                id="department"
                name="department"
                defaultValue=""
                required
                className="
                  mt-2
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  text-slate-600
                  outline-none
                  transition
                  focus:border-[#4b6ff8]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-100
                "
              >
                <option value="" disabled>
                  Select department
                </option>

                <option value="engineering">
                  Engineering
                </option>

                <option value="marketing">
                  Marketing
                </option>

                <option value="sales">
                  Sales
                </option>

                <option value="finance">
                  Finance
                </option>

                <option value="hr">
                  Human Resources
                </option>

                <option value="operations">
                  Operations
                </option>
              </select>
            </div>

            {/* Role */}

            <div>
              <label
                htmlFor="role"
                className="text-sm font-medium text-slate-700"
              >
                Role
              </label>

              <select
                id="role"
                name="role"
                defaultValue=""
                required
                className="
                  mt-2
                  h-12
                  w-full
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  text-sm
                  text-slate-600
                  outline-none
                  transition
                  focus:border-[#4b6ff8]
                  focus:bg-white
                  focus:ring-4
                  focus:ring-blue-100
                "
              >
                <option value="" disabled>
                  Select user role
                </option>

                <option value="employee">
                  Employee
                </option>

                <option value="manager">
                  Manager
                </option>

                <option value="hr">
                  HR Manager
                </option>

                <option value="admin">
                  Company Admin
                </option>
              </select>
            </div>
          </div>

          {/* Information */}

          <div className="mt-7 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
            <p className="text-xs leading-5 text-blue-700">
              The user will receive an email containing
              instructions to access their company account.
            </p>
          </div>

          {/* Buttons */}

          <div className="mt-7 flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="
                h-12
                w-full
                rounded-xl
                border
                border-slate-200
                px-6
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                flex
                h-12
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#4b6ff8]
                px-7
                text-sm
                font-medium
                text-white
                shadow-lg
                shadow-blue-200
                transition
                hover:bg-[#3f61df]
                sm:w-auto
              "
            >
              <UserPlus size={18} />

              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}