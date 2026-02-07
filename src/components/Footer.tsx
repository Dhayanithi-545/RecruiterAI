import Link from "next/link";
import { Twitter, Linkedin, Facebook, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative">

            {/* Footer Background Image */}
            <div className="absolute inset-x-0 bottom-0 z-0 min-w-full">
                <img
                    src="/footer-bg.svg"
                    alt=""
                    className="w-full h-auto object-cover object-bottom"
                />
            </div>

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Brand Section */}
                    <div className="col-span-1 -px-10 md:col-span-5">
                        <div className="p-6">
                            <Link
                                href="/"
                                className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-4 sm:mb-6 inline-block
                                           text-slate-100 hover:text-sky-800 transition-colors"
                                style={{ fontFamily: "Outfit" }}
                            >
                                RecruiterAI
                            </Link>

                            <p
                                className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed w-full font-medium"
                                style={{ fontFamily: "Inter" }}
                            >
                                Revolutionizing recruitment with intelligent automation.
                                <span className="block mt-2 text-sky-400 font-semibold">
                                    Hire faster. Hire smarter. Hire fairer.
                                </span>
                            </p>
                        </div>

                        <div className="flex gap-3 px-6">
                            <a
                                href="mailto:dhayanithianandan@gmail.com"
                                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl
                                           text-slate-800 hover:bg-sky-500 hover:text-white
                                           transition-all shadow-lg border border-white/20
                                           hover:border-sky-400 hover:scale-110 transform"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dhayanithi-anandan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl
                                           text-slate-800 hover:bg-sky-500 hover:text-white
                                           transition-all shadow-lg border border-white/20
                                           hover:border-sky-400 hover:scale-110 transform"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>

                            <a
                                href="#"
                                className="p-3 bg-white/10 backdrop-blur-sm rounded-xl
                                           text-slate-800 hover:bg-sky-500 hover:text-white
                                           transition-all shadow-lg border border-white/20
                                           hover:border-sky-400 hover:scale-110 transform"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div className="col-span-1 md:col-span-2">
                        <h4
                            className="font-black text-slate-800 text-lg mb-6 tracking-tight"
                            style={{ fontFamily: "Outfit" }}
                        >
                            Product
                        </h4>

                        <ul className="space-y-3.5" style={{ fontFamily: "Inter" }}>
                            {["Features", "Pricing", "Case Studies", "Reviews", "Integrations"].map(item => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-500 hover:text-sky-800 transition-colors
                                                   font-medium hover:translate-x-1 inline-block transform"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="col-span-1 md:col-span-2">
                        <h4
                            className="font-black text-slate-800 text-lg mb-6 tracking-tight"
                            style={{ fontFamily: "Outfit" }}
                        >
                            Company
                        </h4>

                        <ul className="space-y-3.5" style={{ fontFamily: "Inter" }}>
                            {["About Us", "Careers", "Blog", "Contact", "Support"].map(item => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-500 hover:text-sky-800 transition-colors
                                                   font-medium hover:translate-x-1 inline-block transform"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1 md:col-span-3">
                        <h4
                            className="font-black text-slate-800 text-lg mb-6 tracking-tight"
                            style={{ fontFamily: "Outfit" }}
                        >
                            Resources
                        </h4>

                        <ul className="space-y-3.5 mb-8" style={{ fontFamily: "Inter" }}>
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "Documentation"].map(item => (
                                <li key={item}>
                                    <Link
                                        href="#"
                                        className="text-slate-500 hover:text-sky-800 transition-colors
                                                   font-medium hover:translate-x-1 inline-block transform"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>


                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p
                        className="text-slate-600 text-sm font-medium"
                        style={{ fontFamily: "Inter" }}
                    >
                        &copy; {new Date().getFullYear()} RecruiterAI Labs. All rights reserved.
                    </p>

                    <div className="flex gap-6 text-sm">
                        {["Status", "API", "Sitemap"].map(item => (
                            <Link
                                key={item}
                                href="#"
                                className="text-slate-500 hover:text-sky-800 transition-colors font-medium"
                                style={{ fontFamily: "Inter" }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
