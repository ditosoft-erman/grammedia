import React, { useState, useRef } from "react";
import vidReel from "../../src/assets/reels/hormozi.mp4";
// import vidReel2 from "../../src/assets/reels/hormozi-2.mp4";
// import vidReel3 from "../../src/assets/reels/hormozi-3.mp4";
import vidReel4 from "../../src/assets/reels/hormozi-4.mp4";

interface Project {
  id: number;
  title: string;
  videoSrc: string;
}

const Projects: React.FC = () => {
  const projectData: Project[] = [
    { id: 1, title: "Project 1", videoSrc: vidReel },
    // { id: 2, title: "Project 2", videoSrc: vidReel2 },
    // { id: 3, title: "Project 3", videoSrc: vidReel3 },
    { id: 4, title: "Project 4", videoSrc: vidReel4 },
  ];

  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlay = (id: number) => {
    // Check if there is a currently playing video and it's not the one being played
    if (playingVideoId !== null && playingVideoId !== id) {
      const currentVideo = videoRefs.current[playingVideoId];
      if (currentVideo) {
        currentVideo.pause(); // Pause the current video
        currentVideo.currentTime = 0; // Reset the current video to the beginning
      }
    }
  
    // Update the state to indicate which video is currently playing
    setPlayingVideoId(id);
  };
``  

  return (
    <div className="bg-black flex flex-col">
      <h1 className="gradient-text font-bold font-sub xxxs:text-3xl md:text-7xl text-center">
        Projects
      </h1>
      <div className="flex md:flex-wrap justify-center mt-5 items-center h-screen relative overflow-x-auto">
        <div className="flex md:flex-wrap flex-nowrap xxxs:space-x-2 sm:space-x-4">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-reels bg-contain bg-no-repeat w-[15rem] h-[26rem] flex justify-center items-center text-xl text-center rounded-md m-2 transition-transform duration-300 transform hover:scale-105 hover:border-white hover:border-4"
            >
              <video
                className="w-[12.5rem] h-[21rem]"
                controls
                ref={(el) => (videoRefs.current[project.id] = el)}
                onPlay={() => handlePlay(project.id)}
              >
                <source src={project.videoSrc} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
        
        {/* Repeat similar blocks here if needed */}
      </div>
    </div>
  );
};

export default Projects;
