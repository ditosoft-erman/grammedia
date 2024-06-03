import React from 'react';
import videoSource from '../assets/video/promotional.mp4';

export const PromotionalVideo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="max-w-6xl max-h-5xl">
        <video autoPlay controls className="w-full h-full object-contain">
          <source src={videoSource} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default PromotionalVideo;
