import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary: React.FC = () => {
    const { t } = useTranslation();
    useGSAP(() => {
        gsap.to("#title-service-1", {
            xPercent: 20,
            scrollTrigger: {
                trigger: "#title-service-1",
                scrub: true,
            },
        });
        gsap.to("#title-service-2", {
            xPercent: -30,
            scrollTrigger: {
                trigger: "#title-service-2",
                scrub: true,
            },
        });
        gsap.to("#title-service-3", {
            xPercent: 100,
            scrollTrigger: {
                trigger: "#title-service-3",
                scrub: true,
            },
        });
        gsap.to("#title-service-4", {
            xPercent: -100,
            scrollTrigger: {
                trigger: "#title-service-4",
                scrub: true,
            },
        });
    });

    return (
        <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">

            <div id="title-service-1">
                <p>{t('serviceSummary.service1', { defaultValue: 'IA & Automatización' })}</p>
            </div>
            <div
                id="title-service-2"
                className="flex items-center justify-center gap-3 translate-x-16"
            >
                <p className="font-normal">{t('serviceSummary.service2a', { defaultValue: 'Full Stack' })}</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>{t('serviceSummary.service2b', { defaultValue: 'Development' })}</p>
            </div>
            <div
                id="title-service-3"
                className="flex items-center justify-center gap-3 -translate-x-48"
            >
                <p>React</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p className="italic">TypeScript</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Laravel</p>
            </div>
            <div id="title-service-4" className="translate-x-48">
                <p>{t('serviceSummary.service4', { defaultValue: 'Bases de Datos' })}</p>
            </div>
        </section>
    );
};

export default ServiceSummary;
