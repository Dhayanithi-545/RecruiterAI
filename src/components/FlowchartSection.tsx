"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, Video, Database, CheckCircle, XCircle, Clock, ArrowRight } from "lucide-react";

export default function FlowchartSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="how-it-works" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-64 h-64 bg-sky-200 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight"
                        style={{ fontFamily: 'Outfit' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Streamline Your Hiring Workflow
                    </motion.h2>
                    <motion.p
                        className="text-base sm:text-lg md:text-xl text-slate-600"
                        style={{ fontFamily: 'Inter' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Automate the tedious parts of recruiting so you can focus on connecting with the best talent
                    </motion.p>
                </div>

                {/* Flow selector tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {[
                        { title: "Candidate Screening", icon: Mail },
                        { title: "Interview Process", icon: Video },
                        { title: "Talent Pipeline", icon: Database }
                    ].map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-bold transition-all border-2 border-slate-900 ${activeTab === index
                                ? 'bg-sky-400 text-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
                                : 'bg-white text-slate-600 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] hover:shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]'
                                }`}
                            style={{ fontFamily: 'Outfit' }}
                        >
                            {tab.title}
                        </button>
                    ))}
                </div>

                {/* Flowcharts */}
                <div className="max-w-6xl mx-auto overflow-x-auto">
                    {activeTab === 0 && <ScreeningFlowchart />}
                    {activeTab === 1 && <InterviewFlowchart />}
                    {activeTab === 2 && <PipelineFlowchart />}
                </div>

                {/* Benefit highlight */}
                <motion.div
                    className="mt-16 max-w-2xl mx-auto text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white border-2 border-slate-900 rounded-2xl p-8 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
                        <p className="text-2xl md:text-3xl font-black text-slate-900" style={{ fontFamily: 'Outfit' }}>
                            {activeTab === 0 && "Screen 250+ applications in minutes vs. 8 hours manually"}
                            {activeTab === 1 && "Reduce time-to-hire from 42 days to 12 days"}
                            {activeTab === 2 && "Build a qualified talent pipeline automatically - never start from zero"}
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Flowchart 1: Screening
function ScreeningFlowchart() {
    return (
        <div className="relative">
            <svg viewBox="0 0 800 900" className="w-full h-auto">
                <defs>
                    {/* Hand-drawn style filter */}
                    <filter id="sketch">
                        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                    </filter>

                    {/* Arrow marker */}
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#1e293b" />
                    </marker>
                </defs>

                {/* Step 1: New Application */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <SketchyCircle cx={400} cy={60} r={60} fill="#7dd3fc" />
                    <text x="400" y="68" textAnchor="middle" fill="#1e293b" fontSize="14" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        New Application
                    </text>
                </motion.g>

                {/* Arrow 1 */}
                <motion.path
                    d="M 400 100 L 400 150"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* Step 2: AI Resume Screening */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <SketchyRect x={280} y={150} width={240} height={70} fill="#7dd3fc" />
                    <text x="400" y="175" textAnchor="middle" fill="#1e293b" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        AI Resume Screening
                    </text>
                    <text x="400" y="195" textAnchor="middle" className="text-xs" fill="#0c4a6e">
                        Ranks top 20% of candidates
                    </text>
                </motion.g>

                {/* Arrow 2 */}
                <motion.path
                    d="M 400 220 L 400 270"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* Step 3: Auto-send screening questions */}
                <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <SketchyRect x={280} y={270} width={240} height={70} fill="#7dd3fc" />
                    <text x="400" y="295" textAnchor="middle" fill="#1e293b" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Auto-send Screening
                    </text>
                    <text x="400" y="315" textAnchor="middle" className="text-xs" fill="#0c4a6e">
                        Questions via email
                    </text>
                </motion.g>

                {/* Arrow 3 */}
                <motion.path
                    d="M 400 340 L 400 390"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                {/* Step 4: Decision Diamond */}
                <motion.g
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <SketchyDiamond cx={400} cy={430} size={110} fill="#fb7185" />
                    <text x="400" y="435" textAnchor="middle" fill="#881337" fontSize="13" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Score &gt; 75%?
                    </text>
                    <text x="360" y="465" textAnchor="end" className="text-xs font-bold" fill="#1e293b">
                        YES
                    </text>
                    <text x="440" y="465" textAnchor="start" className="text-xs font-bold" fill="#1e293b">
                        NO
                    </text>
                </motion.g>

                {/* YES path - Arrow to Schedule */}
                <motion.path
                    d="M 355 440 L 200 440 L 200 550"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                {/* YES: Auto-schedule interview */}
                <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={80} y={550} width={240} height={70} fill="#86efac" />
                    <text x="200" y="575" textAnchor="middle" fill="#14532d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Auto-schedule Interview
                    </text>
                    <text x="200" y="595" textAnchor="middle" className="text-xs" fill="#14532d">
                        Via calendar link
                    </text>
                </motion.g>

                {/* NO path - Arrow to Thank you */}
                <motion.path
                    d="M 445 440 L 600 440 L 600 550"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                {/* NO: Send thank you */}
                <motion.g
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={480} y={550} width={240} height={70} fill="#fca5a5" />
                    <text x="600" y="575" textAnchor="middle" fill="#7f1d1d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Send Thank You
                    </text>
                    <text x="600" y="595" textAnchor="middle" className="text-xs" fill="#7f1d1d">
                        Keep in talent pool
                    </text>
                </motion.g>

                {/* Arrow from YES to final step */}
                <motion.path
                    d="M 200 620 L 200 700"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                />

                {/* Step 5: Interview scheduled */}
                <motion.g
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    <SketchyRect x={80} y={700} width={240} height={70} fill="#c4b5fd" />
                    <text x="200" y="725" textAnchor="middle" fill="#3730a3" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Interview Scheduled
                    </text>
                    <text x="200" y="745" textAnchor="middle" className="text-xs" fill="#3730a3">
                        Send reminder 24h before
                    </text>
                </motion.g>
            </svg>
        </div>
    );
}

// Flowchart 2: Interview Process
function InterviewFlowchart() {
    return (
        <div className="relative">
            <svg viewBox="0 0 900 1100" className="w-full h-auto">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#1e293b" />
                    </marker>
                </defs>

                {/* Step 1: Candidate accepts */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <SketchyCircle cx={450} cy={60} r={60} fill="#7dd3fc" />
                    <text x="450" y="58" textAnchor="middle" fill="#1e293b" fontSize="14" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Candidate Accepts
                    </text>
                    <text x="450" y="75" textAnchor="middle" className="text-xs" fill="#0c4a6e">
                        Interview Invite
                    </text>
                </motion.g>

                <motion.path
                    d="M 450 105 L 450 160"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* Step 2: Round 1 AI Interview */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <SketchyRect x={310} y={160} width={280} height={70} fill="#7dd3fc" />
                    <text x="450" y="185" textAnchor="middle" fill="#1e293b" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Round 1: AI Video Interview
                    </text>
                    <text x="450" y="205" textAnchor="middle" className="text-xs" fill="#0c4a6e">
                        Technical screening with AI
                    </text>
                </motion.g>

                <motion.path
                    d="M 450 230 L 450 280"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* Step 3: AI Scores */}
                <motion.g
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                >
                    <SketchyRect x={310} y={280} width={280} height={70} fill="#c4b5fd" />
                    <text x="450" y="305" textAnchor="middle" fill="#3730a3" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        AI Scores Responses
                    </text>
                    <text x="450" y="325" textAnchor="middle" className="text-xs" fill="#3730a3">
                        Using custom rubric
                    </text>
                </motion.g>

                <motion.path
                    d="M 450 350 L 450 410"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                {/* Decision: Score > 80%? */}
                <motion.g
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <SketchyDiamond cx={450} cy={450} size={95} fill="#fb7185" />
                    <text x="450" y="455" textAnchor="middle" fill="#881337" fontSize="13" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Score &gt; 80%?
                    </text>
                    <text x="405" y="485" textAnchor="end" className="text-xs font-bold" fill="#1e293b">
                        YES
                    </text>
                    <text x="495" y="485" textAnchor="start" className="text-xs font-bold" fill="#1e293b">
                        NO
                    </text>
                </motion.g>

                {/* YES path */}
                <motion.path
                    d="M 395 460 L 200 460 L 200 580"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                {/* Auto-schedule Round 2 */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={60} y={580} width={280} height={70} fill="#86efac" />
                    <text x="200" y="605" textAnchor="middle" fill="#14532d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Auto-schedule Round 2
                    </text>
                    <text x="200" y="625" textAnchor="middle" className="text-xs" fill="#14532d">
                        With hiring manager
                    </text>
                </motion.g>

                <motion.path
                    d="M 200 650 L 200 720"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                />

                {/* Manager interview */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                >
                    <SketchyRect x={60} y={720} width={280} height={70} fill="#c4b5fd" />
                    <text x="200" y="745" textAnchor="middle" fill="#3730a3" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Hiring Manager Interview
                    </text>
                    <text x="200" y="765" textAnchor="middle" className="text-xs" fill="#3730a3">
                        Makes final decision
                    </text>
                </motion.g>

                <motion.path
                    d="M 200 790 L 200 860"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                />

                {/* Final decision diamond */}
                <motion.g
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 2.6 }}
                >
                    <SketchyDiamond cx={200} cy={910} size={90} fill="#fb7185" />
                    <text x="200" y="905" textAnchor="middle" fill="#881337" fontSize="16" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Hire?
                    </text>
                    <text x="165" y="935" textAnchor="end" className="text-xs font-bold" fill="#1e293b">
                        YES
                    </text>
                    <text x="235" y="935" textAnchor="start" className="text-xs font-bold" fill="#1e293b">
                        NO
                    </text>
                </motion.g>

                {/* HIRE path */}
                <motion.path
                    d="M 155 910 L 80 910 L 80 1000"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                >
                    <SketchyRect x={40} y={1000} width={240} height={60} fill="#86efac" />
                    <text x="80" y="1023" textAnchor="middle" fill="#14532d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Send Offer Letter
                    </text>
                    <text x="80" y="1040" textAnchor="middle" className="text-xs" fill="#14532d">
                        + Welcome kit
                    </text>
                </motion.g>

                {/* REJECT path from manager */}
                <motion.path
                    d="M 245 910 L 320 910 L 320 1000"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.8, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.0 }}
                >
                    <SketchyRect x={200} y={1000} width={240} height={60} fill="#fca5a5" />
                    <text x="320" y="1023" textAnchor="middle" fill="#7f1d1d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Personalized Rejection
                    </text>
                    <text x="320" y="1040" textAnchor="middle" className="text-xs" fill="#7f1d1d">
                        + Future opportunities
                    </text>
                </motion.g>

                {/* NO path - Auto rejection */}
                <motion.path
                    d="M 505 460 L 700 460 L 700 580"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={560} y={580} width={280} height={70} fill="#fca5a5" />
                    <text x="700" y="605" textAnchor="middle" fill="#7f1d1d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Auto-rejection Email
                    </text>
                    <text x="700" y="625" textAnchor="middle" className="text-xs" fill="#7f1d1d">
                        With constructive feedback
                    </text>
                </motion.g>
            </svg>
        </div>
    );
}

// Flowchart 3: Pipeline
function PipelineFlowchart() {
    return (
        <div className="relative">
            <svg viewBox="0 0 800 1000" className="w-full h-auto">
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#1e293b" />
                    </marker>
                </defs>

                {/* Step 1: Candidate rejected */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <SketchyCircle cx={400} cy={60} r={60} fill="#fca5a5" />
                    <text x="400" y="58" textAnchor="middle" fill="#7f1d1d" fontSize="14" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Candidate Rejected
                    </text>
                    <text x="400" y="75" textAnchor="middle" className="text-xs" fill="#7f1d1d">
                        Score 60-74%
                    </text>
                </motion.g>

                <motion.path
                    d="M 400 105 L 400 170"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* Step 2: Add to database */}
                <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <SketchyRect x={250} y={170} width={300} height={70} fill="#a5b4fc" />
                    <text x="400" y="195" textAnchor="middle" fill="#3730a3" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Add to 'Future Talent' DB
                    </text>
                    <text x="400" y="215" textAnchor="middle" className="text-xs" fill="#3730a3">
                        For long-term nurturing
                    </text>
                </motion.g>

                <motion.path
                    d="M 400 240 L 400 300"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                />

                {/* Step 3: Wait 3 months */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                >
                    <SketchyEllipse cx={400} cy={340} rx={120} ry={45} fill="#fde68a" />
                    <text x="400" y="338" textAnchor="middle" fill="#78350f" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Wait 3 Months
                    </text>
                    <text x="400" y="353" textAnchor="middle" className="text-xs" fill="#78350f">
                        Automated patience
                    </text>
                </motion.g>

                <motion.path
                    d="M 400 385 L 400 450"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                />

                {/* Decision: New position? */}
                <motion.g
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 1.4 }}
                >
                    <SketchyDiamond cx={400} cy={505} size={110} fill="#fb7185" />
                    <text x="400" y="500" textAnchor="middle" fill="#881337" fontSize="13" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        New Relevant
                    </text>
                    <text x="400" y="515" textAnchor="middle" fill="#881337" fontSize="13" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Position Opens?
                    </text>
                    <text x="350" y="545" textAnchor="end" className="text-xs font-bold" fill="#1e293b">
                        YES
                    </text>
                    <text x="450" y="545" textAnchor="start" className="text-xs font-bold" fill="#1e293b">
                        NO
                    </text>
                </motion.g>

                {/* YES path */}
                <motion.path
                    d="M 345 510 L 180 510 L 180 620"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                {/* Send re-engagement email */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={40} y={620} width={280} height={70} fill="#7dd3fc" />
                    <text x="180" y="643" textAnchor="middle" fill="#1e293b" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        AI Sends Personalized
                    </text>
                    <text x="180" y="660" textAnchor="middle" fill="#1e293b" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Re-engagement Email
                    </text>
                    <text x="180" y="677" textAnchor="middle" className="text-xs" fill="#0c4a6e">
                        Mentioning new role
                    </text>
                </motion.g>

                <motion.path
                    d="M 180 690 L 180 760"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.0, duration: 0.5 }}
                />

                {/* Check interest */}
                <motion.g
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 2.2 }}
                >
                    <SketchyDiamond cx={180} cy={810} size={100} fill="#fb7185" />
                    <text x="180" y="815" textAnchor="middle" fill="#881337" fontSize="16" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Interested?
                    </text>
                    <text x="140" y="850" textAnchor="end" className="text-xs font-bold" fill="#1e293b">
                        YES
                    </text>
                    <text x="220" y="850" textAnchor="start" className="text-xs font-bold" fill="#1e293b">
                        NO
                    </text>
                </motion.g>

                {/* YES - Fast track */}
                <motion.path
                    d="M 130 820 L 40 820 L 40 920"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                >
                    <SketchyRect x={-80} y={920} width={240} height={60} fill="#86efac" />
                    <text x="40" y="943" textAnchor="middle" fill="#14532d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Fast-track to
                    </text>
                    <text x="40" y="960" textAnchor="middle" fill="#14532d" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Interview Stage
                    </text>
                </motion.g>

                {/* NO RESPONSE - Continue in pool */}
                <motion.path
                    d="M 230 820 L 320 820 L 320 920"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.4, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.6 }}
                >
                    <SketchyRect x={200} y={920} width={240} height={60} fill="#fde68a" />
                    <text x="320" y="943" textAnchor="middle" fill="#78350f" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Continue in
                    </text>
                    <text x="320" y="960" textAnchor="middle" fill="#78350f" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Talent Pool
                    </text>
                </motion.g>

                {/* NO position - Check again */}
                <motion.path
                    d="M 455 510 L 620 510 L 620 640"
                    stroke="#1e293b"
                    strokeWidth="3"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                />

                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <SketchyRect x={480} y={640} width={280} height={70} fill="#c4b5fd" />
                    <text x="620" y="665" textAnchor="middle" fill="#3730a3" fontSize="18" fontStyle="italic" style={{ fontFamily: "'Playwrite NZ Basic Guides', cursive" }}>
                        Check Again Next Quarter
                    </text>
                    <text x="620" y="685" textAnchor="middle" className="text-xs" fill="#3730a3">
                        Automatically
                    </text>
                </motion.g>

                {/* Loop back arrow */}
                <motion.path
                    d="M 620 710 L 620 340 L 520 340"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.0, duration: 0.8 }}
                />
            </svg>
        </div>
    );
}

