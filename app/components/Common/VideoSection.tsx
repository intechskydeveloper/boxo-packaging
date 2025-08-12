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
    <div className="w-full flex justify-center px-4">
      <div
        className="relative w-full max-w-[1200px] rounded-lg overflow-hidden"
        onClick={handlePlayPause}
      >
        <video
          ref={videoRef}
          src="/videos/promo.mp4"
          className="w-full h-auto"
          controls={false}
        />

        {!isPlaying && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePlayPause();
            }}
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
          >
            <div className="bg-white rounded-full p-4 shadow-lg">
              <Play className="w-10 h-10 text-black" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
