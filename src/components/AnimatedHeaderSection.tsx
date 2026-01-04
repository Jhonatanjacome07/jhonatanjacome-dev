import React, { useRef } from "react";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/* Props for reusable animated header component */
interface AnimatedHeaderSectionProps {
    subTitle: string;           // Small uppercase text above title
    title: string;              // Large banner title
    text: string;               // Description text with animated lines
    textColor: string;          // Tailwind color class (text-white, text-black)
    withScrollTrigger?: boolean; // Enable scroll-based animation
    withClipPath?: boolean;      // Enable clip-path reveal effect
}


const AnimatedHeaderSection: React.FC<AnimatedHeaderSectionProps> = ({
    subTitle,
    title,
    text,
    textColor,
    withScrollTrigger = false,
    withClipPath = false,
}) => {
    /* Refs for GSAP animations */
    const contextRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    /* Split title into parts if it contains spaces for better layout */
    const shouldSplitTitle = title.includes(" ");
    const titleParts = shouldSplitTitle ? title.split(" ") : [title];

    useGSAP(() => {
        /* Create timeline with optional scroll trigger */
        const tl = gsap.timeline({
            scrollTrigger: withScrollTrigger
                ? {
                    trigger: contextRef.current,
                }
                : undefined,
        });

        /* Animate container from bottom */
        tl.from(contextRef.current, {
            y: "50vh",
            duration: 1,
            ease: "circ.out",
        });

        /* Animate header content with slight delay */
        tl.from(
            headerRef.current,
            {
                opacity: 0,
                y: "200",
                duration: 1,
                ease: "circ.out",
            },
            "<+0.2"
        );
    }, []);

    return (
        <div ref={contextRef}>
            <div style={withClipPath ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : undefined}>
                <div
                    ref={headerRef}
                    className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
                >
                    <p
                        className={`text-sm font-light tracking-[0.5rem] uppercase px-10 ${textColor}`}
                    >
                        {subTitle}
                    </p>
                    <div className="px-10">
                        <h1
                            className={`flex flex-col gap-6 uppercase banner-text-responsive sm:gap-10 md:block ${textColor}`}
                        >
                            {titleParts.map((part, index) => (
                                <span key={index}>{part} </span>
                            ))}
                        </h1>
                    </div>
                </div>
            </div>
            <div className={`relative px-10 pt-8 sm:pt-12 ${textColor}`}>
                <div className="absolute inset-x-0 border-t-2" />
                <div className="py-12 sm:py-16 text-end">
                    <AnimatedTextLines
                        text={text}
                        className={`font-light uppercase value-text-responsive ${textColor}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default AnimatedHeaderSection;
