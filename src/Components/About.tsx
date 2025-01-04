import { Info } from "../User";
import { useEffect, useRef, useState } from "react";
import Typewriter from "typewriter-effect";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import { Button, Stack } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";
import ResumeView from "./ResumeView";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/particles";
const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-uration="800" className="flex  relative overflow-hidden items-center justify-around  px-10 py-10 h-[80vh] font-mono lg:mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse" id="bg" >
                <Particles
                    className="absolute inset-0 -z-20"
                    quantity={500}
                    ease={80}
                    color="#64FFDA"
                    refresh
                    vx={0.1}
                    vy={0.1}
                />
                <div className="ml-20 w-3/5 flex-col mt-28  lg:pt-20 lg-mx:gap-2 bs-mx:items-center">
                    <div className=" text-primarycolor text-2xl lg-mx:text-xl">Hi, I am </div>
                    <div className=" text-white text-[4.25rem] font-extrabold lg-mx:text-[3.5rem]"> {Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-2xl"> I'm a&nbsp;<span className="text-primarycolor"><Typewriter options={{
                        strings: Info.Stack,
                        autoStart: true,
                        loop: true,
                    }} /></span></div>
                    <div className="text-textColor text-justify text-xl my-7 lg-mx:my-0 font-semibold lg-mx:text-lg">{Info.bio}</div>

                    <div className="flex gap-4">
                        <Button onClick={open} className="!text-primarycolor lg-mx:mt-2 !w-fit" size="lg" variant="outline" color="#64FFDA">Resume</Button>
                        <Button component="a" href="DiaResume.pdf" download={"DiaJain"} className="!text-primarycolor lg-mx:mt-2 !w-fit" size="lg" variant="outline" color="#64FFDA" rightSection={<IconDownload size={24} />}>Download</Button>
                    </div>
                </div>
                <div className="h-[50vh] mx-7  flex justify-center  rounded-full items-center bs:mr-14 w-fit" id="photo">
                <NeonGradientCard className="max-w-sm items-center justify-center text-center rounded-full">
                    <img className=" w-[260px] h-[400px] object-cover rounded-full " src="profileimg.jpeg" alt="profile" />
                </NeonGradientCard>

                </div>

            </div>
            <ResumeView opened={opened} close={close} />
        </>

    )
}
export default About;
