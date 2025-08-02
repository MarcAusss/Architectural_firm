'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { href: '/Home', label: 'Home' },
  { href: '/About', label: 'About' },
  { href: '/Blog', label: 'Blog' },
  { href: '/Projects', label: 'Projects' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-6 p-4 bg-gray-800 text-white">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={clsx(
            'hover:text-yellow-300 transition',
            pathname === href && 'underline text-yellow-400'
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
