import ArrowRight from "../assets/icons/arrow-right.svg";
import Copy from "../assets/icons/copy.svg";
import Avatar1 from "../assets/images/avatar-1.svg";
import Avatar2 from "../assets/images/avatar-2.svg";
import Avatar3 from "../assets/images/avatar-3.svg";
import Terminal from "./Terminal";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden vercel-glow"
        >
            {/* <!-- Grid pattern background --> */}
            <div className="absolute inset-0 vercel-grid opacity-30 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* <!-- Announcement Pill Badge --> */}
                <div className="flex justify-center">
                    <a
                        href="#features"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-950 border border-neutral-800 text-xs font-mono text-neutral-300 hover:border-neutral-700 transition-colors shadow-sm"
                    >
                        <span className="text-white">▲</span>
                        <span className="font-semibold text-white">
                            NexusFlow 2.4
                        </span>
                        <span className="text-neutral-600">/</span>
                        <span className="text-neutral-400">
                            Next-gen AI Workflows
                        </span>
                        <img
                            src={ArrowRight}
                            alt=""
                            className="w-3 h-3 invert"
                        />
                    </a>
                </div>

                {/* <!-- Main Headline --> */}
                <div className="text-center max-w-4xl mx-auto mt-8 space-y-5">
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                        Develop with velocity. <br />
                        <span className="bg-linear-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                            Automate with intelligence.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
                        The unified developer platform for sprint orchestration,
                        instant preview pipelines, and autonomous AI agents.
                    </p>

                    {/* <!-- CLI Command & Actions Bar --> */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                        {/* <!-- Copy CLI Box --> */}
                        <div className="w-full sm:w-auto flex-1 flex items-center justify-between gap-3 px-3.5 py-2.5 bg-geist-surface border border-neutral-800 rounded-lg text-xs font-mono text-neutral-300 shadow-inner">
                            <div className="flex items-center gap-2 overflow-hidden">
                                <span className="text-neutral-500 select-none">
                                    ~
                                </span>
                                <span id="cli-command" className="truncate">
                                    npx create-nexusflow-app@latest
                                </span>
                            </div>
                            <button
                                id="copy-btn"
                                type="button"
                                aria-label="Copy Command"
                                className="p-1 hover:text-white text-neutral-400 transition-colors"
                            >
                                <img
                                    src={Copy}
                                    alt="Copy"
                                    className="w-4 h-4 invert"
                                />
                            </button>
                        </div>

                        {/* <!-- Primary CTA Button --> */}
                        <a
                            href="#pricing"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors font-mono whitespace-nowrap"
                        >
                            <span>Start Free Trial</span>
                            <img src={ArrowRight} alt="" className="w-3 h-3" />
                        </a>
                    </div>

                    {/* <!-- Social Proof Stats Mini Strip --> */}
                    <div className="pt-6 flex items-center justify-center gap-4 text-xs font-mono text-neutral-500">
                        <div className="flex -space-x-1.5">
                            <img
                                className="w-6 h-6 rounded-full border border-black"
                                src={Avatar1}
                                alt="User 1"
                            />
                            <img
                                className="w-6 h-6 rounded-full border border-black"
                                src={Avatar2}
                                alt="User 2"
                            />
                            <img
                                className="w-6 h-6 rounded-full border border-black"
                                src={Avatar3}
                                alt="User 3"
                            />
                        </div>
                        <span>
                            Trusted by 10,000+ teams shipping to production
                        </span>
                    </div>
                </div>

                {/* <!-- Vercel-Style Terminal & Deployment Preview Mockup --> */}
                <Terminal />
            </div>
        </section>
    );
}
