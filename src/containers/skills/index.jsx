import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { GiSkills } from "react-icons/gi";
import { skillsData } from "./utiles";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";
const Skills = () => {
  return (
    <section className="skills" id="skills">
      <PageHeaderContent headerText="My Skills" icon={<GiSkills size={35} />} />

      <div className="skills__content-wrapper">
        {skillsData.map((item, index) => (
          <div className="skills__content-wrapper__innerWrapper" key={index}>
            <Animate
              play
              duration={1}
              delay={0.4}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="skills__content-wrapper__innerWrapper__category">{item.label}</h3>
              <div>
                {item.skill.map((itemData, index) => (
                  <AnimateKeyframes play duration={3} keyframes={[{
                    0: "opacity:0"
                  },
                  {
                    25: "opacity:0.25"
                  },
                  {
                    50: "opacity:0.5"
                  },
                  {
                    75: "opacity:0.75"
                  },
                  {
                    100: "opacity:1"
                  }]} iterationCount="1">
                    <div className="progress-wrapper" key={index}>
                      <p>{itemData.skillName}</p>
                      <Line
                        percent={itemData.percentage}
                        strokeWidth={2}
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                        trailWidth={2}
                        trailColor="blue"
                        transition="1"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
