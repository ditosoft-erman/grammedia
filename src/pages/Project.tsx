import React, { useState, useRef } from "react";
import vidReel from "../../src/assets/reels/hormozi-1.mp4";
import vidReel2 from "../../src/assets/reels/hormozi-2.mp4";
import vidReel3 from "../../src/assets/reels/hormozi-3.mp4";
import vidReel4 from "../../src/assets/reels/hormozi-4.mp4";
import vidEstate from "../../src/assets/real-estate/real-estate-1.mp4";
import vidEstate2 from "../../src/assets/real-estate/real-estate-2.mp4";
import vidEstate3 from "../../src/assets/real-estate/real-estate-3.mp4";
import vidEstate4 from "../../src/assets/real-estate/real-estate-4.mp4";
import podcast1 from "../../src/assets/podcast/podcast-1.mp4";
import podcast2 from "../../src/assets/podcast/podcast-2.mp4";
import podcast3 from "../../src/assets/podcast/podcast-3.mp4";
import podcast4 from "../../src/assets/podcast/podcast-4.mp4";
import faceless1 from "../../src/assets/faceless/faceless-1.mp4";
import faceless2 from "../../src/assets/faceless/faceless-2.mp4";
import faceless3 from "../../src/assets/faceless/faceless-3.mp4";
import faceless4 from "../../src/assets/faceless/faceless-4.mp4";

interface Project {
  id: number;
  title: string;
  videoSrc: string;
}

const Projects: React.FC = () => {
  const reels: Project[] = [
    { id: 1, title: "Project 1", videoSrc: vidReel },
    { id: 2, title: "Project 2", videoSrc: vidReel2 },
    { id: 3, title: "Project 3", videoSrc: vidReel3 },
    { id: 4, title: "Project 4", videoSrc: vidReel4 },
  ];

  const estate: Project[] = [
    { id: 5, title: "Project 5", videoSrc: vidEstate },
    { id: 6, title: "Project 6", videoSrc: vidEstate2 },
    { id: 7, title: "Project 7", videoSrc: vidEstate3 },
    { id: 8, title: "Project 8", videoSrc: vidEstate4 },
  ];

  const podcast: Project[] = [
    { id: 9, title: "Project 5", videoSrc: podcast1 },
    { id: 10, title: "Project 6", videoSrc: podcast2 },
    { id: 11, title: "Project 7", videoSrc: podcast3 },
    { id: 12, title: "Project 8", videoSrc: podcast4 },
  ];
  const faceless: Project[] = [
    { id: 13, title: "Project 5", videoSrc: faceless1 },
    { id: 14, title: "Project 6", videoSrc: faceless2 },
    { id: 15, title: "Project 7", videoSrc: faceless3 },
    { id: 16, title: "Project 8", videoSrc: faceless4 },
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
      <h1 className="gradient-text font-bold font-sub xxxs:text-3xl md:text-7xl text-center mt-5 p-1">
        Projects
      </h1>
      <div className="relative w-screen overflow-x-auto mt-5">
        <div className="flex flex-nowrap justify-center items-center  space-x-10 min-w-max mt-5">
          <h1 className="text-left gradient-text font-bold font-sub text-3xl">
            Reels
          </h1>
          {reels.map((project) => (
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
          ))}
        </div>
        <div className="flex flex-nowrap justify-center items-center space-x-10 min-w-max mt-5 p-5">
          <h1 className="text-left gradient-text font-bold font-sub text-3xl">
            Real-Estate
          </h1>
          {estate.map((project) => (
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
          ))}
        </div>
        <div className="flex flex-nowrap justify-center items-center space-x-10 min-w-max mt-5 p-5">
          <h1 className="text-left gradient-text font-bold font-sub text-3xl">
            Podcast
          </h1>
          {podcast.map((project) => (
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
          ))}
        </div>
        <div className="flex flex-nowrap justify-center items-center space-x-10 min-w-max mt-5 p-5">
          <h1 className="text-left gradient-text font-bold font-sub text-3xl">
            Faceless
          </h1>
          {faceless.map((project) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
