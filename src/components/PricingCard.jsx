import ArrowRight from "../assets/icons/arrow-right.svg";
import Check from "../assets/icons/check.svg";

export default function PricingCard({ data }) {
    const {
        title,
        badge,
        description,
        price,
        duration,
        features,
        isActive,
        link,
        dataMonthly,
        dataAnnual,
        buttonText,
    } = data;

    return (
        <div
            className={`p-8 rounded-xl ${isActive ? "border-2 border-white relative shadow-2xl" : "border border-neutral-800"}  bg-geist-surface flex flex-col justify-between space-y-6`}
        >
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{title}</h3>
                    {badge && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-black bg-white rounded">
                            {badge}
                        </span>
                    )}
                </div>
                <p className="text-xs text-neutral-400">{description}</p>

                <div className="flex items-baseline gap-1 font-mono">
                    <span
                        className="text-4xl font-bold text-white pricing-value"
                        data-monthly={dataMonthly}
                        data-annual={dataAnnual}
                    >
                        {price}
                    </span>
                    {duration && (
                        <span className="text-xs text-neutral-500">
                            {duration}
                        </span>
                    )}
                </div>

                <div
                    className={`pt-4 border-t space-y-2.5 text-xs font-mono ${isActive ? "text-neutral-200 border-neutral-800" : "text-neutral-300 border-neutral-900"}`}
                >
                    {features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <img
                                src={Check}
                                alt=""
                                className="w-3.5 h-3.5 invert"
                            />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            <a
                href={link}
                className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${isActive ? "text-black bg-white hover:bg-neutral-200" : "text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800"}`}
            >
                <span>{buttonText}</span>
                <img
                    src={ArrowRight}
                    alt="Arrow Right"
                    className="w-3.5 h-3.5 invert"
                />
            </a>
        </div>
    );
}
