import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { techStackData } from "../constants";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const TechStack: React.FC = () => {
    const { t, i18n } = useTranslation();
    const text = t('techStack.headerText', {
        defaultValue: 'Tecnologías modernas y probadas que utilizo para crear soluciones web robustas, escalables y de alto rendimiento.'
    });

    const techRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        /* Animate each technology card on scroll with stagger */
        techRefs.current.forEach((el, index) => {
            if (!el) return;

            gsap.from(el, {
                y: 100,
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                },
                delay: (index % 12) * 0.05, // Stagger within each row
            });
        });
    }, []);

    return (
        <section id="techstack" className="min-h-screen bg-black">
            <AnimatedHeaderSection
                subTitle={t('techStack.subtitle', { defaultValue: 'Herramientas que Domino, Soluciones que Construyo' })}
                title={t('techStack.title')}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />

            <div className="px-10 pb-20">
                {techStackData.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-16">
                        {/* Category Header */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-light tracking-wider uppercase md:text-3xl text-white/90">
                                {i18n.language === 'es' ? category.categoryES : category.categoryEN}
                            </h2>
                            <div className="w-full h-px mt-4 bg-white/20" />
                        </div>

                        {/* Technology Grid */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {category.technologies.map((tech, techIndex) => {
                                const globalIndex = categoryIndex * 20 + techIndex;
                                return (
                                    <div
                                        key={techIndex}
                                        ref={(el) => { techRefs.current[globalIndex] = el; }}
                                        className="tech-card group relative flex flex-col items-center justify-center gap-3 p-6 transition-all duration-300 bg-primary rounded-xl hover:scale-105 hover:shadow-2xl"
                                        style={{
                                            boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                                        }}
                                        onMouseEnter={(e) => {
                                            const card = e.currentTarget;
                                            gsap.to(card, {
                                                boxShadow: `0 0 30px ${tech.color}60, 0 8px 16px rgba(0, 0, 0, 0.2)`,
                                                duration: 0.3,
                                            });
                                        }}
                                        onMouseLeave={(e) => {
                                            const card = e.currentTarget;
                                            gsap.to(card, {
                                                boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                                                duration: 0.3,
                                            });
                                        }}
                                    >
                                        {/* Icon */}
                                        <Icon
                                            icon={tech.icon}
                                            className="text-5xl transition-transform duration-300 md:text-6xl group-hover:scale-110"
                                        />

                                        {/* Technology Name */}
                                        <p className="text-xs font-light text-center uppercase md:text-sm text-black/80 group-hover:text-black">
                                            {tech.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
