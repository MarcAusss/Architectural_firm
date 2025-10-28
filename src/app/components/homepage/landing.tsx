'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const main_container = useRef<HTMLDivElement>(null);
  const gradient = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: 'power2.out', delay: 0.3 }
      );
    }

    if (main_container.current && videoRef.current && gradient.current) {
      gsap.fromTo(
        [videoRef.current, gradient.current],
        {
          scale: 1,
          borderRadius: '0px',
          margin: '0px',
        },
        {
          scale: 0.90,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: main_container.current,
            start: 'top top',
            end: '+=100',
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={main_container}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/video/Architectural animation for the residence in New Zealand ｜ 3D Visualization for Lamont&Co and JASMAX.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Gradient */}
      <div ref={gradient} className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70 rounded-[15px]" />

      {/* Text Content */}
      <div ref={containerRef} className="absolute left-40 bottom-56 z-20">
        <h1 className="text-white text-xl mb-5">
          Welcome to GrandArchh Design Studio
        </h1>
        <h2 className="text-white text-3xl w-[50rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore
          laborum amet cumque temporibus saepe rerum atque enim dicta. Soluta.
        </h2>
      </div>
    </div>
  );
}