// Sketchy shape components
function SketchyRect({ x, y, width, height, fill }: { x: number, y: number, width: number, height: number, fill: string }) {
    const [path, setPath] = useState('');

    useEffect(() => {
        // Create hand-drawn effect with slight irregularities
        const jitter = 2;
        const generatedPath = `
            M ${x + Math.random() * jitter} ${y + Math.random() * jitter}
            L ${x + width + Math.random() * jitter} ${y + Math.random() * jitter}
            L ${x + width + Math.random() * jitter} ${y + height + Math.random() * jitter}
            L ${x + Math.random() * jitter} ${y + height + Math.random() * jitter}
            Z
        `;
        setPath(generatedPath);
    }, [x, y, width, height]);

    if (!path) return null;

    return (
        <>
            <path d={path} fill={fill} stroke="#1e293b" strokeWidth="3" opacity="0.9" />
            <path d={path} fill="none" stroke="#1e293b" strokeWidth="2" opacity="0.6" transform="translate(1, 1)" />
        </>
    );
}

function SketchyCircle({ cx, cy, r, fill }: { cx: number, cy: number, r: number, fill: string }) {
    return (
        <>
            <circle cx={cx} cy={cy} r={r} fill={fill} stroke="#1e293b" strokeWidth="3" opacity="0.9" />
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1e293b" strokeWidth="2" opacity="0.5" transform="translate(1, 1)" />
        </>
    );
}

