import { FC } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { skills } from "../data/skills";
import "../pages/about.css";

export const SkillsMarquee: FC = () => {
  return (
    <Marquee
      speed={100}
      gradientWidth={25}
      direction="left"
      className="bg-black p-14"
    >
      {skills.map((skill, idx: number) => {
        return (
          <motion.div whileHover={{ scale: 1.1 }} key={idx} className="mx-14">
            <span className="text-white text-2xl font-sub cursor-pointer hover:text-blue-700">
              {skill.label}
            </span>
          </motion.div>
        );
      })}
    </Marquee>
  );
};
