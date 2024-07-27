import { FC, useState, useEffect } from "react";
import menu from "../data/menu.json";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/grammedia-logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the hamburger and close icons

export const Navbar: FC = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false); // State to handle the open/close state of the hamburger menu

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
        className="font-sub text-white bg-black xxxs:hidden md:block fixed z-10 cursor-pointer w-full h-[5.5rem] pr-2 pt-2"
      >
        <div className="flex justify-center gap-4 items-center py-2 px-2">
          <a href="#home">
            <img src={logo} alt="Grammedia Logo" />
          </a>

          <div className="w-[52rem] border-2 border-slate-200"></div>
          {menu.map((item, idx) => {
            const isHomeLink = item.label === "HOME";
            return (
              <a
                key={idx}
                href={isHomeLink ? "#home" : item.link}
                onClick={(e) => {
                  if (!isHomeLink) {
                    e.preventDefault();
                    window.open(item.link, "_blank");
                  }
                  setIsOpen(false); // Close menu on link click
                }}
                className="cursor-pointer flex justify-between px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>
      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center bg-black text-white p-4 z-10">
        <a href="#home">
          <img src={logo} alt="Grammedia Logo" />
        </a>
        <FaBars
          className="cursor-pointer"
          size={24}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-20">
          <FaTimes
            className="absolute top-4 right-4 cursor-pointer"
            size={24}
            onClick={() => setIsOpen(false)}
          />
          {menu.map((item, idx) => {
            const isHomeLink = item.label === "HOME";
            return (
              <a
                key={idx}
                href={isHomeLink ? "#home" : item.link}
                onClick={(e) => {
                  if (!isHomeLink) {
                    e.preventDefault();
                    window.open(item.link, "_blank");
                  }
                  setIsOpen(false); // Close menu on link click
                }}
                className="cursor-pointer my-4 px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};
