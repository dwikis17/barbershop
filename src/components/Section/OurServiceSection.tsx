import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';


const services = [
    {
        name: 'Cut',
        description: 'Expert haircuts tailored to your style and preferences.',
        icon: '✂️', // You can replace this with an actual icon
    },
    {
        name: 'Massage',
        description: 'Relaxing head and shoulder massage to relieve stress.',
        icon: '💆', // You can replace this with an actual icon
    },
    {
        name: 'Perm',
        description: 'Professional perming service for long-lasting curls.',
        icon: '🔄', // You can replace this with an actual icon
    },
    {
        name: 'Shave',
        description: 'Smooth, close shaves with a focus on precision and comfort.',
        icon: '🪒', // You can replace this with an actual icon
    },
    {
        name: 'Beard Trim',
        description: 'Keep your beard looking sharp and well-groomed.',
        icon: '🧔', // You can replace this with an actual icon
    },
    {
        name: 'Hair Coloring',
        description: 'Enhance your look with our professional hair coloring services.',
        icon: '🎨', // You can replace this with an actual icon
    },
];

const OurServiceSection = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: screenWidth >= 768 ? 0.6 : 0.2 })

    return (

        <div className="max-w-7xl mx-auto px-4 py-12" ref={ref}>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" style={{
                transform: isInView ? 'none' : 'translateX(-200px)',
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}>
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-card text-center p-6 bg-white shadow-md rounded-lg"
                        whileHover={{ scale: 1.1, boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.2)' }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-6xl mb-4">{service.icon}</div>
                        <h2 className="text-2xl font-semibold mb-2 text-black">{service.name}</h2>
                        <p className="text-gray-600 font-sans">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

    );
};

export default OurServiceSection;
