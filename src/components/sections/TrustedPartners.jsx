import React from "react";
import { Sparkle, Sun } from "lucide-react";

export default function TrustedPartners() {
  return (
    <section className="bg-white max-w-4xl mx-auto px-6 pb-20 pt-6 text-center relative">
      <h3 className="text-sm font-semibold text-slate-500 tracking-wide mb-8">
        Trusted industry partners
      </h3>
      <div className="relative">
        <div className="absolute -top-8 -left-6 text-amber-400 hidden md:block">
          <Sparkle size={28} fill="currentColor" strokeWidth={0} />
        </div>
        <div className="absolute -bottom-6 right-0 text-amber-400 hidden md:block">
          <Sun size={30} />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="https://images.unsplash.com/photo-1476234251651-f353703a034d?auto=format&fit=crop&w=500&q=80"
            alt="Family walking together outdoors"
            className="w-full md:w-1/3 h-40 object-cover rounded-2xl"
          />
          <div className="grid grid-cols-3 gap-x-10 gap-y-6 flex-1 items-center justify-items-center text-slate-400 font-semibold text-sm">
            <span>AMERICAN EXPRESS</span>
            <span>Google</span>
            <span>edmnia</span>
            <span>YORK UNIV.</span>
            <span>TMU</span>
            <span>Partner Co.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
