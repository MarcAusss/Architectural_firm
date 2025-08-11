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
    <div>
      <div className="h-[40rem] w-full">
        <h1 className="text-center text-3xl my-10">Lorem Ipsum</h1>

        <div className="flex h-full w-full items-center justify-center">
          <div className="grid h-full w-full gap-4 p-2 grid-cols-10 grid-rows-10">
            {gridItems.map(({ id, colSpan, rowSpan, imgSrc, title, description, link }) => (
              <div
                key={id}
                className={`col-span-${colSpan} row-span-${rowSpan} bg-gray-200 relative overflow-hidden group flex items-center justify-center`}
                >
                <img
                    src={imgSrc}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="hovered absolute w-full h-full top-0 left-0 bg-[#00000080] bg-opacity-70 text-white flex flex-col items-center justify-between p-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                    <h1 className="text-2xl">{title}</h1>
                    <h2 className="text-xl">{description}</h2>
                    <a href={link} className="underline italic">
                    Click here to learn more
                    </a>
                </div>
                </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
