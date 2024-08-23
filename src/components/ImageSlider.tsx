import { useState } from "react";
import { motion } from "framer-motion";

import barber2 from "../assets/barber2.png";

const ImageSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % 5
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 4) % 5
            );

            return updatedIndexes;
        });
    };

    const images = [barber2, barber2, barber2, barber2, barber2];

    const positions = ["center", "left", "right", 'left1', 'right1'];

    const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },

        left: { x: "-50%", scale: 0.5, zIndex: 2, opacity: 0 },
        left1: { x: "-60%", scale: 0.5, zIndex: 2, opacity: 0 },
        right: { x: "50%", scale: 0.5, zIndex: 1, opacity: 0 },
        right1: { x: "60%", scale: 0.5, zIndex: 1, opacity: 0 },
    };
    return (
        <div className="flex items-center flex-col justify-center h-screen sm:h-auto  relative    ">
            {images.map((image, index) => (
                <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px] top-5 absolute sm:w-[40%] w-[80%]    "
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}

                />
            ))}


            <div className=" flex flex-row gap-3 absolute sm:top-80 top-80 mt-3 sm:mt-0">
                <button
                    className="text-white  bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleBack}
                >
                    Back
                </button>
                <button
                    className="text-white  bg-indigo-400 rounded-md py-2 px-4"
                    onClick={handleNext}
                >
                    Next
                </button>
            </div>

        </div>
    );
};

export default ImageSlider;