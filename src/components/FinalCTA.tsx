"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function FinalCTA() {
    return (
        <section id="get-started" className=" sm:py-20 md:py-24 bg-white border-t-2 border-slate-900">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 text-center">

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 font-['Outfit'] text-slate-900 tracking-tighter">
                    Ready to Modernize Your Hiring?
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-slate-600 w-full mx-auto mb-10 sm:mb-12 font-['Inter'] font-medium">
                    Join leading companies using RecruiterAI to find better talent, faster.
                    Start your free 14-day trial today.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all">
                        Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                    <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white border-2 border-slate-900 rounded-full shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all">
                        Schedule Demo
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-slate-500 text-sm font-['Inter'] font-semibold">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        <span>GDPR Compliant</span>
                    </div>
                </div>

            </div>
        </section>
    );
}