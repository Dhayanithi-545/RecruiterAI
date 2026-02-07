"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ImpactSection() {
    const [progress, setProgress] = useState(0);
    const [activeMetric, setActiveMetric] = useState(0);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev + 0.5) % 100);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const metricInterval = setInterval(() => {
            setActiveMetric(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(metricInterval);
    }, []);

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

    // Function to generate sketchy path for bars
    const generateSketchyRect = (x: number, y: number, width: number, height: number) => {
        const wobble = 2;
        const x1 = x + (Math.random() - 0.5) * wobble;
        const y1 = y + (Math.random() - 0.5) * wobble;
        const x2 = x + width + (Math.random() - 0.5) * wobble;
        const y2 = y + (Math.random() - 0.5) * wobble;
        const x3 = x + width + (Math.random() - 0.5) * wobble;
        const y3 = y + height + (Math.random() - 0.5) * wobble;
        const x4 = x + (Math.random() - 0.5) * wobble;
        const y4 = y + height + (Math.random() - 0.5) * wobble;

        return `M ${x1},${y1} L ${x2},${y2} L ${x3},${y3} L ${x4},${y4} Z`;
    };

    return (
        <section className="py-32 bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-sky-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.6, 0.2],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight" style={{ fontFamily: 'Outfit' }}>
                        Real Impact,{' '}
                        <span className="relative inline-block">
                            Real Fast
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </span>
                    </h2>
                    <p className="text-xl text-slate-600 w-full mx-auto" style={{ fontFamily: 'Inter' }}>
                        See the tangible results our AI brings to your recruitment process
                    </p>
                </motion.div>

                {/* Main Content - Split into two sections */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 w-full mx-auto items-start relative">

                    {/* LEFT SIDE - Main circular flow visualization */}
                    <div className="relative lg:col-span-3 px-10">
                        <svg
                            viewBox="0 0 1200 800"
                            className="w-full h-auto"
                            style={{ filter: 'drop-shadow(0 10px 40px rgba(56, 189, 248, 0.15))' }}
                        >
                            {/* Central energy core */}
                            <defs>
                                <radialGradient id="coreGradient">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                                    <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.1" />
                                </radialGradient>

                                {/* Hard Shadow Filter for Neo-brutalism */}
                                <filter id="hardShadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feOffset dx="8" dy="8" in="SourceAlpha" result="shadow" />
                                    <feComponentTransfer in="shadow" result="shadow">
                                        <feFuncA type="linear" slope="1" />
                                    </feComponentTransfer>
                                    <feFlood floodColor="#0f172a" result="color" />
                                    <feComposite in="color" in2="shadow" operator="in" result="shadow" />
                                    <feMerge>
                                        <feMergeNode in="shadow" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>

                            {/* Pulsing central core */}
                            <motion.circle
                                cx="600"
                                cy="400"
                                r="80"
                                fill="url(#coreGradient)"
                                stroke="#0f172a"
                                strokeWidth="3"
                                initial={{ scale: 0 }}
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />

                            {/* Core rings */}
                            {[1, 2, 3].map((ring, i) => (
                                <motion.circle
                                    key={ring}
                                    cx="600"
                                    cy="400"
                                    r={80 + ring * 20}
                                    fill="none"
                                    stroke="#0f172a"
                                    strokeWidth="2"
                                    opacity={0.3 - i * 0.1}
                                    strokeDasharray="4 4"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                            ))}

                            {/* Flowing connection paths - Circular orbit with black strokes */}
                            <motion.path
                                d="M 600 200 A 200 200 0 0 1 800 400"
                                fill="none"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 800 400 A 200 200 0 0 1 600 600"
                                fill="none"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 600 600 A 200 200 0 0 1 400 400"
                                fill="none"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.4, ease: "easeInOut" }}
                            />
                            <motion.path
                                d="M 400 400 A 200 200 0 0 1 600 200"
                                fill="none"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeLinecap="round"
                                opacity="0.8"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
                            />

                            {/* Animated energy particles flowing through paths (Blue dots) */}
                            {[0, 1, 2, 3].map((pathIndex) => {
                                const paths = [
                                    "M 600 200 A 200 200 0 0 1 800 400",
                                    "M 800 400 A 200 200 0 0 1 600 600",
                                    "M 600 600 A 200 200 0 0 1 400 400",
                                    "M 400 400 A 200 200 0 0 1 600 200"
                                ];

                                return (
                                    <motion.circle
                                        key={pathIndex}
                                        r="8"
                                        fill="#3b82f6"
                                        stroke="#0f172a"
                                        strokeWidth="2"
                                    >
                                        <animateMotion
                                            dur="4s"
                                            repeatCount="indefinite"
                                            path={paths[pathIndex]}
                                            begin={`${pathIndex * 1}s`}
                                        />
                                    </motion.circle>
                                );
                            })}

                            {/* Metric 1: TIME SAVED - Top */}
                            <g transform="translate(600, 100)">
                                <motion.rect
                                    x="-70"
                                    y="-50"
                                    width="140"
                                    height="100"
                                    rx="16"
                                    fill="white"
                                    stroke="#0f172a"
                                    strokeWidth="3"
                                    filter="url(#hardShadow)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: activeMetric === 0 ? 1.15 : 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <text
                                    y="-10"
                                    textAnchor="middle"
                                    className="text-4xl font-black fill-slate-900"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    40%
                                </text>

                                <text
                                    y="15"
                                    textAnchor="middle"
                                    className="text-sm font-bold fill-slate-800"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    Time Saved
                                </text>

                                <text
                                    y="32"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    Reduction in
                                </text>
                                <text
                                    y="43"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    time-to-hire
                                </text>
                            </g>

                            {/* Connection line to metric 1 */}
                            <motion.line
                                x1="600"
                                y1="320"
                                x2="600"
                                y2="160"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            />

                            {/* Metric 2: QUALITY HIRE - Right */}
                            <g transform="translate(950, 400)">
                                <motion.rect
                                    x="-70"
                                    y="-50"
                                    width="140"
                                    height="100"
                                    rx="16"
                                    fill="white"
                                    stroke="#0f172a"
                                    strokeWidth="3"
                                    filter="url(#hardShadow)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: activeMetric === 1 ? 1.15 : 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <text
                                    y="-10"
                                    textAnchor="middle"
                                    className="text-4xl font-black fill-slate-900"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    2.5x
                                </text>

                                <text
                                    y="15"
                                    textAnchor="middle"
                                    className="text-sm font-bold fill-slate-800"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    Quality Hire
                                </text>

                                <text
                                    y="32"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    Better candidate
                                </text>
                                <text
                                    y="43"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    match rate
                                </text>
                            </g>

                            {/* Connection line to metric 2 */}
                            <motion.line
                                x1="680"
                                y1="400"
                                x2="890"
                                y2="400"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.7 }}
                            />

                            {/* Metric 3: COST REDUCED - Bottom */}
                            <g transform="translate(600, 700)">
                                <motion.rect
                                    x="-70"
                                    y="-50"
                                    width="140"
                                    height="100"
                                    rx="16"
                                    fill="white"
                                    stroke="#0f172a"
                                    strokeWidth="3"
                                    filter="url(#hardShadow)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: activeMetric === 2 ? 1.15 : 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <text
                                    y="-10"
                                    textAnchor="middle"
                                    className="text-4xl font-black fill-slate-900"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    60%
                                </text>

                                <text
                                    y="15"
                                    textAnchor="middle"
                                    className="text-sm font-bold fill-slate-800"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    Cost Reduced
                                </text>

                                <text
                                    y="32"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    Lower cost
                                </text>
                                <text
                                    y="43"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    per hire
                                </text>
                            </g>

                            {/* Connection line to metric 3 */}
                            <motion.line
                                x1="600"
                                y1="480"
                                x2="600"
                                y2="640"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 0.9 }}
                            />

                            {/* Metric 4: 24/7 AVAILABILITY - Left */}
                            <g transform="translate(250, 400)">
                                <motion.rect
                                    x="-70"
                                    y="-50"
                                    width="140"
                                    height="100"
                                    rx="16"
                                    fill="white"
                                    stroke="#0f172a"
                                    strokeWidth="3"
                                    filter="url(#hardShadow)"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: activeMetric === 3 ? 1.15 : 1 }}
                                    transition={{ duration: 0.5 }}
                                />

                                <text
                                    y="-10"
                                    textAnchor="middle"
                                    className="text-4xl font-black fill-slate-900"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    24/7
                                </text>

                                <text
                                    y="15"
                                    textAnchor="middle"
                                    className="text-sm font-bold fill-slate-800"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    Availability
                                </text>

                                <text
                                    y="32"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    Always-on
                                </text>
                                <text
                                    y="43"
                                    textAnchor="middle"
                                    className="text-xs fill-slate-600 font-medium"
                                    style={{ fontFamily: 'Inter', fontSize: '10px' }}
                                >
                                    screening
                                </text>
                            </g>

                            {/* Connection line to metric 4 */}
                            <motion.line
                                x1="520"
                                y1="400"
                                x2="310"
                                y2="400"
                                stroke="#0f172a"
                                strokeWidth="3"
                                strokeDasharray="5,5"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 1, delay: 1.1 }}
                            />

                            {/* Central AI icon */}
                            <g transform="translate(600, 400)">
                                <text
                                    textAnchor="middle"
                                    y="5"
                                    className="text-3xl font-black fill-slate-900"
                                    style={{ fontFamily: 'Outfit' }}
                                >
                                    AI
                                </text>
                            </g>
                        </svg>
                    </div>

                    {/* Vertical divider line - hand-drawn style */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
                        <svg width="4" height="100%" className="h-full">
                            <motion.path
                                d="M 2,0 Q 3,100 2,200 T 2,400 T 2,600 T 2,800 T 2,1000"
                                stroke="#0f172a"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                            />
                        </svg>
                    </div>

                    {/* RIGHT SIDE - Hand-drawn Bar Graph */}
                    <div className="relative lg:col-span-2">
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
                                                <motion.path
                                                    d={`
                                                        M ${x + Math.random() * 2},${300}
                                                        L ${x + Math.random() * 2},${y + 5}
                                                        Q ${x + barWidth / 2 + Math.random() * 3},${y + Math.random() * 3} ${x + barWidth + Math.random() * 2},${y + 5}
                                                        L ${x + barWidth + Math.random() * 2},${300}
                                                        Z
                                                    `}
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

                </div>
            </div>
        </section>
    );
}

