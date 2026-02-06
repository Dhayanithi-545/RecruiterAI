"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LeftSection() {
    const [activeMetric, setActiveMetric] = useState(0);

    useEffect(() => {
        const metricInterval = setInterval(() => {
            setActiveMetric(prev => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(metricInterval);
    }, []);

    return (
        <div className="relative">
            <svg
                viewBox="180 0 1000 800"
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
    );
}