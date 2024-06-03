import { FC } from "react";
import './Intro.css'

const IntroLanding: FC = () =>{
  return (
  
   <div className="container bg-black h-screen mx-auto max-w-max" id="home">
  <div className="text-container h-96 flex justify-center items-center w-full mt-20">
    <div className="intro-text text-white md:text-8xl font-bold w-2/3">
      <div
        className="lg:w-full md:text-4xl lg:text-8xl flex flex-wrap h-5/6 justify-center text-center"
      >
        <div className="text-5xl lg:text-8xl">Meet your next</div>
        <div data-aos="fade-up-right" className="gradient-text">creative</div>
        <div className="ml-6">video editor</div>
      </div>
    </div>
  </div>
  <div
    className="line-container flex flex-col items-center gap-10"
  
  >
    <div className="line-one w-2/3 h-0.5" ></div>
    <div className="line-two w-3/5 h-0.5" ></div>
    <div className="line-three w-1/2 h-0.5" ></div>
  </div>
</div>

  
  );
};

export default IntroLanding;