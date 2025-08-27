"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="w-full flex justify-center lg:px-4">
      <div
        className="relative w-full max-w-[1000px] h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
        onClick={handlePlayPause}
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dx7uxroyb/video/upload/v1756310413/promo_tnwrkg.mp4"
          className="w-full h-full object-cover"
          controls={false}
          loop
          preload="metadata"
          playsInline
          poster="https://res.cloudinary.com/dx7uxroyb/video/upload/v1756310413/promo_tnwrkg.jpg"
        />

        {!isPlaying && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300"
          >
            <div className="rounded-full md:p-[8px] p-[6px] ring-[1.5px] ring-white flex flex-row items-center justify-center">
              <div className="bg-white rounded-full md:p-4 p-3 shadow-lg">
                <Play
                  className="md:w-7 md:h-7 w-6 h-6 ml-[1.5px] text-black"
                  fill="#000000"
                />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
