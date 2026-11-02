import DevMatrix from "./../assets//logos/devmatrix.svg";
import Acme from "./../assets/logos/acme.svg";
import CloudForge from "./../assets/logos/cloudforge.svg";
import Linear from "./../assets/logos/linear.svg";
import NovaSphere from "./../assets/logos/novasphere.svg";
import Pulse from "./../assets/logos/pulse.svg";

export default function Brand() {
    const brands = [
        { name: "Acme", src: Acme },
        { name: "Linear", src: Linear },
        { name: "Pulse", src: Pulse },
        { name: "NovaSphere", src: NovaSphere },
        { name: "CloudForge", src: CloudForge },
        { name: "DevMatrix", src: DevMatrix },
    ];
    return (
        <section className="py-12 border-y border-neutral-800 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-xs font-mono tracking-widest text-neutral-500 uppercase">
                    POWERS THE WORLD'S BEST ENGINEERING TEAMS
                </p>

                {/* <!-- Brand Logos Grid (Array of Objects target) --> */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
                    {brands.map(({ name, src }) => (
                        <img
                            key={name}
                            src={src}
                            alt={name}
                            className="h-6 invert"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
