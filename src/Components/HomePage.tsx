import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import FullprojectModal from "./FullprojectModal";
import Header from "./Header";
import { Loader } from "./Loader";
import Mail from "./Mail";
import Project from "./Project";
import ResumeView from "./ResumeView";
import Skills from "./Skills";
import Social from "./Social";
import {  IconHexagon } from "@tabler/icons-react";
import { Slugs } from "../User";
import { IconCloud } from "./magicui/icon-cloud";
import { Toaster } from "react-hot-toast";


const HomePage=()=>{
    const [loading ,setLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },5000)
        },[])
        
    



    return<div className={`min-h-[100vh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
       { loading!=true?<>
        <Toaster/>
        <Header/>
        <About/>
        <Mail/>
        {/* <div >
        <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.2s] items-center justify-center px-20 pb-20 pt-8">
        <IconCloud iconSlugs={Slugs}/>
        <IconHexagon className="absolute -z-10 animate-[spin_8s_linear_infinite]" size={120} color="#64FFDA " stroke={1.5}/>
        <div className=" absolute  font-mono font-semibold text-primarycolor text-4xl -z-10">DJ</div>
        </div>
        </div> */}
        <Project/>
        <FullprojectModal/>
        <Social/>
        
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
        <ResumeView/>
        </>:
        <Loader/>}
        </div>
       
    

    
};
export default HomePage;