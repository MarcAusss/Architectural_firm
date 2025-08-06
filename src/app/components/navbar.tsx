'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between px-20 text-white fixed top-0 z-30 w-full">
        <img src="/img/305050137_590605822773619_5303982577630322558_n-removebg-preview 1.png" alt="" className="w-20 pt-2" />
        <div className="flex gap-10 ">
            {links.map(({ href, label }) => (
                <Link
                key={href}
                href={href}
                className={clsx(
                    'hover:text-yellow-300 transition text-xl p-5 uppercase border-t-4 border-[#ccc0]',
                    pathname === href && 'border-t-4 border-white  text-yellow-400'
                )}
                >
                {label}
                </Link>
            ))}
        </div>
    </nav>
  );
}
