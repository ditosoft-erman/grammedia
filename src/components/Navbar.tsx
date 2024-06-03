import { FC, useState, useEffect } from "react";

import menu from "../data/menu.json";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/grammedia-logo.png";

export const Navbar: FC = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<number>(1);

  useEffect(() => {
    controls.start({
      rotate: [null, 480 * direction],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    });

    setTimeout(() => {
      setDirection(-1 * direction);
    }, 3000);
  }, [direction, controls]);
  return (
    <div className="flex justify-center relative z-50">
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.64,
        }}
        className="font-sub text-white bg-black xxxs:hidden md:block fixed  z-10 cursor-pointer w-full h-[5.5rem] pr-2 pt-2 "
      >
        <div className="flex justify-center  gap-4 items-center py-2 px-2">
          <img src={logo} alt="" />
          <div className="w-[52rem] border-2 border-slate-200"></div>
          {menu.map((item, idx) => {
            const isHomeLink = item.label === "HOME";
            return (
              <a
                key={idx}
                href={isHomeLink ? "#home" : item.link}
                onClick={(e) => {
                  // Prevent default behavior for external links
                  if (!isHomeLink) {
                    e.preventDefault();
                    // Perform any other necessary actions for external links
                    window.open(item.link, "_blank");
                  }
                }}
                className="cursor-pointer flex justify-between px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
