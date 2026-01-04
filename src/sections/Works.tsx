import { Icon } from "@iconify/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works: React.FC = () => {
    /* Refs for hover overlay animations on each project */
    const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

    /* Ref for floating preview image that follows cursor */
    const previewRef = useRef<HTMLDivElement>(null);

    /* Track which project is currently being hovered */
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const text = `Proyectos destacados que han sido meticulosamente
    creados con pasión para generar
    resultados e impacto.`;

    /* Mouse position tracking for smooth preview following */
    const mouse = useRef({ x: 0, y: 0 });
    const moveX = useRef<((value: number) => void) | null>(null);
    const moveY = useRef<((value: number) => void) | null>(null);

    useGSAP(() => {
        /* Setup smooth cursor following for preview image */
        moveX.current = gsap.quickTo(previewRef.current, "x", {
            duration: 1.5,
            ease: "power3.out",
        });
        moveY.current = gsap.quickTo(previewRef.current, "y", {
            duration: 2,
            ease: "power3.out",
        });

        /* Animate projects on scroll - staggered entrance */
        gsap.from("#project", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: "#project",
            },
        });
    }, []);

    /* Handle project hover - show overlay and preview (desktop only) */
    const handleMouseEnter = (index: number) => {
        if (window.innerWidth < 768) return; // Skip on mobile
        setCurrentIndex(index);

        const el = overlayRefs.current[index];
        if (!el) return;

        /* Animate black overlay with clip-path reveal */
        gsap.killTweensOf(el);
        gsap.fromTo(
            el,
            {
                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            },
            {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                duration: 0.15,
                ease: "power2.out",
            }
        );

        /* Show floating preview image */
        gsap.to(previewRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    /* Handle project mouse leave - hide overlay and preview */
    const handleMouseLeave = (index: number) => {
        if (window.innerWidth < 768) return; // Skip on mobile
        setCurrentIndex(null);

        const el = overlayRefs.current[index];
        if (!el) return;

        /* Hide black overlay with clip-path */
        gsap.killTweensOf(el);
        gsap.to(el, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            duration: 0.2,
            ease: "power2.in",
        });

        /* Hide floating preview image */
        gsap.to(previewRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    /* Update preview image position to follow cursor with offset */
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.innerWidth < 768) return; // Skip on mobile
        mouse.current.x = e.clientX + 24; // Offset from cursor
        mouse.current.y = e.clientY + 24;
        moveX.current?.(mouse.current.x);
        moveY.current?.(mouse.current.y);
    };

    return (
        <section id="work" className="flex flex-col min-h-screen">
            <AnimatedHeaderSection
                subTitle={"La Lógica se Encuentra con la Estética, Sin Esfuerzo"}
                title={"Proyectos"}
                text={text}
                textColor={"text-black"}
                withScrollTrigger={true}
            />
            <div
                className="relative flex flex-col font-light"
                onMouseMove={handleMouseMove}
            >
                {projects.map((project, index) => (
                    <a
                        key={project.id}
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="project"
                        className="relative flex flex-col gap-3 py-5 cursor-pointer group md:gap-0 md:py-5"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {/* overlay */}
                        <div
                            ref={(el) => {
                                overlayRefs.current[index] = el;
                            }}
                            className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
                        />

                        {/* title */}
                        <div className="flex justify-between items-center px-5 md:px-10 text-black transition-all duration-500 md:group-hover:px-12 md:group-hover:text-white">
                            <h2 className="text-2xl md:text-[26px] lg:text-[32px] leading-tight md:leading-none">
                                {project.name}
                            </h2>
                            <Icon icon="lucide:arrow-up-right" className="size-5 md:size-6 shrink-0" />
                        </div>

                        {/* divider */}
                        <div className="w-full h-0.5 bg-black/80" />

                        {/* framework - wrapped for mobile */}
                        <div className="flex flex-wrap px-5 md:px-10 text-xs md:text-sm leading-loose uppercase gap-x-3 md:gap-x-5 gap-y-1 transition-all duration-500 md:group-hover:px-12">
                            {project.frameworks.map((framework) => (
                                <p
                                    key={framework.id}
                                    className="text-black transition-colors duration-500 md:group-hover:text-white"
                                >
                                    {framework.name}
                                </p>
                            ))}
                        </div>

                        {/* mobile preview image */}
                        <div className="relative flex items-center justify-center px-5 md:hidden h-[400px] mt-2">
                            <img
                                src={project.bgImage}
                                alt={`${project.name}-bg-image`}
                                className="object-cover w-full h-full rounded-lg brightness-50"
                            />
                            <img
                                src={project.image}
                                alt={`${project.name}-image`}
                                className="absolute w-[85%] object-contain rounded-lg"
                            />
                        </div>
                    </a>
                ))}
                {/* desktop Floating preview image */}
                <div
                    ref={previewRef}
                    className="fixed -top-2/6 left-0 z-50 overflow-hidden border-8 border-black pointer-events-none w-[960px] md:block hidden opacity-0"
                >
                    {currentIndex !== null && (
                        <img
                            src={projects[currentIndex].image}
                            alt="preview"
                            className="object-cover w-full h-full"
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Works;
