import { Avatar } from "@mantine/core";


// const SkillBadge=(skills:[])=>{
//       return skills.map((skill:any, index:number)=><div key={index}>
//         <Avatar variant="transparent" radius="xs" color="cyan" src={`/Icons/${skill}.png`} />;
//         <div className="text-textColor text-xl font-medium">{skills}</div>
    
//       </div>)
// }
 
function SkillCard(props: any) {
  return <div data-aos="fade-up"
  data-aos-duration="3000" data-aos-easing="ease-in-sine" className="w-[49%] rounded-2xl border  border-primarycolor p-5">
    <div className="text-3xl text-white text-center font-bold">{props.title}

    </div>
    <div>
      {/* {SkillBadge(props.Skills)} */}
    </div>


  </div>;


}
export default SkillCard ;