import logo from "../assets/icons/logo.svg";

import Github from "../assets/icons/github.svg";
import Twitter from "../assets/icons/twitter.svg";
import Discord from "../assets/icons/discord.svg";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-800 bg-black text-neutral-400 text-xs font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* <!-- Column 1: Brand & Socials --> */}
                    <div className="col-span-2 space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <img
                                src={logo}
                                alt="NexusFlow"
                                className="w-5 h-5 invert"
                            />
                            <span className="text-sm font-semibold">
                                NexusFlow
                            </span>
                        </div>
                        <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                            The unified developer platform for AI-orchestrated
                            sprints, instant edge previews, and automated
                            delivery pipelines.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="#github"
                                aria-label="GitHub"
                                className="text-neutral-500 hover:text-white transition-colors"
                            >
                                <img
                                    src={Github}
                                    alt="GitHub"
                                    className="w-4 h-4 invert opacity-60 hover:opacity-100"
                                />
                            </a>
                            <a
                                href="#twitter"
                                aria-label="Twitter"
                                className="text-neutral-500 hover:text-white transition-colors"
                            >
                                <img
                                    src={Twitter}
                                    alt="Twitter"
                                    className="w-4 h-4 invert opacity-60 hover:opacity-100"
                                />
                            </a>
                            <a
                                href="#discord"
                                aria-label="Discord"
                                className="text-neutral-500 hover:text-white transition-colors"
                            >
                                <img
                                    src={Discord}
                                    alt="Discord"
                                    className="w-4 h-4 invert opacity-60 hover:opacity-100"
                                />
                            </a>
                        </div>
                    </div>

                    {/* <!-- Column 2: Product --> */}
                    <div className="space-y-3 font-mono">
                        <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                            Product
                        </div>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-white transition-colors"
                                >
                                    AI Sprints
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-white transition-colors"
                                >
                                    Edge Previews
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#features"
                                    className="hover:text-white transition-colors"
                                >
                                    Architecture Canvas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="hover:text-white transition-colors"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Column 3: Solutions --> */}
                    <div className="space-y-3 font-mono">
                        <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                            Solutions
                        </div>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <a
                                    href="#solutions"
                                    className="hover:text-white transition-colors"
                                >
                                    Engineering Squads
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#solutions"
                                    className="hover:text-white transition-colors"
                                >
                                    Startups & Scaleups
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#solutions"
                                    className="hover:text-white transition-colors"
                                >
                                    Enterprise Security
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#solutions"
                                    className="hover:text-white transition-colors"
                                >
                                    Remote Teams
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Column 4: Company --> */}
                    <div className="space-y-3 font-mono">
                        <div className="text-[11px] font-bold text-white uppercase tracking-wider">
                            Company
                        </div>
                        <ul className="space-y-2 text-neutral-400">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-white transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#careers"
                                    className="hover:text-white transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#security"
                                    className="hover:text-white transition-colors"
                                >
                                    Security & Trust
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <!-- Bottom Status & Copyright Bar --> */}
                <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
                    <div>© 2026 NexusFlow Inc. All rights reserved.</div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>All systems nominal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
