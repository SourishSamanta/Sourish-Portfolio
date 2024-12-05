import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
    return (
        <div className="relative pb-20 pt-36">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            <div className="h-[62vh] absolute top-0 w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center">
                <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className="flex justify-center relative my-32 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Dynamic Web Design with Efficiency
                    </p>

                    <TextGenerateEffect
                        words="Crafting Digital Solutions into Intuitive User Interfaces"
                        className="text-center text-[40px] md:text-6xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! 👋 I&apos;m Sourish, a Web Developer based in
                        Kolkata, West Bengal.
                    </p>

                    <a href="#projects">
                        <MagicButton 
                          title="See My Works"
                          icon={<FaLocationArrow />} 
                          position="right"
                          
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
