import { FC, useState, useEffect } from "react";
import menu from "../data/menu.json";
import { motion, useAnimation } from "framer-motion";
import logo from "../assets/grammedia-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar: FC = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);

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

  // const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   setIsOpen(false);
  // };

  // const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 2450, behavior: "smooth" });
  //   setIsOpen(false);
  // };

  // const handleTestimonyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 3870, behavior: "smooth" });
  //   setIsOpen(false);
  // };

  // const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   window.scrollTo({ top: 5670, behavior: "smooth" });
  //   setIsOpen(false);
  // };
  const handleScrollToSection = (id: string, offset: number = 0) => {
    const section = document.querySelector(id);

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      // Scroll to the section with an offset
      window.scrollTo({
        top: sectionTop - offset,
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleScrollToSection("#project", -150);
    setIsOpen(false);
  };

  const handleTestimonyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleScrollToSection("#testimonials");
    setIsOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleScrollToSection("#contact", -55);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center relative z-50">
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.64,
        }}
        className="font-sub text-white bg-black  md:block fixed z-10 cursor-pointer w-full h-[5.5rem] pr-2 pt-2"
      >
        <div className="flex justify-center gap-4 items-center py-2 px-2">
          <a href="#home" onClick={handleHomeClick}>
            <img src={logo} alt="Grammedia Logo" />
          </a>

          <div className="w-[52rem] border-2 border-slate-200"></div>
          {menu.map((item, idx) => {
            const isHomeLink = item.label === "HOME";
            const isProjectsLink = item.label === "PROJECTS";
            const isTestimonyLink = item.label === "TESTIMONY";
            const isContactLink = item.label === "CONTACTS";
            return (
              <a
                key={idx}
                href={
                  isHomeLink
                    ? "#home"
                    : isProjectsLink
                    ? "#project"
                    : isTestimonyLink
                    ? "#testimonials"
                    : isContactLink
                    ? "#contacts"
                    : item.link
                }
                onClick={
                  isHomeLink
                    ? handleHomeClick
                    : isProjectsLink
                    ? handleProjectsClick
                    : isTestimonyLink
                    ? handleTestimonyClick
                    : isContactLink
                    ? handleContactClick
                    : (e) => {
                        if (!item.link.startsWith("#")) {
                          e.preventDefault();
                          window.open(item.link, "_blank");
                        } else {
                          setIsOpen(false);
                        }
                      }
                }
                className="cursor-pointer flex justify-between px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      <div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center bg-black text-white p-4 z-10">
        <a href="#home" onClick={handleHomeClick}>
          <img src={logo} alt="Grammedia Logo" />
        </a>
        <FaBars
          className="cursor-pointer"
          size={24}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full bg-black text-white transition-transform duration-200 ease-in-out ${
          isOpen ? "translate-x-0 opacity-90" : "translate-x-full opacity-0"
        } w-3/4 z-10`}
      >
        <FaTimes
          className="absolute top-4 right-4 cursor-pointer"
          size={34}
          onClick={() => setIsOpen(false)}
        />
        <div className="flex flex-col items-center justify-center h-full">
          {menu.map((item, idx) => {
            const isHomeLink = item.label === "HOME";
            const isProjectsLink = item.label === "PROJECTS";
            const isTestimonyLink = item.label === "TESTIMONY";
            const isContactLink = item.label === "CONTACTS";
            return (
              <a
                key={idx}
                href={
                  isHomeLink
                    ? "#home"
                    : isProjectsLink
                    ? "#project"
                    : isTestimonyLink
                    ? "#testimonial"
                    : isContactLink
                    ? "#contacts"
                    : item.link
                }
                onClick={
                  isHomeLink
                    ? handleHomeClick
                    : isProjectsLink
                    ? handleProjectsClick
                    : isTestimonyLink
                    ? handleTestimonyClick
                    : isContactLink
                    ? handleContactClick
                    : (e) => {
                        if (!item.link.startsWith("#")) {
                          e.preventDefault();
                          window.open(item.link, "_blank");
                        } else {
                          setIsOpen(false);
                        }
                      }
                }
                className="cursor-pointer flex justify-between px-3 py-2 hover:duration-200 hover:bg-zinc-950 rounded-full hover:no-underline hover:text-blue-700"
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
