import Link from "next/link";
import React from "react";

import { navItems } from "@/constants/navItems";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-16 items-center mx-auto px-4 md:p-6 lg:px-8">
        <Link href={"/"} className="space-x-2 mr-2">
          <h1 className="flex items-center gap-2">
            <span className="text-4xl font-bold">BS</span> -{" "}
            <span className="text-sm">Bridging Skills and Success</span>
          </h1>
        </Link>

        <div className="h-16 w-px bg-white mx-4 self-stretch"></div>

        <nav>
          <div className="flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
