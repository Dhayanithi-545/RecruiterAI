"use client";

import LeftSection from "@/app/ImpactFolder/left/page";
import RightSection from "@/app/ImpactFolder/right/page";
import { motion } from "framer-motion";

export default function ImpactDashboard() {
    return (
        <section id="impact" className="py-5 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 max-w-7xl mx-auto items-start relative">
                    {/* LEFT SIDE - Main circular flow visualization */}
                    <div className="lg:col-span-3 ">
                        <LeftSection />
                    </div>

                    {/* RIGHT SIDE - Hand-drawn Bar Graph */}
                    <div className="lg:col-span-2">
                        <RightSection />
                    </div>
                </div>
            </div>
        </section>
    );
}
