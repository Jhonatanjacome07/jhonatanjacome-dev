import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
    const { progress } = useProgress();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => setIsReady(true), 500);
        }
    }, [progress]);

    if (isReady) return null;

    return (
        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
            <p className="mb-4 text-xl tracking-widest animate-pulse">
                Loading {Math.floor(progress)}%
            </p>
            <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
                <div
                    className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
