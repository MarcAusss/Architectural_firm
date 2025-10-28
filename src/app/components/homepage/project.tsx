import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  images: string[];
  link: string;
}

export default function ProjectLanding() {
  //------------- Carousel: Project Data -------------
  const projects: Project[] = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A cutting-edge solution designed for modern challenges in tech.",
      image: "/img/image-1.png",
      images: ["/img/image-1.png", "/img/image-2.png", "/img/image-3.png"],
      link: "#",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "A creative and collaborative project that changed how we interact.",
      image: "/img/image.png",
      images: ["/img/image.png", "/img/image-1.png", "/img/image-3.png"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Focused on innovation in sustainability and green technology.",
      image: "/img/image-3.png",
      images: ["/img/image-3.png", "/img/image.png", "/img/image-1.png"],
      link: "#",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "An intuitive AI-powered platform revolutionizing workflows.",
      image: "/img/image-4.png",
      images: ["/img/image-4.png", "/img/image-5.png", "/img/image-6.png"],
      link: "#",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Empowering connectivity through smart decentralized networks.",
      image: "/img/image-5.png",
      images: ["/img/image-5.png", "/img/image-6.png", "/img/image-1.png"],
      link: "#",
    },
    {
      id: 6,
      title: "Project Zeta",
      description: "Bringing immersive experiences through VR and AR integration.",
      image: "/img/image-6.png",
      images: ["/img/image-6.png", "/img/image-4.png", "/img/image-5.png"],
      link: "#",
    },
  ];

  //------------- Carousel: State -------------
  const [currentSlide, setCurrentSlide] = useState(0);
  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(projects.length / projectsPerSlide);

  //------------- Carousel: Button Handlers -------------
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  //------------- Carousel: Visible Projects -------------
  const visibleProjects = projects.slice(
    currentSlide * projectsPerSlide,
    currentSlide * projectsPerSlide + projectsPerSlide
  );

  return (
    <div className="my-20">
      <div className="max-w-[90rem] mx-auto mb-6">
        <div className="gap-4 flex items-center">
          <p className="text-lg">Some of our works</p>
          <hr className="border w-10" />
        </div>
        <h1 className="text-3xl">Our Projects</h1>
      </div>

      <div className="max-w-[93rem] mx-auto">
        {/*------------- Carousel: Card Container -------------*/}
        <div className="flex gap-3 w-full h-[500px] relative overflow-hidden">
          <div
            key={currentSlide}
            className="flex gap-3 w-full h-full absolute inset-0 transition-opacity duration-700 opacity-100 animate-fade-in"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/*------------- Carousel: Navigation Controls -------------*/}
        <div className="flex justify-end w-full gap-20 mt-10 items-center">
          <div className="flex gap-10">
            <button onClick={handlePrev} className="border h-16 w-16 cursor-pointer p-4">
              <img src="/img/Up arrow.png" alt="Previous" />
            </button>
            <button onClick={handleNext} className="border h-16 w-16 cursor-pointer p-4">
              <img src="/img/Up arrow-1.png" alt="Next" />
            </button>
          </div>
          <div className="flex gap-3">
            <h1 className="text-3xl">
              {String(currentSlide + 1).padStart(2, "0")}
            </h1>
            <span className="text-lg">/{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

//------------- Project Card Component -------------
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    if (!hovered) return;

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % project.images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [hovered, project.images.length]);

  return (
    <div
      className={`
        relative h-full overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ease-in-out
        group/item
        group-hover:w-[450px]
        hover:!w-[600px]
        w-[500px]
      `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSlideIndex(0);
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      <div className="w-full h-full relative">
        {project.images.map((img: string, idx: number) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} slide ${idx}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              hovered && slideIndex === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[#0000003b] group-hover/item:bg-opacity-70 transition-all duration-500" />

      <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-3xl group-hover/item:opacity-0 transition-opacity duration-300">
        {project.title}
      </h1>

      <div className="absolute inset-0 flex justify-center items-end opacity-0 hover:opacity-100 transition-opacity duration-500 px-6 pb-10 text-white">
        <div>
          <h1 className="text-center text-3xl mb-2">{project.title}</h1>
          <hr className="w-full border border-white mb-2" />
          <div className="flex justify-between gap-4 text-sm">
            <p className="w-2/3">{project.description}</p>
            <a href={project.link} className="underline whitespace-nowrap">
              Learn more...
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
