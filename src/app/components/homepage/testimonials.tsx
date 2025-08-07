"use client";
import { useState } from "react";

interface Testimonials {
  id: number;
  description: string;
  name: string;
  image: string;
}

export default function HomeTestimonials() {
  // Carousel data
  const testimonials: Testimonials[] = [
    {
      id: 1,
      description: "A cutting-edge solution designed for modern challenges in tech.",
      name: "Alice Johnson",
      image: "/img/image-1.png",
    },
    {
      id: 2,
      description: "A creative and collaborative project that changed how we interact.",
      name: "Brian Smith",
      image: "/img/image.png",
    },
    {
      id: 3,
      description: "Focused on innovation in sustainability and green technology.",
      name: "Carla De Leon",
      image: "/img/image-3.png",
    },
    {
      id: 4,
      description: "An intuitive AI-powered platform revolutionizing workflows.",
      name: "Daniel King",
      image: "/img/image-4.png",
    },
    {
      id: 5,
      description: "Empowering connectivity through smart decentralized networks.",
      name: "Emily Davis",
      image: "/img/image-5.png",
    },
    {
      id: 6,
      description: "Bringing immersive experiences through VR and AR integration.",
      name: "Frankie Chan",
      image: "/img/image-6.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 1;
  const totalSlides = Math.ceil(testimonials.length / projectsPerSlide);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentSlide * projectsPerSlide,
    currentSlide * projectsPerSlide + projectsPerSlide
  );

  return (
    <div className="relative">
        <div className="bg-testimonials inset-0 z-0" />
        <div className="absolute flex top-46 left-40">
            <div className="relative z-10 flex flex-col md:flex-row items-end gap-10">
                <div className="bg-[#f5f3ef] h-[477px] w-full max-w-[477px] p-10">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <h1 className="text-center text-3xl font-bold">Testimonials</h1>
                            <hr className="my-4 border border-gray-300" />

                            {visibleTestimonials.map((testimonial) => (
                            <div key={testimonial.id}>
                                <img src="/img/“.png" alt="quote" className="mb-4" />
                                <p className="text-xl px-2 text-center">{testimonial.description}</p>
                                    <div className="my-5 flex items-center justify-center gap-4">
                                    <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 object-cover rounded-full"
                                    />
                                    <h2 className="text-xl font-medium">{testimonial.name}</h2>
                                </div>
                            </div>
                            ))}
                        </div>

                        <div className="flex justify-center gap-2 items-center">
                            <h1 className="text-3xl">
                                {String(currentSlide + 1).padStart(2, "0")}
                            </h1>
                            <span className="text-lg">/{String(totalSlides).padStart(2, "0")}</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center md:justify-start items-center gap-10 mt-10">
                    <button
                        onClick={handlePrev}
                        className="border cursor-pointer h-16 w-16 flex items-center justify-center p-4"
                    >
                        <img src="/img/Up arrow.png" alt="Previous" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="border cursor-pointer h-16 w-16 flex items-center justify-center p-4"
                    >
                        <img src="/img/Up arrow-1.png" alt="Next" />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}
