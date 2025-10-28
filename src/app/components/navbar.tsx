'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolledUp, setScrolledUp] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setIsTop(currentY < 10);
      setScrolledUp(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        'fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-20 py-3 flex justify-between items-center',
        scrolledUp ? 'translate-y-0' : '-translate-y-full',
        isTop
          ? 'bg-transparent text-white'
          : 'bg-[#F3ECDD] text-black shadow-md'
      )}
    >
      <img
        src="/img/305050137_590605822773619_5303982577630322558_n-removebg-preview 1.png"
        alt="Logo"
        className="w-20"
      />

      <div className="flex gap-10">
        {links.map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'relative uppercase text-xl transition-colors duration-300 pb-1',
                isTop
                  ? 'text-white border-t-4 pt-4 border-transparent'
                  : 'text-black border-t-4 pt-4 border-transparent',
                isActive && (isTop
                  ? 'border-white'
                  : 'border-black'),
              )}
            >
              <span className="hover-underline">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
