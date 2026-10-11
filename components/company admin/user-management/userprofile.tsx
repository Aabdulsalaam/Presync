
import { Pencil, X } from "lucide-react";
import type { User } from "./types";
import UserAvatar from "./avatar";
import UserInfoPanel from "./infopanel";

type Props = {
  user: User;
  onClose: () => void;
  onEdit: () => void;
};

function formatDate(date: string) {
  return date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-CA")
    : "—";
}

function ProfileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-4">
      <h3 className="mb-2 text-[11px] font-semibold text-slate-700">
        {title}
      </h3>
      {children}
    </section>
  );
}

export default function UserProfile({
  user,
  onClose,
  onEdit,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-slate-900">
            User Profile
          </h1>
          <p className="mt-1 text-[11px] text-slate-500">
            View employee information and account details
          </p>
        </div>

        <button
          onClick={onClose}
          aria-label="Close profile"
          className="rounded-md p-1.5 text-slate-500 hover:bg-slate-200"
        >
          <X size={17} />
        </button>
      </div>

      <div className="mb-4 rounded-lg border border-slate-100 bg-white p-4">
        <div className="flex items-center gap-3">
          <UserAvatar initials={user.initials} large />
          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              {user.name}
            </h2>
            <p className="mt-1 text-[10px] text-slate-400">
              {user.id}
            </p>
          </div>
        </div>
      </div>

      <ProfileSection title="Personal Information">
        <UserInfoPanel
          items={[
            { label: "Full Name", value: user.name },
            { label: "Date of Birth", value: formatDate(user.dateOfBirth) },
            { label: "Gender", value: user.gender },
            { label: "Nationality", value: user.nationality },
            { label: "Email", value: user.email },
            { label: "Phone", value: user.phone },
          ]}
        />
      </ProfileSection>

      <ProfileSection title="Address">
        <UserInfoPanel
          items={[
            { label: "Street Address", value: user.address },
            { label: "Local Government Area", value: user.localGovernment },
            { label: "State", value: user.state },
            { label: "Zip Code", value: "—" },
            { label: "City", value: user.city },
            { label: "Country", value: user.country },
          ]}
        />
      </ProfileSection>

      <ProfileSection title="Emergency Contact">
        <UserInfoPanel
          items={[
            { label: "Next of Kin", value: user.nextOfKin },
            { label: "Contact Phone", value: user.emergencyPhone },
            { label: "Relationship", value: user.relationship },
            { label: "Email", value: user.emergencyEmail },
          ]}
        />
      </ProfileSection>

      <section>
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-[11px] font-semibold text-slate-700">
            Employment Information
          </h3>

          <button
            onClick={onEdit}
            className="inline-flex items-center gap-1.5 rounded-md bg-[#4f6bff] px-3 py-1.5 text-[10px] font-medium text-white hover:bg-[#3c55e8]"
          >
            <Pencil size={11} />
            Edit
          </button>
        </div>

        <div className="rounded-lg border border-slate-100 bg-white p-3">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-[9px] text-slate-400">Role</p>
              <p className="mt-1 text-[10px] text-slate-700">
                {user.role}
              </p>
            </div>

            <div>
              <p className="text-[9px] text-slate-400">Department</p>
              <p className="mt-1 text-[10px] text-slate-700">
                {user.department}
              </p>
            </div>

            <div>
              <p className="text-[9px] text-slate-400">Status</p>
              <span className="mt-1 inline-flex rounded-full bg-green-100 px-2 py-0.5 text-[9px] font-semibold text-green-700">
                {user.status}
              </span>
            </div>

            <div>
              <p className="text-[9px] text-slate-400">Join Date</p>
              <p className="mt-1 text-[10px] text-slate-700">
                {formatDate(user.joinDate)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
