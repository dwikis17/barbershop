import Typewriter from 'typewriter-effect'
import { motion, Variants } from 'framer-motion'
import { CardBooking } from '../CardBooking'
import { useEffect, useState } from 'react';

export function HomeSection() {
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
    const getVariants = (): Variants => {
        return {
            offscreen: {
                y: screenWidth >= 768 ? 450 : 10, // 450 for large screens, 10 for mobile
                opacity: 0,
            },
            onscreen: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeOut',
                },
            },
        };
    };

    return (
        <motion.div className="mx-auto container px-4 pt-4 " initial='offscreen' variants={getVariants()}
            whileInView={'onscreen'}

            viewport={{ amount: 0.2, once: true }}
        >
            <div className="mb-8 text-7xl">
                <motion.h1 className="work-sans-google" >Get the Perfect {" "}
                    <span className="text-blue-500 inline-block">  <Typewriter
                        options={{
                            strings: [
                                'Cut.',
                                'Style.',
                                'Experience.',
                                'Confidence.'
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10
                        }}

                    /></span>
                </motion.h1>
            </div>
            <div className='flex relative sm:flex-row flex-col  '>
                <div className='flex-auto md:flex-1 mb-12 sm:mb-0 '>
                    <CardBooking />
                </div>

                <div className='flex-auto md:flex-1 '>
                    <div className='ml-auto max-w-xl  '>
                        <p className="sm:text-4xl text-2xl text-right font-light open-sans">
                            We specialize in delivering sharp haircuts, stylish grooming, and a full suite of barbering services to keep you <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">looking your best.</span>
                        </p>

                    </div>
                    {/* <div className='mt-12  h-[200px]' >
                        <ThreeScene />
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}