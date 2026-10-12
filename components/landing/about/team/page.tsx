import { team } from "../team";



export default function TeamSection() {
  const [featured, ...rest] = team;

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Meet the Team
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          We provide comprehensive attendance management solutions that
          integrate seamlessly with your existing system and workflows
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
          {/* Featured member spans both rows on the left */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 px-6 py-10 shadow-sm sm:row-span-2">
            <img
              src={featured.image}
              alt={featured.name}
              className="h-28 w-28 rounded-full bg-violet-100 object-cover"
            />
            <h3 className="mt-5 text-base font-semibold text-slate-900">
              {featured.name}
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-slate-500">
              {featured.role}
            </p>
            <p className="mt-1 text-xs text-slate-400">{featured.tenure}</p>
          </div>

          {/* Remaining 4 members in a 2x2 grid */}
          {rest.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-slate-100 px-6 py-8 shadow-sm"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-20 w-20 rounded-full bg-violet-100 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              <p className="mt-1 text-xs text-slate-400">{member.tenure}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
