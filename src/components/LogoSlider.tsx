"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
    { name: "LinkedIn", image: "/linkedin.svg" },
    { name: "Naukri.com", image: "/naukri.png" },
    { name: "Indeed", image: "/indeed.png" },
    { name: "AngelList", image: "/angellist.png" },
    { name: "Instahyre", image: "/instahyre.webp" },
    { name: "Wellfound", image: "/wellfound.png" },
    { name: "IIMJobs", image: "/iimjobs.png" },
    { name: "Glassdoor", image: "/glassdoor.svg" },
];

export default function LogoSlider() {
    // Triple the logos for infinite scroll effect
    const repeatedLogos = [...logos, ...logos, ...logos];

    return (
        <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/robot-side.svg"
                    alt="Background"
                    fill
                    className="object-cover "
                    priority
                />
            </div>
            {/* Subtle background decoration */}
            <div className="absolute top-10 right-20 w-72 h-72 bg-sky-200 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-10 left-20 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block mb-4">
                        <span className="text-sm font-bold tracking-widest text-sky-600 uppercase" style={{ fontFamily: 'Outfit' }}>
                            Integration Partners
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight" style={{ fontFamily: 'Outfit' }}>
                        Post Once,{" "}
                        <span className="relative inline-block">
                            Reach Everywhere
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            />
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
                        Seamlessly integrate with leading job platforms and reach top talent across multiple channels
                    </p>
                </motion.div>

                {/* Logo slider section */}
                <div className="relative">
                    {/* Gradient overlays for fade effect - more subtle */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 via-slate-50 to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 via-slate-50 to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling container */}
                    <div className="overflow-hidden py-8">
                        <div className="flex gap-6 md:gap-8 animate-scroll">
                            {repeatedLogos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-center min-w-[180px] md:min-w-[200px] bg-white rounded-xl px-8 py-6 border-2 border-slate-200 shadow-sm hover:border-sky-300 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="relative w-28 sm:w-32 md:w-36 h-12 sm:h-14 md:h-16 group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                                        <Image
                                            src={logo.image}
                                            alt={`${logo.name} logo`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 768px) 140px, 180px"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom stats/trust indicators */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-5xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {[
                        { number: "8+", label: "Job Platforms" },
                        { number: "100K+", label: "Active Candidates" },
                        { number: "1-Click", label: "Multi-Post" },
                        { number: "Real-Time", label: "Sync" }
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl md:text-4xl font-black text-sky-800 mb-1" style={{ fontFamily: 'Outfit' }}>
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-600 font-medium" style={{ fontFamily: 'Inter' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-33.333%);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}