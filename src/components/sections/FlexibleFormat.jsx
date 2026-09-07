import React from "react";
import { FlaskConical } from "lucide-react";

function FeatureLine({ children }) {
  return (
    <div className="border-b border-slate-200 pb-3">
      <p className="text-[15px] text-slate-700 leading-snug">{children}</p>
    </div>
  );
}

export default function FlexibleFormat() {
  return (
    <section className="bg-lime-50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center relative">
        <div className="absolute top-6 right-10 text-teal-600 hidden md:block">
          <FlaskConical size={32} />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-950">
          Flexible to Your Style:
          <br />
          Online, Offline, or Hybrid
        </h2>

        <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 w-full order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="Tablet and workbooks used for lessons"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4 text-left order-1 md:order-2">
            {[
              "Print-and-go curriculum books",
              "Tablet-friendly annotatable lessons and worksheets",
              "Add your own videos and worksheets",
              "Switch up your learning, from the park bench to a long road trip, with you anywhere you go!",
            ].map((f, i) => (
              <FeatureLine key={i}>{f}</FeatureLine>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
