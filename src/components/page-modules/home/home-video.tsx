'use client';

import { useEffect, useRef, useState } from "react";
import play from "@/assets/svgs/play.svg";
import Image from "next/image";
import { cn } from "@/utils/tailwind";

const VideoBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isVideoVisible, setIsVideoVisible] = useState<boolean>(false);

  const handleVideoClick = (): void => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setIsClicked(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsClicked(true);
    }
  };

  useEffect(() => {
    const currentContainer = containerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!isClicked) {
          if (entry.isIntersecting) {
            videoRef.current?.play();
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        }

        if (entry.isIntersecting) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isClicked]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[50vh] sm:h-[60vh] mb-7 overflow-hidden group"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src="/videos/concert.mp4"
        muted
        loop
        playsInline
        className={cn(
          "w-full h-full object-cover cursor-pointer transition-opacity duration-1000 ease-in-out",
          isVideoVisible ? "opacity-100" : "opacity-0"
        )}
      />

      {!isPlaying && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-1000 ease-in-out",
            isVideoVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="bg-[#242424] h-12 w-12 rounded-full shadow-lg grid place-items-center pl-1">
            <Image src={play} height={20} width={20} alt="play" />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoBanner;
