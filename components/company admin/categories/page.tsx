
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Plus,
  Pencil,
  Trash2,
  Users,
  Link2,
  Building2,
  ShieldCheck,
  MapPin,
  BriefcaseBusiness,
  Search,
  X,
} from "lucide-react";

import DashboardSidebar from "../components/sidebar";
import AddCategoryModal, { type NewCategory } from "./addcategory";

type CategoryItem = {
  id: number;
  name: string;
  users: number;
  color: string;
  background: string;
  tab: string;
};

type CategoryGroup = {
  title: string;
  icon: typeof Building2;
  items: CategoryItem[];
};

type UserCategory = {
  name: string;
  color: string;
  bg: string;
};

type User = {
  id: number;
  initials: string;
  name: string;
  email: string;
  categories: UserCategory[];
};

const initialGroups: CategoryGroup[] = [
  {
    title: "Departments",
    icon: Building2,
    items: [
      {
        id: 1,
        name: "Engineering",
        users: 50,
        color: "#1447E6",
        background: "#DBEAFE",
        tab: "#DCEAFE",
      },
      {
        id: 2,
        name: "Human Resources",
        users: 50,
        color: "#8200DB",
        background: "#F3E8FF",
        tab: "#F5DDF3",
      },
      {
        id: 3,
        name: "Audit",
        users: 50,
        color: "#008236",
        background: "#DCFCE7",
        tab: "#D1FAE5",
      },
      {
        id: 4,
        name: "Accounting",
        users: 50,
        color: "#C10007",
        background: "#FFE2E2",
        tab: "#FEE2E2",
      },
      {
        id: 5,
        name: "Legal",
        users: 50,
        color: "#A65F00",
        background: "#FEF9C2",
        tab: "#FEF08A",
      },
    ],
  },
  {
    title: "Roles",
    icon: ShieldCheck,
    items: [
      {
        id: 6,
        name: "Auditor",
        users: 50,
        color: "#432DD7",
        background: "#E0E7FF",
        tab: "#DBEAFE",
      },
      {
        id: 7,
        name: "Personal Assistant",
        users: 50,
        color: "#C6005C",
        background: "#FCE7F3",
        tab: "#FCE7F3",
      },
      {
        id: 8,
        name: "Accountant",
        users: 50,
        color: "#364153",
        background: "#F3F4F6",
        tab: "#E5E7EB",
      },
    ],
  },
  {
    title: "Teams",
    icon: BriefcaseBusiness,
    items: [
      {
        id: 9,
        name: "Backend Team",
        users: 50,
        color: "#00786F",
        background: "#CBFBF1",
        tab: "#99F6E4",
      },
      {
        id: 10,
        name: "Frontend teams",
        users: 50,
        color: "#C2410C",
        background: "#FFEDD5",
        tab: "#FED7AA",
      },
    ],
  },
  {
    title: "Locations",
    icon: MapPin,
    items: [
      {
        id: 11,
        name: "Adewole, Ilorin",
        users: 50,
        color: "#00786F",
        background: "#CBFBF1",
        tab: "#99F6E4",
      },
      {
        id: 12,
        name: "Lekki, Lagos Office",
        users: 50,
        color: "#497D00",
        background: "#ECFCCA",
        tab: "#D9F99D",
      },
    ],
  },
];

const initialUsers: User[] = [
  {
    id: 1,
    initials: "SJ",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    categories: [
      { name: "Engineering", color: "#1447E6", bg: "#DBEAFE" },
      { name: "Auditor", color: "#432DD7", bg: "#E0E7FF" },
    ],
  },
  {
    id: 2,
    initials: "MC",
    name: "Michael Chen",
    email: "michael.chen@company.com",
    categories: [
      { name: "Human Resources", color: "#8200DB", bg: "#F3E8FF" },
      { name: "Accountant", color: "#364153", bg: "#F3F4F6" },
    ],
  },
  {
    id: 3,
    initials: "AB",
    name: "Aisha Bello",
    email: "aisha.b@company.com",
    categories: [
      { name: "Audit", color: "#008236", bg: "#DCFCE7" },
      { name: "Backend Team", color: "#00786F", bg: "#CBFBF1" },
    ],
  },
  {
    id: 4,
    initials: "DO",
    name: "David Okonkwo",
    email: "david.o@company.com",
    categories: [
      { name: "Legal", color: "#A65F00", bg: "#FEF9C2" },
    ],
  },
  {
    id: 5,
    initials: "GN",
    name: "Grace Nwosu",
    email: "grace.n@company.com",
    categories: [
      { name: "Engineering", color: "#1447E6", bg: "#DBEAFE" },
      { name: "Personal Assistant", color: "#C6005C", bg: "#FCE7F3" },
    ],
  },
];

