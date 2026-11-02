import { pricings } from "../data/pricings";
import PricingCard from "./PricingCard";
import SectionHeading from "./SectionHeading";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-24 border-b border-neutral-800 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Heading --> */}
                <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
                    <SectionHeading
                        title="[ 05 ] PRICING"
                        subtitle="Predictable pricing. No hidden fees."
                        description="Start for free on Hobby, or scale to Pro as your
                        engineering squad grows."
                    />

                    {/* <!-- Monthly / Annual Toggle --> */}
                    <div className="pt-4 flex items-center justify-center gap-3 font-mono text-xs">
                        <span id="monthly-label" className="text-white">
                            Monthly
                        </span>
                        <button
                            id="billing-toggle"
                            type="button"
                            role="switch"
                            aria-checked="false"
                            className="relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 transition-colors focus:outline-none"
                        >
                            <span
                                id="toggle-indicator"
                                className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition translate-x-0.5 mt-0.5"
                            ></span>
                        </button>
                        <span
                            id="annual-label"
                            className="text-neutral-500 flex items-center gap-1"
                        >
                            Annual
                            <span className="px-1.5 py-0.5 text-[10px] text-emerald-400 bg-emerald-950 border border-emerald-800 rounded">
                                Save 20%
                            </span>
                        </span>
                    </div>
                </div>

                {/* <!-- Pricing Cards Grid (Re-usable Component via Array of Objects) --> */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    {pricings.map((item) => (
                        <PricingCard key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
