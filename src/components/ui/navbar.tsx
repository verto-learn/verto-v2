"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"; // Tambah useState
import { motion } from "framer-motion"; // Tambah framer-motion
import { Menu, Package2, Pyramid, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null); // State untuk track hover

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-4 items-center justify-between px-4 md:px-8">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className=" p-1.5 rounded-lg">
              <Pyramid  className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden font-semibold sm:inline-block text-lg tracking-tight">
              Verto
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;

            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                )}
                onMouseEnter={() => setHoveredPath(route.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                <span className="relative z-10">{route.label}</span>
           
                {route.href === (hoveredPath || pathname) && (
                  <motion.div
                    layoutId="navbar-underline"
                    className="absolute left-0 right-0 -bottom-3 h-[2px] bg-primary rounded-full"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button size="sm" className="hidden sm:flex gap-2 rounded-full font-semibold">
            <span>Get Started</span>
            <Sparkles size={14} />
          </Button>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden shrink-0 text-muted-foreground hover:text-primary"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Pyramid  className="h-6 w-6 text-primary" />
                  <span>Verto</span>
                </SheetTitle>
              </SheetHeader>

              <nav className="grid gap-2 text-lg font-medium mt-8">
                {routes.map((route) => {
                  const isActive = pathname === route.href;
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                        isActive
                          ? "bg-secondary text-primary font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <Button className="w-full gap-2" size="lg">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}