"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const links = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Project", href: "/project" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const session = useSession();
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-semibold text-green-600">
          ISRAT JAHAN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors mt-3"
            >
              {link.label}
            </Link>
          ))}
          {session.status === "authenticated" ? (
            <div className="">
              <Link
                href="/dashboard"
                className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors mr-4 "
              >
                Dashboard
              </Link>
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-1xl text-white font-semibold mt-1">
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-1xl text-white font-semibold mt-1">
                Login
              </button>
            </Link>
          )}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="mt-6 flex ml-8 flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                {session.status === "authenticated" ? (
                  <div className="flex-col">
                    <Link
                      href="/dashboard"
                      className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors mr-4 "
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => signOut({ callbackUrl: "/" })}
                      className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-1xl text-white font-semibold mt-1"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link href="/login">
                    <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-md text-1xl text-white font-semibold mt-1">
                      Login
                    </button>
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
