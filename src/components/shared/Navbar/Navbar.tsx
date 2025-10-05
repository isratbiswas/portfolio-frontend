"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/" },
  { label: "Blogs", href: "/blogs" },
  { label: "Project", href: "/project" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-lg font-semibold">
          ISRAT JAHAN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 ">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login">
            <Button>Login</Button>
          </Link>
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
              <nav className="mt-6 flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
