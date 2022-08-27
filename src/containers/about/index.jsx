import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { personalInfo } from "./utiles";
import { DiAndroid, DiApple } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

//css
import "./style.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent headerText="About Me" icon={<BsInfoCircleFill size={35} />} />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">Front End Developer</h3>
            <p>
              Hello. My name is Rakib and I'm a certified computer engineer. I have four years of experience in frontend
              web development. In my profession client demand is my first priority. As a front-end developer,
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateY(500px)",
            }}
            end={{
                transform: "translateY(0px)",
            }}
          >
            <h3 className="personalContent">Personal Infomation</h3>
            <ul>
              {personalInfo.map((item, index) => {
                const { lable, value } = item;
                return (
                  <li key={index}>
                    <span className="title">{lable}</span>
                    <span className="value">{value}</span>
                  </li>
                );
              })}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceWrapper">
            <Animate
            play
            duration={1}
            delay={0}
            start={{
                transform:'translateX(500px)'
            }}
            end={{
                transform:'translateX(0px)'
            }}
            >
          <div className="about__content__serviceWrapper__innerContent">
            <div>
              <DiApple size={70} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={70} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={70} color="var(--selected-theme-main-color)" />
            </div>
            <div>
              <FaDev size={70} color="var(--selected-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