export default function CategoriesPage() {
  const router = useRouter();

  const [groups, setGroups] = useState<CategoryGroup[]>(initialGroups);
  const [users, setUsers] = useState<User[]>(initialUsers);

  const [showAddModal, setShowAddModal] = useState(false);

  const [editingCategory, setEditingCategory] = useState<{
    group: string;
    id: number;
  } | null>(null);

  const [editingName, setEditingName] = useState("");

  // MANAGE USER CATEGORY DRAWER
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [selectedCategoryNames, setSelectedCategoryNames] = useState<string[]>([]);
  const [categorySearch, setCategorySearch] = useState("");

  // ADD CATEGORY
  const handleAddCategory = (newCategory: NewCategory) => {
    setGroups((prev) =>
      prev.map((group) =>
        group.title === newCategory.type
          ? {
              ...group,
              items: [
                ...group.items,
                {
                  id: Date.now(),
                  name: newCategory.name,
                  users: 0,
                  color: newCategory.color,
                  background: newCategory.background,
                  tab: newCategory.background,
                },
              ],
            }
          : group
      )
    );

    setShowAddModal(false);
  };

  // DELETE CATEGORY
  const handleDeleteCategory = (
    groupTitle: string,
    categoryId: number
  ) => {
    const group = groups.find((item) => item.title === groupTitle);
    const category = group?.items.find((item) => item.id === categoryId);

    if (!category) return;

    if (!window.confirm(`Delete "${category.name}"?`)) return;

    setGroups((prev) =>
      prev.map((item) =>
        item.title === groupTitle
          ? {
              ...item,
              items: item.items.filter(
                (category) => category.id !== categoryId
              ),
            }
          : item
      )
    );

    setUsers((prev) =>
      prev.map((user) => ({
        ...user,
        categories: user.categories.filter(
          (item) => item.name !== category.name
        ),
      }))
    );

    setSelectedCategoryNames((prev) =>
      prev.filter((name) => name !== category.name)
    );
  };

  // EDIT CATEGORY
  const handleEditCategory = () => {
    if (!editingCategory || !editingName.trim()) return;

    const oldCategory = groups
      .find((group) => group.title === editingCategory.group)
      ?.items.find((item) => item.id === editingCategory.id);

    if (!oldCategory) return;

    const updatedName = editingName.trim();

    setGroups((prev) =>
      prev.map((group) =>
        group.title === editingCategory.group
          ? {
              ...group,
              items: group.items.map((item) =>
                item.id === editingCategory.id
                  ? { ...item, name: updatedName }
                  : item
              ),
            }
          : group
      )
    );

    setUsers((prev) =>
      prev.map((user) => ({
        ...user,
        categories: user.categories.map((item) =>
          item.name === oldCategory.name
            ? { ...item, name: updatedName }
            : item
        ),
      }))
    );

    setSelectedCategoryNames((prev) =>
      prev.map((name) =>
        name === oldCategory.name ? updatedName : name
      )
    );

    setEditingCategory(null);
    setEditingName("");
  };

  // OPEN MANAGE DRAWER
  const openManageDrawer = (user: User) => {
    setSelectedUser(user);
    setSelectedCategoryNames(
      user.categories.map((category) => category.name)
    );
    setCategorySearch("");
  };

  // CLOSE MANAGE DRAWER
  const closeManageDrawer = () => {
    setSelectedUser(null);
    setSelectedCategoryNames([]);
    setCategorySearch("");
  };

  // SELECT OR DESELECT CATEGORY
  const toggleCategory = (categoryName: string) => {
    setSelectedCategoryNames((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  // SAVE USER CATEGORY ASSIGNMENTS
  const saveUserCategories = () => {
    if (!selectedUser) return;

    const updatedCategories = groups.flatMap((group) =>
      group.items
        .filter((item) => selectedCategoryNames.includes(item.name))
        .map((item) => ({
          name: item.name,
          color: item.color,
          bg: item.background,
        }))
    );

    setUsers((prev) =>
      prev.map((user) =>
        user.id === selectedUser.id
          ? { ...user, categories: updatedCategories }
          : user
      )
    );

    closeManageDrawer();
  };

  const filteredUsers = users;

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#0A0A0A]">
      <DashboardSidebar />

      <main className="ml-24 min-h-screen px-4 py-6 sm:px-6 lg:px-8">
        {/* PAGE HEADER */}
        <div className="mb-5 flex items-start justify-between gap-3">
          <div>
            <h1 className="text-[28px] font-bold leading-tight tracking-tight">
              Categories
            </h1>

            <p className="mt-1 text-[12px] text-[#4A5565]">
              Manage departments, roles, teams, and link users
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="flex h-9 shrink-0 items-center gap-1 rounded-lg bg-[#155DFC] px-3 text-[11px] font-medium text-white transition hover:bg-blue-700"
          >
            <Plus size={13} />
            Add Category
          </button>
        </div>

        <div className="space-y-4">
          {/* CATEGORY GROUPS */}
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <section
                key={group.title}
                className="rounded-[18px] bg-white px-4 py-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-[12px] font-medium">
                    {group.title}
                  </h2>

                  <span className="text-[10px] text-[#6A7282]">
                    {group.items.length} categories
                  </span>
                </div>

                <div className="flex flex-wrap items-start gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        router.push("/company-dashboard/categories/overview")
                      }
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          router.push(
                            "/company-dashboard/categories/overview"
                          );
                        }
                      }}
                      className="relative mt-1 w-[220px] max-w-full cursor-pointer rounded-[13px] px-3 pb-2 pt-3 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                      style={{ backgroundColor: item.background }}
                    >
                      {/* DECORATIVE TOP TAB */}
                      <div
                        className="absolute -top-[11px] left-1/2 h-[18px] w-[40px] -translate-x-1/2 rounded-b-[9px] rounded-t-[7px]"
                        style={{ backgroundColor: item.tab }}
                      />

                      {/* CATEGORY NAME AND ACTIONS */}
                      <div className="relative flex items-center justify-between gap-2">
                        <div className="flex min-w-0 items-center gap-1.5">
                          <Icon
                            size={12}
                            style={{ color: item.color }}
                          />

                          <span
                            className="truncate text-[10px] font-medium"
                            style={{ color: item.color }}
                          >
                            {item.name}
                          </span>
                        </div>

                        <div className="flex shrink-0 items-center gap-1.5">
                          <button
                            type="button"
                            title="Edit category"
                            onClick={(e) => {
                              e.stopPropagation();

                              setEditingCategory({
                                group: group.title,
                                id: item.id,
                              });

                              setEditingName(item.name);
                            }}
                            className="hover:opacity-70"
                            style={{ color: item.color }}
                          >
                            <Pencil size={10} />
                          </button>

                          <button
                            type="button"
                            title="Delete category"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteCategory(group.title, item.id);
                            }}
                            className="hover:opacity-70"
                            style={{ color: item.color }}
                          >
                            <Trash2 size={10} />
                          </button>
                        </div>
                      </div>

                      {/* CATEGORY FOOTER */}
                      <div className="mt-2 flex items-center justify-between">
                        <span
                          className="flex items-center gap-1 text-[9px]"
                          style={{ color: item.color }}
                        >
                          <Users size={9} />
                          {item.users} users
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            window.alert(
                              `User assignment for ${item.name} will be connected to the user management workflow.`
                            );
                          }}
                          className="flex items-center gap-1 text-[9px] hover:underline"
                          style={{ color: item.color }}
                        >
                          <Link2 size={9} />
                          Link
                        </button>
                      </div>
                    </div>
                  ))}

                  {group.items.length === 0 && (
                    <p className="py-3 text-[10px] text-slate-400">
                      No categories added yet.
                    </p>
                  )}
                </div>
              </section>
            );
          })}

          {/* USER-CATEGORY MAPPING */}
          <section className="rounded-[18px] bg-white p-4">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-[12px] font-medium">
                User-category Mapping
              </h2>

              <span className="text-[10px] text-[#6A7282]">
                {users.length} users
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-[#F9FAFB]">
                    {[
                      "User",
                      "Email",
                      "Assigned Categories",
                      "Actions",
                    ].map((heading) => (
                      <th
                        key={heading}
                        className="px-3 py-2 text-left text-[9px] font-medium text-[#4A5565]"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-[#E5E7EB] last:border-0"
                    >
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[9px] font-medium text-[#155DFC]">
                            {user.initials}
                          </div>

                          <span className="whitespace-nowrap text-[9px]">
                            {user.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 py-2 text-[9px] text-[#4A5565]">
                        {user.email}
                      </td>

                      <td className="px-3 py-2">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {user.categories.map((category) => (
                            <span
                              key={category.name}
                              className="rounded-[3px] px-2 py-1 text-[8px]"
                              style={{
                                color: category.color,
                                backgroundColor: category.bg,
                              }}
                            >
                              {category.name}
                            </span>
                          ))}

                          {user.categories.length === 0 && (
                            <span className="text-[9px] text-slate-400">
                              No categories assigned
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-3 py-2">
                        <button
                          type="button"
                          onClick={() => openManageDrawer(user)}
                          className="flex items-center gap-1 whitespace-nowrap text-[9px] text-[#155DFC] hover:underline"
                        >
                          <Link2 size={9} />
                          Manage
                        </button>
                      </td>
                    </tr>
                  ))}

                  {filteredUsers.length === 0 && (
                    <tr>
                      <td
                        colSpan={4}
                        className="py-6 text-center text-[10px] text-slate-400"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {/* ADD CATEGORY MODAL */}
      <AddCategoryModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddCategory}
      />

      {/* EDIT CATEGORY MODAL */}
      {editingCategory && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
            <h2 className="mb-4 text-[16px] font-semibold">
              Edit Category
            </h2>

            <label className="mb-2 block text-[11px] font-medium">
              Category Name
            </label>

            <input
              autoFocus
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 px-3 text-[12px] outline-none focus:border-[#155DFC]"
            />

            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setEditingCategory(null);
                  setEditingName("");
                }}
                className="rounded-lg border border-slate-200 px-4 py-2 text-[11px]"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleEditCategory}
                className="rounded-lg bg-[#155DFC] px-4 py-2 text-[11px] text-white hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* USER CATEGORY MANAGEMENT DRAWER */}
      {selectedUser && (
        <div className="fixed inset-0 z-[150]">
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close category management"
            onClick={closeManageDrawer}
            className="absolute inset-0 h-full w-full cursor-default bg-black/20"
          />

          {/* DRAWER */}
          <aside
            className="absolute right-0 top-0 flex h-full w-[220px] max-w-[90vw] flex-col border-l border-gray-100 bg-white shadow-xl"
            aria-label={`Manage categories for ${selectedUser.name}`}
          >
            {/* USER INFORMATION */}
            <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2.5">
              <div className="flex min-w-0 items-center gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] text-[9px] font-medium text-[#155DFC]">
                  {selectedUser.initials}
                </div>

                <div className="min-w-0">
                  <p className="truncate text-[9px] font-medium text-gray-900">
                    {selectedUser.name}
                  </p>

                  <p className="truncate text-[8px] text-gray-400">
                    {selectedUser.email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeManageDrawer}
                aria-label="Close"
                className="shrink-0 text-gray-400 hover:text-gray-700"
              >
                <X size={13} />
              </button>
            </div>

            {/* SEARCH */}
            <div className="border-b border-gray-100 p-3">
              <div className="flex h-7 items-center gap-2 rounded-md border border-gray-100 px-2">
                <Search size={11} className="shrink-0 text-gray-400" />

                <input
                  type="text"
                  placeholder="Search categories..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                  className="w-full bg-transparent text-[9px] outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* CATEGORY LIST */}
            <div className="flex-1 overflow-y-auto">
              {groups.map((group) => {
                const filteredItems = group.items.filter((item) =>
                  item.name
                    .toLowerCase()
                    .includes(categorySearch.toLowerCase())
                );

                if (filteredItems.length === 0) return null;

                return (
                  <section
                    key={group.title}
                    className="border-b border-gray-50 px-3 py-2.5"
                  >
                    <h3 className="mb-2 text-[8px] font-medium uppercase tracking-wide text-gray-400">
                      {group.title}
                    </h3>

                    <div className="space-y-2">
                      {filteredItems.map((item) => {
                        const checked = selectedCategoryNames.includes(
                          item.name
                        );

                        const badge =
                          group.title === "Departments"
                            ? "Department"
                            : group.title === "Roles"
                              ? "Role"
                              : group.title === "Teams"
                                ? "Team"
                                : "Location";

                        return (
                          <label
                            key={item.id}
                            className="flex cursor-pointer items-center justify-between gap-2"
                          >
                            <div className="flex min-w-0 items-center gap-1.5">
                              <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => toggleCategory(item.name)}
                                className="h-3 w-3 shrink-0 cursor-pointer accent-[#155DFC]"
                              />

                              <span
                                className="h-1.5 w-1.5 shrink-0 rounded-full"
                                style={{ backgroundColor: item.color }}
                              />

                              <span className="truncate text-[9px] text-gray-800">
                                {item.name}
                              </span>
                            </div>

                            <span
                              className="shrink-0 rounded-full px-1.5 py-0.5 text-[7px]"
                              style={{
                                color: item.color,
                                backgroundColor: item.background,
                              }}
                            >
                              {badge}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </section>
                );
              })}

              {groups.every(
                (group) =>
                  !group.items.some((item) =>
                    item.name
                      .toLowerCase()
                      .includes(categorySearch.toLowerCase())
                  )
              ) && (
                <p className="px-3 py-6 text-center text-[9px] text-gray-400">
                  No categories found.
                </p>
              )}
            </div>

            {/* SAVE BUTTON */}
            <div className="border-t border-gray-100 p-3">
              <button
                type="button"
                onClick={saveUserCategories}
                className="h-8 w-full rounded-md bg-[#155DFC] text-[9px] font-medium text-white transition hover:bg-blue-700"
              >
                Save Changes
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
