import ChevronDown from "../assets/icons/chevron-down.svg";

export default function FAQItem({ faq }) {
    return (
        <div className="faq-item py-6 px-3">
            <button
                className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
                aria-expanded="false"
            >
                <span className="text-base font-semibold text-white">
                    {faq.heading}
                </span>
                <img
                    src={ChevronDown}
                    alt="Expand"
                    className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
                />
            </button>
            <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
                {faq.text}
            </div>
        </div>
    );
}
