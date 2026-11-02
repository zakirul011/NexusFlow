import ArrowRight from "../assets/icons/arrow-right.svg";
import Close from "../assets/icons/close.svg";
import LogoImg from "./../assets/icons/logo.svg";
import Open from "./../assets/icons/menu.svg";

const links = ["Features", "Solutions", "Customers", "Pricing", "Faq"];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-black/80 backdrop-blur-md transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* <!-- Brand Logo (Vercel style delta triangle) --> */}
                    <Logo img={LogoImg} brandName="NexusFlow" v="v2.4.0" />

                    {/* <!-- Desktop Navigation Links --> */}
                    <nav className="hidden md:flex items-center gap-5 xl:gap-6 text-sm">
                        <DesktopLinks />
                    </nav>

                    {/* <!-- Right CTA Actions --> */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="#login"
                            className="text-sm text-neutral-400 hover:text-white px-3 py-1.5 transition-colors"
                        >
                            Log In
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition-colors"
                        >
                            <span>Deploy Free</span>
                            <img
                                src={ArrowRight}
                                alt=""
                                className="w-3.5 h-3.5"
                            />
                        </a>
                    </div>

                    {/* <!-- Mobile Menu Toggle Button --> */}
                    <div className="flex md:hidden">
                        <button
                            id="mobile-menu-btn"
                            type="button"
                            aria-label="Toggle Navigation"
                            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800"
                        >
                            <img
                                id="menu-icon-open"
                                src={Open}
                                alt="Menu"
                                className="w-5 h-5 invert"
                            />
                            <img
                                id="menu-icon-close"
                                src={Close}
                                alt="Close"
                                className="w-5 h-5 invert hidden"
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Mobile Drawer --> */}
            <div
                id="mobile-menu"
                className="hidden md:hidden border-b border-neutral-800 bg-black/95 px-4 pt-3 pb-6 space-y-3 font-sans text-sm"
            >
                <MobileLinks />

                <div className="pt-4 border-t border-neutral-800 flex flex-col gap-2">
                    <a
                        href="#login"
                        className="text-center py-2 text-sm text-neutral-300 bg-neutral-900 border border-neutral-800 rounded-lg"
                    >
                        Log In
                    </a>
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center gap-1.5 text-center py-2 text-sm font-medium text-black bg-white rounded-lg"
                    >
                        <span>Deploy Free</span>
                        <img
                            src={ArrowRight}
                            alt=""
                            className="w-3.5 h-3.5 invert"
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}

function Logo({ img, brandName, v }) {
    return (
        <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-6 h-6 flex items-center justify-center text-white group-hover:opacity-80 transition-opacity">
                <img
                    src={img}
                    alt={`${brandName} logo`}
                    className="w-5 h-5 invert"
                />
            </div>
            <span className="text-base font-semibold tracking-tight text-white">
                {brandName}
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-mono font-medium text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-md">
                {v}
            </span>
        </a>
    );
}

function DesktopLinks() {
    return links.map((link) => (
        <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-neutral-400 hover:text-white transition-colors"
        >
            {link}
        </a>
    ));
}

function MobileLinks() {
    return links.map((link) => (
        <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="block px-3 py-2 rounded-md text-neutral-300 hover:bg-neutral-900 hover:text-white"
        >
            {link}
        </a>
    ));
}
