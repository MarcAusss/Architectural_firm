export default function ProjectGridprojects() {
  const gridItems = [
    {
      id: 1,
      colSpan: 3,
      rowSpan: 5,
      imgSrc: "/img/image.png",
      title: "Title 1",
      description: "Description for item 1. Lorem ipsum dolor sit amet.",
      link: "/link1",
    },
    {
      id: 2,
      colSpan: 4,
      rowSpan: 5,
      imgSrc: "/img/image-5.png",
      title: "Title 2",
      description: "Description for item 2. Consectetur adipisicing elit.",
      link: "/link2",
    },
    {
      id: 3,
      colSpan: 3,
      rowSpan: 6,
      imgSrc: "/img/image-4.png",
      title: "Title 3",
      description: "Description for item 3. Ex, perspiciatis.",
      link: "/link3",
    },
    {
      id: 4,
      colSpan: 2,
      rowSpan: 5,
      imgSrc: "/img/image-3.png",
      title: "Title 4",
      description: "Description for item 4. Dolor sit amet.",
      link: "/link4",
    },
    {
      id: 5,
      colSpan: 3,
      rowSpan: 5,
      imgSrc: "/img/image-2.png",
      title: "Title 5",
      description: "Description for item 5. Adipisicing elit.",
      link: "/link5",
    },
    {
      id: 6,
      colSpan: 2,
      rowSpan: 5,
      imgSrc: "/img/image-1.png",
      title: "Title 6",
      description: "Description for item 6. Lorem ipsum dolor.",
      link: "/link6",
    },
    {
      id: 7,
      colSpan: 3,
      rowSpan: 4,
      imgSrc: "/img/image-1.png",
      title: "Title 7",
      description: "Description for item 7. Dolor sit amet consectetur.",
      link: "/link7",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <h1 className="text-center text-4xl font-semibold mb-10">Lorem Ipsum</h1>

      <div className="flex justify-center">
        <div className="grid h-[auto] w-[90%] gap-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10">
          {gridItems.map(({ id, colSpan, rowSpan, imgSrc, title, description, link }) => (
            <div
              key={id}
              style={{
                gridColumn: `span ${colSpan} / span ${colSpan}`,
                gridRow: `span ${rowSpan} / span ${rowSpan}`,
              }}
              className="relative overflow-hidden group rounded-xl shadow-lg"
            >
              <img
                src={imgSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-center mb-4 text-sm">{description}</p>
                <a
                  href={link}
                  className="underline italic text-sm hover:text-gray-300 transition-colors"
                >
                  Click here to learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
