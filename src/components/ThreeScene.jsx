import { Suspense, useEffect, useRef } from "react";
import Barber from '../../public/Barber.jsx'
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function LogCameraPosition() {
    const { camera, gl } = useThree();
    const controls = useRef();

    useEffect(() => {
        if (controls.current) {
            // Log the camera position and target when the user stops interacting
            const logPosition = () => {
                console.log('Camera position:', camera.position);
                console.log('Camera target:', controls.current.target);
            };

            controls.current.addEventListener('end', logPosition);

            // Clean up the event listener on component unmount
            return () => {
                controls.current.removeEventListener('end', logPosition);
            };
        }
    }, [camera]);

    return <OrbitControls ref={controls} args={[camera, gl.domElement]} />;
}

export function ThreeScene() {
    const cameraRef = useRef(null);
    return (
        <>
            <Canvas camera={{ position: [1.5304151171499483, 2.3758320642493653, 18.22522755358898], fov: 10, far: 200 }} ref={cameraRef} >
                <ambientLight />
                <spotLight position={[10, 20, 10]} penumbra={1} decay={0} intensity={3} color="orange" />

                <OrbitControls ref={cameraRef} />
                {/* <LogCameraPosition /> */}
                <Barber />
            </Canvas>
        </>
    )
}