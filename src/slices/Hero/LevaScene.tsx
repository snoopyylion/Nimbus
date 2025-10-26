"use client";

// this was how we got the fixed position for the main keyboard
import { Keyboard } from "@/components/Keyboard";
import { useControls } from "leva";


export function Scene() {

    const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ } =
        useControls({
            positionX: 0,
            positionY: -.5,
            positionZ: 3,
            rotationX: Math.PI / 2,
            rotationY: 0,
            rotationZ: 0,
        });

    return (
        <group>
            {/* Math.PI rotates the keyboard 180 degrees while  Math.PI / 2  rotates it 90 degrees */}

            <Keyboard scale={9}
                position={[positionX, positionY, positionZ]}
                rotation={[rotationX, rotationY, rotationZ]} />

            <ambientLight intensity={1} />

            <pointLight position={[0, 1, 5]} intensity={2} />
        </group>
    )
}