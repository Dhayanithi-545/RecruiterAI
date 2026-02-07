"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Jenkins",
    title: "Head of Talent, TechFlow",
    quote: "RecruiterAI has completely transformed how we hire. We're finding better candidates in half the time.",
    side: "left",
  },
  {
    name: "David Chen",
    title: "CTO, StartUp Inc",
    quote: "The AI screening is incredibly accurate. It feels like having an extra recruiter on the team.",
    side: "right",
  },
  {
    name: "Emily Rodriguez",
    title: "HR Director, GlobalCorp",
    quote: "Seamless integration with our ATS and the candidates love the quick response times.",
    side: "left",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full  flex flex-col items-center justify-center">

      {/* BACKGROUND: Non-cropped, Clear Image */}
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src="/image.svg"
            alt="Background Structure"
            fill
            className="object-cover" // Clear visibility, no crop
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center text-slate-900 mb-16 sm:mb-20 md:mb-24 tracking-tighter">
          <br />
          <span className="text-slate-800 font-bold italic"> Voices of Efficiency.</span>
        </h2>

        {/* THE THREADED TIMELINE */}
        <div className="relative w-full mx-auto p-4 sm:p-8 md:p-12 lg:p-20">

          {/* Vertical Thread Path */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2 hidden md:block">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              className="w-full bg-blue-500 origin-top"
            />
          </div>

          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: t.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${t.side === "right" ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Content Block */}
                <div className="w-full md:w-[42%]">
                  <div className="bg-white border-2 border-slate-900 p-8 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 text-slate-900 fill-slate-900" />
                      ))}
                    </div>

                    <p className="text-xl text-slate-800 font-medium mb-6 leading-relaxed italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                      "{t.quote}"
                    </p>

                    <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                      <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">{t.name}</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Central Connector Node */}
                <div className="hidden md:flex w-12 h-12 rounded-full border-4 border-white bg-blue-500 z-20 shadow-lg items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>

                {/* Empty Space for the other side */}
                <div className="hidden md:block w-[42%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER VECTOR DECOR */}
      <div className="absolute top-1/4 right-0 opacity-10 rotate-12">
        <svg width="300" height="300" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
          <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </section>
  );
}