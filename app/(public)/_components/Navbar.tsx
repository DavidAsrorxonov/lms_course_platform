"use client";

import Link from "next/link";
import React from "react";

import { navItems } from "@/constants/navItems";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      <div className="container flex min-h-10 items-center mx-auto px-4 md:p-6 lg:px-8">
        <Link href={"/"} className="space-x-2 mr-2">
          <h1 className="flex items-center gap-2">
            <span className="text-4xl font-bold">BS</span> -{" "}
            <span className="text-sm">Bridging Skills and Success</span>
          </h1>
        </Link>

        <div className="h-10 w-px dark:bg-white bg-black mx-4 self-stretch"></div>

        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
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

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isPending ? null : session ? (
              <UserDropdown
                name={session?.user.name}
                email={session?.user.email}
                image={session?.user.image || ""}
              />
            ) : (
              <>
                <Link
                  href={"/login"}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href={"/login"} className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
