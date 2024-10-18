'use client'

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
    {
        name: 'Home',
        href: '/demo/',
    },
    {
        name: 'Image Optimization',
        href: '/demo/image-optimization',
    },
    {
        name: 'Routing',
        href: '/demo/routing',
    },
    {
        name: 'Streaming',
        href: '/demo/streaming',
    }
]

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <ul>
            {links.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}
                     className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}          >{link.name}</Link>
                </li>
            ))}
        </ul>
    );
}

