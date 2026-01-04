import React, { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
    const { t } = useTranslation();
    const text = t('services.headerText', {
        defaultValue: 'Creo aplicaciones full-stack seguras y de alto rendimiento con experiencia de usuario fluida para impulsar el crecimiento, no dolores de cabeza.'
    });

    /* Refs for each service card to animate on scroll */
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    /* Check if viewport is desktop for sticky scroll effect */
    const isDesktop = useMediaQuery({ minWidth: "48rem" }); //768px

    useGSAP(() => {
        /* Animate each service card on scroll */
        serviceRefs.current.forEach((el) => {
            if (!el) return;

            gsap.from(el, {
                y: 200,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                },
                duration: 1,
                ease: "circ.out",
            });
        });
    }, []);

    return (
        <section id="services" className="min-h-screen bg-black rounded-t-4xl">
            <AnimatedHeaderSection
                subTitle={t('services.subtitle', { defaultValue: 'Detrás de escena, Más allá de la pantalla' })}
                title={t('services.title')}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
                withClipPath={false}
            />
            {servicesData.map((service, index) => (
                <div
                    ref={(el) => { serviceRefs.current[index] = el; }}
                    key={index}
                    className="sticky px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
                    style={
                        /* Sticky scroll effect: cards stack on top of each other (desktop only) */
                        isDesktop
                            ? {
                                top: `calc(10vh + ${index * 5}em)`,
                                marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                            }
                            : { top: 0 }
                    }
                >
                    <div className="flex items-center justify-between gap-4 font-light">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-4xl lg:text-5xl">{t(`services.service${index + 1}.title`)}</h2>
                            <p className="text-xl leading-relaxed tracking-widest lg:text-2xl text-white/60 text-pretty">
                                {t(`services.service${index + 1}.description`)}
                            </p>
                            <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                                {service.items.map((item, itemIndex) => (
                                    <div key={`item-${index}-${itemIndex}`}>
                                        <h3 className="flex">
                                            <span className="mr-12 text-lg text-white/30">
                                                0{itemIndex + 1}
                                            </span>
                                            {t(`services.service${index + 1}.items.item${itemIndex + 1}.title`)}
                                        </h3>
                                        {itemIndex < service.items.length - 1 && (
                                            <div className="w-full h-px my-2 bg-white/30" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Services;
