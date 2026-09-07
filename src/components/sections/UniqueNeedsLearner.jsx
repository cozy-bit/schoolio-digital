import React from "react";
import { Sparkle } from "lucide-react";

function FeatureLine({ children }) {
  return (
    <div className="border-b border-slate-200 pb-3">
      <p className="text-[15px] text-slate-700 leading-snug">{children}</p>
    </div>
  );
}

export default function UniqueNeedsLearner() {
  return (
    <section className="bg-white max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-indigo-950">
        Have a Unique Needs Learner?
      </h1>
      <p className="mt-3 text-slate-600 max-w-xl mx-auto">
        Experience the #1 best program for neurodivergent students! Designed
        with uniqueness in mind.
      </p>

      <div className="mt-10 flex flex-col md:flex-row gap-10 items-center">
        <div className="flex-1 flex flex-col gap-4 text-left w-full">
          {[
            "Bite-sized learning sessions for maximum engagement and attention",
            "Audio, video, and printable available",
            "Activity variety",
            "Mix-and-match grade levels",
            "Choose digital or handwritten practice",
            "Custom scheduling",
          ].map((f, i) => (
            <FeatureLine key={i}>{f}</FeatureLine>
          ))}
        </div>

        <div className="flex-1 w-full relative">
          <div className="absolute -top-6 -right-4 text-amber-400">
            <Sparkle size={40} fill="currentColor" strokeWidth={0} />
          </div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80"
            alt="Parent and child learning together at home"
            className="w-full h-64 md:h-72 object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}
