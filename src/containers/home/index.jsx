import React from "react";
import "./style.scss";
import { Animate } from "react-simple-animate";
import { FaInstagram, FaLinkedin, FaTwitter, FaGoogle } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello,I am Rakib Hasan
          <br />
          Front End Developer.
        </h1>
        <Animate 
        play
        duration={1}
        delay={1}
        start={{
            transform: 'translateY(600px)'
        }}
        end={{
            transform:'translateX(0px)'
        }}
        >
          <div className="contact-me">
            <div className="contact-me__buttonsArea">
              <button>Hire Me</button>
              <a href="#">Download CV</a>
            </div>
            <div className="contact-me__social-icons">
              <FaInstagram size={25} />
              <FaTwitter size={25} />
              <FaLinkedin size={25} />
              <FaGoogle size={25} />
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
