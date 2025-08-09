'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HomeLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationDone, setAnimationDone] = useState(false);

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

    // Auto-hide slices after animation
    const timer = setTimeout(() => {
      setAnimationDone(true);
    }, 1500); // match your slice animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      {!animationDone ? (
        // Sliced background during animation
        <div className="absolute inset-0 z-0">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`absolute w-full h-1/4 bg-no-repeat bg-cover slice slice-${i}`}
              style={{
                top: `${i * 25}%`,
                backgroundImage: "url('/img/Group 8.png')",
                backgroundSize: `100% ${4 * 100}%`,
                backgroundPosition: `center ${i * 33.3333}%`,
              }}
            />
          ))}
        </div>
      ) : (
        // Full image after animation
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"  
          style={{
            backgroundImage: "url('/img/Group 8.png')",
          }}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/30 to-black/70" />

      {/* Text content */}
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
