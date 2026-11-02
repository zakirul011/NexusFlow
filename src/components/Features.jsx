import { featureData } from "../data/features";
import FeatureCard from "./FeatureCard";
import SectionHeading from "./SectionHeading";

export default function Features() {
    return (
        <section
            id="features"
            className="py-24 border-b border-neutral-800 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Heading --> */}
                <div className="text-left max-w-2xl space-y-2 mb-16">
                    <SectionHeading
                        title="[ 01 ] CAPABILITIES"
                        subtitle="Engineered for velocity, reliability, and scale."
                        description="Everything required to build, orchestrate, and automate mission-critical software workflows."
                    />
                </div>

                {/* <!-- Feature Cards Grid (Re-usable Component via Array of Objects) --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden">
                    {featureData.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
