
"use client";

import { useMemo, useState } from "react";
import { Plus, Search } from "lucide-react";
import { users } from "./users"; 
import type { User } from "./types";
import UserTable from "./usertable";
import UserProfile from "./userprofile";
import AddUserDialog from "./adduser";

export default function UserManagement() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [search, setSearch] = useState("");
  const [showAddUser, setShowAddUser] = useState(false);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();

    return users.filter((user) =>
      [
        user.name,
        user.email,
        user.role,
        user.department,
        user.status,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  const handleEdit = () => {
    // Open your edit form or modal here.
    console.log("Edit user:", selectedUser?.id);
  };

  if (selectedUser) {
    return (
      <UserProfile
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onEdit={handleEdit}
      />
    );
  }

  return (
    <>
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">
            User Management
          </h1>
          <p className="mt-1 text-[11px] text-slate-500">
            Add, edit, and manage employee accounts
          </p>
        </div>

        <button
          onClick={() => setShowAddUser(true)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-[#4f6bff] px-3 py-2 text-[10px] font-medium text-white hover:bg-[#3c55e8]"
        >
          <Plus size={13} />
          Add User
        </button>
      </div>

      <div className="relative mb-4">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search users..."
          aria-label="Search users"
          className="h-9 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-xs outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      <UserTable
        users={filteredUsers}
        onSelect={setSelectedUser}
      />

      <p className="mt-3 text-[10px] text-slate-400">
        Showing {filteredUsers.length} of {users.length} users
      </p>

      {showAddUser && (
        <AddUserDialog onClose={() => setShowAddUser(false)} />
      )}
    </>
  );
}
