'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeLanding() {
  const containerRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <div className="bg-landing relative min-h-screen">
      <div ref={containerRef} className="absolute left-40 bottom-56 z-20">
        <h1 className="text-white text-xl mb-5">
          Welcome to GrandArchh Design Studio
        </h1>
        <h2 className="text-white text-3xl w-[50rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas labore laborum amet cumque temporibus saepe rerum atque enim dicta. Soluta.
        </h2>
      </div>
    </div>
  );
}
