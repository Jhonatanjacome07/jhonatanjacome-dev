import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import * as THREE from "three";
import type { GLTF } from "three-stdlib";

interface PlanetProps {
    scale?: number | [number, number, number];
}

type GLTFResult = GLTF & {
    nodes: {
        Sphere: THREE.Mesh;
        Sphere2: THREE.Mesh;
        Ring: THREE.Mesh;
    };
    materials: {
        "Material.001": THREE.Material;
        "Material.002": THREE.Material;
    };
}

export function Planet(props: PlanetProps) {
    const shapeContainer = useRef<THREE.Group>(null);
    const shperesContainer = useRef<THREE.Group>(null);

    const ringContainer = useRef<THREE.Mesh>(null);

    const { nodes, materials } = useGLTF("/models/Planet.glb") as unknown as GLTFResult;

    useGSAP(() => {
        const tl = gsap.timeline();

        if (shapeContainer.current) {
            tl.from(shapeContainer.current.position, {
                y: 5,
                duration: 3,
                ease: "circ.out",
            });
        }

        if (shperesContainer.current) {
            tl.from(
                shperesContainer.current.rotation,
                {
                    x: 0,
                    y: Math.PI,
                    z: -Math.PI,
                    duration: 10,
                    ease: "power1.inOut",
                },
                "-=25%"
            );
        }

        if (ringContainer.current) {
            tl.from(
                ringContainer.current.rotation,
                {
                    x: 0.8,
                    y: 0,
                    z: 0,
                    duration: 10,
                    ease: "power1.inOut",
                },
                "<"
            );
        }
    }, []);

    return (
        <group ref={shapeContainer} {...props} dispose={null}>
            <group ref={shperesContainer}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={materials["Material.002"]}
                    rotation={[0, 0, 0.741]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere2.geometry}
                    material={materials["Material.001"]}
                    position={[0.647, 1.03, -0.724]}
                    rotation={[0, 0, 0.741]}
                    scale={0.223}
                />
            </group>
            <mesh
                ref={ringContainer}
                castShadow
                receiveShadow
                geometry={nodes.Ring.geometry}
                material={materials["Material.001"]}
                rotation={[-0.124, 0.123, -0.778]}
                scale={2}
            />
        </group>
    );
}

useGLTF.preload("/models/Planet.glb");
