import { statsData } from "../data/stats";
import StatsCard from "./StatsCard";

export default function Stats() {
    return (
        <section className="py-20 border-b border-neutral-800 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Stat Cards Grid (Re-usable Component via Array of Objects) --> */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat) => (
                        <StatsCard key={stat.id} stat={stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
