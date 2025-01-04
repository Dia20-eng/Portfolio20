import { IconHexagonLetterD } from "@tabler/icons-react";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links=["About","Work","Experience","Skills","Contact"];
const navlinks=(col:boolean)=>{
    return links.map((links,index)=>{
        return  <a className={`${col?' flex flex-col items-center':''} text-textColor hover:text-primarycolor text-lg font-mono `}href={`#${links}`}> <span className=" text-primarycolor">0{index+1}.</span>{links}</a>
    })
}
const Header=()=>{
    const isMobile=useMediaQuery(`(max-width:${em(476)})`);
    const [show,setShow]=useState(true);
    const[lastScrollY,setLastScrollY]=useState(0);
    const [shadow,setShadow]=useState(false);
    const controlNavbar=()=>{
        if(window.scrollY>lastScrollY&&window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);

    }
    useEffect(()=>{
        window.addEventListener('scroll',controlNavbar);
       return()=>window.removeEventListener('scroll',controlNavbar);
    })
    return(
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""}transition-transform duration-300 ease-in-out fixed w-full z-10  bg-bgcolor h-28  px-10  justify-between items-center xs-mx:x-4 xs-mx:h-20`}>
        <IconHexagonLetterD  className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
        {/* <h1 className="text-primarycolor ">Portfolio</h1> */}
        <div className="md:flex gap-8 hidden">
          {navlinks(false)}
        </div>
        <Sidebar/>
    </nav>
    )
}
export default Header;
export {navlinks};