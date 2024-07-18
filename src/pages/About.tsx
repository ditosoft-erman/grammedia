import { FC } from "react";
// import me from "../assets/me.webp";
import allen from "../assets/grammer2.png";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

import "./about.css"


export const About: FC = () => {



  return (
    <div id="about" className="w-full p-4 bg-black xxxs:h-[650px]">
      <div className="container">
        <div className="flex row items-center justify-around ">
        
          <div className="col col-lg-5 pt-14">
            {/* <ScrollAnimation animateIn="fadeIn" delay={50}>
              <p className="font-head font-semibold">Hi! I'm</p>
            </ScrollAnimation> */}
            <ScrollAnimation animateIn="fadeIn" delay={150}>
              <h1 className="font-title text-left font-bold my-3 xxxs:text-3xl xxxs:text-center lg:text-3xl xl:text-5xl text-white">
                Who drives the creativity at<span className="gradient-text"> Grammedia?</span>
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" delay={150}>
              <p className="font-text text-justify pb-6 xxxs:text-xs md:text-md lg:text-sm xl:text-lg text-white">
                I'm Grammer Allen, a skilled video editor driven to create
                captivating content that propels your business or brand. I'm
                also the founder of Gram Media, born from a passion for content
                creation and a mission to empower fellow creators through
                valuable resources and support.
              </p>
            </ScrollAnimation>
           
          </div>
		    <div className="xxxs:col col-span-1 md:col col-md-4">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 0.9 }}
              src={allen}
              alt="Grammer Allen"
              style={{ width: "450px", height: "500px"  }}
          
            />
          </div>
        </div>
      </div>
    </div>
  );
};
