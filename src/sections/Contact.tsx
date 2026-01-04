import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { socials } from "../constants";
import gsap from "gsap";

const Contact: React.FC = () => {
    const text = `¿Tienes una pregunta, propuesta o idea de proyecto?
    Me encantaría escucharte y discutir más a fondo.`;

    const items = [
        "solo imagina, yo codifico",
        "solo imagina, yo codifico",
        "solo imagina, yo codifico",
        "solo imagina, yo codifico",
        "solo imagina, yo codifico",
    ];

    useGSAP(() => {
        gsap.from(".social-link", {
            y: 100,
            opacity: 0,
            delay: 0.5,
            duration: 1,
            stagger: 0.3,
            ease: "back.out",
            scrollTrigger: {
                trigger: ".social-link",
            },
        });
    }, []);

    return (
        <section
            id="contact"
            className="flex flex-col justify-between min-h-screen bg-black"
        >
            <div>
                <AnimatedHeaderSection
                    subTitle={"Tú lo Sueñas, Yo lo Codifico"}
                    title={"Contacto"}
                    text={text}
                    textColor={"text-white"}
                    withScrollTrigger={true}
                />
                <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
                    <div className="flex flex-col w-full gap-10">
                        <div className="social-link">
                            <h2>E-mail</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                                jhonatanjacome99@gmail.com
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>Teléfono</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <p className="text-xl lowercase md:text-2xl lg:text-3xl">
                                +593 93 945 9669
                            </p>
                        </div>
                        <div className="social-link">
                            <h2>Redes Sociales</h2>
                            <div className="w-full h-px my-2 bg-white/30" />
                            <div className="flex flex-wrap gap-2">
                                {socials.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs leading-loose tracking-wides uppercase md:text-sm hover:text-white/80 transition-colors duration-200"
                                    >
                                        {"{ "}
                                        {social.name}
                                        {" }"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Marquee items={items} className="text-white bg-transparent" />
        </section>
    );
};

export default Contact;
