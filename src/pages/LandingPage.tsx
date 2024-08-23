
import React, { useRef } from "react"


import { CustomHeader } from "../components/CustomHeader"
import { HomeSection } from "../components/Section/HomeSection"
import OurServiceSection from "@/components/Section/OurServiceSection"




function LandingPage() {

    return (
        <div className="flex flex-col">
            <CustomHeader />
            <section id="home" className="relative py-4 my-10 md:my-20 ">
                <HomeSection />
            </section>

            <section id="services" className="relative py-4 my-10 md:my-20">
                <h1 className="text-center text-4xl font-bold mt-20">Our Services</h1>
                <OurServiceSection />
            </section>
            <div id="contact" className="h-[70vh] bg-[#000000]">
                <h1 className="text-center text-4xl font-bold mt-20">Contact Us</h1>
            </div>
        </div>

    )
}

export default LandingPage