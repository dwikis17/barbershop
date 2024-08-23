import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Slider.css';

const colors = ['#FF6B6B', '#4ECDC4', '#556270', '#C7F464', '#FFCC5C'];

const Carousel = () => {
    const controls = useAnimation();

    useEffect(() => {
        const interval = setInterval(() => {
            controls.start((i) => ({
                x: `-${100 * (i + 1)}%`,
                transition: { duration: 1, ease: 'easeInOut' }
            }));
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval); // Clear interval on unmount
    }, [controls]);

    return (
        <div className="carousel-container">
            <motion.div
                className="carousel-track"
                initial={{ x: '0%' }}
                animate={controls}
            >
                {colors.map((color, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        className="carousel-item"
                        style={{ backgroundColor: color }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Carousel;
