import { Timeline,Text } from "@mantine/core";
import { IconBriefcase, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from "@tabler/icons-react";
import { ExperienceInfo } from "../User";
const TimelineItem=(item:any)=>{
    return item.map((item:any,index:number)=> <Timeline.Item bullet={<IconBriefcase className="text-bgcolor" size={20} /> }>
        <div className="border border-primarycolor hover:shadow-[0_0_6px_0_#64FFDA]  p-4 rounded-2xl" id="Experience">
            <div>
                <img className="rounded-lg  w-36 " src={`${item.company}.png`}alt="company"/>
            </div>
        </div>
        
    </Timeline.Item> )

}

const Experience=()=>{
   return <div className ="px-20  mx-20  my-15 font-mono">
      <h1  className="text-4xl text-center mb-5 font-bold text-textColor"><span className="text-primarycolor">04.&nbsp;</span>Experience</h1>
      <Timeline  color="#64FFDA" active={5} bulletSize={30} lineWidth={2}>
        {
        TimelineItem(ExperienceInfo)
        }
     </Timeline>
      </div>
      
}
export default Experience;