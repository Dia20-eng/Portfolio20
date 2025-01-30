import Projectcard from "./Projectcard";
import {ProjectInfo} from "../User"
const Project=()=>{
    return(
      <div className ="px-16 mx-20  my-10 font-mono" id="Work">
      <h1  className="text-4xl text-center mb-5 font- text-white"><span className="text-primarycolor">02.&nbsp;</span>Projects</h1>
      <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
        {
         ProjectInfo.map((project:any,index:number)=><Projectcard key ={index}title={project.title} image={project.image} desc={project.desc} live={project.live} link={project.link} github={project.github}/>)
    
         }
      </div>
      </div>

    )
}
export default Project;