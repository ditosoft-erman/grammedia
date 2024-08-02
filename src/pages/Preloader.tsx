import { FC, useState, useEffect } from "react";
import grammedia from "../assets/grammedia-logo.png";
import { motion, useAnimation } from "framer-motion";

export const Preloader: FC = () => {
  const controls = useAnimation();
  const [direction, setDirection] = useState<number>(1);

  useEffect(() => {
    controls.start({
      rotate: [null, 360 * direction],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      },
    });

    setTimeout(() => {
      setDirection(-5 * direction);
    }, 3000);
  }, [direction, controls]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -1000 }}
      transition={{ duration: 0.45, delay: 3 }}
      className="bg-[#000000] w-full h-screen grid place-content-center"
    >
      <motion.img
        animate={{
          transition: { duration: 4.01, repeat: Infinity, ease: "linear" },
          scale: [1, 1.2, 1], // Zoom in (1.2) and then back to normal (1)
        }}
        src={grammedia}
        alt="Grammedia"
        className="w-auto h-auto m-auto"
      />

      <div className="flex  xxxs:gap-1 md:flex-row md:gap-2 items-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="font-span text-4xl mt-4 text-blue-600"
        >
          GRAM
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="font-span text-4xl mt-4 text-white"
        >
          MEDIA
        </motion.h1>
      </div>
    </motion.div>
  );
};
