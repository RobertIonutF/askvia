"use client";

import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { MobileNav } from "./MobileNav";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-950 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">Askvia</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <NavLinks />
        </nav>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white rounded-full px-5 py-2 font-medium transition-colors">
            Create a Survey
          </button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
} 