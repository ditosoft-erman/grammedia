import { FC } from "react";
import stack from "../assets/skillsStack.png";
import ScrollAnimation from "react-animate-on-scroll";
import "../pages/about.css"

const Stack: FC = () => {
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full container">
        <div className="w-full xxxs:flex flex-col gap-4 md:grid grid-cols-2 items-center">
          <div className="mx-auto p-25 lg:p-28">
            <img src={stack} alt="Stack" className="pointer-events-none" />
          </div>
          <ScrollAnimation animateIn="flipYOut" delay={15}>
            <div className="flex flex-col gap-5 lg:gap-10 xl:pl-4">
              <h1 className="font-bold font-head text-white xxxs:text-xl xs:text-4xl lg:text-5xl">
                Skill equipped with{" "}
                <span className=" bg-clip-text text-transparent gradient-text">
                  modern technologies
                </span>
                
              </h1>
              <p className="font-text xxxs xxxs:w-9/12 xxs:w-full md: xl:text-xl lg:w-3/4 text-justify  text-white">
                Through my immersion in various video editing software and
                techniques, I've honed my skills across multiple projects. These
                experiences continually sharpen my abilities as I eagerly
                embrace new tools and advancements in the field of video
                editing, ensuring I stay at the forefront of this dynamic
                industry.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Stack;
