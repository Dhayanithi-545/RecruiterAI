"use client";
import { useState, useEffect } from "react";

export default function ImpactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; delay: string; duration: string }>>([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${3 + Math.random() * 2}s`,
      }))
    );
  }, []);

  return (
    <section className="py-32 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400 rounded-full animate-float"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit' }}>
            Real Impact,{' '}
            <span className="relative inline-block">
              Real Fast
              <div className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 w-full" />
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
            See the tangible results our AI brings to your recruitment process
          </p>
        </div>

        {/* Main Content */}
        {children}
      </div>

      <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                        opacity: 0.2;
                        scale: 1;
                    }
                    50% {
                        transform: translateY(-30px);
                        opacity: 0.6;
                        scale: 1.5;
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
            `}</style>
    </section>
  );
}