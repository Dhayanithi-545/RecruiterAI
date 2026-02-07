"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DestinationCard } from "@/components/ui/card-21";
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Pain point cards data
  const painPointCards = [
    {
      imageUrl: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&auto=format&fit=crop&q=80",
      location: "Slow Hiring",
      flag: "⏰",
      stats: "Candidates wait weeks • Lose top talent",
      href: "#",
      themeColor: "217 91% 60%", // Blue
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      location: "Resume Overload",
      flag: "📄",
      stats: "200+ resumes • Manual screening nightmare",
      href: "#",
      themeColor: "271 81% 56%", // Purple
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
      location: "Poor Matches",
      flag: "❌",
      stats: "Gut feeling hires • High turnover rate",
      href: "#",
      themeColor: "0 84% 60%", // Red
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop&q=80",
      location: "Time Crunch",
      flag: "⚡",
      stats: "CEO, PM, HR all at once • No bandwidth",
      href: "#",
      themeColor: "142 76% 36%", // Green
    },
  ];

  // Create carousel sequence: image, card, card, card, card
  const carouselItems = [
    { type: 'image' },
    { type: 'card', data: painPointCards[0] },
    { type: 'card', data: painPointCards[1] },
    { type: 'card', data: painPointCards[2] },
    { type: 'card', data: painPointCards[3] },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mounted, carouselItems.length]);

  if (!mounted) return null;

  return (
    <section id="home" className="relative w-full text-left pt-24 pb-16 sm:pt-28 sm:pb-18 md:pt-32 md:pb-20 lg:pt-48 lg:pb-32">
      {/* Background Image */}


      {/* Optional gradient overlay for better text readability */}
      <div className="absolute inset-0 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">

          {/* Left Column: Content */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl pt-14 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight" style={{ fontFamily: 'Outfit' }}>
                Better Hiring <br />
                <span className="text-blue-600 italic">Starts Here.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-800 mb-8 sm:mb-10 leading-relaxed font-medium w-full">
                Stop manual filtering. Let AI weave the threads between talent and your open roles.
                Streamline your entire recruitment process.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => window.open('https://calendly.com/dhayanithianandan/30min', '_blank')}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-white transition-all duration-300 bg-blue-600 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] focus:outline-none"
                >
                  Request a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById('how-it-works');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold text-slate-900 transition-all duration-300 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] focus:outline-none"
                >
                  View Features
                </button>
              </div>

              <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-800 font-bold">
                <div className="flex -space-x-2">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop",
                    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop",
                  ].map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Business professional"
                      className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover bg-slate-200"
                    />
                  ))}
                </div>
                <span>Join 500+ companies hiring smarter</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Carousel */}

          <div className="flex-1 w-full relative">
            <div className="bg-white border-2 border-slate-900 p-2 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(15,23,42,1)] transition-all duration-300 overflow-hidden min-h-[350px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {carouselItems[currentSlide].type === 'image' ? (
                  <motion.div
                    key="image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <Image
                      src="/ai.avif"
                      alt="Recruiter using AI"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover rounded-[1.5rem]"
                      priority
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`card-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full flex items-center justify-center p-6"
                  >
                    {carouselItems[currentSlide].data && (
                      <div className="w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
                        <DestinationCard {...carouselItems[currentSlide].data} />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}