'use client';

import React from 'react';

export default function AboutPageAbout() {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }

  const services = [
    {
      title: 'Web Development',
      description:
        'We build responsive, modern websites with great performance and user experience.',
    },
    {
      title: 'UI/UX Design',
      description:
        'Crafting visually appealing and intuitive designs tailored to your brand identity.',
    },
    {
      title: 'Digital Strategy',
      description:
        'We help you grow your online presence and reach your audience effectively.',
    },
    {
      title: 'Digital Strategy',
      description:
        'We help you grow your online presence and reach your audience effectively.',
    },
  ];

  return (
    <div className="mb-20 mt-64">
      <div className=" bg-[#F5F3EF] relative z-10 pb-10">
        <div className="relative top-[-7rem] max-w-[100rem] mx-auto flex justify-between gap-10 items-start">
            {services.map((service) => (
            <div
                onMouseMove={handleMouseMove}
                className="service-card group relative h-full w-full p-10 overflow-hidden transition-all duration-500 bg-[#FFFCF4]"
            >
                <div className="relative z-10">
                    <h1 className="text-2xl font-semibold text-center mb-10">{service.title}</h1>
                    <p className="text-lg">{service.description}</p>
                </div>
            </div>
            ))}
        </div>

        <div className="pb-16">
            <div className="flex max-w-[90rem] mx-auto h-full justify-around items-center">
                <div className="relative">
                    <img src="/img/image-5.png" alt="" className="w-[450px] h-[430px]" />
                    <div className="bg-gray-200 absolute px-10 py-2 w-fit right-10 bottom-[-25px]">
                        <h1 className="text-2xl">Manila Office</h1>
                    </div>
                    <div className="h-[400px] w-[450px] bg-[transparent] border-2 border-black absolute top-20 left-[-68] z-[-9]"/>
                    <div className="h-[390px] w-[440px] bg-[transparent] border-2 border-black absolute top-21 left-[-64] z-[-9]"/>
                </div>
                <div className="flex flex-col h-full justify-between gap-6">
                    <h1 className="text-3xl">About GrandArch</h1>
                    <p className="w-[40rem] text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi consectetur porro dolorum ullam repudiandae cumque aperiam, officia magnam nobis, nemo voluptas ipsam et ea vero ipsum? Fugit commodi quae enim quaerat ratione consequuntur nisi harum itaque, ex, doloremque non!
                    </p>
                    <a href="" className="">
                        Learn more
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
