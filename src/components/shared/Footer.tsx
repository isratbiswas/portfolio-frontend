import Link from "next/link";
import { Facebook, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="text-lg font-semibold">
            ISRAT JAHAN
          </Link>

          {/* Center - Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground">
              About
            </Link>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Contact
            </Link>
            <Link href="/project" className="hover:text-foreground">
              Project
            </Link>
          </nav>

          {/* Right - Social Icons */}
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ISRAT JAHAN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
