import { testimonials } from "../data/testimonials";
import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-24 border-b border-neutral-800 bg-black"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* <!-- Section Heading --> */}
                <SectionHeading
                    title="[ 04 ] CUSTOMERS"
                    subtitle="Loved by engineers. Trusted by founders."
                    description=" How leading technology organizations leverage NexusFlow every single day."
                />

                {/* <!-- Testimonials Grid (Re-usable Component via Array of Objects) --> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
