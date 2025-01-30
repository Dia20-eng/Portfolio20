import { SkillInfo } from "../User";
import SkillCard from "./SkillCard";
// import Skills from './Skills';

const Skills = () => {
    return (
      <div className="px-16 mx-20 my-10 font-mono" id="Skills">
        <h1 className="text-4xl mb-5 font-bold text-center text-textColor">
          <span className="text-primarycolor">03.&nbsp;</span>Skills
        </h1>
        <div className="grid grid-cols-2 gap-8">
          {SkillInfo.map((category, index) => (
            <div key={index} className="p-5 border cursor-pointer hover:!scale-[1.03]  hover:shadow-[0_0_6px_0_#64FFDA] border-primarycolor rounded-xl bg-dark-500">
              <h2 className="text-xl font-bold mb-3 text-primarycolor">
                {category.category}
              </h2>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex font-mono text-textColor flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2"
                  >
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-8 h-8"
                        style={{ background: "transparent" }}
                      />
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
 
  
  
  

export default Skills;