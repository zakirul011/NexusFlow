export default function SectionHeading({ title, subtitle, description }) {
    return (
        <>
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
                {title}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                {subtitle}
            </h2>
            {description && (
                <p className="text-sm sm:text-base text-neutral-400">
                    {description}
                </p>
            )}
        </>
    );
}
