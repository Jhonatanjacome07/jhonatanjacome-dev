import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { aboutData } from "../constants";

const About: React.FC = () => {
    /* Build about text dynamically from centralized constants */
    const aboutText = `${aboutData.introES}

🚀 Proyecto Destacado: ${aboutData.featuredProject.name}
${aboutData.featuredProject.descriptionES}

💻 Stack Tecnológico:
${aboutData.techStack.map(tech => `${tech.category}: ${tech.technologies}`).join('\n')}

${aboutData.hobbiesLabelES}
${aboutData.hobbies.map(hobby => `${hobby.emoji} ${hobby.textES}`).join('\n')}`;

    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.to("#about", {
            scale: 0.95,
            scrollTrigger: {
                trigger: "#about",
                start: "bottom 80%",
                end: "bottom 20%",
                scrub: true,
                markers: false,
            },
            ease: "power1.inOut",
        });

        gsap.set(imgRef.current, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        });
        gsap.to(imgRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 2,
            ease: "power4.out",
            scrollTrigger: { trigger: imgRef.current },
        });
    });

    return (
        <section id="about" className="min-h-screen bg-black rounded-b-4xl">
            <AnimatedHeaderSection
                subTitle={"Código con propósito, Construido para escalar"}
                title={"Sobre mí"}
                text={aboutData.headerTextES}
                textColor={"text-white"}
                withScrollTrigger={true}
            />

            <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
                <img
                    ref={imgRef}
                    src="images/man.jpg"
                    alt="Jhonatan Jácome - Ingeniero de Software"
                    className="w-md rounded-3xl"
                />
                <AnimatedTextLines text={aboutText} className={"w-full"} />
            </div>
        </section>
    );
};

export default About;
