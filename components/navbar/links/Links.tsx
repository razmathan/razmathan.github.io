"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const links = [
  { title: "About",        path: "/",            isInternal: true  },
  { title: "Publications", path: "/publications", isInternal: true  },
  { title: "Projects",     path: "/projects",     isInternal: true  },
  { title: "Experience",   path: "/experience",   isInternal: true  },
  { title: "CV",           path: "/mathanraj_CV.pdf", isInternal: false },
];

const Links = () => {
  const pathName = usePathname();

  return (
    <div className="flex items-center overflow-x-auto">
      {links.map((link) =>
        link.isInternal ? (
          <Link
            key={link.title}
            href={link.path}
            className={`px-4 py-1 text-sm font-medium whitespace-nowrap transition-colors ${
              pathName === link.path
                ? "text-orange-400 underline underline-offset-4"
                : "text-gray-200 hover:text-orange-400"
            }`}
          >
            {link.title}
          </Link>
        ) : (
          <a
            key={link.title}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 text-sm font-medium whitespace-nowrap text-gray-200 hover:text-orange-400 transition-colors"
          >
            {link.title}
          </a>
        )
      )}
    </div>
  );
};

export default Links;
