"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = 100; // Account for fixed navbar
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "py-4"
                : "py-8"
                }`}
        >
            <div className="container mx-auto px-3 sm:px-4 md:px-6">
                <div
                    className={`relative transition-all duration-300 ${isScrolled
                        ? "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]"
                        : "bg-transparent border-transparent"
                        } rounded-[1.5rem]`}
                >
                    <div className={`flex items-center justify-between px-8 py-4 ${!isScrolled ? "bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] rounded-[1.5rem]" : ""}`}>
                        {/* Logo */}
                        <Link
                            href="#home"
                            onClick={(e) => handleSmoothScroll(e, "#home")}
                            className="flex items-center gap-2 z-10 group"
                        >
                            <span className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter font-['Outfit'] group-hover:text-blue-600 transition-colors">
                                RecruiterAI
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors font-['Outfit']"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <Link
                                href="#get-started"
                                onClick={(e) => handleSmoothScroll(e, "#get-started")}
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-blue-600 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-3">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-slate-900 hover:bg-blue-50 rounded-lg transition-colors border-2 border-transparent hover:border-slate-900"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="md:hidden border-t-2 border-slate-900 bg-white rounded-b-[1.5rem] overflow-hidden"
                            >
                                <div className="px-6 py-4 space-y-3">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleSmoothScroll(e, link.href)}
                                            className="block py-2 text-base font-bold text-slate-900 hover:text-blue-600 transition-colors font-['Outfit']"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link
                                        href="#get-started"
                                        onClick={(e) => handleSmoothScroll(e, "#get-started")}
                                        className="block w-full mt-3 px-5 py-3 text-center text-base font-bold text-white bg-blue-600 rounded-full border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
}
