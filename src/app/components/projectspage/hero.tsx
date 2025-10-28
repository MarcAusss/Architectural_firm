"use client";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectHero() {
  const main_container = useRef<HTMLDivElement>(null);
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
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (main_container.current) {
      gsap.fromTo(
        main_container.current,
        {
          scale: 1,
          borderRadius: "0px",
          margin: "0px",
        },
        {
          scale: 0.9,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: main_container.current,
            start: "top top",
            end: "+=100",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div ref={main_container} className="bg-project flex items-center justify-center">
      <div ref={containerRef} className="" >
        <h1 className="text-6xl text-white relative z-20">
          GrandArch Architectural Design Studio
        </h1>
      </div>
    </div>
  );
}
