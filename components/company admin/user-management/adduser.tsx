
"use client";

import { useState, type FormEvent } from "react";
import { X } from "lucide-react";

type Props = {
  onClose: () => void;
  onSubmit?: (data: {
    fullName: string;
    email: string;
    phoneNumber: string;
    role: string;
    department: string;
  }) => void;
};

const inputClass =
  "mt-1.5 h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-[#4f6bff] focus:ring-2 focus:ring-indigo-100";

const labelClass = "text-xs font-medium text-slate-700";

export default function AddUserDialog({
  onClose,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    role: "",
    department: "",
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.(form);
  }

  function updateField(
    field: keyof typeof form,
    value: string
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-[2px]"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-user-title"
        className="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl"
      >
        {/* Modal header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h2
              id="add-user-title"
              className="text-base font-semibold text-slate-900"
            >
              Add New User
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Enter the employee details below.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 px-6 py-5">
            {/* Full name */}
            <div>
              <label htmlFor="fullName" className={labelClass}>
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="Enter full name"
                value={form.fullName}
                onChange={(e) =>
                  updateField("fullName", e.target.value)
                }
                className={inputClass}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelClass}>
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Enter email address"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                className={inputClass}
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phoneNumber" className={labelClass}>
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Enter phone number"
                value={form.phoneNumber}
                onChange={(e) =>
                  updateField("phoneNumber", e.target.value)
                }
                className={inputClass}
              />
            </div>

            {/* Role and department */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="role" className={labelClass}>
                  Role
                </label>
                <select
                  id="role"
                  required
                  value={form.role}
                  onChange={(e) =>
                    updateField("role", e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  <option value="Manager">Manager</option>
                  <option value="Sales Rep">Sales Rep</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>

              <div>
                <label htmlFor="department" className={labelClass}>
                  Department
                </label>
                <select
                  id="department"
                  required
                  value={form.department}
                  onChange={(e) =>
                    updateField("department", e.target.value)
                  }
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select department
                  </option>
                  <option value="Engineering">Engineering</option>
                  <option value="Operations">Operations</option>
                  <option value="Customer Service">
                    Customer Service
                  </option>
                  <option value="Customer Support">
                    Customer Support
                  </option>
                  <option value="Human Resources">
                    Human Resources
                  </option>
                  <option value="Finance">Finance</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex justify-end gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-xs font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-[#4f6bff] px-5 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-[#3c55e8] focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
