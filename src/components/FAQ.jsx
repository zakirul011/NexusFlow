import { faqs } from "../data/faqs";
import FAQItem from "./FAQItem";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
    return (
        <section
            id="faq"
            className="py-24 border-b border-neutral-800 bg-black"
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Heading --> */}
                <div className="text-left space-y-2 mb-16">
                    <SectionHeading
                        title="[ 06 ] FAQ"
                        subtitle="Frequently Asked Questions"
                    />
                </div>

                {/* <!-- FAQ Accordion List (Re-usable Component via Array of Objects) --> */}
                <div
                    className="divide-y divide-neutral-800 border-y border-neutral-800"
                    id="faq-accordion"
                >
                    {faqs.map((item) => (
                        <FAQItem key={item.id} faq={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
