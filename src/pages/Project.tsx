import React, { useState, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";

interface Project {
  id: number;
  title: string;
  videoSrc: string;
  link: string;
}

const Projects: React.FC = () => {
  const reels: Project[] = [
    {
      id: 1,
      title: "Reels",
      videoSrc:
        "https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/hormozi-1.mp4",
      link: "https://drive.google.com/drive/folders/1z6sQCVm4bWMFodoepm6gFn2ZNwfsnbUX?usp=sharing",
    },
    {
      id: 2,
      title: "Real Estate",
      videoSrc:
        "https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/real-estate-1.mp4",
      link: "https://drive.google.com/drive/folders/1PNSrCVg3bXE3oIKIXFBovhjJTrllvMaJ?usp=sharing",
    },
    {
      id: 3,
      title: "Podcast",
      videoSrc:
        "https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/podcast-1.mp4",
      link: "https://drive.google.com/drive/folders/1sJUxcPYRW3dsa3KXOCkRhzb9u50-MI8q?usp=drive_link",
    },
    {
      id: 4,
      title: "Faceless",
      videoSrc:
        "https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/faceless-1.mp4",
      link: "https://drive.google.com/drive/folders/1bc09dB7Ce_W2BpQ3lT6Aqrq5x5-0Z9xT?usp=sharing",
    },
    {
      id: 5,
      title: "Cashcow",
      videoSrc:
        "https://grammedia-vids.s3.ap-southeast-2.amazonaws.com/cashcow-1.mp4",
      link: "https://drive.google.com/drive/folders/1ZPMsbiSiCpUyU3mTph3kcjTnwk4UxIH0?usp=drive_link",
    },
  ];

  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlay = (id: number) => {
    if (playingVideoId !== null && playingVideoId !== id) {
      const currentVideo = videoRefs.current[playingVideoId];
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
    }

    setPlayingVideoId(id);
  };

  return (
    <div className="bg-black flex flex-col items-center">
      <h1 className="gradient-text font-bold font-sub xxxs:text-6xl md:text-7xl text-center lg:mt-5 p-1">
        Projects
      </h1>
      <div className="relative w-screen overflow-x-auto mt-5">
        <div className="flex flex-nowrap justify-center items-center space-x-10 min-w-max mt-5 p-5">
          {reels.map((project) => (
            <div className="innerHeight">
              <div
                key={project.id}
                className="bg-reels bg-cover bg-no-repeat w-[16rem] h-[28rem] flex justify-center items-center text-xl text-center rounded-md transition-transform duration-300 transform hover:scale-105 hover:border-white hover:border-4"
              >
                <video
                  className="w-auto h-full object-cover p-2"
                  controls
                  ref={(el) => (videoRefs.current[project.id] = el)}
                  onPlay={() => handlePlay(project.id)}
                >
                  <source src={project.videoSrc} type="video/mp4" />
                </video>
              </div>
              <div className="flex justify-center items-center p-3 ">
                <button className="flex border  text-white border-cyan-300 rounded-md p-2 px-6  hover:bg-cyan-300">
                  <a
                    className="flex justify-center items-center gap-x-3 underline:none hover:no-underline"
                    href={project.link}
                    target="_blank"
                  >
                    {project.title}
                    <FaArrowRight />
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
