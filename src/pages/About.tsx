import { FC } from "react";
import ScrollAnimation from "react-animate-on-scroll";

import { motion } from "framer-motion";
import styled from "styled-components";
import "./about.css";

const StyledImage = styled(motion.img)`
  width: 450px;
  height: 500px;

  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
  }

  @media (max-width: 400px) {
    width: 200px;
    height: 250px;
  }
`;

export const About: FC = () => {
  return (
    <div
      id="about"
      className="w-full flex justify-center items-center p-4 bg-black h-screen xxxs:h-[650px]"
    >
      <div className="container flex justify-center items-center">
        <div className="flex row items-center justify-around">
          <div className="col col-lg-5 pt-14">
            <ScrollAnimation animateIn="fadeIn" delay={150}>
              <h1 className="font-title text-left font-bold my-3 xxxs:text-2xl xxxs:text-center lg:text-3xl xl:text-5xl text-white">
                Who drives the creativity at
                <span className="gradient-text"> Grammedia?</span>
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
          <div className="xxxs:col xxxs:flex xxxs:justify-center xxxs:items-center  col-span-1 md:col col-md-4">
            <StyledImage
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 0.9 }}
              src="https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/grammer2.png"
              alt="Grammer Allen"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
