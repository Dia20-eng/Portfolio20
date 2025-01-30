import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconSortDeacendingSmallBig } from "@tabler/icons-react";
import { link } from 'fs';

const Social = () => {
  const sociallinks = [{ link: "https://github.com/Dia20-eng", icon: IconBrandGithub }, { link: "https://leetcode.com/u/DiaJain/", icon: IconBrandLeetcode }, { link: "https://www.instagram.com/dia.jain20/", icon: IconBrandInstagram }, { link: "https://www.linkedin.com/in/dia-jain", icon: IconBrandLinkedin }];
  const socialicons = sociallinks.map((sociallinks) => {
    return <a href={`${sociallinks.link}`} target="_blank" className="font-mono  text-lg  hover:text-primarycolor hover:-translate-x-2 transition transform duration-300 ease-in-out">
      <div data-aos="fade-down-right" data-aos-duration="800">
      <sociallinks.icon className="-rotate-90" size={30} />
      </div>
    </a>
  })


  return <div className="flex md-mx:hidden text-textColor p-3 first-line:items-center gap-8 fixed bottom-32 -left-48 rotate-90">

    {socialicons}

    <hr className="border-[4px] w-40 rounded-full  bg-textColor  border-textColor " />
  </div>
}
export default Social;
