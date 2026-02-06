"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function RightSection() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Bar graph data with colors matching the sketchy aesthetic
  const barGraphData = [
    { label: "Faster Screening", value: 10, suffix: "x", maxValue: 100, color: "#06b6d4", description: "AI parses and ranks 250+ applications per day vs 25 manually" },
    { label: "Faster Time-to-Hire", value: 70, suffix: "%", maxValue: 100, color: "#dc2626", description: "Average hiring timeline drops from 42 days to just 12 days" },
    { label: "More Interview Capacity", value: 25, suffix: "x", maxValue: 100, color: "#7c3aed", description: "AI conducts 200+ automated screening interviews daily vs 8 manual calls" },
    { label: "Application Completion", value: 95, suffix: "%", maxValue: 100, color: "#db2777", description: "Smart application forms reduce candidate drop-off dramatically" },
    { label: "More Qualified Applications", value: 89, suffix: "%", maxValue: 100, color: "#ea580c", description: "AI job description optimizer attracts higher-quality candidate pipelines" },
    { label: "Lower Recruitment Costs", value: 80, suffix: "%", maxValue: 100, color: "#0891b2", description: "vs traditional recruiting agencies and multiple software subscriptions" },
    { label: "Reduction in Bad Hires", value: 50, suffix: "%", maxValue: 100, color: "#16a34a", description: "AI skills assessment and matching improves hiring accuracy dramatically" }
  ];

  const [barPaths, setBarPaths] = useState<string[]>([]);

  useEffect(() => {
    setBarPaths(barGraphData.map((item, index) => {
      const barWidth = 45;
      const spacing = 60;
      const x = 80 + index * spacing;
      const maxHeight = 240;
      const heightPercent = (item.value / item.maxValue) * maxHeight;
      const y = 300 - heightPercent;

      return `
                M ${x + Math.random() * 2},${300}
                L ${x + Math.random() * 2},${y + 5}
                Q ${x + barWidth / 2 + Math.random() * 3},${y + Math.random() * 3} ${x + barWidth + Math.random() * 2},${y + 5}
                L ${x + barWidth + Math.random() * 2},${300}
                Z
            `;
    }));
  }, []);

  return (
    <div className="relative">
      <motion.div
        className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-4 border-slate-900 relative"
        style={{
          boxShadow: '6px 6px 0px 0px rgba(15, 23, 42, 0.3)',
        }}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Grid background - hand-drawn style */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-20 pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <h3 className="text-3xl font-black text-slate-900 mb-8 relative z-10" style={{ fontFamily: 'Outfit' }}>
          Performance Metrics
        </h3>

        {/* Sketchy Bar Chart */}
        <div className="relative h-96 mt-8">
          <svg viewBox="0 0 500 350" className="w-full h-full">
            <defs>
              {/* Crayon texture filters */}
              <filter id="crayon">
                <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
              </filter>
            </defs>

            {/* Y-axis - sketchy line */}
            <motion.path
              d="M 60,300 L 59,295 L 61,290 L 60,280 L 59,270 L 61,260 L 60,250 L 59,240 L 61,230 L 60,220 L 59,210 L 61,200 L 60,190 L 59,180 L 61,170 L 60,160 L 59,150 L 61,140 L 60,130 L 59,120 L 61,110 L 60,100 L 59,90 L 61,80 L 60,70 L 59,60 L 61,50"
              stroke="#0f172a"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />

            {/* X-axis - sketchy line */}
            <motion.path
              d="M 60,300 L 70,301 L 80,300 L 90,301 L 100,300 L 110,301 L 120,300 L 130,301 L 140,300 L 150,301 L 160,300 L 170,301 L 180,300 L 190,301 L 200,300 L 210,301 L 220,300 L 230,301 L 240,300 L 250,301 L 260,300 L 270,301 L 280,300 L 290,301 L 300,300 L 310,301 L 320,300 L 330,301 L 340,300 L 350,301 L 360,300 L 370,301 L 380,300 L 390,301 L 400,300 L 410,301 L 420,300 L 430,301 L 440,300 L 450,301 L 460,300"
              stroke="#0f172a"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Bars with sketchy/crayon style */}
            {barGraphData.map((item, index) => {
              const barWidth = 45;
              const spacing = 60;
              const x = 80 + index * spacing;
              const maxHeight = 240;
              const heightPercent = (item.value / item.maxValue) * maxHeight;
              const y = 300 - heightPercent;

              return (
                <g key={index}>
                  {/* Sketchy bar with wobble */}
                  {barPaths[index] && (
                    <motion.path
                      d={barPaths[index]}
                      fill={item.color}
                      stroke="#0f172a"
                      strokeWidth="2.5"
                      opacity="0.85"
                      filter="url(#crayon)"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + index * 0.1,
                        ease: "easeOut"
                      }}
                      style={{ transformOrigin: `${x + barWidth / 2}px 300px` }}
                    />
                  )}

                  {/* Value label on top */}
                  <motion.text
                    x={x + barWidth / 2}
                    y={y - 8}
                    textAnchor="middle"
                    className="text-sm font-black fill-slate-900"
                    style={{ fontFamily: 'Outfit' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {item.value}{item.suffix}
                  </motion.text>

                  {/* X-axis label */}
                  <motion.text
                    x={x + barWidth / 2}
                    y={320}
                    textAnchor="middle"
                    className="text-xs font-bold fill-slate-700"
                    style={{ fontFamily: 'Outfit', fontSize: '10px' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {index + 1}
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Legend Toggle Button */}
        <div className="flex justify-center mt-6 relative z-20">
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-bold uppercase tracking-wider"
            style={{ fontFamily: 'Outfit' }}
          >
            {isDetailsOpen ? 'Hide Details' : 'Show Details'}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isDetailsOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Legend below graph */}
        <motion.div
          className="overflow-hidden relative z-10"
          initial={false}
          animate={{ height: isDetailsOpen ? 'auto' : 0, opacity: isDetailsOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-3 pt-4 border-t-2 border-slate-900/5 mt-4">
            {barGraphData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3"
              >
                <div
                  className="w-6 h-6 rounded border-2 border-slate-900 flex-shrink-0 mt-0.5"
                  style={{
                    backgroundColor: item.color,
                    filter: 'url(#crayon)',
                    opacity: 0.85
                  }}
                />
                <div>
                  <p className="text-sm font-bold text-slate-900" style={{ fontFamily: 'Outfit' }}>
                    {index + 1}. {item.label} - {item.value}{item.suffix}
                  </p>
                  <p className="text-xs text-slate-600" style={{ fontFamily: 'Inter' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}