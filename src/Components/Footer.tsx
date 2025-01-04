import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { Info,sociallinks } from "../User";

const Footer=()=>{
  
  const socialIcons = sociallinks.map((sociallinks,index) => {
    return <a key={index} href={`${sociallinks.link}`} target="_blank" className="font-mono  text-lg  hover:text-primarycolor hover:scale-105 transition transform duration-300 ease-in-out">
      
      <sociallinks.icon stroke={1.5} size={25} />
      
    </a>
  })
     return <div className=" mt-20  mb-10 flex-col  flex font-mono gap-2 items-center">
       <div className="text-3xl md-mx:2xl text-primarycolor font-semibold">{Info.name }</div>
       <div className="md-mx:flex hidden text-textColor gap-8 sm-mx:gap-6 ">{socialIcons}</div>
       <div className="text-textColor text-xl md-mx:text-md sm-mx:text-base xs-mx:text-sm  xs-mx:flex  felx-col items-centerfont-bold justify items-center mt-3"> Copyright &copy;{new Date().getFullYear()}{Info.name} <span className="xs-mx:hidden">|</span><span> All Rights Reserved</span></div>
     </div>
}
export default Footer;