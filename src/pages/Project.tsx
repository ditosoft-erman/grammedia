import React, { useState, useRef } from "react";
import vidReel from "../../src/assets/reels/hormozi-1.mp4";
import vidReel2 from "../../src/assets/reels/hormozi-2.mp4";
import vidReel3 from "../../src/assets/reels/hormozi-3.mp4";
import vidReel4 from "../../src/assets/reels/hormozi-4.mp4";

interface Project {
  id: number;
  title: string;
  videoSrc: string;
}

const Projects: React.FC = () => {
  const projectData: Project[] = [
    { id: 1, title: "Project 1", videoSrc: vidReel },
    { id: 2, title: "Project 2", videoSrc: vidReel2 },
    { id: 3, title: "Project 3", videoSrc: vidReel3 },
    { id: 4, title: "Project 4", videoSrc: vidReel4 },
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
      <h1 className="gradient-text font-bold font-sub xxxs:text-3xl md:text-7xl text-center mb-5">
        Projects
      </h1>
      <div className="relative w-screen overflow-x-auto mt-5">
        <div className="flex flex-nowrap space-x-4 min-w-max">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-reels bg-cover bg-no-repeat flex justify-center items-center text-xl text-center rounded-md transition-transform duration-300 transform hover:scale-105 hover:border-white hover:border-4 w-[20rem] h-[35rem]"
            >
              <video
                className="w-full h-full object-cover"
                controls
                ref={(el) => (videoRefs.current[project.id] = el)}
                onPlay={() => handlePlay(project.id)}
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