function SketchyDiamond({ cx, cy, size, fill }: { cx: number, cy: number, size: number, fill: string }) {
    const [path, setPath] = useState('');

    useEffect(() => {
        const half = size / 2;
        const jitter = 1;
        const generatedPath = `
            M ${cx + Math.random() * jitter} ${cy - half + Math.random() * jitter}
            L ${cx + half + Math.random() * jitter} ${cy + Math.random() * jitter}
            L ${cx + Math.random() * jitter} ${cy + half + Math.random() * jitter}
            L ${cx - half + Math.random() * jitter} ${cy + Math.random() * jitter}
            Z
        `;
        setPath(generatedPath);
    }, [cx, cy, size]);

    if (!path) return null;

    return (
        <>
            <path d={path} fill={fill} stroke="#1e293b" strokeWidth="3" opacity="0.9" />
            <path d={path} fill="none" stroke="#1e293b" strokeWidth="2" opacity="0.6" transform="translate(1, 1)" />
        </>
    );
}

function SketchyEllipse({ cx, cy, rx, ry, fill }: { cx: number, cy: number, rx: number, ry: number, fill: string }) {
    return (
        <>
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={fill} stroke="#1e293b" strokeWidth="3" opacity="0.9" />
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#1e293b" strokeWidth="2" opacity="0.5" transform="translate(1, 1)" />
        </>
    );
}