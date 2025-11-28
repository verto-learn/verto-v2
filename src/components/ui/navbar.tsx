"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // Hook untuk ambil URL aktif
import { Menu, Package2, Sparkles } from "lucide-react";

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

  const routes = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex py-6 items-center justify-between px-4 md:px-8">
        

        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Package2 className="h-6 w-6 text-primary" />
            </div>
            <span className="hidden font-bold sm:inline-block text-lg tracking-tight">
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
                  "px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full",
                  isActive
                    ? "bg-secondary text-primary font-semibold" 
                    : "text-muted-foreground hover:text-primary hover:bg-secondary/50" 
                )}
              >
                {route.label}
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
                    <Package2 className="h-6 w-6 text-primary" />
                    <span>BrandName</span>
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