'use client';

import React from 'react';
// import './HomeServices.css';

export default function HomeServices() {
  // Handle background mouse position
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty('--x', `${x}px`);
    target.style.setProperty('--y', `${y}px`);
  }

  // Array of unique services
  const services = [
    {
      number: '01',
      title: 'Web Development',
      description:
        'We build responsive, modern websites with great performance and user experience.',
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description:
        'Crafting visually appealing and intuitive designs tailored to your brand identity.',
    },
    {
      number: '03',
      title: 'Digital Strategy',
      description:
        'We help you grow your online presence and reach your audience effectively.',
    },
  ];

  return (
    <div className="my-20">
      <div className="max-w-[90rem] mx-auto mb-6">
        <div className="gap-4 flex items-center">
          <p className="text-lg">What we do</p>
          <hr className="border w-10" />
        </div>
        <h1 className="text-3xl">Our Services</h1>
      </div>

      <div className="max-w-[97rem] mx-auto flex justify-between gap-10 items-start">
        {services.map((service) => (
          <div
            key={service.number}
            onMouseMove={handleMouseMove}
            className="service-card group relative h-full w-full p-10 overflow-hidden transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold">{service.title}</h1>
                <h2 className="text-5xl font-extrabold text-gray-300">
                  {service.number}
                </h2>
              </div>
              <hr className="border border-gray-300 mb-4 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-lg leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
