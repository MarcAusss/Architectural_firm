"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";

export default function ProjectsProject1() {
  const slides = [
    {
      id: 1,
      title1: "Lorem ipsum",
      title2: "Lorem",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, ab facilis expedita dolor id deleniti, ipsam hic mollitia necessitatibus delectus aliquid velit porro, perspiciatis est! Est autem et quis repellat!",
      img: "/img/image 16.png",
    },

    {
      id: 2,
      title1: "Dolor sit amet",
      title2: "Consectetur",
      desc: "Voluptates maxime quas provident laboriosam perferendis perspiciatis beatae...",
      img: "/img/image-1.png",
    },
    {
      id: 3,
      title1: "Aliquam vitae",
      title2: "Egestas",
      desc: "Earum, ipsa minima dolorum ut incidunt fugiat, voluptates aliquam perspiciatis...",
      img: "/img/image-3.png",
    },
    {
      id: 4,
      title1: "Vivamus vel",
      title2: "Ultrices",
      desc: "Blanditiis quam, soluta debitis repellat maiores delectus voluptates iste...",
      img: "/img/image-5.png",
    },
  ];

  const [current, setCurrent] = useState(0);
  const topLinks = useRef(null);
  const leftContent = useRef(null);
  const imageRef = useRef(null);
  const statsRef = useRef(null);

  const animateSlide = (direction = 1) => {
    const tl = gsap.timeline();

    tl.fromTo(
      topLinks.current,
      { x: direction * -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        leftContent.current,
        { x: direction * 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { x: direction * -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        statsRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.5"
      );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    animateSlide(1);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    animateSlide(-1);
  };

  return (
    <div className="relative">
      <div
        className="px-[10%] py-5 flex w-full items-center border-b-2 border-[#ccc]"
        ref={topLinks}
      >
        <div className="flex gap-10 w-full items-center">
          <a href="" className="text-xl">
            {" "}
            lorem lorem{" "}
          </a>
          <a href="" className="text-xl">
            {" "}
            lorem lorem{" "}
          </a>
          <a href="" className="text-xl">
            {" "}
            lorem lorem{" "}
          </a>
        </div>
        <div className="flex justify-end w-full gap-14 items-center">
          <div className="flex gap-10">
            <button
              onClick={prevSlide}
              className="border h-12 rounded-full w-12 cursor-pointer p-4"
            >
              <img src="/img/Up arrow.png" alt="Previous" />
            </button>
            <button
              onClick={nextSlide}
              className="border h-12 rounded-full w-12 cursor-pointer p-4"
            >
              <img src="/img/Up arrow-1.png" alt="Next" />
            </button>
          </div>
          <div className="flex gap-3">
            <h1 className="text-2xl">
              {String(slides[current].id).padStart(2, "0")}
            </h1>
            <span className="text-md">
              / {String(slides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-center w-full gap-10 mt-10">
        <div className="w-full ml-36" ref={leftContent}>
          <h2 className="text-2xl">
            {String(slides[current].id).padStart(2, "0")}
          </h2>
          <div className="flex items-start gap-5">
            <h1 className="text-2xl">{slides[current].title1}</h1>
            <span className="text-4xl">
              <h1>{slides[current].title2}</h1>
            </span>
          </div>
          <h2 className="mt-5 w-3/4 text-xl">{slides[current].desc}</h2>
          <a href="" className="mt-5 flex items-center gap-2">
            Lorem ipsum
            <img src="/img/Up arrow-1.png" alt="" className="w-10" />
          </a>
        </div>

        <div className="w-3/4" ref={imageRef}>
          <img
            src={slides[current].img}
            alt=""
            className="w-full lg:h-[662px]"
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="flex gap-7 justify-evenly mx-20 mt-5" ref={statsRef}>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="bg-[#FFFCF4] p-7 flex items-center gap-4">
              <h1 className="text-4xl">10</h1>
              <div>
                <h1 className="text-xl">lorem</h1>
                <h2 className="text-xl">lorem ipsum dolor</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
