import { Whatwedo } from "../whatwedo";

export default function WhatWeDoSection() {
  return (
    <section className="bg-violet-100/60 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          What We Do
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
          We provide comprehensive attendance management solutions that
          integrate seamlessly with your existing system and workflows
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
          {Whatwedo.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 border border-2">
                <Icon className="h-5 w-5 text-violet-600" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
