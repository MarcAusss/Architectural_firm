"use client";

import { useState, useRef } from "react";

interface BlogCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  extraImages?: string[];
}

function BlogCard({
  image,
  title,
  date,
  description,
  extraImages = [],
}: BlogCardProps) {
  const [hovered, setHovered] = useState(false);
  const [slide, setSlide] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [image, "description", ...extraImages];

  const startSlideshow = () => {
    let current = 0;

    const nextSlide = () => {
      current++;
      if (current < slides.length) {
        setSlide(current);
        timeoutRef.current = setTimeout(nextSlide, 2000);
      }
    };

    timeoutRef.current = setTimeout(nextSlide, 2000);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setSlide(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    startSlideshow();
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setSlide(0);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div
      className="relative w-[600px] h-[500px] overflow-hidden group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              idx === slide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {item === "description" ? (
              <div className="w-full h-full bg-white flex items-center justify-center p-10">
                <p className="text-lg text-black text-center">{description}</p>
              </div>
            ) : (
              <img
                src={item}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Overlay / Bottom Bar */}
      <div
        className={`absolute bottom-0 left-[-5%] w-[110%] p-10 transition-all duration-500 ease-in-out z-20
        ${
          slide === 1
            ? // Special animation for slide 2 (index 1)
              `bg-[#FFFCF4] h-0 origin-bottom ${
                hovered ? "h-full left-0 w-[670px]" : ""
              }`
            : // Normal hover effect for other slides
              `bg-[#FFFCF4] ${
                hovered
                  ? "group-hover:bg-[#0000005b] group-hover:text-white group-hover:w-full group-hover:left-0"
                  : ""
              }`
        }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <p>{date}</p>
          <h1 className="text-3xl">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Header */}
      <div className="bg-about h-[50vh] flex items-center justify-center pb-5">
        <h1 className="text-white text-6xl relative z-20">
          GrandArch Architectural Design Studio
        </h1>
      </div>

      {/* Blog Section */}
      <div className="my-10 max-w-7xl mx-auto">
        <div className="pb-10">
          <div className="gap-4 flex items-center">
            <p className="text-lg">Blog</p>
            <hr className="border w-10" />
          </div>
          <h1 className="text-3xl">Our Blog</h1>
        </div>

        <div className="grid grid-cols-2 gap-x-40 gap-y-10">
          <BlogCard
            image="/img/image-3.png"
            title="Lorem Ipsum"
            date="Architecture - March 10, 2025"
            description="This is an informative text about the architecture project. It replaces the image temporarily."
            extraImages={[
              "/img/image-5.png",
              "/img/image-6.png",
              "/img/image-7.png",
            ]}
          />
          <BlogCard
            image="/img/image-4.png"
            title="Dolor Sit Amet"
            date="Architecture - March 12, 2025"
            description="Another descriptive text goes here, explaining the details and context of the design."
            extraImages={[
              "/img/image-8.png",
              "/img/image-9.png",
              "/img/image-10.png",
            ]}
          />
          <BlogCard
            image="/img/image-5.png"
            title="Modern Design Trends"
            date="Architecture - March 15, 2025"
            description="Exploring the latest modern design innovations for 2025."
            extraImages={[
              "/img/image-3.png",
              "/img/image-4.png",
              "/img/image-6.png",
            ]}
          />
          <BlogCard
            image="/img/image-5.png"
            title="Urban Architecture"
            date="Architecture - March 18, 2025"
            description="Urban development and sustainable city architecture insights."
            extraImages={[
              "/img/image-5.png",
              "/img/image-8.png",
              "/img/image-9.png",
            ]}
          />
          <BlogCard
            image="/img/image-4.png"
            title="Cultural Spaces"
            date="Architecture - March 20, 2025"
            description="Designing cultural and community spaces for public engagement."
            extraImages={[
              "/img/image-4.png",
              "/img/image-5.png",
              "/img/image-10.png",
            ]}
          />
          <BlogCard
            image="/img/image-3.png"
            title="Eco-Friendly Builds"
            date="Architecture - March 22, 2025"
            description="Green building practices for a sustainable future."
            extraImages={[
              "/img/image-3.png",
              "/img/image-6.png",
              "/img/image-7.png",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
