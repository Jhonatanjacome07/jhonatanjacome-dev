import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

const ContactSummary: React.FC = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLElement>(null);

    /* Brand values for top marquee */
    const items = [
        t('contactSummary.value1', { defaultValue: 'Innovación' }),
        t('contactSummary.value2', { defaultValue: 'Precisión' }),
        t('contactSummary.value3', { defaultValue: 'Confianza' }),
        t('contactSummary.value4', { defaultValue: 'Colaboración' }),
        t('contactSummary.value5', { defaultValue: 'Excelencia' }),
    ];

    /* Contact CTA for bottom marquee */
    const items2 = [
        t('contactSummary.cta', { defaultValue: 'contáctame' }),
        t('contactSummary.cta', { defaultValue: 'contáctame' }),
        t('contactSummary.cta', { defaultValue: 'contáctame' }),
        t('contactSummary.cta', { defaultValue: 'contáctame' }),
        t('contactSummary.cta', { defaultValue: 'contáctame' }),
    ];

    /* Pin section during scroll for emphasis */
    useGSAP(() => {
        gsap.to(containerRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                markers: false,
            },
        });
    }, []);

    return (
        <section
            ref={containerRef}
            className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16"
        >
            <Marquee items={items} />
            <div className="overflow-hidden font-light text-center contact-text-responsive">
                <p>
                    " {t('contactSummary.text1', { defaultValue: 'Construyamos una' })} <br />
                    <span className="font-normal">{t('contactSummary.text2', { defaultValue: 'memorable' })}</span> {t('contactSummary.text3', { defaultValue: 'e' })}{" "}
                    <span className="italic">{t('contactSummary.text4', { defaultValue: 'inspiradora' })}</span> <br />
                    {t('contactSummary.text5', { defaultValue: 'aplicación web' })} <span className="text-gold">{t('contactSummary.text6', { defaultValue: 'juntos' })}</span> "
                </p>
            </div>
            <Marquee
                items={items2}
                reverse={true}
                className="text-black bg-transparent border-y-2"
                iconClassName="stroke-gold stroke-2 text-primary"
                icon="material-symbols-light:square"
            />
        </section>
    );
};

export default ContactSummary;
