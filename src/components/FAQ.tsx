"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import faq from "../../public/faq.svg"

const faqs = [
    {
        question: "How does the AI screening work?",
        answer: "Our AI analyzes resumes against your job descriptions, looking for relevant skills, experience, and context. It ranks candidates based on match quality, not just keyword matching."
    },
    {
        question: "Is can I integrate with my current ATS?",
        answer: "Yes, RecruiterAI integrates seamlessly with most major Applicant Tracking Systems including Greenhouse, Lever, and Workday."
    },
    {
        question: "How much time does this save?",
        answer: "On average, hiring teams save 12+ hours per week per recruiter by automating screening and scheduling tasks."
    },
    {
        question: "Is the video interview data secure?",
        answer: "Absolutely. We use enterprise-grade encryption and are fully GDPR and SOC2 compliant to ensure your candidate data is safe."
    }
];

export default function FAQ() {
    return (
        <section id="faq" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Content */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-10 md:mb-12 font-['Outfit']">
                            Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} faq={faq} />
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="relative lg:sticky lg:top-8 order-last lg:order-none">
                        <div className="relative rounded-3xl overflow-hidden">
                            <Image
                                src={faq}
                                alt="Common questions about RecruiterAI"
                                width={800}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function FAQItem({ faq }: { faq: any }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border-2 border-slate-900 rounded-[1.5rem] overflow-hidden transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-6 text-left bg-white transition-colors"
            >
                <span className="text-lg font-bold text-slate-900 font-['Outfit']">
                    {faq.question}
                </span>
                {isOpen ? <Minus className="w-5 h-5 text-blue-600" /> : <Plus className="w-5 h-5 text-slate-900" />}
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                className="overflow-hidden"
            >
                <div className="p-6 pt-0 text-slate-700 font-medium font-['Inter'] leading-relaxed bg-white border-t-2 border-slate-100">
                    {faq.answer}
                </div>
            </motion.div>
        </div>
    );
}