import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// 📌 EXPLICACIÓN: Componente que muestra palabras clave de servicios
// con efecto parallax (se mueven al hacer scroll)

const ServiceSummary: React.FC = () => {
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
            {/* 📌 Línea 1: IA & Automatización */}
            <div id="title-service-1">
                <p>IA & Automatización</p>
            </div>

            {/* 📌 Línea 2: Full Stack con línea dorada */}
            <div
                id="title-service-2"
                className="flex items-center justify-center gap-3 translate-x-16"
            >
                <p className="font-normal">Full Stack</p>
                <div className="w-10 h-1 md:w-32 bg-gold" />
                <p>Development</p>
            </div>

            {/* 📌 Línea 3: React, TypeScript, Laravel */}
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

            {/* 📌 Línea 4: Bases de Datos */}
            <div id="title-service-4" className="translate-x-48">
                <p>Bases de Datos</p>
            </div>
        </section>
    );
};

export default ServiceSummary;
