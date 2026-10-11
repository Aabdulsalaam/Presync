const departments = [
  {
    name: "Engineering",
    attendance: 90,
    total: "45/50",
    color: "bg-green-500",
  },
  {
    name: "Marketing",
    attendance: 90,
    total: "45/50",
    color: "bg-green-500",
  },
  {
    name: "Sales",
    attendance: 90,
    total: "45/50",
    color: "bg-green-500",
  },
  {
    name: "Finance",
    attendance: 90,
    total: "45/50",
    color: "bg-orange-400",
  },
  {
    name: "HR",
    attendance: 90,
    total: "45/50",
    color: "bg-green-500",
  },
  {
    name: "Operations",
    attendance: 90,
    total: "45/50",
    color: "bg-green-500",
  },
];

export default function DepartmentAttendance() {
  return (
    <article className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
      <h2 className="font-medium text-gray-950">
        Department Attendance
      </h2>

      <div className="mt-7 space-y-7 sm:space-y-8">
        {departments.map((department) => (
          <div key={department.name}>
            <div className="flex items-center justify-between gap-4 text-sm">
              <span>{department.name}</span>

              <span className="shrink-0 text-xs text-gray-500">
                {department.total}
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${department.color}`}
                style={{
                  width: `${department.attendance}%`,
                }}
              />
            </div>

            <p className="mt-2 text-xs text-gray-500">
              {department.attendance}% attendance
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}