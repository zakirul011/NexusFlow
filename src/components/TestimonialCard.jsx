import { getImgUrl } from "../utils/getImgUrl";

export default function TestimonialCard({ testimonial }) {
    const { quote, name, role, avatar } = testimonial;

    return (
        <div className="p-6 rounded-xl border border-neutral-800 bg-geist-surface flex flex-col justify-between space-y-6">
            <p className="text-sm text-neutral-300 leading-relaxed">
                "{quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-neutral-900">
                <img
                    src={getImgUrl(avatar)}
                    alt={name}
                    className="w-8 h-8 rounded-full border border-neutral-800"
                />
                <div>
                    <div className="text-xs font-semibold text-white">
                        {name}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500">
                        {role}
                    </div>
                </div>
            </div>
        </div>
    );
}
