import ReactLenis from "lenis/react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import About from "../sections/About";
import TechStack from "../sections/TechStack";
import Works from "../sections/Works";
import ContactSummary from "../sections/ContactSummary";
import Contact from "../sections/Contact";
import BlogPreviewSection from "../sections/BlogPreviewSection";

const HomePage = () => {
    return (
        <ReactLenis root className="relative w-screen min-h-screen overflow-x-hidden">
            <Navbar />
            <Hero />
            <ServiceSummary />
            <Services />
            <Works />
            <TechStack />
            <About />
            <BlogPreviewSection />
            <ContactSummary />
            <Contact />
        </ReactLenis>
    );
};

export default HomePage;
