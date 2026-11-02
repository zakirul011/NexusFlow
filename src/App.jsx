import Brand from "./components/Brand";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Spotlight from "./components/Spotlight";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function App() {
    return (
        <div className="bg-black text-geist-foreground font-sans antialiased selection:bg-white selection:text-black overflow-x-hidden">
            <Header />
            <Hero />
            <Brand />
            <Features />
            <Spotlight />
            <Stats />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTA />
            <Footer />
        </div>
    );
}
