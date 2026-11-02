import Glob from "../assets/icons/globe.svg";

export default function Terminal() {
    return (
        <div className="mt-14 max-w-4xl mx-auto">
            <div className="rounded-xl border border-neutral-800 bg-geist-surface shadow-2xl overflow-hidden font-mono">
                {/* <!-- Terminal Header Bar --> */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-[#050505] text-xs text-neutral-400">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                        <span className="ml-2 text-neutral-400 font-mono text-[11px]">
                            nexusflow deploy --prod
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px]">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-neutral-300">Ready in 420ms</span>
                    </div>
                </div>

                {/* <!-- Terminal Content Stream --> */}
                <div className="p-5 text-xs text-neutral-300 space-y-3 bg-geist-surface leading-relaxed">
                    <div className="flex items-center gap-2 text-neutral-500">
                        <span className="text-white">▲</span>
                        <span>NexusFlow CLI v2.4.0</span>
                    </div>

                    <div className="space-y-1.5 text-neutral-400 pl-4 border-l border-neutral-800">
                        <div className="text-neutral-300">
                            <span className="text-neutral-500">•</span> Building
                            preview for branch{" "}
                            <span className="text-white font-semibold">
                                feat/ai-sprint-engine
                            </span>
                            ...
                        </div>
                        <div>
                            <span className="text-emerald-400">✓</span> Compiled
                            48 edge lambdas in 184ms
                        </div>
                        <div>
                            <span className="text-emerald-400">✓</span>{" "}
                            Automated PR analysis: 0 regression risks detected
                        </div>
                        <div>
                            <span className="text-emerald-400">✓</span> Deployed
                            to 32 global edge regions
                        </div>
                    </div>

                    {/* <!-- Preview Card Box Inside Terminal --> */}
                    <div className="mt-4 p-4 rounded-lg border border-neutral-800 bg-geist-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <div className="text-xs text-neutral-400">
                                Preview URL
                            </div>
                            <div className="text-sm font-semibold text-white flex items-center gap-2">
                                <span>
                                    nexusflow-feat-ai-sprint.internal.app
                                </span>
                                <img
                                    src={Glob}
                                    alt=""
                                    className="w-3.5 h-3.5 invert opacity-60"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-1 bg-emerald-950/80 border border-emerald-800 text-[11px] font-mono text-emerald-400 rounded">
                                Status: 200 OK
                            </span>
                            <span className="text-xs text-neutral-500 font-mono">
                                P99: 14ms
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
