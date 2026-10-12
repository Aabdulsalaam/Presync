const recentActivities = [
  {
    id: 1,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
  {
    id: 2,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
  {
    id: 3,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
  {
    id: 4,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
  {
    id: 5,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
  {
    id: 6,
    initials: "JT",
    name: "John Terry",
    status: "Checked in",
    description: "Checked In · Human Resources",
    time: "08:30 am",
    period: "2 minutes ago",
  },
];

export default function RecentActivity() {
  return (
    <article className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
      <h2 className="font-medium text-gray-950">
        Recent Activity
      </h2>

      <div className="mt-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="
              flex
              flex-col
              gap-3
              border-b
              border-gray-100
              py-4
              last:border-b-0
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm sm:size-12">
                {activity.initials}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-medium">
                    {activity.name}
                  </h3>

                  <span className="rounded bg-green-100 px-2 py-1 text-[10px] text-green-600">
                    {activity.status}
                  </span>
                </div>

                <p className="mt-1 text-xs text-gray-400">
                  {activity.description}
                </p>
              </div>
            </div>

            <div className="pl-14 text-left text-xs text-gray-500 sm:shrink-0 sm:pl-0 sm:text-right">
              <p>{activity.time}</p>

              <p className="mt-1">
                {activity.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}