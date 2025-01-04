import { IconHexagon } from "@tabler/icons-react";
import {Slugs} from "../User";
import { IconCloud } from "./magicui/icon-cloud";

export function Loader(){
    return(
        <div className="relative flex h-full w-full animate-[ping_1.5s_ease-in-out_1_4.2s] items-center justify-center px-20 pb-20 pt-8">
        <IconCloud iconSlugs={Slugs}/>
        <IconHexagon className="absolute -z-10 animate-[spin_8s_linear_infinite]" size={120} color="#64FFDA " stroke={1.5}/>
        <div className=" absolute  font-mono font-semibold text-primarycolor text-4xl -z-10">DJ</div>
        </div>
    );
}