
import { Mail, Phone } from "lucide-react";
import type { User } from "./types";
import UserAvatar from "./avatar";

function formatDate(date: string) {
  return date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-CA")
    : "—";
}

type Props = {
  users: User[];
  onSelect: (user: User) => void;
};

export default function UserTable({ users, onSelect }: Props) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-100 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left">
          <thead className="bg-[#eef1ff] text-[10px] text-slate-600">
            <tr>
              {["User", "Contact", "Role", "Department", "Status", "Join Date"].map(
                (heading) => (
                  <th key={heading} className="px-4 py-3 font-medium">
                    {heading}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {users.map((user) => (
              <tr
                key={user.id}
                tabIndex={0}
                onClick={() => onSelect(user)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") onSelect(user);
                }}
                className="cursor-pointer text-[10px] text-slate-600 transition hover:bg-indigo-50/60 focus:bg-indigo-50"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2.5">
                    <UserAvatar initials={user.initials} />
                    <div>
                      <p className="font-semibold text-slate-800">
                        {user.name}
                      </p>
                      <p className="mt-0.5 text-[9px] text-slate-400">
                        {user.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-3">
                  <div className="space-y-1.5">
                    <p className="flex items-center gap-1.5">
                      <Mail size={10} />
                      {user.email}
                    </p>
                    <p className="flex items-center gap-1.5 text-slate-400">
                      <Phone size={10} />
                      {user.phone}
                    </p>
                  </div>
                </td>

                <td className="px-4 py-3">{user.role}</td>
                <td className="px-4 py-3">{user.department}</td>

                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="whitespace-nowrap px-4 py-3">
                  {formatDate(user.joinDate)}
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-12 text-center text-xs text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
